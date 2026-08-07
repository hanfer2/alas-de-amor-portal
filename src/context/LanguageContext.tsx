"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
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
  const [hydrated, setHydrated] = useState(false);
  const [lang, setLangState] = useState(defaultLanguage);

  useEffect(() => {
    const saved = localStorage.getItem("alang");
    if (saved === "es" || saved === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- sync localStorage after hydration
      setLangState(saved);
    }
    setHydrated(true);
  }, []);

  const setLang = useCallback((l: string) => {
    setLangState(l);
    localStorage.setItem("alang", l);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang: hydrated ? lang : defaultLanguage, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
