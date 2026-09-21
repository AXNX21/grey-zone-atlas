import { useState } from "react";
import { AttributionBadge } from "@/components/attribution-badge";
import { CENSUS_GEO, CENSUS_GEO_TOTAL } from "@/lib/atlas/census";
import type { CensusGeoId } from "@/lib/atlas/census";
import { useAtlas } from "@/lib/atlas";
import { interpolate } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const PRESSURE: Record<string, string> = {
  critical: "fill-destructive",
  high: "fill-warn",
  elevated: "fill-steel",
  watch: "fill-info",
};

export function MosqueMap() {
  const { census: copy } = useAtlas();
  const [active, setActive] = useState<CensusGeoId>("copenhagen");
  const max = Math.max(...CENSUS_GEO.map((n) => n.mapped));
  const node = CENSUS_GEO.find((n) => n.id === active)!;
  const text = copy.geo[active];

  return (
    <section>
      <h2 className="font-display text-2xl">{copy.mapTitle}</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{copy.mapDek}</p>
      <div className="mt-4 overflow-hidden rounded-xl bg-card shadow-border lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <svg
          viewBox="0 0 100 100"
          className="block h-auto w-full text-border"
          role="img"
          aria-label={copy.mapTitle}
        >
          <rect width="100" height="100" className="fill-card" />
          <path
            d="M30 7 C36 4 43 8 41 16 L46 28 L51 36 L53 48 L49 60 L42 72 L33 80 L25 74 L20 56 L19 38 L24 20 L28 10 Z"
            fill="color-mix(in oklab, var(--atlas-fg) 6%, transparent)"
            stroke="color-mix(in oklab, var(--atlas-fg) 16%, transparent)"
            strokeWidth="0.45"
          />
          <path
            d="M50 58 C57 55 62 60 59 67 C56 74 49 73 47 67 C45 61 47 58 50 58 Z"
            fill="color-mix(in oklab, var(--atlas-fg) 6%, transparent)"
            stroke="color-mix(in oklab, var(--atlas-fg) 16%, transparent)"
            strokeWidth="0.45"
          />
          <path
            d="M67 46 C78 42 88 50 85 60 L89 72 L80 80 L68 74 L65 56 Z"
            fill="color-mix(in oklab, var(--atlas-fg) 6%, transparent)"
            stroke="color-mix(in oklab, var(--atlas-fg) 16%, transparent)"
            strokeWidth="0.45"
          />
          <path
            d="M63 81 C72 79 76 86 69 88 L61 85 Z"
            fill="color-mix(in oklab, var(--atlas-fg) 6%, transparent)"
            stroke="color-mix(in oklab, var(--atlas-fg) 16%, transparent)"
            strokeWidth="0.45"
          />
          <circle
            cx="93"
            cy="68"
            r="2.1"
            fill="color-mix(in oklab, var(--atlas-fg) 6%, transparent)"
            stroke="color-mix(in oklab, var(--atlas-fg) 16%, transparent)"
            strokeWidth="0.45"
          />
          {CENSUS_GEO.map((n) => {
            const r = 1.5 + (n.mapped / max) * 4.2;
            const on = n.id === active;
            return (
              <g key={n.id}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={on ? r + 1.1 : r}
                  className={cn(PRESSURE[n.pressure], "cursor-pointer opacity-90")}
                  onClick={() => setActive(n.id)}
                />
                {on ? (
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={r + 2.2}
                    fill="none"
                    stroke="var(--color-foreground)"
                    strokeWidth="0.35"
                  />
                ) : null}
              </g>
            );
          })}
        </svg>
        <div className="flex flex-col border-t border-border p-4 lg:border-t-0 lg:border-l">
          <p className="font-mono text-[10px] tracking-[0.16em] text-faint uppercase">{copy.mapGrade}</p>
          <p className="mt-3 font-display text-2xl leading-snug">{text.name}</p>
          <p className="mt-1 font-mono text-xs text-steel">
            {node.mapped} mapped · {Math.round((node.mapped / CENSUS_GEO_TOTAL) * 100)}%
          </p>
          <p className="mt-3 text-sm text-muted-foreground">{text.note}</p>
          <ul className="mt-4 flex flex-col gap-1">
            {CENSUS_GEO.map((n) => {
              const on = n.id === active;
              return (
                <li key={n.id}>
                  <button
                    type="button"
                    onClick={() => setActive(n.id)}
                    className={cn(
                      "flex min-h-9 w-full items-center justify-between gap-3 rounded-md px-2 text-left text-sm",
                      on ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/70 hover:text-foreground",
                    )}
                  >
                    <span>{copy.geo[n.id].name}</span>
                    <span className="font-mono text-xs">{n.mapped}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 font-mono text-[10px] tracking-wide text-faint uppercase">
            {interpolate(copy.mapTotal, { n: CENSUS_GEO_TOTAL })}
          </p>
          <div className="mt-2">
            <AttributionBadge level="moderate" />
          </div>
        </div>
      </div>
    </section>
  );
}
