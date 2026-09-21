import type { ActorKind, AtlasEntityKind, AttributionLevel, CampaignStatus, Likelihood } from "@/lib/atlas/types";
import type { Locale } from "./locale";

export type UiStrings = {
  skipToContent: string;
  appName: string;
  tagline: string;
  metaDescription: string;
  search: string;
  searchAria: string;
  searchPlaceholder: string;
  searchEmpty: string;
  searchTitle: string;
  searchHint: string;
  openMenu: string;
  menuTitle: string;
  nav: {
    briefing: string;
    dossiers: string;
    domains: string;
    theaters: string;
    actors: string;
    timeline: string;
    doctrine: string;
    method: string;
    census: string;
  };
  sidebarNote: string;
  language: string;
  classification: string;
  edition: string;
  editionStamp: string;
  lastPublished: string;
  versionHistory: string;
  houseRoles: string;
  houseColophon: string;
  homeTitle: string;
  homeDek: string;
  openLedger: string;
  resetCensus: string;
  mappedSeries: string;
  inclusiveSeries: string;
  fieldSites: string;
  openDossiers: string;
  openDoctrine: string;
  theatersHeading: string;
  allTheaters: string;
  watch: string;
  featured: string;
  allN: string;
  domainsHeading: string;
  taxonomy: string;
  readDossier: string;
  openDossier: string;
  present: string;
  bookmarkSave: string;
  bookmarkRemove: string;
  kicker: {
    briefing: string;
    dossier: string;
    actor: string;
    domain: string;
    theater: string;
    ledger: string;
    who: string;
    sequence: string;
    frame: string;
    house: string;
    missing: string;
    geography: string;
    census: string;
  };
  pages: {
    dossiersTitle: string;
    dossiersDek: string;
    domainsTitle: string;
    domainsDek: string;
    theatersTitle: string;
    theatersDek: string;
    actorsTitle: string;
    actorsDek: string;
    timelineTitle: string;
    timelineDek: string;
    doctrineTitle: string;
    methodTitle: string;
    methodRules: string;
    doctrineMethodLead: string;
    doctrineMethodLink: string;
    doctrineMethodTail: string;
    censusTitle: string;
    censusDek: string;
  };
  dossier: {
    attribution: string;
    who: string;
    whoDek: string;
    mechanism: string;
    effects: string;
    incidents: string;
    responses: string;
    domains: string;
    theaters: string;
    sources: string;
    motive: string;
    capability: string;
    record: string;
    counter: string;
  };
  actor: {
    interests: string;
    methods: string;
    appears: string;
    nDossiers: string;
  };
  domain: {
    how: string;
    why: string;
    typical: string;
    dossiers: string;
  };
  theater: {
    whyHere: string;
    countries: string;
    dossiers: string;
    mapAria: string;
  };
  filters: {
    anyGrade: string;
    filterDossiers: string;
    none: string;
    of: string;
  };
  notFound: {
    kicker: string;
    title: string;
    body: string;
    back: string;
  };
  error: {
    title: string;
    fallback: string;
  };
  kind: Record<AtlasEntityKind, string>;
  actorKind: Record<ActorKind, string>;
  status: Record<CampaignStatus, string>;
  pressure: Record<"critical" | "high" | "elevated" | "watch", string>;
  attribution: Record<Likelihood, string>;
};

