import { createFileRoute, notFound } from "@tanstack/react-router";
import { EntityCard } from "@/components/entity-card";
import { PageHeader } from "@/components/page-header";
import { domainById } from "@/lib/atlas";
import { useAtlas } from "@/lib/atlas";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/domains/$domainId")({
  loader: ({ params }) => {
    const domain = domainById[params.domainId as keyof typeof domainById];
    if (!domain) throw notFound();
    return { domainId: domain.id };
  },
  component: DomainPage,
});

function DomainPage() {
  const { domainId } = Route.useLoaderData();
  const t = useT();
  const { domainById: byId, campaignsForDomain } = useAtlas();
  const domain = byId[domainId];
  if (!domain) throw notFound();
  const dossiers = campaignsForDomain(domain.id);
  return (
    <article className="mx-auto max-w-3xl">
      <PageHeader kicker={t.kicker.domain} title={domain.name} dek={domain.summary} />
      <section>
        <h2 className="font-display text-2xl">{t.domain.how}</h2>
        <ul className="mt-4 flex flex-col gap-3">
          {domain.howItWorks.map((step) => (
            <li key={step} className="border-l border-border pl-4 text-sm text-foreground/90">
              {step}
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="font-display text-2xl">{t.domain.why}</h2>
        <p className="mt-3 text-foreground/90">{domain.whyHardToAttribute}</p>
      </section>
      <section className="mt-10">
        <h2 className="font-display text-2xl">{t.domain.typical}</h2>
        <p className="mt-3 text-foreground/90">{domain.typicalInterests}</p>
      </section>
      <section className="mt-10">
        <h2 className="mb-4 font-display text-2xl">{t.domain.dossiers}</h2>
        <div className="flex flex-col gap-3">
          {dossiers.map((c) => (
            <EntityCard
              key={c.id}
              hit={{
                kind: "campaign",
                id: c.id,
                title: c.title,
                dek: c.dek,
                href: `/campaigns/${c.id}`,
                attribution: c.attribution.level,
                tags: [],
              }}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
