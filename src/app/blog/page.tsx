"use client";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";
import { useLanguage } from "@/context/LanguageContext";
import { OpenBook, FloatingOrbs } from "@/components/HeroDecoration";
export default function BlogPage() {
  const t = useTranslations();
  const { lang } = useLanguage();
  const getPosts = () => {
    try {
      const posts = t("blog.posts");
      return Array.isArray(posts) ? posts : [];
    } catch {
      return [];
    }
  };
  const posts = getPosts() as unknown as Array<{
    title: string;
    excerpt: string;
    date: string;
    category: string;
  }>;
  return (
    <div className="relative overflow-hidden">
      {" "}
      <section className="relative pt-28 pb-4 gradient-hero overflow-hidden">
        {" "}
        <FloatingOrbs />{" "}
         <div className="absolute bottom-5 right-10 hero-icon-halo opacity-90">
          {" "}
          <OpenBook className="w-52 h-40" />{" "}
        </div>{" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="text-center max-w-3xl mx-auto reveal">
            {" "}
             <h1 className="role-h1 mt-0">
              {" "}
              {t("blog.hero.title")
                .split(" ")
                .map((word: string, i: number) => (
                  <span key={i}>
                    {" "}
                    {i === 1 ? (
                      <span className="text-gradient">{word} </span>
                    ) : (
                      `${word} `
                    )}{" "}
                  </span>
                ))}{" "}
            </h1>{" "}
             <p className="role-subtitle mt-4 leading-relaxed">
              {" "}
              {t("blog.hero.subtitle")}{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-warm-white" />{" "}
      </section>{" "}
      <section className="relative py-24 bg-warm-white">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="grid md:grid-cols-2 gap-8">
            {" "}
            {posts.map((post, i) => (
              <article
                key={i}
                className="gradient-card rounded-3xl p-8 shadow-sm border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal"
              >
                {" "}
                <div className="flex items-center gap-3 mb-4">
                  {" "}
                   <span className="role-metadata rounded-full bg-reiki-50 px-3 py-1">
                    {" "}
                    {post.category}{" "}
                  </span>{" "}
                   <span className="role-metadata text-reiki-700">
                    {" "}
                    {new Intl.DateTimeFormat(lang === "en" ? "en-US" : "es-CO", {
                      timeZone: "UTC",
                    }).format(new Date(post.date))}{" "}
                  </span>{" "}
                </div>{" "}
                 <h2 className="role-card-title mb-3">
                  {" "}
                  {post.title}{" "}
                </h2>{" "}
                 <p className="role-description mb-6 leading-relaxed">
                  {" "}
                  {post.excerpt}{" "}
                </p>{" "}
                <Link
                  href="#"
                   className="role-cta inline-flex items-center gap-2 text-reiki-600 hover:text-reiki-800 transition-colors group"
                >
                  {" "}
                  <span>{t("home.services.learnMore")}</span>{" "}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />{" "}
                  </svg>{" "}
                </Link>{" "}
              </article>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-warm-white" />{" "}
      </section>{" "}
      <section className="relative py-24 gradient-spiritual">
        {" "}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          {" "}
           <h2 className="role-h2 mb-4">
            {" "}
            {t("blog.newsletter.title")}{" "}
          </h2>{" "}
           <p className="role-description mb-8">
            {" "}
            {t("blog.newsletter.subtitle")}{" "}
          </p>{" "}
          <form
            className="flex flex-col sm:flex-row gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {" "}
            <label htmlFor="newsletter-email" className="visually-hidden">
              {t("blog.newsletter.placeholder")}
            </label>{" "}
            <input
              id="newsletter-email"
              type="email"
              placeholder={t("blog.newsletter.placeholder")}
              className="flex-1 px-6 py-4 rounded-full border border-reiki-200 focus:border-reiki-400 focus:ring-2 focus:ring-reiki-200 outline-none bg-white"
            />{" "}
            <button
              type="submit"
               className="role-cta px-8 py-4 rounded-full bg-gradient-to-r from-reiki-500 to-reiki-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              {" "}
              {t("blog.newsletter.button")}{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
}