export const UI: Record<Locale, UiStrings> = {
  en: {
    skipToContent: "Skip to content",
    appName: "Grey Zone Atlas",
    tagline: "Interior campaign",
    metaDescription:
      "An encyclopedia of the interior hybrid war in Europe: mass settlement, counter-legislation, universities, mass media, and public service — with graded attribution, not a politburo chart.",
    search: "Search",
    searchAria: "Search",
    searchPlaceholder: "Search settlement, mosque, Samsam, Brotherhood, DSA…",
    searchEmpty: "No entries match.",
    searchTitle: "Search the atlas",
    searchHint: "Search dossiers, actors, domains, and theatres",
    openMenu: "Open menu",
    menuTitle: "Atlas",
    nav: {
      briefing: "Briefing",
      dossiers: "Dossiers",
      domains: "Domains",
      theaters: "Theatres",
      actors: "Actors",
      timeline: "Timeline",
      doctrine: "Doctrine",
      method: "Method",
      census: "Mosques",
    },
    sidebarNote: "Not an intelligence product. Convergence is not a conspiracy. Attribution is graded.",
    language: "Language",
    classification: "Classification: open source · Not an intelligence product",
    edition: "Edition",
    editionStamp: "Edition {v} · published {when}",
    lastPublished: "Last published {when}",
    versionHistory: "Edition history",
    houseRoles: "owner · writer · producer",
    houseColophon: "Owned, written and produced by AXION NEXUS 21 (AXNX21).",
    homeTitle: "The war inside the house",
    homeDek:
      "{n} dossiers are marked active or ongoing. Convergence of incentives is the default hypothesis. A politburo is a claim that needs a document. Russia is a parasite on this file, not its author.",
    openDossiers: "Open the dossiers",
    openDoctrine: "Why the primitive definition fails",
    openLedger: "Open the mosque ledger",
    resetCensus: "Reset assumptions",
    mappedSeries: "Mapped",
    inclusiveSeries: "Inclusive",
    fieldSites: "{n} sites at this share",
    theatersHeading: "Theatres under pressure",
    allTheaters: "All theatres",
    watch: "Watch",
    featured: "Featured dossiers",
    allN: "All {n}",
    domainsHeading: "Domains",
    taxonomy: "Taxonomy",
    readDossier: "Read dossier",
    openDossier: "Open dossier",
    present: "present",
    bookmarkSave: "Save to reading list",
    bookmarkRemove: "Remove from reading list",
    kicker: {
      briefing: "Briefing",
      dossier: "Dossier",
      actor: "Actor",
      domain: "Domain",
      theater: "Theatre",
      ledger: "Ledger",
      who: "Who",
      sequence: "Sequence",
      frame: "Frame",
      house: "House rules",
      missing: "Missing file",
      geography: "Geography and institutions",
      census: "Sacral count",
    },
    pages: {
      dossiersTitle: "Dossiers",
      dossiersDek:
        "Each file carries a grade, a mechanism, and a 'who has an interest' set. Convergence of incentives is the default. A politburo is a claim that needs a document.",
      domainsTitle: "Domains",
      domainsDek:
        "Settlement, counter-legislation, universities, mass media, public service — then the supporting arms: NGOs, Islamist entry, taboo, street, the supranational lock. A campaign is usually several of these at once.",
      theatersTitle: "Theatres",
      theatersDek:
        "The interior campaign has a map — Malmö, Molenbeek, the Channel — and a set of rooms that are not on the land map: campus, newsroom, Strasbourg, the Berlaymont. Pressure is not only a fence.",
      actorsTitle: "Actors",
      actorsDek:
        "Classes, courts, foundations, Islamist movements, Gulf and Turkish state arms, public-service broadcasters. Inclusion is not a verdict. A politburo is a claim that needs a document. Convergence is the default.",
      timelineTitle: "Timeline",
      timelineDek:
        "From the long march through the institutions to return-hub diplomacy. A spine through the interior campaign, not a complete incident log.",
      doctrineTitle: "Doctrine",
      methodTitle: "Method",
      methodRules: "Rules of the ledger",
      doctrineMethodLead: "House rules for naming a culprit sit on the",
      doctrineMethodLink: "method",
      doctrineMethodTail: "page.",
      censusTitle: "Mosque ledger",
      censusDek:
        "No official number. A mapped band, an inclusive identity, a field share. Denmark as the readable case.",
    },
    dossier: {
      attribution: "Attribution",
      who: "Who has an interest",
      whoDek:
        "Interest is not proof. Each card states a motive, a capability, the record, and a counter — including when the assigned author is only one of the live theories.",
      mechanism: "Mechanism",
      effects: "Effects",
      incidents: "Incidents",
      responses: "Responses",
      domains: "Domains",
      theaters: "Theatres",
      sources: "Sources",
      motive: "Motive",
      capability: "Capability",
      record: "What the record shows",
      counter: "Counter",
    },
    actor: {
      interests: "Interests",
      methods: "Methods",
      appears: "Appears in",
      nDossiers: "{n} dossiers",
    },
    domain: {
      how: "How it is done",
      why: "Why attribution slips",
      typical: "Who typically has an interest",
      dossiers: "Dossiers",
    },
    theater: {
      whyHere: "Why here",
      countries: "Countries in frame",
      dossiers: "Dossiers",
      mapAria: "Pressure map of European theatres",
    },
    filters: {
      anyGrade: "Any grade",
      filterDossiers: "Filter dossiers",
      none: "No dossiers match those filters.",
      of: "{n} of {total}",
    },
    notFound: {
      kicker: "Missing file",
      title: "No such entry",
      body: "That path is not in the atlas. It may have been renamed, or it never existed.",
      back: "Return to the briefing",
    },
    error: {
      title: "Something went wrong",
      fallback: "An unexpected error occurred. Try reloading the page.",
    },
    kind: {
      campaign: "Dossier",
      actor: "Actor",
      domain: "Domain",
      theater: "Theatre",
      census: "Ledger",
    },
    actorKind: {
      state: "state",
      institution: "institution",
      foundation: "foundation",
      movement: "movement",
      network: "network",
      media: "media",
      service: "service",
    },
    status: {
      active: "active",
      ongoing: "ongoing",
      historical: "historical",
      dormant: "dormant",
    },
    pressure: {
      critical: "critical",
      high: "high",
      elevated: "elevated",
      watch: "watch",
    },
    attribution: {
      confirmed: "Confirmed",
      high: "High confidence",
      moderate: "Moderate",
      contested: "Contested",
      unattributed: "Unattributed",
      plausible: "Plausible interest",
      speculative: "Speculative",
    },
  },
  da: {
    skipToContent: "Spring til indhold",
    appName: "Grey Zone Atlas",
    tagline: "Indre kampagne",
    metaDescription:
      "Et leksikon over den indre hybridkrig i Europa: massebosættelse, modlovgivning, universiteter, massemedier og public service — med gradueret attribution, ikke et politbureaukort.",
    search: "Søg",
    searchAria: "Søg",
    searchPlaceholder: "Søg i bosættelse, moské, Samsam, Broderskabet, DSA…",
    searchEmpty: "Ingen træffere.",
    searchTitle: "Søg i atlaset",
    searchHint: "Søg i dossierer, aktører, domæner og teatre",
    openMenu: "Åbn menu",
    menuTitle: "Atlas",
    nav: {
      briefing: "Briefing",
      dossiers: "Dossierer",
      domains: "Domæner",
      theaters: "Teatre",
      actors: "Aktører",
      timeline: "Tidslinje",
      doctrine: "Doktrin",
      method: "Metode",
      census: "Moskéer",
    },
    sidebarNote: "Ikke et efterretningsprodukt. Konvergens er ikke en konspiration. Attribution er gradueret.",
    language: "Sprog",
    classification: "Klassifikation: åbne kilder · Ikke et efterretningsprodukt",
    edition: "Udgave",
    editionStamp: "Udgave {v} · udgivet {when}",
    lastPublished: "Senest udgivet {when}",
    versionHistory: "Udgavehistorik",
    houseRoles: "ejer · forfatter · producent",
    houseColophon: "Ejet, skrevet og produceret af AXION NEXUS 21 (AXNX21).",
    homeTitle: "Krigen inde i huset",
    homeDek:
      "{n} dossierer er markeret som aktive eller i gang. Konvergens af interesser er standardhypotesen. Et politbureau er en påstand, der skal have et dokument. Rusland er en parasit på denne sag, ikke dens forfatter.",
    openDossiers: "Åbn dossiererne",
    openDoctrine: "Hvorfor den primitive definition slår fejl",
    openLedger: "Åbn mosképrotokollen",
    resetCensus: "Nulstil antagelser",
    mappedSeries: "Kortlagt",
    inclusiveSeries: "Inklusivt",
    fieldSites: "{n} steder ved denne andel",
    theatersHeading: "Teatre under pres",
    allTheaters: "Alle teatre",
    watch: "Hold øje",
    featured: "Udvalgte dossierer",
    allN: "Alle {n}",
    domainsHeading: "Domæner",
    taxonomy: "Taksonomi",
    readDossier: "Læs dossier",
    openDossier: "Åbn dossier",
    present: "nu",
    bookmarkSave: "Gem på læseliste",
    bookmarkRemove: "Fjern fra læseliste",
    kicker: {
      briefing: "Briefing",
      dossier: "Dossier",
      actor: "Aktør",
      domain: "Domæne",
      theater: "Teater",
      ledger: "Protokol",
      who: "Hvem",
      sequence: "Rækkefølge",
      frame: "Ramme",
      house: "Husregler",
      missing: "Mangler",
      geography: "Geografi og institutioner",
      census: "Sakral tælling",
    },
    pages: {
      dossiersTitle: "Dossierer",
      dossiersDek:
        "Hver sag bærer en karakter, en mekanisme og et sæt 'hvem har interesse'. Konvergens af interesser er standard. Et politbureau er en påstand, der skal have et dokument.",
      domainsTitle: "Domæner",
      domainsDek:
        "Bosættelse, modlovgivning, universiteter, massemedier, public service — og de understøttende arme: NGO'er, islamistisk indtrængen, tabu, gade, den overnationale lås. En kampagne er som regel flere af disse på én gang.",
      theatersTitle: "Teatre",
      theatersDek:
        "Den indre kampagne har et kort — Malmö, Molenbeek, Kanalen — og et sæt rum, der ikke står på landkortet: campus, redaktion, Strasbourg, Berlaymont. Pres er ikke kun et hegn.",
      actorsTitle: "Aktører",
      actorsDek:
        "Klasser, domstole, fonde, islamistiske bevægelser, golf- og tyrkiske statsarme, public service. Optagelse er ikke en dom. Et politbureau er en påstand, der skal have et dokument. Konvergens er standard.",
      timelineTitle: "Tidslinje",
      timelineDek:
        "Fra den lange march gennem institutionerne til returhub-diplomati. En rygrad gennem den indre kampagne, ikke et komplet hændelsesregister.",
      doctrineTitle: "Doktrin",
      methodTitle: "Metode",
      methodRules: "Protokollens regler",
      doctrineMethodLead: "Husregler for at navngive en skyldig står på",
      doctrineMethodLink: "metode",
      doctrineMethodTail: "siden.",
      censusTitle: "Mosképrotokol",
      censusDek:
        "Intet officielt tal. Et kortlagt bånd, en inklusiv identitet, en feltandel. Danmark som den læsbare sag.",
    },
    dossier: {
      attribution: "Attribution",
      who: "Hvem har interesse",
      whoDek:
        "Interesse er ikke bevis. Hvert kort angiver motiv, kapacitet, sagens spor og et modargument — også når den udpegede ophavsmand kun er én af de levende teorier.",
      mechanism: "Mekanisme",
      effects: "Virkninger",
      incidents: "Hændelser",
      responses: "Svar",
      domains: "Domæner",
      theaters: "Teatre",
      sources: "Kilder",
      motive: "Motiv",
      capability: "Kapacitet",
      record: "Hvad sagen viser",
      counter: "Modargument",
    },
    actor: {
      interests: "Interesser",
      methods: "Metoder",
      appears: "Optræder i",
      nDossiers: "{n} dossierer",
    },
    domain: {
      how: "Sådan gøres det",
      why: "Hvorfor attribution glider",
      typical: "Hvem har typisk interesse",
      dossiers: "Dossierer",
    },
    theater: {
      whyHere: "Hvorfor her",
      countries: "Lande i billedet",
      dossiers: "Dossierer",
      mapAria: "Preskort over europæiske teatre",
    },
    filters: {
      anyGrade: "Alle grader",
      filterDossiers: "Filtrér dossierer",
      none: "Ingen dossierer matcher filtrene.",
      of: "{n} af {total}",
    },
    notFound: {
      kicker: "Mangler",
      title: "Ingen sådan post",
      body: "Den sti er ikke i atlaset. Den kan være omdøbt, eller den har aldrig eksisteret.",
      back: "Tilbage til briefingen",
    },
    error: {
      title: "Noget gik galt",
      fallback: "Der opstod en uventet fejl. Prøv at genindlæse siden.",
    },
    kind: {
      campaign: "Dossier",
      actor: "Aktør",
      domain: "Domæne",
      theater: "Teater",
      census: "Protokol",
    },
    actorKind: {
      state: "stat",
      institution: "institution",
      foundation: "fond",
      movement: "bevægelse",
      network: "netværk",
      media: "medie",
      service: "tjeneste",
    },
    status: {
      active: "aktiv",
      ongoing: "i gang",
      historical: "historisk",
      dormant: "hvilende",
    },
    pressure: {
      critical: "kritisk",
      high: "højt",
      elevated: "forhøjet",
      watch: "overvåg",
    },
    attribution: {
      confirmed: "Bekræftet",
      high: "Høj tillid",
      moderate: "Moderat",
      contested: "Omtvistet",
      unattributed: "Uden ophavsmand",
      plausible: "Tænkelig interesse",
      speculative: "Spekulativ",
    },
  },
};

export function interpolate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? ""));
}

export function uiFor(locale: Locale): UiStrings {
  return UI[locale];
}

export const ATTRIBUTION_LEVELS: AttributionLevel[] = [
  "confirmed",
  "high",
  "moderate",
  "contested",
  "unattributed",
];
