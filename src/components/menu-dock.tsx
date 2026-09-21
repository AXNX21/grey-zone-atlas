import { EditionStamp } from "@/components/edition-stamp";
import { HouseWidget } from "@/components/house-credit";
import { LocaleSwitch } from "@/components/locale-switch";
import { ThemeSwitch } from "@/components/theme-switch";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function MenuDock({ className, padded }: { className?: string; padded?: boolean }) {
  const t = useT();
  return (
    <div className={cn("mt-auto flex flex-col gap-2", padded ? "px-5 pb-5 pt-3" : "px-3 pb-1 pt-3", className)}>
      <p className="font-mono text-[10px] leading-relaxed tracking-wide text-faint uppercase">{t.sidebarNote}</p>
      <EditionStamp className="text-[10px] normal-case tracking-wide" />
      <LocaleSwitch />
      <ThemeSwitch />
      <div className="border-t border-border pt-2">
        <HouseWidget />
      </div>
    </div>
  );
}
