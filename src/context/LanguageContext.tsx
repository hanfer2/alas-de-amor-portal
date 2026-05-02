"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
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
  const [lang, setLangState] = useState(defaultLanguage);

  useEffect(() => {
    const saved = localStorage.getItem("alang");
    if (saved && (saved === "es" || saved === "en")) {
      setLangState(saved);
    }
  }, []);

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
