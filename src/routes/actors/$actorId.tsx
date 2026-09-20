import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BookmarkButton } from "@/components/bookmark-button";
import { EntityCard } from "@/components/entity-card";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { actorById } from "@/lib/atlas";
import { useAtlas } from "@/lib/atlas";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/actors/$actorId")({
  loader: ({ params }) => {
    if (!actorById[params.actorId]) throw notFound();
    return { actorId: params.actorId };
  },
  component: ActorPage,
});

function ActorPage() {
  const { actorId } = Route.useLoaderData();
  const t = useT();
  const { actorById: byId, campaignsForActor, domainById, theaterById } = useAtlas();
  const actor = byId[actorId];
  if (!actor) throw notFound();
  const dossiers = campaignsForActor(actor.id);
  const parent = actor.parentId ? byId[actor.parentId] : undefined;
  return (
    <article className="mx-auto max-w-3xl">
      <div className="mb-2 flex items-center justify-between">
        <p className="font-mono text-[10px] tracking-[0.18em] text-faint uppercase">{t.kicker.actor}</p>
        <BookmarkButton id={`actor:${actor.id}`} />
      </div>
      <PageHeader
        title={actor.name}
        dek={actor.short}
        extra={
          <div className="flex flex-wrap gap-2">
            <Badge tone="steel">{t.actorKind[actor.kind]}</Badge>
            {parent ? (
              <Link to="/actors/$actorId" params={{ actorId: parent.id }}>
                <Badge>{parent.name}</Badge>
              </Link>
            ) : null}
            {actor.aliases.map((al) => (
              <Badge key={al} tone="faint">
                {al}
              </Badge>
            ))}
          </div>
        }
      />
      <p className="text-[15px] leading-relaxed text-foreground/90">{actor.summary}</p>
      <section className="mt-10">
        <h2 className="font-display text-2xl">{t.actor.interests}</h2>
        <ul className="mt-4 flex flex-col gap-3">
          {actor.interests.map((i) => (
            <li key={i} className="border-l border-border pl-4 text-sm">
              {i}
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="font-display text-2xl">{t.actor.methods}</h2>
        <ul className="mt-4 flex flex-col gap-3">
          {actor.methods.map((i) => (
            <li key={i} className="border-l border-border pl-4 text-sm">
              {i}
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-xl">{t.dossier.domains}</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {actor.domains.map((id) => (
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
            {actor.theaters.map((id) => (
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
        <h2 className="mb-4 font-display text-2xl">{t.actor.appears}</h2>
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
