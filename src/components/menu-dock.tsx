import { EditionStamp } from "@/components/edition-stamp";
import { HouseWidget } from "@/components/house-credit";
import { LocaleSwitch } from "@/components/locale-switch";
import { ThemeSwitch } from "@/components/theme-switch";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function MenuDock({ className, padded }: { className?: string; padded?: boolean }) {
  const t = useT();
  return (
    <div className={cn("mt-auto flex flex-col gap-3", padded ? "px-5 pb-5 pt-4" : "px-3 pb-1 pt-4", className)}>
      <p className="font-mono text-[10px] leading-relaxed tracking-wide text-faint uppercase">{t.sidebarNote}</p>
      <EditionStamp className="text-[10px] normal-case tracking-wide" />
      <div className="flex flex-col gap-2">
        <p className="font-mono text-[10px] tracking-[0.16em] text-faint uppercase">{t.language}</p>
        <LocaleSwitch />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-mono text-[10px] tracking-[0.16em] text-faint uppercase">{t.theme}</p>
        <ThemeSwitch />
      </div>
      <div className="border-t border-border pt-3">
        <HouseWidget />
      </div>
    </div>
  );
}
