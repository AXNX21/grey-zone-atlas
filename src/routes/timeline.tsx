import { createFileRoute, Link } from "@tanstack/react-router";
import { AttributionBadge } from "@/components/attribution-badge";
import { PageHeader } from "@/components/page-header";
import { useAtlas } from "@/lib/atlas";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/timeline")({ component: TimelinePage });

function TimelinePage() {
  const t = useT();
  const { timeline } = useAtlas();
  const events = [...timeline].sort((a, b) => a.date.localeCompare(b.date));
  const years = [...new Set(events.map((e) => e.date.slice(0, 4)))];
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader kicker={t.kicker.sequence} title={t.pages.timelineTitle} dek={t.pages.timelineDek} />
      <div className="mb-8 flex flex-wrap gap-2 font-mono text-xs text-faint">
        {years.map((y) => (
          <a key={y} href={`#y-${y}`} className="hover:text-steel">
            {y}
          </a>
        ))}
      </div>
      <ol className="relative flex flex-col gap-8 border-l border-border pl-6">
        {events.map((e, i) => {
          const year = e.date.slice(0, 4);
          const prev = events[i - 1]?.date.slice(0, 4);
          return (
            <li key={e.id} id={year !== prev ? `y-${year}` : undefined} className="relative">
              <span className="absolute top-1.5 -left-[1.62rem] size-2 rounded-full bg-steel" />
              <p className="font-mono text-xs text-faint">{e.date}</p>
              <h2 className="mt-1 font-display text-xl leading-snug">{e.title}</h2>
              <div className="mt-2">
                <AttributionBadge level={e.attribution} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{e.note}</p>
              {e.campaignId ? (
                <Link
                  to="/campaigns/$campaignId"
                  params={{ campaignId: e.campaignId }}
                  className="mt-2 inline-block text-sm text-steel hover:underline"
                >
                  {t.openDossier}
                </Link>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
