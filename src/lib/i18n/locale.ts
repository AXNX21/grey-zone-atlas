import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Locale = "en" | "da";

export const LOCALES: { id: Locale; native: string; name: string }[] = [
  { id: "da", native: "Dansk", name: "Danish" },
  { id: "en", native: "English", name: "English" },
];

export const LOCALE_STORAGE_KEY = "gza-locale";

export function isLocale(v: unknown): v is Locale {
  return v === "en" || v === "da";
}

export function parseLocale(v: unknown): Locale | undefined {
  if (typeof v !== "string") return undefined;
  const s = v.toLowerCase();
  if (s === "da" || s.startsWith("da-")) return "da";
  if (s === "en" || s.startsWith("en-")) return "en";
  return undefined;
}

export function localeFromSearch(search: unknown): Locale | undefined {
  if (!search || typeof search !== "object") return undefined;
  return parseLocale((search as { lang?: unknown }).lang);
}

export function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const list = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of list) {
    const hit = parseLocale(tag);
    if (hit) return hit;
  }
  return "en";
}

type LocaleState = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      locale: "en",
      setLocale: (locale) => set({ locale }),
    }),
    { name: LOCALE_STORAGE_KEY, skipHydration: true },
  ),
);

export function useLocale(): Locale {
  return useLocaleStore((s) => s.locale);
}
