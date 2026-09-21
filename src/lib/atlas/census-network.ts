import type { Likelihood } from "./types";

/**
 * What a mosque is for in the operative network.
 * Prayer is real. It is also occupancy. The other jobs are why the room
 * is infrastructure and not weather.
 */
export const CENSUS_PURPOSE_IDS = [
  "salat",
  "khutba",
  "dawa",
  "school",
  "welfare",
  "family",
  "arbitration",
  "foreign",
  "politics",
  "recruitment",
] as const;

export type CensusPurposeId = (typeof CENSUS_PURPOSE_IDS)[number];

export type CensusGeoId =
  | "copenhagen"
  | "nordsjaelland"
  | "sjaelland"
  | "odense"
  | "aarhus"
  | "aalborg"
  | "trekanten"
  | "vestjylland"
  | "esbjerg"
  | "lolland";

export type CensusGeoNode = {
  id: CensusGeoId;
  /** Schematic Denmark, viewBox 0 0 100 100. */
  x: number;
  y: number;
  /** Field geography of the mapped layer. Sums to CENSUS_DEFAULTS.mapped. Moderate. */
  mapped: number;
  pressure: "critical" | "high" | "elevated" | "watch";
};

/**
 * Working geography of the mapped 185 — not Kühle's unpublished pin map.
 * Capital gravity is the fact. Aarhus and Odense are the named hubs.
 * Grade: moderate as a regional split, confirmed as capital-heavy.
 */
export const CENSUS_GEO: CensusGeoNode[] = [
  { id: "copenhagen", x: 78, y: 58, mapped: 82, pressure: "critical" },
  { id: "nordsjaelland", x: 80, y: 48, mapped: 8, pressure: "elevated" },
  { id: "sjaelland", x: 72, y: 70, mapped: 16, pressure: "high" },
  { id: "lolland", x: 68, y: 84, mapped: 4, pressure: "watch" },
  { id: "odense", x: 54, y: 66, mapped: 14, pressure: "high" },
  { id: "aarhus", x: 48, y: 48, mapped: 24, pressure: "critical" },
  { id: "aalborg", x: 38, y: 22, mapped: 9, pressure: "elevated" },
  { id: "trekanten", x: 42, y: 64, mapped: 12, pressure: "high" },
  { id: "vestjylland", x: 30, y: 44, mapped: 8, pressure: "watch" },
  { id: "esbjerg", x: 26, y: 62, mapped: 8, pressure: "elevated" },
];

export const CENSUS_GEO_TOTAL = CENSUS_GEO.reduce((s, n) => s + n.mapped, 0);

export const CENSUS_PURPOSE_GRADE: Record<CensusPurposeId, Likelihood> = {
  salat: "confirmed",
  khutba: "high",
  dawa: "high",
  school: "confirmed",
  welfare: "high",
  family: "confirmed",
  arbitration: "moderate",
  foreign: "confirmed",
  politics: "high",
  recruitment: "high",
};
