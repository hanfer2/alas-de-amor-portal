"use client";

import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";
import { LotusMandala, FloatingOrbs } from "@/components/HeroDecoration";

export default function NosotrosPage() {
  const t = useTranslations();

  const credentialKeys = [
    { titleKey: "credentials.reiki.title", descKey: "credentials.reiki.desc" },
    { titleKey: "credentials.access.title", descKey: "credentials.access.desc" },
    { titleKey: "credentials.facelight.title", descKey: "credentials.facelight.desc" },
    { titleKey: "credentials.medium.title", descKey: "credentials.medium.desc" },
    { titleKey: "credentials.angelical.title", descKey: "credentials.angelical.desc" },
    { titleKey: "credentials.espiritual.title", descKey: "credentials.espiritual.desc" },
  ];

  return (
    <div className="relative overflow-hidden">
      <section className="relative pt-32 pb-20 gradient-hero overflow-hidden">
        <FloatingOrbs />
        <div className="absolute top-10 right-10 opacity-30">
          <LotusMandala className="w-48 h-48" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto reveal">
            <span className="text-reiki-500 font-medium tracking-wider uppercase text-sm">
              {t("nosotros.hero.badge")}
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-reiki-900 mt-3">
              {t("nosotros.hero.title").split(" ").map((word, i) => (
                <span key={i}>
                  {i === 1 ? <span className="text-gradient">{word} </span> : `${word} `}
                </span>
              ))}
            </h1>
            <p className="text-xl text-reiki-600 mt-6 leading-relaxed">
              {t("nosotros.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1 reveal">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-reiki-300/20">
                <Image
                  src="/imgs/team/liliana-profile.jpg"
                  alt="Liliana Rodas - Founder of Alas de Amor, Master Reiki"
                  width={600}
                  height={700}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 gradient-card rounded-2xl p-6 shadow-xl border border-white/50">
                <div className="text-4xl font-display font-bold text-gradient">
                  {t("nosotros.about.yearsExperience")}
                </div>
                <div className="text-reiki-600 text-sm">
                  {t("nosotros.about.yearsLabel")}
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2 reveal">
              <h2 className="font-display text-4xl font-bold text-reiki-900">
                Liliana Rodas
              </h2>
              <p className="text-reiki-500 font-medium">
                {t("nosotros.about.subtitle")}
              </p>
              <p className="text-reiki-700 text-lg leading-relaxed">
                {t("nosotros.about.bio1")}
              </p>
              <p className="text-reiki-700 text-lg leading-relaxed">
                {t("nosotros.about.bio2")}
              </p>

              <div className="bg-gradient-to-r from-reiki-50 to-reiki-50 rounded-2xl p-6 border border-reiki-100">
                <h3 className="font-display text-lg font-bold text-reiki-800 mb-3">
                  {t("nosotros.about.goalsTitle")}
                </h3>
                <ul className="space-y-3">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex items-start gap-3">
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
                      <span className="text-reiki-700">{t(`nosotros.about.goals.${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 gradient-spiritual">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-reiki-500 font-medium tracking-wider uppercase text-sm">
              {t("nosotros.credentials.badge")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-reiki-900 mt-3">
              {t("nosotros.credentials.title").split(" ").map((word, i) => (
                <span key={i}>
                  {i === 1 ? <span className="text-gradient">{word} </span> : `${word} `}
                </span>
              ))}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {credentialKeys.map((cred) => (
              <div
                key={cred.titleKey}
                className="gradient-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50 hover:-translate-y-1 reveal"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-reiki-100 to-reiki-100 flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-reiki-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-reiki-800 mb-2">
                  {t(cred.titleKey)}
                </h3>
                <p className="text-reiki-600 text-sm">{t(cred.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-reiki-500 font-medium tracking-wider uppercase text-sm">
              {t("nosotros.certificates.badge")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-reiki-900 mt-3">
              {t("nosotros.certificates.title").split(" ").map((word, i) => (
                <span key={i}>
                  {i === 2 ? <span className="text-gradient">{word} </span> : `${word} `}
                </span>
              ))}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["certificado-2.jpg", "certificado-8.jpg", "certificado-9.jpg", "certificado-10.jpg", "certificado-11.jpg", "certificado-12.jpg", "certificado-13.jpg", "certificado-14.jpg"].map(
              (img, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group reveal"
                >
                  <Image
                    src={`/imgs/${img}`}
                    alt={`Certificate ${i + 1} of Alas de Amor`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-reiki-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="relative py-24 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-reiki-500 font-medium tracking-wider uppercase text-sm">
              {t("nosotros.experience.badge")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-reiki-900 mt-3">
              {t("nosotros.experience.title").split(" ").map((word, i) => (
                <span key={i}>
                  {i === 1 ? <span className="text-gradient">{word} </span> : `${word} `}
                </span>
              ))}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {["gallery/gallery-2.jpg", "gallery/gallery-3.jpg", "gallery/gallery-4.jpg"].map((img, i) => (
              <div
                key={i}
                className={`relative rounded-3xl overflow-hidden shadow-xl reveal ${
                  i === 0 ? "md:col-span-2 h-80" : "h-64"
                }`}
              >
                <Image
                  src={`/imgs/${img}`}
                  alt={`Experience ${i + 1} of Alas de Amor`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-reiki-900/50 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
