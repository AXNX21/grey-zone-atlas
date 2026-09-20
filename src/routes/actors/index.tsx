import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { useAtlas } from "@/lib/atlas";
import { interpolate, useT } from "@/lib/i18n";

export const Route = createFileRoute("/actors/")({ component: ActorsPage });

function ActorsPage() {
  const t = useT();
  const { actors, campaignsForActor } = useAtlas();
  return (
    <div>
      <PageHeader kicker={t.kicker.who} title={t.pages.actorsTitle} dek={t.pages.actorsDek} />
      <div className="grid gap-3 md:grid-cols-2">
        {actors.map((a) => (
          <Link
            key={a.id}
            to="/actors/$actorId"
            params={{ actorId: a.id }}
            className="rounded-xl bg-card p-5 shadow-border transition-[box-shadow] hover:shadow-border-hover"
          >
            <div className="flex items-center gap-2">
              <Badge tone="faint">{t.actorKind[a.kind]}</Badge>
              <span className="font-mono text-[10px] text-faint">
                {interpolate(t.actor.nDossiers, { n: campaignsForActor(a.id).length })}
              </span>
            </div>
            <h2 className="mt-2 font-display text-2xl">{a.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{a.short}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
