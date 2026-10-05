"use client";

import Image from "next/image";
import config from "@/lib/config";
import { useTranslations } from "@/hooks/useTranslations";

// Afiche de los lives: "Escribe tu nombre y recibe un mensaje de los Arcángeles".
// El afiche se rehízo con el logo y la paleta nuevos (fuente en design-proposals/promo).
export default function ArcangelesPromo() {
  const t = useTranslations();
  const whatsapp = (text: string) => `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(text)}`;

  return (
    <section className="relative py-24 band-ivory">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
        <div className="order-2 lg:order-1 reveal">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-aqua-100 text-reiki-700 font-medium tracking-wider uppercase text-xs border border-aqua-200">
            {t("home.arcangeles.badge")}
          </span>
          <h2 className="role-h2 mt-5">
            {t("home.arcangeles.title1")} <span className="text-gradient">{t("home.arcangeles.title2")}</span>
          </h2>
          <p className="role-subtitle mt-3 text-xl">{t("home.arcangeles.subtitle")}</p>
          <p className="role-description mt-5 leading-relaxed">{t("home.arcangeles.description")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsapp(t("home.arcangeles.whatsappMedium"))}
              target="_blank"
              rel="noopener noreferrer"
              className="role-cta inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-reiki-500 to-reiki-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {t("home.arcangeles.medium")}
            </a>
            <a
              href={whatsapp(t("home.arcangeles.whatsappGeneral"))}
              target="_blank"
              rel="noopener noreferrer"
              className="role-cta inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-aqua-400 bg-white/70 text-reiki-700 hover:bg-aqua-100 transition-colors"
            >
              {t("home.arcangeles.general")}
            </a>
          </div>
          <p className="mt-6 text-sm text-reiki-700/80">{t("home.arcangeles.note")}</p>
        </div>
        <div className="order-1 lg:order-2 reveal mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white shadow-2xl shadow-aqua-300/30">
            <Image
              src="/imgs/promo/mensaje-arcangeles-4x5.jpg"
              alt={t("home.arcangeles.imageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 448px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
