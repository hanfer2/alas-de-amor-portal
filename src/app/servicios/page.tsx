"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";
import { useLanguage } from "@/context/LanguageContext";
import { WingedWaves, FloatingOrbs } from "@/components/HeroDecoration";
import HeroTitle from "@/components/HeroTitle";
import { Liquid } from "liquid-gooey";
import {
  catalog,
  priceLines,
  useRates,
  type CatalogItem,
} from "@/lib/prices";
import { getServiceSlug } from "@/lib/services";
type PriceLine = { primary: string; secondary: string | null };
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
  const { rates, isFallback } = useRates();
  const formatPrice = (price: number | null) => {
    if (price === null) return { primary: t("servicios.price.consult"), secondary: null };
    return priceLines(price, lang, rates);
  };
  return (
    <div className="relative overflow-hidden">
      <section className="hero-shell hero-compact relative gradient-hero overflow-hidden">
        <FloatingOrbs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroTitle
            icon={<WingedWaves className="h-full w-full" />}
            title={<>
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
            </>}
            subtitle={<>
              {t("servicios.hero.subtitle")}
            </>}
          />
        </div>
      </section>
      <section className="relative py-10 lg:py-14 band-aqua">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-reiki-700 text-center mb-8">
            {t("servicios.price.approxNote")}
            {isFallback && ` ${t("servicios.price.fallbackNote")}`}
          </p>
          {catalog.map((category) => {
            const color =
              categoryColors[category.id] || "from-reiki-400 to-reiki-600";
            return (
              <div key={category.id} className="mb-10 last:mb-0">
                <div className="text-center mb-8 reveal">
                  <h2 className="role-h2">
                    {t(category.titleKey)}
                  </h2>
                  <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-aqua-400 via-reiki-300 to-reiki-500" />
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
                      price={formatPrice(item.price)}
                      liquidPilot={category.id === "terapias"}
                    />
                  ))
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section className="relative py-10 lg:py-14 gradient-spiritual">
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
      shadow="0 4px 14px rgba(232,89,91,0.16)"
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
  price,
  liquidPilot,
}: {
  item: CatalogItem;
  index: number;
  color: string;
  price: PriceLine;
  liquidPilot: boolean;
}) {
  const t = useTranslations();
  const [imageFailed, setImageFailed] = useState(false);
  const detailSlug = getServiceSlug(item.id);
  return (
    <div
      className={`grid lg:grid-cols-2 gap-8 items-center mb-10 last:mb-0 ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}
    >
      <div className={`reveal ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <ServiceMeta
          duration={item.durationKey ? t(item.durationKey) : t("servicios.scheduleButton")}
          priceText={price.primary}
          liquidPilot={liquidPilot}
        />
        {price.secondary && (
          <p className="-mt-1 mb-4 text-sm text-reiki-700">{price.secondary}</p>
        )}
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
        {detailSlug && (
          <div className="mt-5">
            <Link
              href={`/servicios/${detailSlug}`}
              className="text-reiki-700 underline underline-offset-4 hover:text-reiki-900"
            >
              {t("servicioDetalle.viewDetail")}: {t(item.titleKey)}
            </Link>
          </div>
        )}
      </div>
      <div className={`relative reveal ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <div className="relative h-60 sm:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-xl shadow-reiki-300/20 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(232,89,91,0.3)]">
          {item.image && !imageFailed ? (
            <Image
              src={item.image}
              alt={t(item.titleKey)}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <ServiceFallback itemId={item.id} />
          )}
        </div>
      </div>
    </div>
  );
}

function ServiceFallback({ itemId }: { itemId: string }) {
  return (
    <div className="service-fallback text-reiki-900" aria-hidden="true">
      <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {itemId.includes("orac") || itemId === "basica" || itemId === "angelical" ? (
          <><rect x="24" y="29" width="72" height="62" rx="6" fill="#fff8e8" stroke="#b7791f" /><path d="M24 48h72M42 20v18M78 20v18M38 64h12M58 64h24M38 78h25" stroke="#2A99A4" /></>
        ) : itemId.includes("medit") || itemId.includes("reiki") ? (
          <><path d="M60 92C36 80 26 63 31 48c4-12 17-18 29-7 12-11 25-5 29 7 5 15-5 32-29 44Z" fill="#fff1f3" stroke="#DB090C" /><path d="M60 28v20M51 38l9-9 9 9" stroke="#2A99A4" /></>
        ) : itemId.includes("charla") || itemId.includes("coaching") ? (
          <><path d="M24 29h72v50H55l-18 15V79H24Z" fill="#E4F7F8" stroke="#C8080C" /><path d="M40 49h40M40 63h27" stroke="#DB090C" /></>
        ) : (
          <><path d="M60 15 71 45l31 2-24 19 8 30-26-17-26 17 8-30-24-19 31-2Z" fill="#fff8e8" stroke="#b7791f" /><path d="M60 45v21M50 55h20" stroke="#2A99A4" /></>
        )}
      </svg>
    </div>
  );
}

function SanacionesGrid({
  items,
  formatPrice,
}: {
  items: CatalogItem[];
  formatPrice: (price: number | null) => PriceLine;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
      {items.map((item) => (
        <SanacionCard
          key={item.id}
          item={item}
          price={formatPrice(item.price)}
        />
      ))}
    </div>
  );
}

function SanacionCard({
  item,
  price,
}: {
  item: CatalogItem;
  price: PriceLine;
}) {
  const t = useTranslations();
  const [imageFailed, setImageFailed] = useState(false);
  const detailSlug = getServiceSlug(item.id);
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
            {price.primary}
          </span>
        </div>
        {price.secondary && (
          <p className="mt-3 text-center text-sm text-reiki-700">{price.secondary}</p>
        )}
        {detailSlug && (
          <Link
            href={`/servicios/${detailSlug}`}
            className="mt-6 text-center text-reiki-700 underline underline-offset-4 hover:text-reiki-900"
          >
            {t("servicioDetalle.viewDetail")}
          </Link>
        )}
        <Link
          href="/agendar"
          className="role-cta mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-reiki-500 to-reiki-600 px-6 py-4 text-white shadow-lg shadow-reiki-400/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
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
        <path d="M24 53c6 8 12 12 16 12s10-4 16-12" stroke="#DB090C" strokeWidth="4" strokeLinecap="round" />
        <circle cx="40" cy="36" r="8" fill="#f2c46d" stroke="#8a5a00" strokeWidth="3" />
      </svg>
    );
  }

  if (itemId === "papa") {
    return (
      <svg className="role-icon h-20 w-20" viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <circle cx="40" cy="40" r="13" fill="#f2c46d" stroke="#8a5a00" strokeWidth="3" />
        <path d="M40 8v17M40 55v17M8 40h17M55 40h17" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M18 18l12 12M50 50l12 12M62 18L50 30M30 50L18 62" stroke="#2A99A4" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className="role-icon h-20 w-20" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <path d="M40 64C25 53 18 45 18 35c0-8 6-13 13-13 4 0 7 2 9 5 2-3 5-5 9-5 7 0 13 5 13 13 0 10-7 18-22 29Z" fill="#fff1f3" stroke="#DB090C" strokeWidth="3" />
      <path d="M40 22V12M35 16l5-5 5 5" stroke="#2A99A4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
