"use client";

import AppointmentForm from "@/components/AppointmentForm";
import { useTranslations } from "@/hooks/useTranslations";

export default function AgendarPage() {
  const t = useTranslations();

  return (
    <div className="relative overflow-hidden">
      <section className="relative pt-32 pb-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-spiritual-500 font-medium tracking-wider uppercase text-sm">
              {t("agendar.hero.badge")}
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-spiritual-900 mt-3">
              {t("agendar.hero.title").split(" ").map((word, i) => (
                <span key={i}>
                  {i === 1 ? <span className="text-gradient">{word} </span> : `${word} `}
                </span>
              ))}
            </h1>
            <p className="text-xl text-spiritual-600 mt-6 leading-relaxed">
              {t("agendar.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
}
