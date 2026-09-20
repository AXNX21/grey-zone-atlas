import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AttributionBadge } from "@/components/attribution-badge";
import { BookmarkButton } from "@/components/bookmark-button";
import { HypothesisList } from "@/components/hypothesis-list";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { campaignById } from "@/lib/atlas";
import { useAtlas } from "@/lib/atlas";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/campaigns/$campaignId")({
  loader: ({ params }) => {
    if (!campaignById[params.campaignId]) throw notFound();
    return { campaignId: params.campaignId };
  },
  component: CampaignPage,
});

function CampaignPage() {
  const { campaignId } = Route.useLoaderData();
  const t = useT();
  const { campaignById: byId, actorById, domainById, theaterById } = useAtlas();
  const c = byId[campaignId];
  if (!c) throw notFound();

  const period =
    c.period.end && c.period.end !== c.period.start
      ? `${c.period.start} – ${c.period.end}`
      : c.period.end
        ? c.period.start
        : `${c.period.start} – ${t.present}`;

  return (
    <article className="mx-auto max-w-3xl pb-8">
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="font-mono text-[10px] tracking-[0.18em] text-faint uppercase">{t.kicker.dossier}</p>
        <BookmarkButton id={`campaign:${c.id}`} />
      </div>
      <PageHeader
        title={c.title}
        dek={c.dek}
        extra={
          <div className="flex flex-wrap items-center gap-2">
            <AttributionBadge level={c.attribution.level} />
            <Badge>{t.status[c.status]}</Badge>
            <Badge tone="faint">{period}</Badge>
            {c.id === "mosque-census" || c.id === "syria-pipeline" ? (
              <Link
                to="/census"
                className="inline-flex h-9 items-center rounded-md px-3 text-xs text-steel shadow-border hover:bg-accent"
              >
                {t.openLedger}
              </Link>
            ) : null}
          </div>
        }
      />

      <p className="text-[15px] leading-relaxed text-foreground/90">{c.summary}</p>

      <section className="mt-10">
        <h2 className="font-display text-2xl">{t.dossier.attribution}</h2>
        <p className="mt-3 text-sm text-muted-foreground">{c.attribution.note}</p>
        {c.attribution.assigned?.length ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {c.attribution.assigned.map((id) => {
              const a = actorById[id];
              return (
                <li key={id}>
                  <Link
                    to="/actors/$actorId"
                    params={{ actorId: id }}
                    className="inline-flex h-9 items-center rounded-md px-3 text-xs text-steel shadow-border hover:bg-accent"
                  >
                    {a?.name ?? id}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">{t.dossier.who}</h2>
        <p className="mt-2 mb-4 text-sm text-muted-foreground">{t.dossier.whoDek}</p>
        <HypothesisList items={c.attribution.hypotheses} />
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">{t.dossier.mechanism}</h2>
        <p className="mt-3 text-foreground/90">{c.mechanism}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">{t.dossier.effects}</h2>
        <ul className="mt-4 flex flex-col gap-3">
          {c.effects.map((e) => (
            <li key={e} className="border-l border-border pl-4 text-sm">
              {e}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">{t.dossier.incidents}</h2>
        <ol className="mt-4 flex flex-col gap-4">
          {c.incidents.map((i) => (
            <li key={i.date + i.place} className="grid gap-1 sm:grid-cols-[7rem_1fr]">
              <p className="font-mono text-xs text-faint">{i.date}</p>
              <div>
                <p className="text-sm font-medium">
                  {i.place}
                  <span className="font-normal text-muted-foreground"> — {i.what}</span>
                </p>
                {i.attribution ? (
                  <p className="mt-1 text-xs text-muted-foreground">{i.attribution}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">{t.dossier.responses}</h2>
        <ul className="mt-4 flex flex-col gap-2">
          {c.responses.map((r) => (
            <li key={r} className="text-sm text-foreground/90">
              {r}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-xl">{t.dossier.domains}</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {c.domains.map((id) => (
              <li key={id}>
                <Link
                  to="/domains/$domainId"
                  params={{ domainId: id }}
                  className="text-sm text-steel hover:underline"
                >
                  {domainById[id]?.name ?? id}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-xl">{t.dossier.theaters}</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {c.theaters.map((id) => (
              <li key={id}>
                <Link
                  to="/theaters/$theaterId"
                  params={{ theaterId: id }}
                  className="text-sm text-steel hover:underline"
                >
                  {theaterById[id]?.name ?? id}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl">{t.dossier.sources}</h2>
        <ul className="mt-4 flex flex-col gap-3">
          {c.sources.map((s) => (
            <li key={s.title} className="text-sm">
              {s.url ? (
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-steel underline-offset-4 hover:underline"
                >
                  {s.title}
                </a>
              ) : (
                <span>{s.title}</span>
              )}
              <span className="text-muted-foreground">
                {" "}
                — {s.publisher}, {s.date}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
