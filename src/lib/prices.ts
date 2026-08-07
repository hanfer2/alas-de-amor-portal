"use client";

import { useEffect, useState } from "react";
import config from "@/lib/config";

export type CatalogItem = {
  id: string;
  titleKey: string;
  descKey: string;
  durationKey?: string;
  price: number | null;
};

export type CatalogCategory = {
  id: string;
  titleKey: string;
  items: CatalogItem[];
};

export const catalog: CatalogCategory[] = [
  {
    id: "terapias",
    titleKey: "servicios.categories.terapias",
    items: [
      {
        id: "reiki",
        titleKey: "nosotros.services.reiki",
        descKey: "servicios.reiki.desc",
        durationKey: "servicios.reiki.duration",
        price: 160000,
      },
      {
        id: "access",
        titleKey: "nosotros.services.access",
        descKey: "servicios.barras.desc",
        durationKey: "servicios.barras.duration",
        price: 230000,
      },
      {
        id: "combo",
        titleKey: "servicios.combo.title",
        descKey: "servicios.combo.desc",
        price: 265900,
      },
      {
        id: "chakras",
        titleKey: "nosotros.services.chakras",
        descKey: "servicios.chakras.desc",
        durationKey: "servicios.chakras.duration",
        price: 130000,
      },
      {
        id: "meditacion",
        titleKey: "nosotros.services.meditacion",
        descKey: "servicios.meditacion.desc",
        durationKey: "servicios.meditacion.duration",
        price: 90000,
      },
      {
        id: "facelight",
        titleKey: "nosotros.services.facelight",
        descKey: "servicios.facelight.desc",
        durationKey: "servicios.facelight.duration",
        price: 110000,
      },
      {
        id: "coaching",
        titleKey: "nosotros.services.coaching",
        descKey: "servicios.coaching.desc",
        durationKey: "servicios.coaching.duration",
        price: 160000,
      },
      {
        id: "oraculos",
        titleKey: "nosotros.services.oraculos",
        descKey: "servicios.oraculos.desc",
        durationKey: "servicios.oraculos.duration",
        price: 100000,
      },
    ],
  },
  {
    id: "talleres",
    titleKey: "servicios.categories.talleres",
    items: [
      {
        id: "medium",
        titleKey: "servicios.talleres.medium.title",
        descKey: "servicios.talleres.medium.desc",
        price: 90000,
      },
      {
        id: "reiki-usui",
        titleKey: "servicios.talleres.reiki.title",
        descKey: "servicios.talleres.reiki.desc",
        price: 150000,
      },
      {
        id: "access-taller",
        titleKey: "servicios.talleres.access.title",
        descKey: "servicios.talleres.access.desc",
        price: 180000,
      },
    ],
  },
  {
    id: "sanaciones",
    titleKey: "servicios.categories.sanaciones",
    items: [
      {
        id: "nina",
        titleKey: "servicios.sanaciones.nina.title",
        descKey: "servicios.sanaciones.nina.desc",
        price: 180000,
      },
      {
        id: "mama",
        titleKey: "servicios.sanaciones.mama.title",
        descKey: "servicios.sanaciones.mama.desc",
        price: 180000,
      },
      {
        id: "papa",
        titleKey: "servicios.sanaciones.papa.title",
        descKey: "servicios.sanaciones.papa.desc",
        price: 180000,
      },
    ],
  },
  {
    id: "lecturaAngelical",
    titleKey: "servicios.categories.lecturaAngelical",
    items: [
      {
        id: "basica",
        titleKey: "servicios.lecturaAngelical.basica.title",
        descKey: "servicios.lecturaAngelical.basica.desc",
        price: 50000,
      },
      {
        id: "angelical",
        titleKey: "servicios.lecturaAngelical.angelical.title",
        descKey: "servicios.lecturaAngelical.angelical.desc",
        price: 120000,
      },
      {
        id: "oraculo",
        titleKey: "servicios.lecturaAngelical.oraculo.title",
        descKey: "servicios.lecturaAngelical.oraculo.desc",
        price: 120000,
      },
    ],
  },
  {
    id: "charlas",
    titleKey: "servicios.categories.charlas",
    items: [
      {
        id: "charla-1",
        titleKey: "servicios.charlas.0.title",
        descKey: "servicios.charlas.0.desc",
        price: null,
      },
      {
        id: "charla-2",
        titleKey: "servicios.charlas.1.title",
        descKey: "servicios.charlas.1.desc",
        price: null,
      },
    ],
  },
  {
    id: "retiros",
    titleKey: "servicios.categories.retiros",
    items: [
      {
        id: "retiro-1",
        titleKey: "servicios.retiros.0.title",
        descKey: "servicios.retiros.0.desc",
        price: null,
      },
      {
        id: "retiro-2",
        titleKey: "servicios.retiros.1.title",
        descKey: "servicios.retiros.1.desc",
        price: null,
      },
    ],
  },
];

export function formatCOP(amount: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(amount);
}

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
