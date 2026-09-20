import { Link } from "@tanstack/react-router";
import { useAtlas } from "@/lib/atlas";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const PRESSURE: Record<string, string> = {
  critical: "bg-destructive",
  high: "bg-warn",
  elevated: "bg-steel",
  watch: "bg-info",
};

export function EuropeMap({ activeId }: { activeId?: string }) {
  const { theaters } = useAtlas();
  const t = useT();
  const onMap = theaters.filter((th) => th.map.x >= 0);
  return (
    <div className="relative overflow-hidden rounded-xl bg-card shadow-border">
      <svg
        viewBox="0 0 100 92"
        className="block h-auto w-full text-border"
        role="img"
        aria-label={t.theater.mapAria}
      >
        <rect width="100" height="92" fill="currentColor" className="text-card" />
        <g stroke="currentColor" strokeWidth="0.15" className="text-border">
          {Array.from({ length: 10 }, (_, i) => (
            <line key={`v${i}`} x1={i * 10} y1="0" x2={i * 10} y2="92" />
          ))}
          {Array.from({ length: 10 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} />
          ))}
        </g>
        <path
          d="M18 22 C22 10, 38 8, 48 12 C58 6, 70 8, 78 16 C86 18, 90 28, 88 36 C92 42, 86 48, 80 50 C84 58, 82 68, 74 72 C68 80, 58 82, 50 78 C40 84, 32 80, 28 70 C18 68, 14 58, 16 48 C10 40, 12 30, 18 22 Z"
          fill="color-mix(in oklab, #eceae4 6%, transparent)"
          stroke="color-mix(in oklab, #eceae4 16%, transparent)"
          strokeWidth="0.4"
        />
        {onMap.map((th) => (
          <g key={th.id}>
            <circle
              cx={th.map.x}
              cy={th.map.y}
              r={activeId === th.id ? 3.2 : 2.4}
              className={cn(
                th.pressure === "critical"
                  ? "fill-destructive"
                  : th.pressure === "high"
                    ? "fill-warn"
                    : th.pressure === "elevated"
                      ? "fill-steel"
                      : "fill-info",
              )}
              opacity={activeId && activeId !== th.id ? 0.45 : 0.95}
            />
          </g>
        ))}
      </svg>
      <ul className="grid gap-px border-t border-border bg-border sm:grid-cols-2">
        {theaters.map((th) => (
          <li key={th.id}>
            <Link
              to="/theaters/$theaterId"
              params={{ theaterId: th.id }}
              className={cn(
                "flex min-h-11 items-center gap-3 bg-card px-3 py-2.5 text-sm transition-colors hover:bg-accent",
                activeId === th.id && "bg-accent",
              )}
            >
              <span className={cn("size-2 shrink-0 rounded-full", PRESSURE[th.pressure])} />
              <span className="flex-1 text-foreground">{th.name}</span>
              <span className="font-mono text-[10px] tracking-wider text-faint uppercase">
                {t.pressure[th.pressure]}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
