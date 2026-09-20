import { useEffect, useState } from "react";
import { useRouter, useRouterState } from "@tanstack/react-router";
import { uiFor } from "./ui";
import {
  detectBrowserLocale,
  isLocale,
  LOCALE_STORAGE_KEY,
  parseLocale,
  useLocaleStore,
  type Locale,
} from "./locale";

export function applyLocale(locale: Locale) {
  useLocaleStore.getState().setLocale(locale);
  if (typeof document !== "undefined") {
    document.documentElement.lang = locale;
  }
}

function storedLocale(): Locale | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    const raw = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw) as { state?: { locale?: unknown } };
    return parseLocale(parsed?.state?.locale);
  } catch {
    return undefined;
  }
}

function urlLangFromSearchStr(searchStr: string): Locale | undefined {
  const raw = searchStr.startsWith("?") ? searchStr.slice(1) : searchStr;
  return parseLocale(new URLSearchParams(raw).get("lang"));
}

function hrefWithLang(pathname: string, searchStr: string, hash: string, locale: Locale): string | null {
  const raw = searchStr.startsWith("?") ? searchStr.slice(1) : searchStr;
  const params = new URLSearchParams(raw);
  if (params.get("lang") === locale) return null;
  params.set("lang", locale);
  const qs = params.toString();
  const hashPart = hash ? (hash.startsWith("#") ? hash : `#${hash}`) : "";
  return pathname + (qs ? `?${qs}` : "") + hashPart;
}

export function useSetLocale() {
  const router = useRouter();
  return (locale: Locale) => {
    applyLocale(locale);
    const loc = router.state.location;
    const next = hrefWithLang(loc.pathname, loc.searchStr, loc.hash, locale);
    if (next) router.history.replace(next);
  };
}

function afterFirstPaint(fn: () => void) {
  let cancelled = false;
  const run = () => {
    if (!cancelled) fn();
  };
  let idleId: number | undefined;
  let timeoutId: number | undefined;
  if (typeof requestIdleCallback === "function") {
    idleId = requestIdleCallback(run, { timeout: 200 });
  } else {
    timeoutId = window.setTimeout(run, 50);
  }
  return () => {
    cancelled = true;
    if (idleId !== undefined && typeof cancelIdleCallback === "function") {
      cancelIdleCallback(idleId);
    }
    if (timeoutId !== undefined) window.clearTimeout(timeoutId);
  };
}

export function LocaleSync() {
  const router = useRouter();
  const searchStr = useRouterState({ select: (s) => s.location.searchStr });
  const searchLang = urlLangFromSearchStr(searchStr);

  useEffect(() => {
    if (searchLang) {
      applyLocale(searchLang);
      return;
    }

    return afterFirstPaint(() => {
      void useLocaleStore.persist.rehydrate();
      const next = storedLocale() ?? detectBrowserLocale();
      applyLocale(next);
      const loc = router.state.location;
      if (urlLangFromSearchStr(loc.searchStr)) return;
      // English is the SSR default. Writing ?lang=en races lazy-route
      // hydration (href="/campaigns" vs "?lang=en"). Danish is restored
      // into the URL so in-app links and copy-paste stay in Danish.
      if (next === "en") return;
      const href = hrefWithLang(loc.pathname, loc.searchStr, loc.hash, next);
      if (href) router.history.replace(href);
    });
  }, [searchLang, router]);

  return null;
}

export function useResolvedLocale(): Locale {
  const stored = useLocaleStore((s) => s.locale);
  const searchStr = useRouterState({ select: (s) => s.location.searchStr });
  const urlLang = urlLangFromSearchStr(searchStr);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  if (urlLang) return urlLang;
  if (!ready) return "en";
  return stored;
}

export function useT() {
  return uiFor(useResolvedLocale());
}

export { isLocale };
