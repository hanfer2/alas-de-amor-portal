"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";
import { useLanguage } from "@/context/LanguageContext";
import { EnergyWaves, FloatingOrbs } from "@/components/HeroDecoration";
import { Liquid } from "liquid-gooey";
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
      <section className="relative pt-28 pb-4 gradient-hero overflow-hidden">
        <FloatingOrbs />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 hero-icon-halo opacity-90">
          <EnergyWaves className="w-[600px] h-[200px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <h1 className="role-h1 mt-0">
              {t("servicios.hero.title")
                .split(" ")
                .map((word, i) => (
                  <span key={i}>
                    {i === 1 ? (
                      <span className="text-gradient">{word} </span>
                    ) : (
                      `${word} `
                    )}
                  </span>
                ))}
            </h1>
            <p className="role-subtitle mt-4 leading-relaxed">
              {t("servicios.hero.subtitle")}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-warm-white" />
      </section>
      <section className="relative py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isFallback && showUsd && (
            <p className="text-sm text-reiki-500 text-center mb-12">
              {t("servicios.price.fallbackNote")}
            </p>
          )}
          {catalog.map((category) => {
            const color =
              categoryColors[category.id] || "from-reiki-400 to-reiki-600";
            return (
              <div key={category.id} className="mb-24 last:mb-0">
                <div className="text-center mb-12 reveal">
                  <h2 className="role-h2">
                    {t(category.titleKey)}
                  </h2>
                  <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-reiki-300 to-reiki-500" />
                </div>
                {category.id === "sanaciones" ? (
                  <SanacionesGrid
                    items={category.items}
                    formatPrice={formatPrice}
                  />
                ) : (
                  category.items.map((item, i) => (
                    <ServiceBlock
                      key={item.id}
                      item={item}
                      index={i}
                      color={color}
                      priceText={formatPrice(item.price)}
                      liquidPilot={category.id === "terapias"}
                    />
                  ))
                )}
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-warm-white" />
      </section>
      <section className="relative py-24 gradient-spiritual">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="role-h2 mb-4">
            {t("servicios.cta.title")}
          </h2>
          <p className="role-description text-lg mb-8">
            {t("servicios.cta.subtitle")}
          </p>
          <Link
            href="/contacto"
            className="role-cta inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-reiki-500 to-reiki-600 text-white text-lg shadow-lg shadow-reiki-400/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>{t("servicios.cta.button")}</span>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-warm-white" />
      </section>
    </div>
  );
}

function ServiceMeta({
  duration,
  priceText,
  liquidPilot,
}: {
  duration: string;
  priceText: string;
  liquidPilot: boolean;
}) {
  const durationBadge = (
    <div
      className="role-metadata role-metadata-neutral inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {duration}
    </div>
  );

  const priceBadge = (
    <span
      className="role-metadata role-metadata-gold inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0l3 3m-3-3l-3 3M6 3h12a3 3 0 013 3v6a3 3 0 01-3 3H9l-3 3v-3a3 3 0 01-3-3V6a3 3 0 013-3z" />
      </svg>
      {priceText}
    </span>
  );

  if (!liquidPilot) {
    return <div className="flex flex-wrap items-center gap-3 mb-4">{durationBadge}{priceBadge}</div>;
  }

  return (
    <Liquid
      blur={6}
      contrast={18}
      fill="var(--color-warm-white)"
      shadow="0 4px 14px rgba(139,92,246,0.16)"
      className="flex flex-wrap items-center gap-3 mb-4"
    >
      <Liquid.Item>{durationBadge}</Liquid.Item>
      <Liquid.Item>{priceBadge}</Liquid.Item>
    </Liquid>
  );
}

function ServiceBlock({
  item,
  index,
  color,
  priceText,
  liquidPilot,
}: {
  item: CatalogItem;
  index: number;
  color: string;
  priceText: string;
  liquidPilot: boolean;
}) {
  const t = useTranslations();
  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0 ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}
    >
      <div className={`reveal ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <ServiceMeta
          duration={item.durationKey ? t(item.durationKey) : t("servicios.scheduleButton")}
          priceText={priceText}
          liquidPilot={liquidPilot}
        />
        <h2 className="role-card-title mb-4">
          {t(item.titleKey)}
        </h2>
        <p className="role-description text-lg mb-8">
          {t(item.descKey)}
        </p>
        <Link
          href="/agendar"
          className={`role-cta inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r ${color} text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
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
        <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl shadow-reiki-300/20 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(139,92,246,0.3)]">
          {item.image ? (
            <Image
              src={item.image}
              alt={t(item.titleKey)}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10`}
              />
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
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="12"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <circle cx="24" cy="24" r="2" fill="currentColor" />
              </svg>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function SanacionesGrid({
  items,
  formatPrice,
}: {
  items: CatalogItem[];
  formatPrice: (price: number | null) => string;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
      {items.map((item) => (
        <SanacionCard
          key={item.id}
          item={item}
          priceText={formatPrice(item.price)}
        />
      ))}
    </div>
  );
}

function SanacionCard({
  item,
  priceText,
}: {
  item: CatalogItem;
  priceText: string;
}) {
  const t = useTranslations();
  const [imageFailed, setImageFailed] = useState(false);
  const cardVariant = item.id === "mama" ? "sanacion-card--coral" : item.id === "papa" ? "sanacion-card--gold" : "";

  return (
    <article className={`sanacion-card ${cardVariant} flex h-full flex-col reveal`}>
      <div className="sanacion-card__accent" aria-hidden="true" />
      <div className="flex h-full flex-col p-6 sm:p-8">
        <div className="mb-6 flex justify-center">
          <div className="role-icon-halo flex h-28 w-28 items-center justify-center rounded-full">
            {item.image && !imageFailed ? (
              <Image
                src={item.image}
                alt=""
                width={112}
                height={112}
                className="h-24 w-24 object-contain"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <SanacionFallback itemId={item.id} />
            )}
          </div>
        </div>
        <h3 className="role-card-title mb-4 text-center">
          {t(item.titleKey)}
        </h3>
        <p className="role-description flex-1 text-center leading-relaxed">
          {t(item.descKey)}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2 border-t border-reiki-100 pt-5">
          <span className="role-metadata role-metadata-neutral inline-flex items-center gap-2 rounded-full px-3 py-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t("servicios.scheduleButton")}
          </span>
          <span className="role-metadata role-metadata-gold inline-flex items-center gap-2 rounded-full px-3 py-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0l3 3m-3-3l-3 3M6 3h12a3 3 0 013 3v6a3 3 0 01-3 3H9l-3 3v-3a3 3 0 01-3-3V6a3 3 0 013-3z" />
            </svg>
            {priceText}
          </span>
        </div>
        <Link
          href="/agendar"
          className="role-cta mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-reiki-500 to-reiki-600 px-6 py-4 text-white shadow-lg shadow-reiki-400/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          <span>{t("servicios.scheduleButton")}</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

function SanacionFallback({ itemId }: { itemId: string }) {
  if (itemId === "mama") {
    return (
      <svg className="role-icon h-20 w-20" viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <path d="M18 50c5-16 14-25 22-25s17 9 22 25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M24 53c6 8 12 12 16 12s10-4 16-12" stroke="#b4233f" strokeWidth="4" strokeLinecap="round" />
        <circle cx="40" cy="36" r="8" fill="#f2c46d" stroke="#8a5a00" strokeWidth="3" />
      </svg>
    );
  }

  if (itemId === "papa") {
    return (
      <svg className="role-icon h-20 w-20" viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <circle cx="40" cy="40" r="13" fill="#f2c46d" stroke="#8a5a00" strokeWidth="3" />
        <path d="M40 8v17M40 55v17M8 40h17M55 40h17" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M18 18l12 12M50 50l12 12M62 18L50 30M30 50L18 62" stroke="#0f6675" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className="role-icon h-20 w-20" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path d="M40 64C25 53 18 45 18 35c0-8 6-13 13-13 4 0 7 2 9 5 2-3 5-5 9-5 7 0 13 5 13 13 0 10-7 18-22 29Z" fill="#fff1f3" stroke="#b4233f" strokeWidth="3" />
      <path d="M40 22V12M35 16l5-5 5 5" stroke="#0f6675" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
