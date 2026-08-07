"use client";

import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";
import { useLanguage } from "@/context/LanguageContext";
import { EnergyWaves, FloatingOrbs } from "@/components/HeroDecoration";
import {
  catalog,
  formatCOP,
  formatUSD,
  useRate,
  type CatalogItem,
} from "@/lib/prices";

const categoryColors: Record<string, string> = {
  terapias: "from-reiki-400 to-reiki-600",
  talleres: "from-reiki-300 to-reiki-500",
  sanaciones: "from-reiki-500 to-reiki-700",
  lecturaAngelical: "from-reiki-400 to-reiki-600",
  charlas: "from-reiki-500 to-reiki-700",
  retiros: "from-reiki-400 to-reiki-400",
};

export default function ServiciosPage() {
  const t = useTranslations();
  const { lang } = useLanguage();
  const { rate, isFallback } = useRate();
  const showUsd = lang === "en";

  const formatPrice = (price: number | null) => {
    if (price === null) return t("servicios.price.consult");
    if (showUsd && rate) return formatUSD(price * rate);
    return formatCOP(price);
  };

  return (
    <div className="relative overflow-hidden">
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        <FloatingOrbs />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-20">
          <EnergyWaves className="w-[600px] h-[200px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <span className="text-reiki-500 font-medium tracking-wider uppercase text-sm">
              {t("servicios.hero.badge")}
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-reiki-900 mt-3">
              {t("servicios.hero.title").split(" ").map((word, i) => (
                <span key={i}>
                  {i === 1 ? <span className="text-gradient">{word} </span> : `${word} `}
                </span>
              ))}
            </h1>
            <p className="text-xl text-reiki-600 mt-6 leading-relaxed">
              {t("servicios.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isFallback && showUsd && (
            <p className="text-sm text-reiki-500 text-center mb-12">
              {t("servicios.price.fallbackNote")}
            </p>
          )}
          {catalog.map((category) => {
            const color = categoryColors[category.id] || "from-reiki-400 to-reiki-600";
            return (
              <div key={category.id} className="mb-24 last:mb-0">
                <div className="text-center mb-12 reveal">
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-reiki-900">
                    {t(category.titleKey)}
                  </h2>
                  <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-reiki-300 to-reiki-500" />
                </div>
                {category.items.map((item, i) => (
                  <ServiceBlock
                    key={item.id}
                    item={item}
                    index={i}
                    color={color}
                    priceText={formatPrice(item.price)}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative py-24 gradient-spiritual">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-reiki-900 mb-4">
            {t("servicios.cta.title")}
          </h2>
          <p className="text-reiki-600 text-lg mb-8">
            {t("servicios.cta.subtitle")}
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-reiki-500 to-reiki-600 text-white font-semibold text-lg shadow-lg shadow-reiki-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>{t("servicios.cta.button")}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceBlock({
  item,
  index,
  color,
  priceText,
}: {
  item: CatalogItem;
  index: number;
  color: string;
  priceText: string;
}) {
  const t = useTranslations();

  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0 ${
        index % 2 === 1 ? "lg:direction-rtl" : ""
      }`}
    >
      <div className={`reveal ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${color} text-white text-sm font-medium`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {item.durationKey ? t(item.durationKey) : t("servicios.scheduleButton")}
          </div>
          <span
            className={`inline-flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r ${color} text-white text-sm font-semibold`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6m0 0l3 3m-3-3l-3 3M6 3h12a3 3 0 013 3v6a3 3 0 01-3 3H9l-3 3v-3a3 3 0 01-3-3V6a3 3 0 013-3z"
              />
            </svg>
            {priceText}
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-reiki-900 mb-4">
          {t(item.titleKey)}
        </h2>
        <p className="text-reiki-700 text-lg leading-relaxed mb-8">
          {t(item.descKey)}
        </p>
        <Link
          href="/agendar"
          className={`inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r ${color} text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
        >
          <span>{t("servicios.scheduleButton")}</span>
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </Link>
      </div>

      <div className={`relative reveal ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-reiki-300/20">
          <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`w-32 h-32 rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl animate-float`}
            />
          </div>
          <svg
            viewBox="0 0 48 48"
            fill="none"
            className="w-24 h-24 mx-auto text-reiki-400 opacity-30"
          >
            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" />
            <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1" />
            <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1" />
            <circle cx="24" cy="24" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>
    </div>
  );
}
