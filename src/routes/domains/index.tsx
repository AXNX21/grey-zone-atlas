import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { useAtlas } from "@/lib/atlas";
import { interpolate, useT } from "@/lib/i18n";

export const Route = createFileRoute("/domains/")({ component: DomainsPage });

function DomainsPage() {
  const t = useT();
  const { domains, campaignsForDomain } = useAtlas();
  return (
    <div>
      <PageHeader kicker={t.taxonomy} title={t.pages.domainsTitle} dek={t.pages.domainsDek} />
      <div className="grid gap-3 md:grid-cols-2">
        {domains.map((d) => {
          const n = campaignsForDomain(d.id).length;
          return (
            <Link
              key={d.id}
              to="/domains/$domainId"
              params={{ domainId: d.id }}
              className="rounded-xl bg-card p-5 shadow-border transition-[box-shadow] hover:shadow-border-hover"
            >
              <p className="font-mono text-[10px] tracking-[0.16em] text-faint uppercase">
                {interpolate(t.actor.nDossiers, { n })}
              </p>
              <h2 className="mt-2 font-display text-2xl">{d.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{d.short}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
