import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeMode = "system" | "dark" | "light";
export type ResolvedTheme = "dark" | "light";

export const THEMES: ThemeMode[] = ["system", "dark", "light"];
export const THEME_STORAGE_KEY = "gza-theme";

export function isThemeMode(v: unknown): v is ThemeMode {
  return v === "system" || v === "dark" || v === "light";
}

export function prefersDark(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function resolveTheme(mode: ThemeMode): ResolvedTheme {
  if (mode === "light") return "light";
  if (mode === "dark") return "dark";
  return prefersDark() ? "dark" : "light";
}

const THEME_COLORS: Record<ResolvedTheme, string> = {
  dark: "#0c0c0b",
  light: "#f3f0e6",
};

export function paintTheme(mode: ThemeMode) {
  if (typeof document === "undefined") return;
  const resolved = resolveTheme(mode);
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
  root.classList.toggle("light", resolved === "light");
  root.dataset.theme = mode;
  root.style.colorScheme = resolved;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", THEME_COLORS[resolved]);
}

type ThemeState = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "system",
      setMode: (mode) => {
        set({ mode });
        paintTheme(mode);
      },
    }),
    { name: THEME_STORAGE_KEY, skipHydration: true },
  ),
);

/** Runs before paint so the first frame matches the stored preference. */
export const THEME_BOOTSTRAP = `(function(){var m='system';try{var r=localStorage.getItem('${THEME_STORAGE_KEY}');if(r){var p=JSON.parse(r);var x=p&&p.state&&p.state.mode;if(x==='light'||x==='dark'||x==='system')m=x;}}catch(e){}var d=true;try{d=window.matchMedia('(prefers-color-scheme: dark)').matches;}catch(e){}var dark=m==='dark'||(m!=='light'&&d);var el=document.documentElement;el.classList.toggle('dark',dark);el.classList.toggle('light',!dark);el.dataset.theme=m;el.style.colorScheme=dark?'dark':'light';})();`;
