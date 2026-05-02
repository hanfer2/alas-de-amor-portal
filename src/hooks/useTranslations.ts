"use client";

import { useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t as translate } from "@/lib/translations";

export function useTranslations() {
  const { lang } = useLanguage();
  const t = useCallback((key: string) => translate(lang, key), [lang]);
  return t;
}
