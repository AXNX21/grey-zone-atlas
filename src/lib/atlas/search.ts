import type { Actor, AtlasEntityKind, AttributionLevel, Campaign, Domain, Theater } from "./types";
import { actors } from "./actors";
import { campaigns } from "./campaigns";
import { domains } from "./domains";
import { theaters } from "./theaters";

export type SearchHit = {
  kind: AtlasEntityKind;
  id: string;
  title: string;
  dek: string;
  href: string;
  attribution?: AttributionLevel;
  tags: string[];
};

function hay(parts: Array<string | string[] | undefined>) {
  return parts
    .flatMap((p) => (Array.isArray(p) ? p : p ? [p] : []))
    .join(" ")
    .toLowerCase();
}

export type SearchPack = {
  campaigns: Campaign[];
  actors: Actor[];
  domains: Domain[];
  theaters: Theater[];
};

export type IndexedHit = { hit: SearchHit; q: string };

export function buildSearchIndex(pack: SearchPack): { catalogue: SearchHit[]; indexed: IndexedHit[] } {
  const raw: Array<SearchHit & { _q: string }> = [
    ...pack.campaigns.map((c) => ({
      kind: "campaign" as const,
      id: c.id,
      title: c.title,
      dek: c.dek,
      href: `/campaigns/${c.id}`,
      attribution: c.attribution.level,
      tags: [...c.domains, ...c.theaters, c.status, c.attribution.level],
      _q: hay([
        c.title,
        c.dek,
        c.summary,
        c.mechanism,
        c.attribution.note,
        c.domains,
        c.theaters,
        c.attribution.assigned,
        c.incidents.map((i) => i.what + " " + i.place),
      ]),
    })),
    ...pack.actors.map((a) => ({
      kind: "actor" as const,
      id: a.id,
      title: a.name,
      dek: a.short,
      href: `/actors/${a.id}`,
      tags: [a.kind, ...a.domains, ...a.theaters],
      _q: hay([a.name, a.short, a.summary, a.aliases, a.interests, a.methods]),
    })),
    ...pack.domains.map((d) => ({
      kind: "domain" as const,
      id: d.id,
      title: d.name,
      dek: d.short,
      href: `/domains/${d.id}`,
      tags: [d.id],
      _q: hay([d.name, d.short, d.summary, d.howItWorks, d.whyHardToAttribute, d.typicalInterests]),
    })),
    ...pack.theaters.map((t) => ({
      kind: "theater" as const,
      id: t.id,
      title: t.name,
      dek: t.short,
      href: `/theaters/${t.id}`,
      tags: [t.pressure, ...t.countries],
      _q: hay([t.name, t.short, t.summary, t.region, t.countries, t.whyHere]),
    })),
  ];
  const catalogue: SearchHit[] = raw.map(({ _q, ...hit }) => {
    void _q;
    return hit;
  });
  const indexed: IndexedHit[] = raw.map((row, i) => ({ hit: catalogue[i]!, q: row._q }));
  return { catalogue, indexed };
}

export function runSearch(
  indexed: IndexedHit[],
  catalogue: SearchHit[],
  query: string,
  limit = 20,
): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return catalogue.slice(0, limit);
  const terms = q.split(/\s+/).filter(Boolean);
  const scored = indexed
    .map(({ hit, q: blob }) => {
      let score = 0;
      for (const term of terms) {
        if (hit.title.toLowerCase().includes(term)) score += 8;
        else if (hit.dek.toLowerCase().includes(term)) score += 4;
        else if (blob.includes(term)) score += 2;
        else return null;
      }
      return { hit, score };
    })
    .filter((x): x is { hit: SearchHit; score: number } => Boolean(x))
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.hit);
}

const enSearch = buildSearchIndex({ campaigns, actors, domains, theaters });
export const catalogue = enSearch.catalogue;
export function searchAtlas(query: string, limit = 20): SearchHit[] {
  return runSearch(enSearch.indexed, enSearch.catalogue, query, limit);
}

export const KIND_LABEL: Record<AtlasEntityKind, string> = {
  campaign: "Dossier",
  actor: "Actor",
  domain: "Domain",
  theater: "Theatre",
  census: "Ledger",
};
