"use client";

import Image from "next/image";
import Link from "next/link";
import config from "@/lib/config";
import { priceLines, useRates } from "@/lib/prices";
import {
  buildFaq,
  getRelatedServices,
  getServiceBySlug,
  getServiceTitle,
} from "@/lib/services";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/hooks/useTranslations";

export default function ServiceDetail({ slug }: { slug: string }) {
  const t = useTranslations();
  const { lang } = useLanguage();
  const { rates } = useRates();
  const service = getServiceBySlug(slug);
  if (!service) return null;

  const { item } = service;
  const title = getServiceTitle(lang, service);
  const price =
    item.price === null
      ? { primary: t("servicios.price.consult"), secondary: null }
      : priceLines(item.price, lang, rates);
  const priceText = price.secondary ? `${price.primary} (${price.secondary})` : price.primary;
  const benefitsRaw = service.benefitsKey ? t(service.benefitsKey) : null;
  const benefits = Array.isArray(benefitsRaw) ? (benefitsRaw as string[]) : [];
  const faq = buildFaq(lang, service, priceText);
  const related = getRelatedServices(service);
  const whatsappText = t("servicioDetalle.whatsappText").replace("{title}", title);
  const isIcon = service.categoryId === "sanaciones";

  return (
    <div className="bg-warm-white">
      <section className="gradient-hero pt-32 pb-12 sm:pt-36">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label={t("servicioDetalle.breadcrumb")} className="mb-6 text-sm text-reiki-700">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="underline-offset-4 hover:underline">
                  {t("servicioDetalle.home")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/servicios" className="underline-offset-4 hover:underline">
                  {t("servicioDetalle.services")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold">
                {title}
              </li>
            </ol>
          </nav>
          <h1 className="role-h1">{title}</h1>
          <p className="role-subtitle mt-4 max-w-3xl leading-relaxed">{t(item.descKey)}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {item.durationKey && (
              <span className="role-metadata role-metadata-neutral inline-flex items-center rounded-full px-4 py-2 text-sm">
                {t(item.durationKey)}
              </span>
            )}
            <span className="role-metadata role-metadata-gold inline-flex items-center rounded-full px-4 py-2 text-sm">
              {price.primary}
            </span>
            <span className="role-metadata role-metadata-neutral inline-flex items-center rounded-full px-4 py-2 text-sm">
              {t("servicioDetalle.location")}
            </span>
          </div>
          {price.secondary && (
            <p className="mt-3 text-sm text-reiki-700">
              {price.secondary} · {t("servicioDetalle.approxShort")}
            </p>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-start">
          <div>
            {benefits.length > 0 && (
              <>
                <h2 className="role-h2 mb-6">{t("servicioDetalle.benefits")}</h2>
                <ul className="space-y-3 mb-10">
                  {benefits.map((b) => (
                    <li key={b} className="role-description flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/agendar"
                className="role-cta inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-reiki-500 to-reiki-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {t("servicios.scheduleButton")}
              </Link>
              <a
                href={`https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="role-cta inline-flex items-center gap-2 px-8 py-4 rounded-full border border-reiki-300 text-reiki-800 hover:bg-reiki-50 transition-colors"
              >
                {t("servicioDetalle.whatsapp")}
              </a>
            </div>
          </div>
          <div
            className={`relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl shadow-reiki-300/20 ${isIcon ? "bg-reiki-50" : ""}`}
          >
            {item.image && (
              <Image
                src={item.image}
                alt={title}
                fill
                priority
                className={isIcon ? "object-contain p-16" : "object-cover"}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-reiki-50/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="role-h2 mb-8">{t("servicioDetalle.faqTitle")}</h2>
          <div className="space-y-3">
            {faq.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-2xl border border-reiki-100 bg-white px-6 py-4"
              >
                <summary className="cursor-pointer list-none font-semibold text-reiki-900 flex items-center justify-between gap-4">
                  {q}
                  <span aria-hidden="true" className="text-reiki-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="role-description mt-3 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="role-h2 mb-8">{t("servicioDetalle.relatedTitle")}</h2>
            <ul className="grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/servicios/${r.slug}`}
                    className="block h-full rounded-2xl border border-reiki-100 bg-white p-6 transition-shadow hover:shadow-lg"
                  >
                    <span className="role-card-title block text-xl">{getServiceTitle(lang, r)}</span>
                    <span className="mt-3 inline-block text-sm text-reiki-700 underline underline-offset-4">
                      {t("servicioDetalle.viewDetail")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
