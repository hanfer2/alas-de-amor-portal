"use client";

import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";
import { useTranslations } from "@/hooks/useTranslations";
import { CalendarWings, FloatingOrbs } from "@/components/HeroDecoration";

export default function AgendarPage() {
  const t = useTranslations();

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-warm-white to-violet-50/30">
      <section className="relative pt-20 pb-8 gradient-hero overflow-hidden">
        <FloatingOrbs />
        <div className="absolute top-10 right-16 opacity-25">
          <CalendarWings className="w-36 h-36" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-reiki-700 font-medium tracking-wider uppercase text-xs border border-white/30">
              {t("agendar.hero.badge")}
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-reiki-900 mt-3">
              {t("agendar.hero.title").split(" ").map((word, i) => (
                <span key={i}>
                  {i === 1 ? <span className="text-gradient">{word} </span> : `${word} `}
                </span>
              ))}
            </h1>
            <p className="text-xl text-reiki-600 mt-6 leading-relaxed">
              {t("agendar.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 reveal">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-reiki-900 mb-4">
              {t("agendar.steps.title")}
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-reiki-300 to-reiki-500" />
          </div>
          <div className="grid sm:grid-cols-3 gap-8 mb-16 lg:mb-20 reveal">
            {[1, 2, 3].map((n) => (
              <div key={n} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-reiki-400 to-reiki-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-reiki-300/30 group-hover:scale-110 transition-transform duration-300">
                  {n}
                </div>
                <h3 className="font-display text-xl font-semibold text-reiki-800 mb-2">
                  {t(`agendar.steps.step${n}.title`)}
                </h3>
                <p className="text-reiki-600 text-sm leading-relaxed">
                  {t(`agendar.steps.step${n}.desc`)}
                </p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-reiki-300/20 lg:sticky lg:top-24 order-last lg:order-first">
              <Image
                src="/imgs/gen-agendar-lateral.jpg"
                alt={t("agendar.sidebar.title")}
                width={600}
                height={800}
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-reiki-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">
                  {t("agendar.sidebar.title")}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t("agendar.sidebar.subtitle")}
                </p>
              </div>
            </div>
            <div>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
