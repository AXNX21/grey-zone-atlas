import { LOCALES, useResolvedLocale, useSetLocale, useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LocaleSwitch() {
  const locale = useResolvedLocale();
  const t = useT();
  const setLocale = useSetLocale();

  return (
    <div
      role="group"
      aria-label={t.language}
      className="flex h-11 items-stretch overflow-hidden rounded-md shadow-border"
    >
      {LOCALES.map((item) => {
        const on = locale === item.id;
        return (
          <button
            key={item.id}
            type="button"
            aria-pressed={on}
            aria-label={item.native}
            title={item.native}
            onClick={() => setLocale(item.id)}
            className={cn(
              "inline-flex min-w-11 items-center justify-center px-2.5 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors",
              on
                ? "bg-accent text-foreground"
                : "text-faint hover:bg-accent/70 hover:text-foreground",
            )}
          >
            {item.id}
          </button>
        );
      })}
    </div>
  );
}
