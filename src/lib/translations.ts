import es from "@/locales/es.json";
import en from "@/locales/en.json";

export type TranslationValue = string | string[] | Record<string, unknown>;

const translations: Record<string, typeof es> = { es, en };

export function t(lang: string, key: string): TranslationValue {
  const dict = translations[lang] || translations.es;
  const keys = key.split(".");
  let value: unknown = dict;
  for (const k of keys) {
    if (value && typeof value === "object" && k in (value as Record<string, unknown>)) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value as string[];
  return key;
}

export function getTranslations(lang: string): typeof es {
  return translations[lang] || translations.es;
}

export const languages = [
  { code: "es", name: "Español", flag: "🇨🇴" },
  { code: "en", name: "English", flag: "🇺🇸" },
] as const;

export const defaultLanguage = "es";
