"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { defaultLanguage } from "@/lib/translations";

type LanguageContextType = {
  lang: string;
  setLang: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: defaultLanguage,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === "undefined") return defaultLanguage;
    const saved = localStorage.getItem("alang");
    return saved === "es" || saved === "en" ? saved : defaultLanguage;
  });

  const setLang = useCallback((l: string) => {
    setLangState(l);
    localStorage.setItem("alang", l);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
