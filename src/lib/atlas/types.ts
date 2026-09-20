export type AttributionLevel =
  | "confirmed"
  | "high"
  | "moderate"
  | "contested"
  | "unattributed";

export type Likelihood = AttributionLevel | "plausible" | "speculative";

export type CampaignStatus = "active" | "ongoing" | "historical" | "dormant";

export type ActorKind =
  | "state"
  | "institution"
  | "foundation"
  | "movement"
  | "network"
  | "media"
  | "service";

export type DomainId =
  | "migration"
  | "lawfare"
  | "university"
  | "media"
  | "public-service"
  | "ngo"
  | "islamist-entry"
  | "taboo"
  | "street"
  | "supranational";

export type TheaterId =
  | "scandinavia"
  | "british-isles"
  | "france"
  | "germany"
  | "low-countries"
  | "mediterranean"
  | "brussels"
  | "legal-europe"
  | "campus"
  | "newsroom"
  | "online";

export type Source = {
  title: string;
  publisher: string;
  date: string;
  url?: string;
};

export type Hypothesis = {
  actorId: string;
  likelihood: Likelihood;
  motive: string;
  capability: string;
  evidence: string;
  counter: string;
};

export type Incident = {
  date: string;
  place: string;
  what: string;
  attribution?: string;
};

export type Actor = {
  id: string;
  name: string;
  short: string;
  kind: ActorKind;
  parentId?: string;
  aliases: string[];
  summary: string;
  interests: string[];
  methods: string[];
  theaters: TheaterId[];
  domains: DomainId[];
};

export type Domain = {
  id: DomainId;
  name: string;
  short: string;
  summary: string;
  howItWorks: string[];
  whyHardToAttribute: string;
  typicalInterests: string;
};

export type Theater = {
  id: TheaterId;
  name: string;
  short: string;
  region: string;
  countries: string[];
  summary: string;
  pressure: "critical" | "high" | "elevated" | "watch";
  whyHere: string;
  map: { x: number; y: number };
};

export type Campaign = {
  id: string;
  title: string;
  dek: string;
  status: CampaignStatus;
  period: { start: string; end?: string };
  domains: DomainId[];
  theaters: TheaterId[];
  attribution: {
    level: AttributionLevel;
    assigned?: string[];
    note: string;
    hypotheses: Hypothesis[];
  };
  summary: string;
  mechanism: string;
  effects: string[];
  incidents: Incident[];
  responses: string[];
  sources: Source[];
  /** Extra search terms: spellings, names, case titles. */
  aliases?: string[];
};

export type TimelineEvent = {
  id: string;
  date: string;
  title: string;
  campaignId?: string;
  domainId?: DomainId;
  theaterId?: TheaterId;
  attribution: AttributionLevel;
  note: string;
};

export type AtlasEntityKind = "campaign" | "actor" | "domain" | "theater" | "census";

export const ATTRIBUTION_LABEL: Record<AttributionLevel, string> = {
  confirmed: "Confirmed",
  high: "High confidence",
  moderate: "Moderate",
  contested: "Contested",
  unattributed: "Unattributed",
};

export const ATTRIBUTION_BLURB: Record<AttributionLevel, string> = {
  confirmed:
    "Statute, treaty text, budget line, court judgment, or an admission with corroboration. The mechanism is on paper.",
  high: "Named in official reports, intelligence assessments, or multi-source investigation. Still not a politburo.",
  moderate:
    "Pattern, funding trail, or a single institutional line. Intent may be unproven; effect is not.",
  contested:
    "More than one credible theory remains live. Inclusion is not a choice of winner.",
  unattributed:
    "The mechanism is real and circulating in Europe. A single sponsor is not established — and may not exist.",
};

export const LIKELIHOOD_LABEL: Record<Likelihood, string> = {
  ...ATTRIBUTION_LABEL,
  plausible: "Plausible interest",
  speculative: "Speculative",
};
