"use client";

import { useEffect, useState } from "react";
import config from "@/lib/config";

import type { Rates } from "@/lib/catalog";

export {
  catalog,
  formatCOP,
  formatUSD,
  formatApprox,
  priceLines,
  type CatalogCategory,
  type CatalogItem,
  type Rates,
} from "@/lib/catalog";

const CACHE_KEY = "alas_cop_rates_v2";

type CachedRates = { rates: Rates | null; isFallback: boolean };

const fallbackRates: Rates = {
  usd: config.currency.fallbackUsdRate,
  eur: config.currency.fallbackEurRate,
};

function readCachedRates(): CachedRates {
  if (typeof window === "undefined") return { rates: null, isFallback: false };
  const cachedRaw = sessionStorage.getItem(CACHE_KEY);
  if (!cachedRaw) return { rates: null, isFallback: false };
  try {
    const cached = JSON.parse(cachedRaw);
    const ageHours = (Date.now() - cached.ts) / (1000 * 60 * 60);
    if (cached.usd > 0 && cached.eur > 0 && ageHours < config.currency.rateTtlHours) {
      return { rates: { usd: cached.usd, eur: cached.eur }, isFallback: !!cached.isFallback };
    }
  } catch {
    sessionStorage.removeItem(CACHE_KEY);
  }
  return { rates: null, isFallback: false };
}

// Una sola consulta trae USD y EUR respecto al COP. Si falla, se usan las tasas de respaldo y se avisa.
export function useRates() {
  const [cached] = useState(readCachedRates);
  const [rates, setRates] = useState<Rates | null>(cached.rates);
  const [isFallback, setIsFallback] = useState(cached.isFallback);

  useEffect(() => {
    if (cached.rates !== null) return;
    let cancelled = false;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    fetch(config.currency.rateApi, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        const usd = Number(data?.rates?.USD);
        const eur = Number(data?.rates?.EUR);
        if (usd > 0 && eur > 0) {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ usd, eur, isFallback: false, ts: Date.now() }));
          if (!cancelled) {
            setRates({ usd, eur });
            setIsFallback(false);
          }
        } else {
          throw new Error("tasa inválida");
        }
      })
      .catch(() => {
        if (cancelled) return;
        setRates(fallbackRates);
        setIsFallback(true);
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [cached.rates]);

  return { rates, isFallback };
}
