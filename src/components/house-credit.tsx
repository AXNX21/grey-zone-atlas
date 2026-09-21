import { HOUSE } from "@/lib/house";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function HouseMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-8 shrink-0 items-center justify-center rounded-md bg-secondary text-steel shadow-border",
        className,
      )}
      aria-hidden
    >
      <svg viewBox="0 0 32 32" className="size-4">
        <rect x="2.5" y="2.5" width="27" height="27" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 7v18M7 16h18" stroke="currentColor" strokeWidth="1.25" />
        <path d="M10 10l12 12M22 10L10 22" stroke="currentColor" strokeWidth="0.9" opacity="0.5" />
        <rect
          x="13.15"
          y="13.15"
          width="5.7"
          height="5.7"
          transform="rotate(45 16 16)"
          className="fill-destructive"
          stroke="none"
        />
      </svg>
    </span>
  );
}

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

export function HouseWidget({ className }: { className?: string }) {
  const t = useT();
  return (
    <a
      href={HOUSE.url}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "flex min-h-11 items-center gap-2.5 rounded-md px-1 py-1 text-left transition-colors hover:bg-accent/70",
        className,
      )}
      aria-label={`${HOUSE.name} — ${t.houseRoles}`}
    >
      <HouseMark />
      <span className="min-w-0 leading-tight">
        <span className="block truncate font-mono text-[11px] tracking-[0.14em] text-steel uppercase">
          {HOUSE.slug}
        </span>
        <span className="block truncate font-mono text-[10px] tracking-wide text-faint uppercase">
          {t.houseRoles}
        </span>
      </span>
    </a>
  );
}
