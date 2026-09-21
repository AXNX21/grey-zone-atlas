import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { AttributionBadge } from "@/components/attribution-badge";
import { EditionStamp } from "@/components/edition-stamp";
import { HouseCredit } from "@/components/house-credit";
import { EuropeMap } from "@/components/europe-map";
import { Badge } from "@/components/ui/badge";
import { useAtlas } from "@/lib/atlas";
import { interpolate, useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({ component: Home });

const FEATURED = [
  "mosque-census",
  "syria-pipeline",
  "samsam-case",
  "medieforlig-neutrality",
  "counter-legislation",
  "denmark-reversal",
];

function Home() {
  const t = useT();
  const { campaignById, campaigns, domains, posture } = useAtlas();
  const featured = FEATURED.map((id) => campaignById[id]).filter(Boolean);
  const active = campaigns.filter((c) => c.status === "active" || c.status === "ongoing").length;

  return (
    <div className="flex flex-col gap-12">
      <section>
        <p className="font-mono text-[10px] tracking-[0.2em] text-faint uppercase">
          {t.classification}
        </p>
        <p className="mt-2">
          <EditionStamp className="text-[10px]" />
        </p>
        <div className="mt-2">
          <HouseCredit className="text-[10px]" />
        </div>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
          {t.homeTitle}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">{posture.line}</p>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
          {interpolate(t.homeDek, { n: active })}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            to="/campaigns"
            className="inline-flex h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
          >
            {t.openDossiers}
          </Link>
          <Link
            to="/census"
            className="inline-flex h-11 items-center rounded-md px-4 text-sm text-foreground shadow-border"
          >
            {t.openLedger}
          </Link>
          <Link
            to="/doctrine"
            className="inline-flex h-11 items-center rounded-md px-4 text-sm text-foreground shadow-border"
          >
            {t.openDoctrine}
          </Link>
        </div>
      </section>

      <section className="grid gap-px overflow-hidden rounded-xl bg-border shadow-border sm:grid-cols-2 xl:grid-cols-4">
        {posture.figures.map((f) => (
          <article key={f.label} className="bg-card px-4 py-5">
            <p className="font-display text-3xl tracking-tight">{f.value}</p>
            <p className="mt-2 text-sm text-foreground">{f.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{f.compare}</p>
            <p className="mt-3 font-mono text-[10px] tracking-wide text-faint uppercase">{f.source}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <div className="mb-4 flex items-end justify-between gap-3">
            <h2 className="font-display text-2xl">{t.theatersHeading}</h2>
            <Link to="/theaters" className="text-sm text-steel hover:underline">
              {t.allTheaters}
            </Link>
          </div>
          <EuropeMap />
        </div>
        <div>
          <h2 className="mb-4 font-display text-2xl">{t.watch}</h2>
          <ul className="flex flex-col gap-3">
            {posture.watch.map((w) => (
              <li key={w.title} className="rounded-xl bg-card p-4 shadow-border">
                <p className="text-sm font-medium text-foreground">{w.title}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{w.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-display text-2xl">{t.featured}</h2>
          <Link to="/campaigns" className="text-sm text-steel hover:underline">
            {interpolate(t.allN, { n: campaigns.length })}
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {featured.map((c) => (
            <Link
              key={c.id}
              to="/campaigns/$campaignId"
              params={{ campaignId: c.id }}
              className="group flex flex-col gap-3 rounded-xl bg-card p-4 shadow-border transition-[box-shadow] hover:shadow-border-hover"
            >
              <div className="flex items-center justify-between gap-2">
                <Badge tone="faint">{t.status[c.status]}</Badge>
                <AttributionBadge level={c.attribution.level} />
              </div>
              <h3 className="font-display text-xl leading-snug">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.dek}</p>
              <span className="mt-auto inline-flex items-center gap-1 text-xs text-steel">
                {t.readDossier}
                <ArrowUpRight className="size-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-display text-2xl">{t.domainsHeading}</h2>
          <Link to="/domains" className="text-sm text-steel hover:underline">
            {t.taxonomy}
          </Link>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d) => (
            <Link
              key={d.id}
              to="/domains/$domainId"
              params={{ domainId: d.id }}
              className="rounded-lg bg-card px-4 py-3 shadow-border transition-[box-shadow] hover:shadow-border-hover"
            >
              <p className="text-sm font-medium">{d.name}</p>
              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{d.short}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
