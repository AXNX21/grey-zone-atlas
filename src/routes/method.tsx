import { createFileRoute } from "@tanstack/react-router";
import { AttributionBadge } from "@/components/attribution-badge";
import { EditionStamp } from "@/components/edition-stamp";
import { PageHeader } from "@/components/page-header";
import { useAtlas } from "@/lib/atlas";
import { useResolvedLocale, useT } from "@/lib/i18n";
import { ATLAS_CHANGELOG, formatPublishedAt } from "@/lib/version";

export const Route = createFileRoute("/method")({ component: MethodPage });

function MethodPage() {
  const t = useT();
  const locale = useResolvedLocale();
  const { method } = useAtlas();
  return (
    <article className="mx-auto max-w-3xl">
      <PageHeader
        kicker={t.kicker.house}
        title={t.pages.methodTitle}
        dek={method.lede}
        extra={<EditionStamp className="text-[11px]" />}
      />
      <ol className="flex flex-col gap-4">
        {method.grades.map((g) => (
          <li key={g.level} className="rounded-xl bg-card p-4 shadow-border">
            <AttributionBadge level={g.level} />
            <p className="mt-3 text-sm text-foreground/90">{g.means}</p>
          </li>
        ))}
      </ol>
      <h2 className="mt-10 font-display text-2xl">{t.pages.methodRules}</h2>
      <ul className="mt-4 flex flex-col gap-3">
        {method.rules.map((r) => (
          <li key={r} className="border-l border-border pl-4 text-sm text-foreground/90">
            {r}
          </li>
        ))}
      </ul>
      <h2 className="mt-10 font-display text-2xl">{t.versionHistory}</h2>
      <ol className="mt-4 flex flex-col gap-3">
        {ATLAS_CHANGELOG.map((entry) => (
          <li key={entry.version} className="border-l border-border pl-4">
            <p className="font-mono text-xs text-steel">
              v{entry.version}
              <span className="text-faint">
                {" · "}
                <time dateTime={entry.publishedAt}>
                  {formatPublishedAt(entry.publishedAt, locale, true)}
                </time>
              </span>
            </p>
            <p className="mt-1 text-sm text-foreground/90">{entry.note[locale]}</p>
          </li>
        ))}
      </ol>
    </article>
  );
}
