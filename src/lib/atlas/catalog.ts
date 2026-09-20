import type { Locale } from "@/lib/i18n/locale";
import { actors as actorsEn, actorById as actorByIdEn } from "./actors";
import {
  campaigns as campaignsEn,
  campaignById as campaignByIdEn,
  campaignsForActor as forActorEn,
  campaignsForDomain as forDomainEn,
  campaignsForTheater as forTheaterEn,
} from "./campaigns";
import { domains as domainsEn, domainById as domainByIdEn } from "./domains";
import { theaters as theatersEn, theaterById as theaterByIdEn } from "./theaters";
import { timeline as timelineEn } from "./timeline";
import {
  ATLAS_AS_OF as asOfEn,
  doctrine as doctrineEn,
  method as methodEn,
  posture as postureEn,
} from "./posture";
import { actors as actorsDa, actorById as actorByIdDa } from "./da/actors";
import {
  campaigns as campaignsDa,
  campaignById as campaignByIdDa,
  campaignsForActor as forActorDa,
  campaignsForDomain as forDomainDa,
  campaignsForTheater as forTheaterDa,
} from "./da/campaigns";
import { domains as domainsDa, domainById as domainByIdDa } from "./da/domains";
import { theaters as theatersDa, theaterById as theaterByIdDa } from "./da/theaters";
import { timeline as timelineDa } from "./da/timeline";
import {
  ATLAS_AS_OF as asOfDa,
  doctrine as doctrineDa,
  method as methodDa,
  posture as postureDa,
} from "./da/posture";
import { buildSearchIndex, runSearch, type SearchHit } from "./search";
import { CENSUS_SITES, censusCopy, type CensusCopy } from "./census";
import type { Actor, Campaign, Domain, Theater, TimelineEvent } from "./types";

export type AtlasPack = {
  locale: Locale;
  asOf: string;
  campaigns: Campaign[];
  campaignById: Record<string, Campaign>;
  actors: Actor[];
  actorById: Record<string, Actor>;
  domains: Domain[];
  domainById: Record<Domain["id"], Domain>;
  theaters: Theater[];
  theaterById: Record<Theater["id"], Theater>;
  timeline: TimelineEvent[];
  posture: typeof postureEn;
  doctrine: typeof doctrineEn;
  method: typeof methodEn;
  census: CensusCopy;
  campaignsForDomain: (id: string) => Campaign[];
  campaignsForTheater: (id: string) => Campaign[];
  campaignsForActor: (id: string) => Campaign[];
  catalogue: SearchHit[];
  searchAtlas: (query: string, limit?: number) => SearchHit[];
};

function pack(args: Omit<AtlasPack, "catalogue" | "searchAtlas">): AtlasPack {
  const search = buildSearchIndex({
    campaigns: args.campaigns,
    actors: args.actors,
    domains: args.domains,
    theaters: args.theaters,
  });
  const ledgerHit: SearchHit = {
    kind: "census",
    id: "mosque-ledger",
    title: args.census.title,
    dek: args.census.dek,
    href: "/census",
    attribution: "high",
    tags: ["mosque", "census", "islamist-entry", "scandinavia"],
  };
  const siteBlob = [
    args.census.title,
    args.census.dek,
    args.census.sitesTitle,
    ...Object.values(args.census.sites).flatMap((s) => [s.name, s.note]),
    ...CENSUS_SITES.map((s) => `${s.city} ${s.id}`),
    "mosque",
    "moské",
    "moskeer",
    "grimhøj",
    "grimhoj",
    "hidayyah",
    "tauba",
    "faruq",
  ]
    .join(" ")
    .toLowerCase();
  const catalogue = [ledgerHit, ...search.catalogue];
  const indexed = [{ hit: ledgerHit, q: siteBlob }, ...search.indexed];
  return {
    ...args,
    catalogue,
    searchAtlas: (query, limit = 20) => runSearch(indexed, catalogue, query, limit),
  };
}

const en = pack({
  locale: "en",
  asOf: asOfEn,
  campaigns: campaignsEn,
  campaignById: campaignByIdEn,
  actors: actorsEn,
  actorById: actorByIdEn,
  domains: domainsEn,
  domainById: domainByIdEn,
  theaters: theatersEn,
  theaterById: theaterByIdEn,
  timeline: timelineEn,
  posture: postureEn,
  doctrine: doctrineEn,
  method: methodEn,
  census: censusCopy("en"),
  campaignsForDomain: forDomainEn,
  campaignsForTheater: forTheaterEn,
  campaignsForActor: forActorEn,
});

const da = pack({
  locale: "da",
  asOf: asOfDa,
  campaigns: campaignsDa,
  campaignById: campaignByIdDa,
  actors: actorsDa,
  actorById: actorByIdDa,
  domains: domainsDa,
  domainById: domainByIdDa,
  theaters: theatersDa,
  theaterById: theaterByIdDa,
  timeline: timelineDa,
  posture: postureDa,
  doctrine: doctrineDa,
  method: methodDa,
  census: censusCopy("da"),
  campaignsForDomain: forDomainDa,
  campaignsForTheater: forTheaterDa,
  campaignsForActor: forActorDa,
});

export function atlasFor(locale: Locale): AtlasPack {
  return locale === "da" ? da : en;
}
