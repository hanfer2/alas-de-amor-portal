"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import ScrollReveal from "@/components/ScrollReveal";

function LangUpdater() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "es";
  }, [lang]);

  return null;
}

function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main id="main-content" className="flex-1">
      <ScrollReveal key={pathname}>{children}</ScrollReveal>
    </main>
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LangUpdater />
      <StructuredData />
      <a
        href="#main-content"
        className="visually-hidden focus:not-visually-hidden focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-reiki-600 focus:text-white focus:rounded-xl focus:shadow-lg"
      >
        Saltar al contenido
      </a>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
      <BackToTop />
    </LanguageProvider>
  );
}
