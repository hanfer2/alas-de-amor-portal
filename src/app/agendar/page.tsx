"use client";

import AppointmentForm from "@/components/AppointmentForm";
import { useTranslations } from "@/hooks/useTranslations";
import { CalendarWings, FloatingOrbs } from "@/components/HeroDecoration";

export default function AgendarPage() {
  const t = useTranslations();

  return (
    <div className="relative overflow-hidden">
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        <FloatingOrbs />
        <div className="absolute top-10 right-16 opacity-25">
          <CalendarWings className="w-36 h-36" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <span className="text-reiki-500 font-medium tracking-wider uppercase text-sm">
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

      <section className="relative py-24 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-reiki-900 mb-4">
              {t("agendar.steps.title")}
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-reiki-300 to-reiki-500" />
          </div>
          <div className="grid sm:grid-cols-3 gap-8 mb-20">
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
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
}
