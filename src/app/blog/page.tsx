"use client";

import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";

const defaultPosts = [
  { title: "El Poder del Reiki", excerpt: "El Reiki es una fuerza de sanación universal...", category: "Reiki", date: "2024-01-15" },
  { title: "Sanar Tu Niño Interior", excerpt: "El niño interior es esa parte de nosotros...", category: "Crecimiento", date: "2024-02-01" },
  { title: "Mensajes de Tus Ángeles", excerpt: "Tus ángeles siempre están hablando...", category: "Angelical", date: "2024-02-15" },
  { title: "La Transformación Que Viene", excerpt: "Cada fin ciclo trae un nuevo comienzo...", category: "Espiritual", date: "2024-03-01" },
];

export default function BlogPage() {
  const t = useTranslations();

  return (
    <div className="relative overflow-hidden">
      <section className="relative pt-32 pb-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-spiritual-500 font-medium tracking-wider uppercase text-sm">
              {t("blog.hero.badge")}
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-spiritual-900 mt-3">
              {t("blog.hero.title").split(" ").map((word: string, i: number) => (
                <span key={i}>
                  {i === 1 ? <span className="text-gradient">{word} </span> : `${word} `}
                </span>
              ))}
            </h1>
            <p className="text-xl text-spiritual-600 mt-6 leading-relaxed">
              {t("blog.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {defaultPosts.map((post, i) => (
              <article
                key={i}
                className="gradient-card rounded-3xl p-8 shadow-sm border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-spiritual-500/20 to-gold-400/20 text-xs font-medium text-spiritual-600">
                    {post.category}
                  </span>
                  <span className="text-spiritual-400 text-sm">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold text-spiritual-800 mb-3">
                  {post.title}
                </h2>
                <p className="text-spiritual-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-spiritual-600 hover:text-spiritual-800 font-semibold transition-colors group"
                >
                  <span>Leer más</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 gradient-spiritual">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-spiritual-900 mb-4">
            {t("blog.newsletter.title")}
          </h2>
          <p className="text-spiritual-600 mb-8">
            {t("blog.newsletter.subtitle")}
          </p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={t("blog.newsletter.placeholder")}
              className="flex-1 px-6 py-4 rounded-full border border-spiritual-200 focus:border-spiritual-400 focus:ring-2 focus:ring-spiritual-200 outline-none bg-white"
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-spiritual-500 to-spiritual-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              {t("blog.newsletter.button")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}