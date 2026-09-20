import { Link } from "@tanstack/react-router";
import { AttributionBadge } from "@/components/attribution-badge";
import { useAtlas } from "@/lib/atlas";
import type { Hypothesis } from "@/lib/atlas/types";
import { useT } from "@/lib/i18n";

export function HypothesisList({ items }: { items: Hypothesis[] }) {
  const { actorById } = useAtlas();
  const t = useT();
  return (
    <div className="flex flex-col gap-4">
      {items.map((h) => {
        const actor = actorById[h.actorId];
        return (
          <article
            key={h.actorId + h.likelihood}
            className="rounded-xl bg-card p-4 shadow-border sm:p-5"
          >
            <header className="flex flex-wrap items-center gap-2">
              {actor ? (
                <Link
                  to="/actors/$actorId"
                  params={{ actorId: actor.id }}
                  className="font-display text-lg text-foreground underline-offset-4 hover:underline"
                >
                  {actor.name}
                </Link>
              ) : (
                <span className="font-display text-lg">{h.actorId}</span>
              )}
              <AttributionBadge level={h.likelihood} />
            </header>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
                  {t.dossier.motive}
                </dt>
                <dd className="mt-1 text-sm text-foreground/90">{h.motive}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
                  {t.dossier.capability}
                </dt>
                <dd className="mt-1 text-sm text-foreground/90">{h.capability}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
                  {t.dossier.record}
                </dt>
                <dd className="mt-1 text-sm text-foreground/90">{h.evidence}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.14em] text-faint uppercase">
                  {t.dossier.counter}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{h.counter}</dd>
              </div>
            </dl>
          </article>
        );
      })}
    </div>
  );
}
