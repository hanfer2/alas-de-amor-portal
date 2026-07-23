"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/hooks/useTranslations";
import { languages } from "@/lib/translations";
import Logo from "@/components/Logo";

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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setIsOpen(false);
    }
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-reiki-200/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="h-10 w-auto" size={48} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? "bg-gradient-to-r from-reiki-500/20 to-reiki-400/20 text-reiki-700 shadow-sm"
                    : "text-reiki-600 hover:text-reiki-800 hover:bg-reiki-50"
                }`}
              >
                {t(link.labelKey)}
              </Link>
            ))}

            <div className="flex items-center gap-1 ml-3 pl-3 border-l border-reiki-200">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2 py-1 rounded-lg text-lg transition-all duration-200 hover:scale-110 ${
                    lang === l.code
                      ? "bg-reiki-100 shadow-sm"
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
                      ? "bg-reiki-100 shadow-sm"
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
              className="p-2 rounded-full hover:bg-reiki-50 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <svg
                className="w-6 h-6 text-reiki-700"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
          <nav className="lg:hidden mt-4 pb-4 glass rounded-2xl p-4 animate-fade-in" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  pathname === link.href
                    ? "bg-gradient-to-r from-reiki-500/20 to-reiki-400/20 text-reiki-700"
                    : "text-reiki-600 hover:bg-reiki-50"
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
