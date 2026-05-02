"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/hooks/useTranslations";
import { languages } from "@/lib/translations";

const navLinks = [
  { href: "/", labelKey: "nav.inicio" },
  { href: "/nosotros", labelKey: "nav.nosotros" },
  { href: "/servicios", labelKey: "nav.servicios" },
  { href: "/testimonios", labelKey: "nav.testimonios" },
  { href: "/blog", labelKey: "nav.blog" },
  { href: "/agendar", labelKey: "nav.agendar" },
  { href: "/contacto", labelKey: "nav.contacto" },
];

const flagEmoji: Record<string, string> = {
  es: "🇨🇴",
  en: "🇺🇸",
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const t = useTranslations();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-spiritual-200/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-spiritual-400 to-gold-400 flex items-center justify-center shadow-glow animate-float">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  className="w-7 h-7 text-white"
                >
                  <path
                    d="M24 8C20 8 16 14 16 20C16 24 18 26 20 28C14 26 8 28 6 34C10 32 14 32 18 30C16 34 18 40 24 42C30 40 32 34 30 30C34 32 38 32 42 34C40 28 34 26 28 28C30 26 32 24 32 20C32 14 28 8 24 8Z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                  <circle cx="24" cy="22" r="3" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-gradient">
                Alas de Amor
              </span>
              <span className="text-xs text-spiritual-600 tracking-wider uppercase">
                {t("home.badge")}
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? "bg-gradient-to-r from-spiritual-500/20 to-gold-400/20 text-spiritual-700 shadow-sm"
                    : "text-spiritual-600 hover:text-spiritual-800 hover:bg-spiritual-50"
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}

            <div className="flex items-center gap-1 ml-3 pl-3 border-l border-spiritual-200">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2 py-1 rounded-lg text-lg transition-all duration-200 hover:scale-110 ${
                    lang === l.code
                      ? "bg-spiritual-100 shadow-sm"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  title={l.name}
                  aria-label={`Switch to ${l.name}`}
                >
                  {flagEmoji[l.code]}
                </button>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center gap-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2 py-1 rounded-lg text-lg transition-all duration-200 hover:scale-110 ${
                    lang === l.code
                      ? "bg-spiritual-100 shadow-sm"
                      : "opacity-60 hover:opacity-100"
                  }`}
                  title={l.name}
                  aria-label={`Switch to ${l.name}`}
                >
                  {flagEmoji[l.code]}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-spiritual-50 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-spiritual-700"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="lg:hidden mt-4 pb-4 glass rounded-2xl p-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "bg-gradient-to-r from-spiritual-500/20 to-gold-400/20 text-spiritual-700"
                    : "text-spiritual-600 hover:bg-spiritual-50"
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
