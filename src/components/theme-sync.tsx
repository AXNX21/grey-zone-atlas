import { useEffect, useLayoutEffect } from "react";
import {
  isThemeMode,
  paintTheme,
  THEME_STORAGE_KEY,
  useThemeStore,
  type ThemeMode,
} from "@/lib/theme";

function storedMode(): ThemeMode | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw) as { state?: { mode?: unknown } };
    return isThemeMode(parsed?.state?.mode) ? parsed.state.mode : undefined;
  } catch {
    return undefined;
  }
}

export function ThemeSync() {
  const mode = useThemeStore((s) => s.mode);

  useLayoutEffect(() => {
    void useThemeStore.persist.rehydrate();
    const next = storedMode() ?? useThemeStore.getState().mode;
    useThemeStore.setState({ mode: next });
    paintTheme(next);
  }, []);

  useEffect(() => {
    paintTheme(mode);
    if (mode !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => paintTheme("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mode]);

  return null;
}
