"use client";

import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";
import { EnergyWaves, FloatingOrbs } from "@/components/HeroDecoration";

const services = [
  {
    titleKey: "nosotros.services.reiki",
    descKey: "servicios.reiki.desc",
    benefitsKey: "servicios.reiki.benefits",
    durationKey: "servicios.reiki.duration",
    color: "from-reiki-400 to-reiki-600",
  },
  {
    titleKey: "nosotros.services.access",
    descKey: "servicios.barras.desc",
    benefitsKey: "servicios.barras.benefits",
    durationKey: "servicios.barras.duration",
    color: "from-reiki-400 to-reiki-600",
  },
  {
    titleKey: "nosotros.services.angelical",
    descKey: "servicios.angelical.desc",
    benefitsKey: "servicios.angelical.benefits",
    durationKey: "servicios.angelical.duration",
    color: "from-reiki-300 to-reiki-500",
  },
  {
    titleKey: "nosotros.services.chakras",
    descKey: "servicios.chakras.desc",
    benefitsKey: "servicios.chakras.benefits",
    durationKey: "servicios.chakras.duration",
    color: "from-reiki-400 to-reiki-400",
  },
  {
    titleKey: "nosotros.services.meditacion",
    descKey: "servicios.meditacion.desc",
    benefitsKey: "servicios.meditacion.benefits",
    durationKey: "servicios.meditacion.duration",
    color: "from-reiki-300 to-reiki-400",
  },
  {
    titleKey: "nosotros.services.facelight",
    descKey: "servicios.facelight.desc",
    benefitsKey: "servicios.facelight.benefits",
    durationKey: "servicios.facelight.duration",
    color: "from-reiki-500 to-reiki-700",
  },
  {
    titleKey: "nosotros.services.coaching",
    descKey: "servicios.coaching.desc",
    benefitsKey: "servicios.coaching.benefits",
    durationKey: "servicios.coaching.duration",
    color: "from-reiki-500 to-reiki-500",
  },
  {
    titleKey: "nosotros.services.oraculos",
    descKey: "servicios.oraculos.desc",
    benefitsKey: "servicios.oraculos.benefits",
    durationKey: "servicios.oraculos.duration",
    color: "from-reiki-500 to-reiki-500",
  },
];

export default function ServiciosPage() {
  const t = useTranslations();

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
          {services.map((service, i) => (
            <div
              key={service.titleKey}
              className={`grid lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0 ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={`reveal ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-medium mb-4`}
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
                  {t(service.durationKey)}
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-reiki-900 mb-4">
                  {t(service.titleKey)}
                </h2>
                <p className="text-reiki-700 text-lg leading-relaxed mb-6">
                  {t(service.descKey)}
                </p>
                <ul className="space-y-3 mb-8">
                  {[0, 1, 2, 3, 4].map((bi) => (
                    <li key={bi} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-reiki-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-reiki-700">
                        {t(`${service.benefitsKey}.${bi}`)}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/agendar"
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r ${service.color} text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
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

              <div className={`relative reveal ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-reiki-300/20">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`w-32 h-32 rounded-full bg-gradient-to-br ${service.color} opacity-20 blur-2xl animate-float`}
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
          ))}
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
