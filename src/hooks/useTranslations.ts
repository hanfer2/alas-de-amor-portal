"use client";

import { useCallback } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t as translate, type TranslationValue } from "@/lib/translations";

export function useTranslations() {
  const { lang } = useLanguage();
  const t = useCallback((key: string): TranslationValue => translate(lang, key), [lang]);
  return t as (key: string) => string;
}
