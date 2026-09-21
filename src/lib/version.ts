import type { Locale } from "@/lib/i18n/locale";

/** Editorial clock for the atlas. Copenhagen, not the builder's laptop. */
export const ATLAS_TIME_ZONE = "Europe/Copenhagen";

/** Semver of the published encyclopedia, not the scaffold. Bump when the public edition changes. */
export const ATLAS_VERSION = "0.12.0";

/** Instant this edition was published. ISO-8601 with offset. */
export const ATLAS_PUBLISHED_AT = "2026-09-21T18:14:00+02:00";

export type EditionNote = {
  version: string;
  publishedAt: string;
  note: Record<Locale, string>;
};

export const ATLAS_CHANGELOG: EditionNote[] = [
  {
    version: "0.12.0",
    publishedAt: "2026-09-21T18:14:00+02:00",
    note: {
      en: "Mosque funding ledger: membership as default, Diyanet payroll, Qatari concrete, Iranian mortgage, Saudi/Kuwait gifts, Danish public own-goal.",
      da: "Moskéernes finansieringsprotokol: kontingent som standard, Diyanet-løn, qatarisk beton, iransk pant, saudi/kuwait-gaver, dansk offentligt selvmål.",
    },
  },
  {
    version: "0.11.0",
    publishedAt: "2026-09-21T17:33:00+02:00",
    note: {
      en: "Mosque operative map and purpose taxonomy: salat as occupancy, then the jobs the rooms do.",
      da: "Moskéernes operative kort og formålstaksonomi: salat som belægning, derefter de jobs rummene udfører.",
    },
  },
  {
    version: "0.10.0",
    publishedAt: "2026-09-21T12:36:00+02:00",
    note: {
      en: "Menu dock: locale, light/dark/system theme, AXNX21 house mark.",
      da: "Menudock: sprog, lys/mørk/system-tema, AXNX21-husmærke.",
    },
  },
  {
    version: "0.9.0",
    publishedAt: "2026-09-21T07:21:00+02:00",
    note: {
      en: "House credit: AXION NEXUS 21 (AXNX21) as owner, writer, and producer.",
      da: "Hus-kredit: AXION NEXUS 21 (AXNX21) som ejer, forfatter og producent.",
    },
  },
  {
    version: "0.8.0",
    publishedAt: "2026-09-20T15:24:00+02:00",
    note: {
      en: "First public cut. Version stamp is a publish event, not a build artefact.",
      da: "Første offentlige udgave. Versionsstemplet er en publicering, ikke et byggeartefakt.",
    },
  },
  {
    version: "0.7.0",
    publishedAt: "2026-09-20T13:03:00+02:00",
    note: {
      en: "Site versioning with last-published stamp. Medieforlig dossier: impartiality kept as a sentence, retired as a duty.",
      da: "Udgaveversionering med senest-udgivet-stempel. Medieforlig-dossier: upartiskhed beholdt som sætning, pensioneret som pligt.",
    },
  },
  {
    version: "0.6.0",
    publishedAt: "2026-09-20T12:48:00+02:00",
    note: {
      en: "The Samsam wound: PET/FE source abandonment, Supreme Court, NCND collapse.",
      da: "Samsam-såret: PET/FE-kildesvigt, Højesteret, NCND-kollaps.",
    },
  },
  {
    version: "0.5.0",
    publishedAt: "2026-09-20T11:30:00+02:00",
    note: {
      en: "Mosque census ledger: two identities, 1974 control year, weaponization floors.",
      da: "Mosképrotokollen: to identiteter, 1974-kontrolår, væbningsetager.",
    },
  },
  {
    version: "0.4.0",
    publishedAt: "2026-09-19T18:00:00+02:00",
    note: {
      en: "Danish and English as first-class locales. URL and localStorage.",
      da: "Dansk og engelsk som ligestillede sprog. URL og localStorage.",
    },
  },
];

const MONTHS: Record<Locale, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  da: ["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."],
};

function zoneParts(iso: string) {
  const map: Record<string, string> = {};
  for (const part of new Intl.DateTimeFormat("en-GB", {
    timeZone: ATLAS_TIME_ZONE,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short",
  }).formatToParts(new Date(iso))) {
    if (part.type !== "literal") map[part.type] = part.value;
  }
  return map;
}

/** Locale display of a published instant. Deterministic — same string on server and client. */
export function formatPublishedAt(iso: string, locale: Locale, withTime = true): string {
  const p = zoneParts(iso);
  const year = p.year;
  const month = MONTHS[locale][Math.max(0, Number(p.month) - 1)] ?? p.month;
  const day = String(Number(p.day));
  const zone = p.timeZoneName ?? "CEST";
  if (locale === "da") {
    const date = `${day}. ${month} ${year}`;
    if (!withTime) return date;
    return `${date}, ${p.hour}.${p.minute} ${zone}`;
  }
  const date = `${day} ${month} ${year}`;
  if (!withTime) return date;
  return `${date}, ${p.hour}:${p.minute} ${zone}`;
}

export function formatEditionAsOf(locale: Locale): string {
  return formatPublishedAt(ATLAS_PUBLISHED_AT, locale, false);
}

export function formatEditionPublished(locale: Locale): string {
  return formatPublishedAt(ATLAS_PUBLISHED_AT, locale, true);
}
