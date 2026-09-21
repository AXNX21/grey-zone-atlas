import { HOUSE } from "@/lib/house";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function HouseCredit({ className }: { className?: string }) {
  const t = useT();
  return (
    <p className={cn("font-mono tracking-wide text-faint uppercase", className)}>
      <a href={HOUSE.url} className="text-steel hover:underline" target="_blank" rel="noreferrer">
        {HOUSE.name}
      </a>
      <span className="text-faint"> · {t.houseRoles}</span>
    </p>
  );
}
