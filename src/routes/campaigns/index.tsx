import { createFileRoute } from "@tanstack/react-router";
import { EntityCard } from "@/components/entity-card";
import { PageHeader } from "@/components/page-header";
import { Input } from "@/components/ui/input";
import { useAtlas } from "@/lib/atlas";
import type { AttributionLevel, CampaignStatus } from "@/lib/atlas/types";
import { ATTRIBUTION_LEVELS, interpolate, parseLocale, type Locale, useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Search = {
  lang?: Locale;
  q?: string;
  domain?: string;
  attribution?: AttributionLevel;
  status?: CampaignStatus;
};

export const Route = createFileRoute("/campaigns/")({
  validateSearch: (raw: Record<string, unknown>): Search => {
    const next: Search = {};
    const lang = parseLocale(raw.lang);
    if (lang) next.lang = lang;
    if (typeof raw.q === "string" && raw.q) next.q = raw.q;
    if (typeof raw.domain === "string" && raw.domain) next.domain = raw.domain;
    if (typeof raw.attribution === "string" && raw.attribution) {
      next.attribution = raw.attribution as AttributionLevel;
    }
    if (typeof raw.status === "string" && raw.status) {
      next.status = raw.status as CampaignStatus;
    }
    return next;
  },
  component: CampaignsPage,
});

const STAT: CampaignStatus[] = ["active", "ongoing", "historical", "dormant"];

function Chip({
  on,
  children,
  onClick,
}: {
  on: boolean;
  children: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex h-9 items-center rounded-md px-3 text-xs tracking-wide uppercase transition-colors",
        on ? "bg-primary text-primary-foreground" : "text-muted-foreground shadow-border hover:bg-accent",
      )}
    >
      {children}
    </button>
  );
}

function CampaignsPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const t = useT();
  const { campaigns, domains } = useAtlas();
  const set = (patch: Partial<Search>) => {
    void navigate({
      search: (prev) => {
        const next = { ...prev, ...patch };
        (Object.keys(next) as (keyof Search)[]).forEach((k) => {
          if (!next[k]) delete next[k];
        });
        return next;
      },
    });
  };

  const q = (search.q ?? "").toLowerCase();
  const filtered = campaigns.filter((c) => {
    if (search.domain && !c.domains.includes(search.domain as (typeof c.domains)[number])) return false;
    if (search.attribution && c.attribution.level !== search.attribution) return false;
    if (search.status && c.status !== search.status) return false;
    if (q) {
      const blob = `${c.title} ${c.dek} ${c.summary}`.toLowerCase();
      if (!blob.includes(q)) return false;
    }
    return true;
  });

  return (
    <div>
      <PageHeader kicker={t.kicker.ledger} title={t.pages.dossiersTitle} dek={t.pages.dossiersDek} />
      <div className="mb-6 max-w-md">
        <Input
          value={search.q ?? ""}
          placeholder={t.filters.filterDossiers}
          onChange={(e) => set({ q: e.target.value || undefined })}
          aria-label={t.filters.filterDossiers}
        />
      </div>
      <div className="mb-3 flex flex-wrap gap-2">
        <Chip on={!search.attribution} onClick={() => set({ attribution: undefined })}>
          {t.filters.anyGrade}
        </Chip>
        {ATTRIBUTION_LEVELS.map((a) => (
          <Chip
            key={a}
            on={search.attribution === a}
            onClick={() => set({ attribution: search.attribution === a ? undefined : a })}
          >
            {t.attribution[a]}
          </Chip>
        ))}
      </div>
      <div className="mb-3 flex flex-wrap gap-2">
        {STAT.map((s) => (
          <Chip
            key={s}
            on={search.status === s}
            onClick={() => set({ status: search.status === s ? undefined : s })}
          >
            {t.status[s]}
          </Chip>
        ))}
      </div>
      <div className="mb-8 flex flex-wrap gap-2">
        {domains.map((d) => (
          <Chip
            key={d.id}
            on={search.domain === d.id}
            onClick={() => set({ domain: search.domain === d.id ? undefined : d.id })}
          >
            {d.name}
          </Chip>
        ))}
      </div>
      <p className="mb-4 font-mono text-[10px] tracking-wider text-faint uppercase">
        {interpolate(t.filters.of, { n: filtered.length, total: campaigns.length })}
      </p>
      <div className="grid gap-3 lg:grid-cols-2">
        {filtered.map((c) => (
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
      {filtered.length === 0 ? (
        <p className="py-12 text-sm text-muted-foreground">{t.filters.none}</p>
      ) : null}
    </div>
  );
}
