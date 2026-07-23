"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";
import Logo from "@/components/Logo";
import { AngelFeathers } from "@/components/HeroDecoration";

const serviceIcons = [
  {
    titleKey: "credentials.reiki.title",
    descKey: "credentials.reiki.desc",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M24 4v8M24 36v8M4 24h8M36 24h8M10 10l5.5 5.5M32.5 32.5l5.5 5.5M38 10l-5.5 5.5M15.5 32.5L10 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    titleKey: "credentials.access.title",
    descKey: "credentials.access.desc",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <circle cx="24" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="28" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="36" cy="28" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M24 16v4M16 16l-4 8M32 16l4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    titleKey: "credentials.angelical.title",
    descKey: "credentials.angelical.desc",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M12 28c0-8 5-16 12-16s12 8 12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 28c0-6 4-12 8-12s8 6 8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="32" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M24 36v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    titleKey: "credentials.facelight.title",
    descKey: "credentials.facelight.desc",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <ellipse cx="24" cy="24" rx="12" ry="14" stroke="currentColor" strokeWidth="2" />
        <circle cx="19" cy="20" r="1.5" fill="currentColor" />
        <circle cx="29" cy="20" r="1.5" fill="currentColor" />
        <path d="M20 30c1.5 2 6.5 2 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 14c-2-4 0-8 6-8s8 4 6 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    titleKey: "credentials.medium.title",
    descKey: "credentials.medium.desc",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
        <path d="M24 12c-4 0-8 4-8 10s4 10 8 10 8-4 8-10-4-10-8-10z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="8" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    titleKey: "credentials.espiritual.title",
    descKey: "credentials.espiritual.desc",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path d="M24 4l3 8h8l-6.5 5 2.5 8L24 20l-7 5 2.5-8L13 12h8l3-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="32" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M24 28v8M20 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const FloatingOrb = ({ className, delay }: { className: string; delay: number }) => (
  <div
    className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
    style={{ animationDelay: `${delay}s` }}
  />
);

export default function Home() {
  const t = useTranslations();

  return (
    <div className="relative overflow-hidden">
      <FloatingOrb
        className="w-96 h-96 bg-reiki-300 top-20 -left-48 animate-float-slow"
        delay={0}
      />
      <FloatingOrb
        className="w-80 h-80 bg-reiki-300 top-40 right-0 animate-float"
        delay={2}
      />
      <FloatingOrb
        className="w-64 h-64 bg-reiki-200 bottom-40 left-1/4 animate-float-delay"
        delay={4}
      />

      <section className="relative min-h-screen flex items-center gradient-hero pt-24 overflow-hidden">
        <div className="absolute top-0 right-0 opacity-[0.07]">
          <AngelFeathers className="w-[500px] h-[250px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <Logo className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shadow-glow" size={112} />

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm shadow-sm">
                <div className="w-2 h-2 rounded-full bg-reiki-400 animate-pulse" />
                <span className="text-sm text-reiki-700 font-medium">
                  {t("home.badge")}
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient">{t("home.hero.title1")}</span>
                <br />
                <span className="text-reiki-800">{t("home.hero.title2")}</span>
              </h1>

              <p className="text-xl text-reiki-700 max-w-lg leading-relaxed">
                {t("home.hero.subtitle")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/agendar"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-reiki-500 to-reiki-600 text-white font-semibold shadow-lg shadow-reiki-400/30 hover:shadow-xl hover:shadow-reiki-400/40 hover:scale-105 transition-all duration-300"
                >
                  {t("home.hero.ctaPrimary")}
                </Link>
                <Link
                  href="/servicios"
                  className="px-8 py-4 rounded-full glass text-reiki-700 font-semibold hover:bg-white/80 hover:scale-105 transition-all duration-300"
                >
                  {t("home.hero.ctaSecondary")}
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 animate-float-slow">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-reiki-200 via-reiki-300 to-reiki-100 opacity-60 blur-2xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-glow">
                  <Image
                    src="/imgs/team/liliana-profile.jpg"
                    alt="Liliana Rodas - Master Reiki and Holistic Therapist at Alas de Amor"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 320px, 384px"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-reiki-300 to-reiki-500 flex items-center justify-center shadow-gold animate-glow">
                  <span className="text-white font-display text-xs font-bold text-center leading-tight whitespace-pre-line">
                    {t("home.masterReiki")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent" />
      </section>

      <section className="relative py-8 bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-black">
            <video
              className="w-full"
              controls
              autoPlay
              muted
              playsInline
              loop
              preload="none"
            >
              <source src="/videos/alas-de-amor.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-reiki-500 font-medium tracking-wider uppercase text-sm">
              {t("home.services.badge")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-reiki-900 mt-3">
              {t("home.services.title").split(" ").map((word, i) => (
                <span key={i}>
                  {i === 1 ? <span className="text-gradient">{word} </span> : `${word} `}
                </span>
              ))}
            </h2>
            <p className="text-reiki-600 mt-4 max-w-2xl mx-auto text-lg">
              {t("home.services.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceIcons.map((service, i) => (
              <Link
                key={service.titleKey}
                href="/servicios"
                className="group gradient-card rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-reiki-200/30 transition-all duration-500 hover:-translate-y-2 border border-white/50 reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-reiki-100 to-reiki-100 flex items-center justify-center text-reiki-600 group-hover:from-reiki-200 group-hover:to-reiki-200 group-hover:scale-110 transition-all duration-300 mb-6">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-reiki-800 mb-3 group-hover:text-gradient transition-all">
                  {t(service.titleKey)}
                </h3>
                <p className="text-reiki-600 text-sm leading-relaxed">
                  {t(service.descKey)}
                </p>
                <div className="mt-6 flex items-center text-reiki-500 text-sm font-medium group-hover:text-reiki-700 transition-colors">
                  <span>{t("home.services.learnMore")}</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 gradient-spiritual">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative reveal">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-reiki-300/20">
                <Image
                  src="/imgs/gallery/gallery-1.jpg"
                  alt="Holistic therapy space at Alas de Amor"
                  width={600}
                  height={400}
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/imgs/team/liliana-about.jpg"
                  alt="Professional certification of Alas de Amor"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 reveal">
              <span className="text-reiki-500 font-medium tracking-wider uppercase text-sm">
                {t("home.about.badge")}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-reiki-900">
                {t("home.about.title")}
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "credentials.reiki.title",
                  "credentials.access.title",
                  "credentials.facelight.title",
                  "credentials.medium.title",
                  "credentials.angelical.title",
                  "credentials.espiritual.title",
                ].map((titleKey) => (
                  <span
                    key={titleKey}
                    className="px-3 py-1 rounded-full bg-white/60 text-xs font-medium text-reiki-700 shadow-sm"
                  >
                    {t(titleKey)}
                  </span>
                ))}
              </div>
              <p className="text-reiki-700 text-lg leading-relaxed">
                {t("home.about.bio")}
              </p>
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 text-reiki-600 hover:text-reiki-800 font-semibold transition-colors group"
              >
                <span>{t("home.about.cta")}</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <div className="gradient-card rounded-3xl p-12 sm:p-16 shadow-xl shadow-reiki-200/20 border border-white/50">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-reiki-400 to-reiki-600 flex items-center justify-center animate-glow">
              <Logo className="w-12 h-12" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-reiki-900 mb-4">
              <span>{t("home.cta.title1")}</span>{" "}
              <span className="text-gradient">{t("home.cta.title2")}</span>
            </h2>
            <p className="text-reiki-600 text-lg mb-8 max-w-xl mx-auto">
              {t("home.cta.subtitle")}
            </p>
            <Link
              href="/agendar"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-reiki-500 to-reiki-600 text-white font-semibold text-lg shadow-lg shadow-reiki-400/30 hover:shadow-xl hover:shadow-reiki-400/40 hover:scale-105 transition-all duration-300"
            >
              <span>{t("home.cta.button")}</span>
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
        </div>
      </section>

      <section className="relative py-24 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-reiki-500 font-medium tracking-wider uppercase text-sm">
              {t("home.testimonials.badge")}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-reiki-900 mt-3">
              {t("home.testimonials.title").split(" ").map((word, i) => (
                <span key={i}>
                  {i >= 2 ? <span className="text-gradient">{word} </span> : `${word} `}
                </span>
              ))}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => {
              const quote = t(`home.testimonials.items.${i}.quote`);
              const author = t(`home.testimonials.items.${i}.author`);
              return (
                <div
                  key={i}
                  className="gradient-card rounded-3xl p-8 shadow-sm border border-white/50 hover:shadow-lg transition-shadow reveal"
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg
                        key={j}
                        className="w-5 h-5 text-reiki-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-reiki-700 italic mb-6 leading-relaxed">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-reiki-300 to-reiki-500 flex items-center justify-center text-white font-bold text-sm">
                      {author[0]}
                    </div>
                    <span className="font-semibold text-reiki-800">
                      {author}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
