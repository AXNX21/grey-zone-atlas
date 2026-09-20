import { createFileRoute, notFound } from "@tanstack/react-router";
import { EntityCard } from "@/components/entity-card";
import { EuropeMap } from "@/components/europe-map";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { theaterById } from "@/lib/atlas";
import { useAtlas } from "@/lib/atlas";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/theaters/$theaterId")({
  loader: ({ params }) => {
    const theater = theaterById[params.theaterId as keyof typeof theaterById];
    if (!theater) throw notFound();
    return { theaterId: theater.id };
  },
  component: TheaterPage,
});

function TheaterPage() {
  const { theaterId } = Route.useLoaderData();
  const t = useT();
  const { theaterById: byId, campaignsForTheater } = useAtlas();
  const theater = byId[theaterId];
  if (!theater) throw notFound();
  const dossiers = campaignsForTheater(theater.id);
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <article>
        <PageHeader
          kicker={t.kicker.theater}
          title={theater.name}
          dek={theater.summary}
          extra={
            <div className="flex flex-wrap gap-2">
              <Badge tone="steel">{t.pressure[theater.pressure]}</Badge>
              <Badge>{theater.region}</Badge>
            </div>
          }
        />
        <h2 className="font-display text-2xl">{t.theater.whyHere}</h2>
        <p className="mt-3 text-foreground/90">{theater.whyHere}</p>
        <h2 className="mt-8 font-display text-2xl">{t.theater.countries}</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {theater.countries.map((c) => (
            <li key={c}>
              <Badge>{c}</Badge>
            </li>
          ))}
        </ul>
        <h2 className="mt-8 mb-4 font-display text-2xl">{t.theater.dossiers}</h2>
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
      </article>
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <EuropeMap activeId={theater.id} />
      </aside>
    </div>
  );
}
