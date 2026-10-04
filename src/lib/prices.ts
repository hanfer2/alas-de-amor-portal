"use client";

import { useEffect, useState } from "react";
import config from "@/lib/config";

export {
  catalog,
  formatCOP,
  formatUSD,
  type CatalogCategory,
  type CatalogItem,
} from "@/lib/catalog";

const CACHE_KEY = "alas_cop_usd_rate";

function readCachedRate(): { rate: number | null; isFallback: boolean } {
  if (typeof window === "undefined") return { rate: null, isFallback: false };
  const cachedRaw = sessionStorage.getItem(CACHE_KEY);
  if (!cachedRaw) return { rate: null, isFallback: false };
  try {
    const cached = JSON.parse(cachedRaw);
    const ageHours = (Date.now() - cached.ts) / (1000 * 60 * 60);
    if (typeof cached.rate === "number" && cached.rate > 0 && ageHours < config.currency.rateTtlHours) {
      return { rate: cached.rate, isFallback: !!cached.isFallback };
    }
  } catch {
    sessionStorage.removeItem(CACHE_KEY);
  }
  return { rate: null, isFallback: false };
}

export function useRate() {
  const [cached] = useState(readCachedRate);
  const [rate, setRate] = useState<number | null>(cached.rate);
  const [isFallback, setIsFallback] = useState(cached.isFallback);

  useEffect(() => {
    if (cached.rate !== null) return;
    let cancelled = false;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    fetch(config.currency.rateApi, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        const usd = Number(data?.rates?.USD);
        if (typeof usd === "number" && usd > 0) {
          sessionStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ rate: usd, isFallback: false, ts: Date.now() })
          );
          if (!cancelled) {
            setRate(usd);
            setIsFallback(false);
          }
        } else {
          throw new Error("tasa inválida");
        }
      })
      .catch(() => {
        if (cancelled) return;
        setRate(config.currency.fallbackUsdRate);
        setIsFallback(true);
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [cached.rate]);

  return { rate, isFallback };
}
