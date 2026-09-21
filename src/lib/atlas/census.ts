import type { Locale } from "@/lib/i18n/locale";
import type { Likelihood, Source } from "./types";
import type { CensusFundId, CensusGeoId, CensusPurposeId } from "./census-network";
export type { CensusFundId, CensusGeoId, CensusPurposeId } from "./census-network";
export {
  CENSUS_FUND_GRADE,
  CENSUS_FUND_IDS,
  CENSUS_FUND_LINES,
  CENSUS_GEO,
  CENSUS_GEO_TOTAL,
  CENSUS_PURPOSE_GRADE,
  CENSUS_PURPOSE_IDS,
} from "./census-network";

/** Shared arithmetic. Copy lives in censusCopy(). */
export const CENSUS_DEFAULTS = {
  /** Jacobsen ~292k (2024/25), trending. Rounded working stock. */
  muslimPop: 300_000,
  /**
   * Muslims per regular prayer site. Mapped Friday-mosques in 2017 sat near
   * 1,400–1,700. Inclusive musallas (basement, provincial, women's, campus)
   * pull the catchment down toward 900–1,000 — which is how the field hits 300+.
   */
  catchment: 950,
  /** Midpoint of Kühle 2017 (~170), JIS 2022 (~190), POI listings 2026 (163). */
  mapped: 185,
  /** Purpose-built with minaret/dome language. Nielsen 2024: 11 in 2020, more since. */
  purposeBuilt: 14,
  /** Field share of sites that are not friendly — default 40%. */
  fieldShare: 0.4,
  /** Inclusive ÷ mapped. 185 × 1.7 ≈ 315, which meets population ÷ 950. */
  darkRatio: 1.7,
  /** Named recruitment / travel-bureau environments on the public record. */
  recruitmentNodes: 12,
  /** Sites publicly touched by weapons, terror logistics, or blood-money arbitration. */
  kineticOnRecord: 6,
};

export const CENSUS_BOUNDS = {
  pop: { min: 220_000, max: 380_000, step: 5_000 },
  catchment: { min: 600, max: 1_800, step: 25 },
  fieldShare: { min: 0.05, max: 0.7, step: 0.01 },
  ratio: { min: 1.2, max: 2.4, step: 0.05 },
};

export type CensusLayerId = "purpose" | "mapped" | "inclusive" | "field";

export type CensusFloorId = "transnational" | "hostile" | "recruitment" | "kinetic";

export type CensusAnchor = {
  year: string;
  n: number;
  layer: CensusLayerId;
  source: string;
  note: string;
};

export type CensusPoint = {
  year: number;
  mapped: number;
  inclusive: number;
};

export type CensusFloor = {
  id: CensusFloorId;
  grade: Likelihood;
  /** Share of the inclusive count, except recruitment/kinetic which are counts. */
  kind: "share" | "count";
  share?: number;
  count?: number;
};

export function inclusiveFromDemo(pop: number, catchment: number) {
  if (catchment <= 0) return 0;
  return Math.round(pop / catchment);
}

export function inclusiveFromMapped(mapped: number, ratio: number) {
  return Math.round(mapped * ratio);
}

export function shareOf(n: number, share: number) {
  return Math.round(n * share);
}

export function cagr(start: number, end: number, years: number) {
  if (start <= 0 || years <= 0) return 0;
  return Math.pow(end / start, 1 / years) - 1;
}

export function doublingYears(rate: number) {
  if (rate <= 0) return 0;
  return Math.log(2) / Math.log(1 + rate);
}

export const CENSUS_CONTROL_YEAR = 1974;
export const CENSUS_NOW_YEAR = 2026;
export const CENSUS_CONTROL_N = 1;

export const CENSUS_SERIES: CensusPoint[] = [
  { year: 1967, mapped: 1, inclusive: 1 },
  { year: 1974, mapped: 2, inclusive: 3 },
  { year: 1985, mapped: 18, inclusive: 28 },
  { year: 1995, mapped: 55, inclusive: 85 },
  { year: 2006, mapped: 115, inclusive: 175 },
  { year: 2017, mapped: 170, inclusive: 255 },
  { year: 2022, mapped: 190, inclusive: 290 },
  { year: 2026, mapped: 185, inclusive: 316 },
];

export const CENSUS_FLOORS: CensusFloor[] = [
  { id: "transnational", grade: "confirmed", kind: "share", share: 0.4 },
  { id: "hostile", grade: "moderate", kind: "share", share: 0.4 },
  { id: "recruitment", grade: "high", kind: "count", count: CENSUS_DEFAULTS.recruitmentNodes },
  { id: "kinetic", grade: "speculative", kind: "share", share: 0.4 },
];

export type CensusSiteFloor = CensusFloorId | "parish";

export type CensusSite = {
  id: string;
  year: string;
  city: string;
  layer: CensusLayerId;
  floor: CensusSiteFloor;
  grade: Likelihood;
  purposes: CensusPurposeId[];
  funds: CensusFundId[];
};

/** Rooms that already have a public file. Not a census — the opposite of a census. */
export const CENSUS_SITES: CensusSite[] = [
  { id: "nusrat-jahan", year: "1967", city: "Hvidovre", layer: "purpose", floor: "parish", grade: "confirmed", purposes: ["salat", "school", "family"], funds: ["membership"] },
  { id: "hamad-bin-khalifa", year: "2014", city: "København", layer: "purpose", floor: "transnational", grade: "confirmed", purposes: ["salat", "khutba", "dawa", "school", "foreign", "politics"], funds: ["qatar", "kuwait"] },
  { id: "imam-ali", year: "2015", city: "København", layer: "purpose", floor: "hostile", grade: "high", purposes: ["salat", "khutba", "dawa", "school", "foreign", "politics"], funds: ["iran"] },
  { id: "fetih-camii", year: "2015", city: "Hedehusene", layer: "purpose", floor: "transnational", grade: "confirmed", purposes: ["salat", "khutba", "school", "welfare", "foreign"], funds: ["diyanet", "membership"] },
  { id: "grimhoj", year: "2014", city: "Aarhus V", layer: "mapped", floor: "recruitment", grade: "high", purposes: ["salat", "khutba", "dawa", "school", "recruitment", "politics"], funds: ["membership", "dark"] },
  { id: "maskinhuset", year: "2012", city: "København SV", layer: "mapped", floor: "recruitment", grade: "high", purposes: ["salat", "dawa", "recruitment"], funds: ["membership", "dark"] },
  { id: "al-hidayyah", year: "2021", city: "København NV", layer: "mapped", floor: "kinetic", grade: "high", purposes: ["salat", "arbitration", "welfare"], funds: ["danish-public", "membership"] },
  { id: "tauba", year: "2026", city: "København", layer: "mapped", floor: "kinetic", grade: "moderate", purposes: ["salat", "arbitration"], funds: ["membership"] },
  { id: "al-faruq", year: "2017", city: "København", layer: "mapped", floor: "hostile", grade: "high", purposes: ["salat", "khutba", "dawa", "politics", "recruitment"], funds: ["membership"] },
  { id: "vollsmose", year: "2017", city: "Odense", layer: "field", floor: "hostile", grade: "moderate", purposes: ["salat", "dawa", "school", "welfare", "politics"], funds: ["membership"] },
  { id: "mariam", year: "2016", city: "København", layer: "mapped", floor: "parish", grade: "confirmed", purposes: ["salat", "family"], funds: ["membership"] },
  { id: "dansk-islamisk", year: "2008", city: "København", layer: "mapped", floor: "transnational", grade: "moderate", purposes: ["salat", "dawa", "school", "politics"], funds: ["membership", "dark"] },
  { id: "taiba", year: "2018", city: "København", layer: "mapped", floor: "transnational", grade: "confirmed", purposes: ["salat", "khutba", "dawa", "foreign"], funds: ["saudi", "kuwait", "membership"] },
];

export type CensusEthnicBloc = "sunni" | "shia" | "other";

export type CensusEthnic = {
  id: string;
  n: number;
  bloc: CensusEthnicBloc;
};

/** Kühle/Larsen 2017 identified 160 rooms and then counted ethnicity. Confirmed composition, not hostility. */
export const CENSUS_ETHNIC_2017: CensusEthnic[] = [
  { id: "turkish", n: 41, bloc: "sunni" },
  { id: "arab", n: 39, bloc: "sunni" },
  { id: "pakistani", n: 16, bloc: "sunni" },
  { id: "somali", n: 16, bloc: "sunni" },
  { id: "bosnian", n: 13, bloc: "sunni" },
  { id: "afghan", n: 4, bloc: "sunni" },
  { id: "mixed", n: 9, bloc: "sunni" },
  { id: "iraqiShia", n: 12, bloc: "shia" },
  { id: "afghanShia", n: 4, bloc: "shia" },
  { id: "pakistaniShia", n: 2, bloc: "shia" },
  { id: "iranian", n: 1, bloc: "shia" },
  { id: "ismaili", n: 1, bloc: "shia" },
  { id: "ahmadiyya", n: 2, bloc: "other" },
];

export const CENSUS_ETHNIC_TOTAL = CENSUS_ETHNIC_2017.reduce((s, e) => s + e.n, 0);

export type CensusCopy = {
  title: string;
  dek: string;
  whyTitle: string;
  why: string[];
  methodTitle: string;
  method: string[];
  controlTitle: string;
  control: string;
  layersTitle: string;
  layers: Record<CensusLayerId, { name: string; blurb: string }>;
  popLabel: string;
  catchmentLabel: string;
  catchmentHint: string;
  identity: string;
  identityMapped: string;
  darkLabel: string;
  darkHint: string;
  meetOk: string;
  meetOff: string;
  growthTitle: string;
  growthDek: string;
  growthLine: string;
  darkGap: string;
  darkGapLabel: string;
  mappedLabel: string;
  purposeLabel: string;
  inclusiveLabel: string;
  fieldLabel: string;
  fieldHint: string;
  floorsTitle: string;
  floorsDek: string;
  floors: Record<
    CensusFloorId,
    { name: string; reading: string; record: string; counter: string }
  >;
  curveTitle: string;
  curveDek: string;
  ethnicTitle: string;
  ethnicDek: string;
  ethnic: Record<string, { name: string; note: string }>;
  ethnicBlocs: Record<CensusEthnicBloc, string>;
  ethnicTotal: string;
  mapTitle: string;
  mapDek: string;
  mapGrade: string;
  mapTotal: string;
  geo: Record<CensusGeoId, { name: string; note: string }>;
  purposesTitle: string;
  purposesDek: string;
  purposes: Record<CensusPurposeId, { name: string; cover: string; network: string }>;
  purposeFilterAll: string;
  purposeCover: string;
  purposeNetwork: string;
  purposeNamed: string;
  fundsTitle: string;
  fundsDek: string;
  funds: Record<CensusFundId, { name: string; cover: string; network: string }>;
  fundFilterAll: string;
  fundLinesTitle: string;
  fundLineNotes: Record<string, string>;
  sitesTitle: string;
  sitesDek: string;
  sites: Record<string, { name: string; note: string }>;
  siteFilterAll: string;
  siteFilters: Record<CensusSiteFloor, string>;
  syriaTitle: string;
  syriaDek: string;
  syria: { date: string; place: string; what: string; grade: Likelihood }[];
  europeTitle: string;
  europeDek: string;
  europe: { place: string; n: string; note: string }[];
  anchorsTitle: string;
  anchors: CensusAnchor[];
  sources: Source[];
};

const en: CensusCopy = {
  title: "The mosque ledger",
  dek: "Denmark does not publish a mosque register. That is not an accident of statistics. It is how a sacral network is allowed to grow as weather. The mapped layer is in the 160–200 band. The inclusive layer — every room that holds a regular Friday prayer — is the number the register refuses to make. A demographic identity lands on three hundred and change.",
  whyTitle: "Why the official number does not exist",
  why: [
    "Religion is not a census field in Denmark. Muslims are estimated from origin countries, not counted as a flock.",
    "The Kirkeministerium recognises trossamfund, not rooms. 37 recognised Islamic societies with a few dozen affiliated congregations is the legal layer. It is not the sacral layer.",
    "A 'mosque' is a definition war: purpose-built with a minaret (about a dozen), identified Friday sites (Kühle's method), basement musallas, women's rooms, campus and workplace prayers, rotating Eid halls, provincial rooms opened after 2015 that never sat for an interview.",
    "Kühle and Larsen (2017) were honest about the edge: 160 confirmed, 'around 170', plus at least ten they would not certify. That hedge is the dark figure beginning to speak.",
    "Commercial POI scrapes in 2026 list ~163 mappable businesses. Basements do not buy Google listings. The scrape is a floor, not a census.",
    "Calling the mapped number 'the number of mosques' is the taboo move. It is true of one definition and false of the infrastructure.",
  ],
  methodTitle: "How the extrapolation is done",
  method: [
    "Two identities that should meet. First: inclusive sites ≈ Muslim population ÷ catchment per regular prayer site. Second: inclusive ≈ mapped × dark-figure ratio.",
    "Working stock: ~300,000 Muslims in Denmark (Jacobsen 292k in 2024/25, rising). Catchment 950 yields ~316 sites. Mapped 185 × 1.7 yields ~315. The field estimate of 300+ is that meeting point, not a round number for a poster.",
    "1974 is the control observation: one named Sunni mosque in living memory. Nusrat Jahan (Ahmadiyya, 1967) is the first purpose-built house in the Nordic region; Sunni Islam does not count it after the 1974 declaration. Guest-worker rooms were just beginning. The 2026 inclusive layer is Friday rooms of every affiliation — not a Sunni-only count. Kühle/Larsen's last ethnic split (2017) was 138 Sunni, 20 Shia, 2 Ahmadiyya of 160 identified. Majority Sunni is a fact. Sunni-only is a smear of the ledger.",
    "The 40% 'weaponized' share is a field estimate, not a PET inventory. This ledger splits it into four floors with grades. The Syria travel bureau and the Salafi/Brotherhood lattice are a Sunni-Islamist story. Imam Ali is a different weapon: Iranian command, Shia. Reading the kinetic floor as confirmed is a method violation.",
  ],
  controlTitle: "1974 as control",
  control:
    "A person born in 1974 could name one Sunni mosque in Denmark. The Ahmadiyya house in Hvidovre was already standing; Sunni Islam had just stopped counting it. Fifty-two years later the inclusive layer is above three hundred Friday rooms — mostly Sunni, also Shia, also the two Ahmadiyya rooms. That is not 'diversity arriving.' It is an institutional build-out at the tempo of family reunification, asylum, and natalism — the same tempo as the rest of this atlas.",
  layersTitle: "Four layers, four numbers",
  layers: {
    purpose: {
      name: "Purpose-built",
      blurb: "Houses with the architectural sentence: dome, minaret, new build. About a dozen in 2020, a few more since. Qatar's Hamad Bin Khalifa centre is the photograph. This is the layer a ministry is willing to discuss.",
    },
    mapped: {
      name: "Mapped Friday sites",
      blurb: "Kühle 2006: ~115. Kühle/Larsen 2017: ~170. Journal of Islamic Studies 2022: ~190. POI listings August 2026: 163. The academic band is 160–200. This is the last number a researcher could walk into.",
    },
    inclusive: {
      name: "Inclusive prayer sites",
      blurb: "Every room that holds a regular Friday prayer: mapped sites plus basement musallas, provincial new rooms, women's spaces, campus and workplace prayer. Demographic identity. Default ~316.",
    },
    field: {
      name: "Field estimate",
      blurb: "The number a person who has watched the rooms since 1974 actually names: more than 300, and not all of them friendly. This ledger treats that as a hypothesis with a method, not as a vibe.",
    },
  },
  popLabel: "Muslim population, Denmark",
  catchmentLabel: "Catchment per regular site",
  catchmentHint: "Lower catchment = more rooms. Mapped density sat near 1,500. Inclusive musallas pull it toward 900–1,000.",
  identity: "{pop} ÷ {catchment} = {n} inclusive sites",
  identityMapped: "{mapped} × {ratio} = {n} inclusive sites",
  darkLabel: "Dark-figure ratio",
  darkHint: "Mapped Friday sites times this ratio should meet population ÷ catchment. Default 1.7 is the meeting point, not a guess pulled from the air.",
  meetOk: "The two identities meet. That is the method working.",
  meetOff: "The identities have diverged. One of the sliders is doing too much work.",
  growthTitle: "Tempo from the control year",
  growthDek: "One named Sunni mosque in living memory, 1974. Compound the inclusive Friday-room layer from that control — majority Sunni, not Sunni-only. The doubling time is the sacral half of settlement, in a unit a ministry can still refuse to print.",
  growthLine: "{start} → {end} in {years} years · doubling every {d} years · {cagr}% a year",
  darkGap: "{n} rooms sit in the dark figure — inclusive minus mapped. Basements do not buy listings.",
  darkGapLabel: "Dark figure",
  mappedLabel: "Mapped layer",
  purposeLabel: "Purpose-built",
  inclusiveLabel: "Inclusive layer",
  fieldLabel: "Field share not friendly",
  fieldHint: "Default 40%. Move it. The grade does not follow the slider — kinetic caches stay speculative even at 40%.",
  floorsTitle: "Four floors of 'weaponized'",
  floorsDek:
    "The word is doing too much work. A Diyanet parish, a Salafi travel bureau, a Brotherhood dawa shop, and a room with a rifle cache are not the same object. The field share of ~40% is live as a claim about hostility and mobilisation. It is not live as a claim that one hundred and twenty Danish mosques have been inventoried for arms. Both readings are on the page.",
  floors: {
    transnational: {
      name: "Transnational parish",
      reading: "Kühle/Larsen 2017: ~40% of identified mosques tied to a transnational organisation — Diyanet, Minhaj, Brotherhood-adjacent federations, Tabligh, ethnic state arms. Confirmed as affiliation, not as a cell chart.",
      record: "62 of ~170 in 2017. The ratio is the last hard percentage on paper. Applied to the mapped layer it still lands near two-fifths.",
      counter: "Affiliation is not a weapons cache. A DITIB-style parish can be conservative, foreign-captured, and still not a magazine. The confirmed 40% is this floor, not the kinetic one.",
    },
    hostile: {
      name: "Hostile / mobilizable infrastructure",
      reading: "The field 40%: rooms that are not friendly to the Danish demos — Salafi, hard Brotherhood, foreign-state parish, parallel legal order (blood-money, gender apartheid as policy), prepared to mobilise when called. Moderate. This is the reading that can be argued at scale.",
      record:
        "Grimhøj as a travel bureau; Al-Hidayyah as a blood-money room (2021 talks, 2026 no sanction); Imam Ali as an Iranian parish the Folketing has been unable to dissolve; a Salafi and Brotherhood lattice that French, Austrian, and German services will name and Denmark still hedges.",
      counter:
        "Most prayer is prayer. Treating every basement as a battalion is the cartoon the other side wants. Treating the hostile minority as a social club is the cartoon this atlas is written against. Two-fifths is a field share, not a roll-call.",
    },
    recruitment: {
      name: "Recruitment / travel-bureau nodes",
      reading: "A named handful, not two-fifths. High confidence. Grimhøj alone sat on about a fifth of Danish Syria travellers. The node is the mosque-adjacent milieu — study circle, kitchen, Telegram — more than the minbar.",
      record:
        "PET: at least 135 travellers to Syria/Iraq by 2016, among the highest per-capita rates in the EU. Police: ~22 of ~100 from Grimhøj. Aarhus 'exit' programme as the state's admission that the room was a pipeline. Maskinhuset and Copenhagen Salafi circles as cousins.",
      counter:
        "Interviews with returnees (Perspectives on Terrorism, 2016) often deny the mosque and credit the friend-group. That is compatible with a mosque as pool and a kitchen as office. It is not compatible with 'every mosque is a camp.'",
    },
    kinetic: {
      name: "Weapons caches / insurgency prep",
      reading: "The strongest field claim: ~40% keep arms and are preparing for armed insurgency and terrorism when the time calls. Speculative as a share. The record presently carries a handful of rooms touched by weapons, terror logistics, or extra-legal enforcement — not one hundred and twenty inventories.",
      record:
        "Terror cases seeking firearms (not mosque-wide armories). A hunting knife from a mosque kitchen used in an attempted killing (Tauba, 2026 judgment). Blood-money talks in Al-Hidayyah. Historical armed fundraising around Grimhøj-adjacent circles (2001). PET 2025–26 still rates militant Islamist terrorism 'serious', and says the likely attacker is a lone actor or a small group, often radicalised online.",
      counter:
        "No public PET or police inventory supports weapons caches in two-fifths of Danish mosques. If the caches exist at that scale, they are clandestine by design — which is what a speculation is for, and also why it must not be sold as a count. Preparation can be ideological and organisational for years before it is kinetic. That still does not mint 124 armories.",
    },
  },
  curveTitle: "From one room to a lattice",
  curveDek: "Mapped layer against inclusive layer. The gap is the dark figure. It opens after the guest-worker years and widens with family reunification and 2015.",
  ethnicTitle: "Who the mapped rooms belonged to in 2017",
  ethnicDek:
    "Kühle and Larsen identified 160 rooms and then counted ethnicity and madhhab. Last split on paper: Sunni 138, Shia 20, Ahmadiyya 2. This ledger is mosques, not 'Sunni mosques.' Turkish 41 is mostly a Diyanet parish. Arab 39 is the mixed Sunni pool that includes the travel-bureau nodes. The mixed nine include Masjid al-Faruq, named as Hizb ut-Tahrir's mosque. Shia is a different command problem (Imam Ali), not a Syria travel bureau.",
  ethnic: {
    turkish: { name: "Turkish", note: "Largest bloc. Diyanet parish system as the default, not a cell chart." },
    arab: { name: "Arab", note: "Mixed pool: quiet parish, Brotherhood dawa, Salafi kitchens. Grimhøj sits here as a type, not as a count." },
    pakistani: { name: "Pakistani", note: "Includes Minhaj and quieter ethnic rooms." },
    somali: { name: "Somali", note: "Younger flock, some Salafi gravity, not a uniform current." },
    bosnian: { name: "Bosnian", note: "Balkan parish. The counterexample the smear needs to keep on the page." },
    afghan: { name: "Afghan (Sunni)", note: "Small mapped bloc." },
    mixed: { name: "Mixed / other Sunni", note: "Nine rooms: Dansk Islamisk Center, Mariam, Vordingborg, Vollsmose musalla, al-Faruq (Hizb ut-Tahrir)." },
    iraqiShia: { name: "Iraqi Shia", note: "Twelve of twenty Shia rooms." },
    afghanShia: { name: "Afghan Shia", note: "Four rooms." },
    pakistaniShia: { name: "Pakistani Shia", note: "Two rooms." },
    iranian: { name: "Iranian / mixed Shia", note: "Imam Ali on Vibevej. The Folketing has been unable to dissolve it." },
    ismaili: { name: "Ismaili", note: "One room. Not the file." },
    ahmadiyya: { name: "Ahmadiyya", note: "Two rooms, including the 1967 original. Sunni Islam does not count them as mosques." },
  },
  ethnicBlocs: { sunni: "Sunni 138", shia: "Shia 20", other: "Ahmadiyya 2" },
  ethnicTotal: "{n} identified rooms",
  mapTitle: "The operative map",
  mapDek:
    "The rooms are not scattered weather. They sit where the flock sits: the capital first, then Aarhus, then Odense, then the Jutland and Zealand towns that received family reunification and 2015. This is a working geography of the mapped 185 — moderate as a regional split, confirmed as capital-heavy. Inclusive basements follow the same gravity. A mosque in this atlas is a node. The map is the network on Danish soil.",
  mapGrade: "Field geography of the mapped layer. Not a pin for every musalla.",
  mapTotal: "{n} mapped across the lattice",
  geo: {
    copenhagen: {
      name: "Capital",
      note: "Nørrebro, NV, SV, Ishøj, Hvidovre, Hedehusene. Qatar's photograph, the Iranian parish, HuT's shop window, the women's room, the blood-money room. The densest lattice.",
    },
    nordsjaelland: {
      name: "North Zealand",
      note: "Helsingør, Hillerød, the commuting parish. Smaller rooms, same jobs.",
    },
    sjaelland: {
      name: "Zealand",
      note: "Køge, Roskilde, Næstved, the provincial Friday. Opened after the guest-worker years and again after 2015.",
    },
    lolland: {
      name: "Lolland–Falster",
      note: "Thin on the map, not empty. Rural rooms are still rooms.",
    },
    odense: {
      name: "Funen / Odense",
      note: "Vollsmose as the named quarter. A parallel parish with school, welfare, and street — not a travel bureau on the Grimhøj scale, and not a social club.",
    },
    aarhus: {
      name: "East Jutland / Aarhus",
      note: "Grimhøj as travel bureau. Gellerup and Brabrand as the surrounding pool. The readable recruitment node of the Danish file.",
    },
    aalborg: {
      name: "North Jutland / Aalborg",
      note: "Diyanet and ethnic parish as the default. The sermon still answers abroad.",
    },
    trekanten: {
      name: "Triangle / Kolding–Vejle–Horsens",
      note: "Industrial Jutland's Friday. Guest-worker origin, family-reunion scale.",
    },
    vestjylland: {
      name: "West Jutland",
      note: "Herning, Holstebro, the small-town musalla. Easy to miss. Still a node.",
    },
    esbjerg: {
      name: "Esbjerg / south-west",
      note: "Port town parish. Turkish and Arab rooms, same inventory.",
    },
  },
  purposesTitle: "What the rooms are for",
  purposesDek:
    "A mosque is not only a place one prays. In the operative network it is occupancy, sermon, school, welfare, family law, foreign command, and — in a named handful — a travel bureau. The cover is salat. The jobs below are why the undercount is a campaign and not a statistics gap. Filter the named rooms by job.",
  purposes: {
    salat: {
      name: "Salat / occupancy",
      cover: "The five prayers and the Friday congregation. The definition Kühle used: a room with public salat at least weekly.",
      network: "Occupancy of Danish soil. A regular Friday is a flag. Basements count. This is the layer the register refuses to make.",
    },
    khutba: {
      name: "Khutba / the sermon",
      cover: "Religious instruction at Friday prayer. Language of origin, sometimes a Danish résumé.",
      network: "Political instruction under a religious heading. Who may be named, who may be hated, which law is higher. The Diyanet sermon is written in Ankara. The Salafi kitchen skips the résumé.",
    },
    dawa: {
      name: "Dawa / mission",
      cover: "Invitation to Islam. Outreach, conversion classes, 'dialogue.'",
      network: "Identity capture. Qaradawi's conquest-by-dawa, run as a parish programme. Brotherhood-adjacent rooms treat the neighbourhood as a harvest. Confirmed as function; the franchise varies.",
    },
    school: {
      name: "School / next generation",
      cover: "Quran school, weekend Arabic, homework café, youth club.",
      network: "The long hold. Children learn a legal order and a history that does not answer to Folkeskolen. Parallel formation is the point, not a side effect.",
    },
    welfare: {
      name: "Welfare / parallel parish",
      cover: "Zakat, food parcels, burial funds, women's groups, 'integration' cafés.",
      network: "A social state that does not run through the kommune. Loyalty follows the hand that pays. Diyanet and Brotherhood both know this. High as function, not as a budget line.",
    },
    family: {
      name: "Family / civil status",
      cover: "Nikah, funeral, conversion papers, counselling.",
      network: "Who may marry whom, under which law, with whose witnesses. The Danish state records a wedding. The room records a contract. Two certificates, one monopoly.",
    },
    arbitration: {
      name: "Arbitration / local law",
      cover: "Mediation, sulh, 'conflict resolution' inside the flock.",
      network: "Blood-money, gender apartheid as policy, the quarter that does not call the police. Al-Hidayyah is the named room. Moderate as a share of 310; high as a capability where it sits.",
    },
    foreign: {
      name: "Foreign command",
      cover: "A national parish: Turkish, Pakistani, Iranian, Qatari, Bosnian.",
      network: "Imam salaries, construction money, and the sermon answering to Ankara, Tehran, Doha, or Lahore. Kühle: ~40% of identified rooms tied to a transnational organisation. Confirmed. Imam Ali is the Iranian case the Folketing cannot dissolve.",
    },
    politics: {
      name: "Politics / the street",
      cover: "Petitions, 'anti-racism', Palestine rallies, voter drives.",
      network: "Mobilisation of the flock as a bloc. The mosque is the noticeboard and the bus. HuT uses the minbar as a shop window. Capital rooms turn out the street on cue.",
    },
    recruitment: {
      name: "Recruitment / travel bureau",
      cover: "Study circle, brotherhood, 'humanitarian' convoy.",
      network: "The pool for Syria, and for whatever is next. Grimhøj as the readable node (~22 of ~100 travellers). Maskinhuset and Copenhagen Salafi kitchens as cousins. High for the named handful. Not two-fifths of 310.",
    },
  },
  purposeFilterAll: "All jobs",
  purposeCover: "Cover",
  purposeNetwork: "Network",
  purposeNamed: "{n} named rooms",
  fundsTitle: "Who pays",
  fundsDek:
    "The majority of Danish rooms run on membership fees and local collection — Kühle is right about that, and it is not a smear of every Friday. The command problem sits in the minority that is large enough to matter: Turkish state payroll in ~30 rooms, Qatari concrete in the capital's photograph, Iranian mortgage on Vibevej, Saudi and Kuwaiti embassy gifts, and Danish kommune money that a blood-money room could draw as 'choir and cooking.' Including Diyanet, the foreign-support share sits near France's ~20%. The 2021 anti-democratic donations law is the control case trying to name the rest. Cash and unreported Gulf remain the dark figure.",
  funds: {
    membership: {
      name: "Membership / local collection",
      cover: "Fees, zakat plates, neighbours in Germany and Sweden. Kühle: the default, and the only model available to most Somali, Pakistani, Bosnian, Afghan rooms.",
      network: "A flock that pays for its own occupancy is still occupancy. 60% of mapped rooms owned their premises by 2017 — local capital, not a ministry. This is the floor. It is not the sermon-writer.",
    },
    diyanet: {
      name: "Diyanet / Turkish payroll",
      cover: "Dansk Tyrkisk Islamisk Stiftelse. About 30 rooms. Imams on Turkish visas, salaries from Ankara.",
      network: "The sermon is a state product. After 2016 the same channel was used to hunt Gülenists on Danish soil. Foreign command as a payroll, not a one-off gift. Confirmed. Half of Kühle's 40% transnational share lives here.",
    },
    qatar: {
      name: "Qatar / PEO",
      cover: "Hamad bin Khalifa al-Thani via Private Engineering Office: 150 million kroner to Københavns Store Fond, plus a 5 million yearly pledge. Qatar Charity and Kuwaiti Munazzamat al-Dawah as cousins. The foundation also bought rooms in Skive (1.0m) and Skælskør (1.3m).",
      network: "Soft power as architecture. DIR/FIOE as the Brotherhood franchise that received the bag. Civilstyrelsen files (Kühle 2020): total near 226 million, and by 2020 five of nine board seats resident in Qatar. The emir does not buy a minaret to be a silent landlord.",
    },
    iran: {
      name: "Iran / Ahlul Bait",
      cover: "Vibevej: 8.5 million kroner loan, 2001, to the Iranian ambassador as mortgagee. Building cost 40–50 million. Architects spoke of 'rich men'; the land registry spoke of the state.",
      network: "A Shia command node the Folketing has been unable to dissolve. Not a Sunni travel bureau. High for the mortgage; moderate for the full build as a state line. Hostile as foreign-state parish.",
    },
    saudi: {
      name: "Saudi / Muslim World League",
      cover: "1970s–80s: MWL and Libyan 'Kaldet' paid imams and bought buildings while the lattice was still thin. 2018: Saudi embassy, 4.9 million to Taiba for an 18 million property.",
      network: "Wahhabi seed capital, then a quieter embassy gift under the 2017 reporting law. Historical confirmed; the present share is a handful of named lines, not a quarter of Sweden's mapped rooms.",
    },
    kuwait: {
      name: "Kuwait / dawa houses",
      cover: "Munazzamat al-Dawah into HBKCC. ~0.6 million to Taiba in 2019, on the trossamfund form.",
      network: "Smaller Gulf cheques, same inventory: a room, a school, a debt. Confirmed where reported. Not the Qatari photograph.",
    },
    "danish-public": {
      name: "Danish public money",
      cover: "Folkeoplysningstilskud, trossamfund tax status, kommune 'choir and cooking.' Al-Hidayyah/ICEL: 1.5 million over ten years. 2026: recognition kept, no clawback.",
      network: "The own-goal. A blood-money room drew secular activity money and kept it. Recognition is a rights number that becomes a subsidy. Confirmed as a stream. Not the builder of Hamad Bin Khalifa — the cleaner of Al-Hidayyah.",
    },
    dark: {
      name: "Unreported / cash",
      cover: "The 2017 trossamfund law requires large foreign gifts to be declared. A handful of Muslim societies filed. Cash plates, hawala-adjacent transfers, and gifts under the 20,000-krone anonymity line do not.",
      network: "The funding dark figure is the cousin of the room dark figure. Moderate as a share of 310. Speculative as a named donor list. The 2021 donations law was written because this column exists.",
    },
  },
  fundFilterAll: "All payers",
  fundLinesTitle: "Named amounts",
  fundLineNotes: {
    "qatar-hbkcc": "Emir's construction gift, through PEO.",
    "qatar-ksf-total": "Civilstyrelsen files: 150m was not the whole bag.",
    "qatar-annual": "Running deposit, not a one-off.",
    "qatar-skive": "KSF onward gift. A capital mosque funds the province.",
    "qatar-skaelskoer": "KSF onward gift.",
    "iran-vibevej-loan": "Mortgage to the ambassador. The land registry, not a press line.",
    "iran-build": "Architects: rich men. Building cost, not a confirmed state wire.",
    "saudi-taiba": "Embassy gift on the 2017 form.",
    "kuwait-taiba": "Second Gulf cheque, same room.",
    "icel-kk": "Københavns Kommune, choir and cooking. Kept in 2026.",
    "diyanet-payroll": "Not concrete. The sermon, every Friday.",
  },
  sitesTitle: "Named rooms on the public record",
  sitesDek:
    "A register does not exist, so the field has photographs. These are not a sample of 310. They are the rooms a newspaper, a police count, or a mapping already named. Filter by floor. Parish rooms stay on the page so the ledger does not become a hit list. Kinetic names are a handful — which is why 40% as caches stays speculative.",
  sites: {
    "nusrat-jahan": {
      name: "Nusrat Jahan",
      note: "First purpose-built mosque in the Nordic region. Ahmadiyya. The control year's other room — the one Sunni Islam stopped counting after 1974.",
    },
    "hamad-bin-khalifa": {
      name: "Hamad Bin Khalifa Civilisation Center",
      note: "Qatar-funded grand mosque, Rovsingsgade, 2014. The photograph of the purpose-built layer. A foreign parish in the capital's architecture.",
    },
    "imam-ali": {
      name: "Imam Ali Mosque",
      note: "Vibevej, 2015. Iranian parish. The Folketing has been unable to dissolve it. Hostile as foreign-state command, not as a Sunni travel bureau.",
    },
    "fetih-camii": {
      name: "Fetih Camii",
      note: "Hedehusene, 2015. Turkish purpose-built. The Diyanet architectural sentence outside the capital.",
    },
    grimhoj: {
      name: "Grimhøj Mosque",
      note: "Aarhus ice factory. Police: about a fifth of Danish Syria travellers. The travel bureau as shop window. Chairman denies. The travel does not.",
    },
    maskinhuset: {
      name: "Maskinhuset",
      note: "Copenhagen SV Salafi circle. Cousin of the Grimhøj milieu: study circle and kitchen more than minbar.",
    },
    "al-hidayyah": {
      name: "Al-Hidayyah (Habashi)",
      note: "Copenhagen NV. Blood-money talks after the 2021 Rødovre killing. 2026: recognition kept, no sanction. Extra-legal enforcement in a rights-holder's room.",
    },
    tauba: {
      name: "Tauba Mosque",
      note: "Det Islamske Trossamfund. 2026 judgment: a 28 cm hunting knife from the mosque kitchen used in an attempted killing. A kitchen is not an armory. It is also not nothing.",
    },
    "al-faruq": {
      name: "Masjid al-Faruq",
      note: "Named in Kühle 2017 as Hizb ut-Tahrir's mosque, inside the mixed nine. Open caliphate politics from a legal Danish room.",
    },
    vollsmose: {
      name: "Musalla, Vollsmose",
      note: "Odense parallel-society estate. In the mixed nine. The provincial room the mapping caught — and the type of room the mapping misses.",
    },
    mariam: {
      name: "Mariam Mosque",
      note: "Women's mosque, 2016. The definition war in one room: it is a mosque, and it is not the file. Kept here so the ledger does not smear every Friday.",
    },
    "dansk-islamisk": {
      name: "Dansk Islamisk Center",
      note: "Mixed Sunni room in Kühle's nine. Often read as Brotherhood-adjacent dawa. Moderate: the link is argued, not a membership card.",
    },
    taiba: {
      name: "Taiba Mosque",
      note: "Saudi embassy, 4.9 million kroner in 2018, toward an 18 million property. Kuwait ~0.6 million in 2019. The 2017 reporting law working as designed — and still only a handful of societies filed.",
    },
  },
  siteFilterAll: "All named",
  siteFilters: {
    parish: "Parish / other",
    transnational: "Transnational",
    hostile: "Hostile",
    recruitment: "Recruitment",
    kinetic: "Kinetic",
  },
  syriaTitle: "The Syria advertisement",
  syriaDek:
    "Training camps in Syria were advertised in Denmark. That is not a rumour from 2026. It is the 2012–16 file: YouTube emirs, mosque-adjacent networks, a travel bureau in an Aarhus ice factory. The advertisement has mostly left the noticeboard for the pocket. The pool has not.",
  syria: [
    {
      date: "2012–13",
      place: "Copenhagen / Aarhus / the internet",
      what: "Danish 'emir' recruitment videos. The war in Syria becomes a Danish youth product.",
      grade: "confirmed",
    },
    {
      date: "2014",
      place: "Grimhøjvej, Aarhus",
      what: "Police: the mosque sits on about a fifth of Danish Syria travellers. Chairman denies. The travel does not.",
      grade: "high",
    },
    {
      date: "2016-04",
      place: "Denmark",
      what: "PET/CTA: at least 135 travellers to Syria/Iraq, primarily young Sunni men. Among the highest per-capita rates in the EU.",
      grade: "confirmed",
    },
    {
      date: "2025–26",
      place: "Online, residual rooms",
      what: "PET: militant Islamist threat still 'serious'. Likely attacker is a small group or a lone actor, often radicalised online. IS still intends Western attacks. The flyer is in Telegram and TikTok; the mosque remains the pool.",
      grade: "high",
    },
  ],
  europeTitle: "Denmark is the readable case, not the largest",
  europeDek:
    "The same definition war is continental. France, Germany, and Britain have four-digit mosque counts on the mapped layer alone. Sweden's inclusive layer is already in the same band as Denmark's field estimate, in a larger flock.",
  europe: [
    { place: "France", n: "2,600+", note: "Mapped; banlieue musallas not fully in the count" },
    { place: "Germany", n: "2,500+", note: "DITIB as a foreign parish system" },
    { place: "Britain", n: "1,800+", note: "Purpose-built plus converted halls" },
    { place: "Sweden", n: "300+", note: "Inclusive; the cautionary file" },
    { place: "Norway", n: "150+", note: "Mapped-to-inclusive hedge" },
    { place: "Denmark", n: "185 mapped / ~310 inclusive", note: "This ledger" },
  ],
  anchorsTitle: "Documented fragments",
  anchors: [
    {
      year: "1967",
      n: 1,
      layer: "purpose",
      source: "Nusrat Jahan, Hvidovre",
      note: "First purpose-built mosque in the Nordic region. Ahmadiyya. Sunni Islam does not count it after 1974.",
    },
    {
      year: "1974",
      n: 1,
      layer: "field",
      source: "Control observation",
      note: "One Sunni mosque in living memory. Guest-worker rooms just beginning.",
    },
    {
      year: "2006",
      n: 115,
      layer: "mapped",
      source: "Kühle, Moskeer i Danmark",
      note: "First national walk-in mapping. 104 Sunni, 10 Shia, 1 Ahmadiyya.",
    },
    {
      year: "2017",
      n: 170,
      layer: "mapped",
      source: "Kühle & Larsen, Moskeér i Danmark II",
      note: "48% rise in eleven years, in step with the flock. ~40% transnational. Edge: +10 uncertified.",
    },
    {
      year: "2022",
      n: 190,
      layer: "mapped",
      source: "Journal of Islamic Studies (Reuters, 2026)",
      note: "The last academic band number in wide circulation.",
    },
    {
      year: "2024",
      n: 11,
      layer: "purpose",
      source: "Nielsen, Yearbook of Muslims in Europe / Kristeligt Dagblad",
      note: "Purpose-built in 2020. More on the way. The architectural sentence is not the infrastructure.",
    },
    {
      year: "2026",
      n: 163,
      layer: "mapped",
      source: "POI business listings",
      note: "Mappable fronts. A floor. Basements do not list.",
    },
  ],
  sources: [
    {
      title: "Moskeér i Danmark II — en ny kortlægning af danske moskeér og muslimske bedesteder",
      publisher: "Kühle & Larsen, Aarhus University / Kirkeministeriet",
      date: "2017",
    },
    {
      title: "Moskeer i Danmark — islam og muslimske bedesteder",
      publisher: "Lene Kühle",
      date: "2006",
    },
    {
      title: "Muslim population estimates, Denmark",
      publisher: "Brian Arly Jacobsen, University of Copenhagen",
      date: "2020–2025",
    },
    {
      title: "Danmark har 11 moskéer, og der er flere på vej",
      publisher: "Helle Lykke Nielsen, Kristeligt Dagblad",
      date: "2024-05",
    },
    {
      title: "Vurdering af terrortruslen mod Danmark",
      publisher: "PET / Center for Terroranalyse",
      date: "2025–2026",
    },
    {
      title: "Danish Syria travellers / Grimhøj reporting",
      publisher: "PET; East Jutland Police; Washington Post; Kristeligt Dagblad",
      date: "2014–2016",
    },
    {
      title: "Moskeer i Danmark (ethnic composition of the 2017 mapping)",
      publisher: "Kühle & Larsen, via da.wikipedia summary of Moskeér i Danmark II",
      date: "2017 / 2026",
    },
    {
      title: "Blodpenge i Al-Hidayyah-moskéen / anerkendelse bevaret",
      publisher: "TV 2 / Kristeligt Dagblad",
      date: "2024–2026",
    },
    {
      title: "Tauba-moskéen, jagtkniv, drabsforsøg",
      publisher: "Østre Landsret reporting",
      date: "2026",
    },
    {
      title: "Finansiering af moskéer i Danmark",
      publisher: "Kühle & Larsen, Kristeligt Dagblad",
      date: "2019",
    },
    {
      title: "“Den der betaler musikken”: Qatar, Københavns Store Fond, Civilstyrelsen",
      publisher: "Lene Kühle, Religion i Danmark",
      date: "2020",
    },
    {
      title: "Trossamfundsloven — reported foreign donations (Taiba / Saudi embassy; Kuwait; Islamisk Forbund)",
      publisher: "Kirkeministeriet / Civilstyrelsen filings",
      date: "2017–2019",
    },
    {
      title: "Lov om antidemokratiske donationer",
      publisher: "Folketinget",
      date: "2021",
    },
    {
      title: "Iranian mortgage on Vibevej / Imam Ali",
      publisher: "Weekendavisen / Kristeligt Dagblad; Folketinget S 8",
      date: "2009 / 2024",
    },
  ],
};

const da: CensusCopy = {
  title: "Mosképrotokollen",
  dek: "Danmark udgiver ikke et moskéregister. Det er ikke et uheld i statistikken. Det er måden, et sakralt netværk får lov at gro som vejr. Det kortlagte lag ligger i båndet 160–200. Det inklusive lag — hvert rum, der holder en fast fredagsbøn — er tallet, registret nægter at lave. En demografisk identitet lander på tre hundrede og lidt.",
  whyTitle: "Hvorfor det officielle tal ikke findes",
  why: [
    "Religion er ikke et folketællingsfelt i Danmark. Muslimer skønnes ud fra oprindelseslande, ikke tælles som en flok.",
    "Kirkeministeriet anerkender trossamfund, ikke rum. 37 anerkendte islamiske samfund med et par dusin tilknyttede menigheder er det juridiske lag. Det er ikke det sakrale lag.",
    "En 'moské' er en definitionskrig: nybygget med minaret (omkring et dusin), identificerede fredagssteder (Kühles metode), kældermusallaer, kvinderum, campus- og arbejdspladsbøn, roterende eid-sale, provinsrum åbnet efter 2015, der aldrig sad til interview.",
    "Kühle og Larsen (2017) var ærlige om kanten: 160 bekræftet, 'omkring 170', plus mindst ti de ikke ville certificere. Den tøven er mørketallet, der begynder at tale.",
    "Kommercielle POI-scrape i 2026 lister ~163 kortlægbare virksomheder. Kældre køber ikke Google-opslag. Scrapet er et gulv, ikke en tælling.",
    "At kalde det kortlagte tal 'antallet af moskéer' er tabutrækket. Det er sandt om én definition og falsk om infrastrukturen.",
  ],
  methodTitle: "Sådan laves ekstrapolationen",
  method: [
    "To identiteter, der bør mødes. Først: inklusive steder ≈ muslimsk befolkning ÷ opland per fast bedested. Dernæst: inklusive ≈ kortlagt × mørketalsfaktor.",
    "Arbejdsbeholdning: ~300.000 muslimer i Danmark (Jacobsen 292.000 i 2024/25, stigende). Opland 950 giver ~316 steder. Kortlagt 185 × 1,7 giver ~315. Feltestimatet på 300+ er det møde, ikke et rundt tal til en plakat.",
    "1974 er kontrolobservationen: én navngivet sunnimoské i levende erindring. Nusrat Jahan (Ahmadiyya, 1967) er det første egentlige moskéhus i Norden; sunniislam tæller den ikke efter erklæringen i 1974. Gæstearbejdernes rum var kun ved at begynde. Det inklusive lag i 2026 er fredagsrum af alle tilhørsforhold — ikke en sunni-only-tælling. Kühle/Larsens sidste etniske split (2017) var 138 sunni, 20 shia, 2 ahmadiyya af 160 identificerede. Flertal sunni er en kendsgerning. Sunni-only er en tilsvining af protokollen.",
    "De 40% 'væbnede' er et feltestimat, ikke et PET-inventar. Denne protokol splitter det i fire etager med grader. Syrien-rejsebureauet og det salafitiske/broderskabslattice er en sunniislamistisk sag. Imam Ali er et andet våben: iransk kommando, shia. At læse den kinetiske etage som bekræftet er en metodeovertrædelse.",
  ],
  controlTitle: "1974 som kontrol",
  control:
    "Et menneske født i 1974 kunne nævne én sunnimoské i Danmark. Ahmadiyya-huset i Hvidovre stod allerede; sunniislam var netop holdt op med at tælle det. Tooghalvtreds år senere ligger det inklusive lag over tre hundrede fredagsrum — mest sunni, også shia, også de to ahmadiyya-rum. Det er ikke 'diversitet, der ankommer.' Det er et institutionelt byggeri i familiesammenføringens, asylets og natalismens tempo — det samme tempo som resten af dette atlas.",
  layersTitle: "Fire lag, fire tal",
  layers: {
    purpose: {
      name: "Nybyggede",
      blurb: "Huse med den arkitektoniske sætning: kuppel, minaret, nybyggeri. Omkring et dusin i 2020, et par flere siden. Qatars Hamad Bin Khalifa-center er fotografiet. Dette er laget, et ministerium gerne vil tale om.",
    },
    mapped: {
      name: "Kortlagte fredagssteder",
      blurb: "Kühle 2006: ~115. Kühle/Larsen 2017: ~170. Journal of Islamic Studies 2022: ~190. POI-lister august 2026: 163. Det akademiske bånd er 160–200. Dette er det sidste tal, en forsker kunne gå ind i.",
    },
    inclusive: {
      name: "Inklusive bedesteder",
      blurb: "Hvert rum, der holder en fast fredagsbøn: kortlagte steder plus kældermusallaer, nye provinsrum, kvinderum, campus og arbejdsplads. Demografisk identitet. Standard ~316.",
    },
    field: {
      name: "Feltestimat",
      blurb: "Tallet, et menneske, der har set rummene siden 1974, faktisk nævner: mere end 300, og de er langtfra alle venlige. Denne protokol behandler det som en hypotese med en metode, ikke som et humør.",
    },
  },
  popLabel: "Muslimsk befolkning, Danmark",
  catchmentLabel: "Opland per fast sted",
  catchmentHint: "Lavere opland = flere rum. Kortlagt tæthed lå nær 1.500. Inklusive musallaer trækker det mod 900–1.000.",
  identity: "{pop} ÷ {catchment} = {n} inklusive steder",
  identityMapped: "{mapped} × {ratio} = {n} inklusive steder",
  darkLabel: "Mørketalsfaktor",
  darkHint: "Kortlagte fredagssteder gange denne faktor bør møde befolkning ÷ opland. Standard 1,7 er mødepunktet, ikke et tal hevet ud af luften.",
  meetOk: "De to identiteter mødes. Det er metoden, der virker.",
  meetOff: "Identiteterne er gledet fra hinanden. En af skyderne gør for meget arbejde.",
  growthTitle: "Tempo fra kontrolåret",
  growthDek: "Én navngivet sunnimoské i levende erindring, 1974. Renters rente på det inklusive fredagsrumslag fra den kontrol — flertal sunni, ikke sunni-only. Fordoblingstiden er den sakrale halvdel af bosættelsen, i en enhed et ministerium stadig kan nægte at trykke.",
  growthLine: "{start} → {end} på {years} år · fordobling hver {d}. år · {cagr}% om året",
  darkGap: "{n} rum sidder i mørketallet — inklusivt minus kortlagt. Kældre køber ikke opslag.",
  darkGapLabel: "Mørketal",
  mappedLabel: "Kortlagt lag",
  purposeLabel: "Nybyggede",
  inclusiveLabel: "Inklusivt lag",
  fieldLabel: "Andel i felten, der ikke er venlige",
  fieldHint: "Standard 40%. Flyt den. Karakteren følger ikke skyderen — kinetiske lagre forbliver spekulative selv ved 40%.",
  floorsTitle: "Fire etager af 'væbnet'",
  floorsDek:
    "Ordet gør for meget arbejde. Et Diyanet-sogn, et salafistisk rejsebureau, en Broderskabs-dawa-butik og et rum med et geværlager er ikke samme genstand. Feltestimatet på ~40% er levende som påstand om fjendtlighed og mobilisering. Det er ikke levende som påstand om, at hundredtyve danske moskéer er inventariseret for våben. Begge læsninger står på siden.",
  floors: {
    transnational: {
      name: "Transnationalt sogn",
      reading: "Kühle/Larsen 2017: ~40% af identificerede moskéer knyttet til en transnational organisation — Diyanet, Minhaj, Broderskabs-nære forbund, Tabligh, etniske statsarme. Bekræftet som tilknytning, ikke som cellekort.",
      record: "62 af ~170 i 2017. Forholdet er den sidste hårde procent på papir. Lagt på det kortlagte lag lander det stadig nær to femtedele.",
      counter: "Tilknytning er ikke et våbenlager. Et DITIB-lignende sogn kan være konservativt, fremmedfanget og stadig ikke et magasin. De bekræftede 40% er denne etage, ikke den kinetiske.",
    },
    hostile: {
      name: "Fjendtlig / mobiliserbar infrastruktur",
      reading: "Feltets 40%: rum, der ikke er venlige over for den danske demos — salafister, hårdt Broderskab, fremmedstatsligt sogn, parallel retsorden (blodpenge, kønssapartheid som politik), parat til at mobilisere, når der kaldes. Moderat. Dette er læsningen, der kan argumenteres i skala.",
      record:
        "Grimhøj som rejsebureau; Al-Hidayyah som blodpengerum (samtaler 2021, ingen sanktion 2026); Imam Ali som iransk sogn, Folketinget ikke har kunnet opløse; et salafistisk og Broderskabs-gitter, som franske, østrigske og tyske tjenester vil navngive, og Danmark stadig hedger.",
      counter:
        "Det meste bøn er bøn. At behandle hver kælder som en bataljon er karikaturen, den anden side ønsker. At behandle det fjendtlige mindretal som en social klub er karikaturen, dette atlas er skrevet imod. To femtedele er en feltandel, ikke en navneliste.",
    },
    recruitment: {
      name: "Rekruttering / rejsebureau-knuder",
      reading: "Et navngivet håndfuld, ikke to femtedele. Høj tillid. Grimhøj alene sad på omkring en femtedel af de danske Syriensrejsende. Knuden er moské-nære milieuer — studiekreds, køkken, Telegram — mere end minbaren.",
      record:
        "PET: mindst 135 rejsende til Syrien/Irak frem til 2016, blandt de højeste per capita i EU. Politi: ~22 af ~100 fra Grimhøj. Aarhus' exit-program som statens indrømmelse af, at rummet var en rørledning. Maskinhuset og københavnske salafistkredse som fætre.",
      counter:
        "Interviews med hjemvendte (Perspectives on Terrorism, 2016) nægter ofte moskéen og krediterer vennegruppen. Det er foreneligt med en moské som pool og et køkken som kontor. Det er ikke foreneligt med 'hver moské er en lejr.'",
    },
    kinetic: {
      name: "Våbenlagre / opstandforberedelse",
      reading: "Den stærkeste feltpåstand: ~40% holder våben og forbereder væbnet opstand og terror, når tiden kalder. Spekulativ som andel. Sagen bærer i øjeblikket et håndfuld rum rørt af våben, terrorlogistik eller udenretslig håndhævelse — ikke hundredtyve inventarer.",
      record:
        "Terrorsager, der søgte skydevåben (ikke moskéomfattende arsenaler). En jagtkniv fra et moskékøkken brugt i et drabsforsøg (Tauba, dom 2026). Blodpengesamtaler i Al-Hidayyah. Historisk væbnet fundraising omkring Grimhøj-nære kredse (2001). PET 2025–26 vurderer stadig den militante islamistiske terrortrussel som 'alvorlig' og siger, at den sandsynlige gerningsmand er en lone actor eller en lille gruppe, ofte radikaliseret online.",
      counter:
        "Intet offentligt PET- eller politiinventar understøtter våbenlagre i to femtedele af danske moskéer. Hvis lagrene findes i den skala, er de hemmelige af design — hvilket er det, en spekulation er til, og også derfor den ikke må sælges som et tal. Forberedelse kan være ideologisk og organisatorisk i årevis, før den er kinetisk. Det mønter stadig ikke 124 arsenaler.",
    },
  },
  curveTitle: "Fra ét rum til et gitter",
  curveDek: "Kortlagt lag mod inklusivt lag. Afstanden er mørketallet. Den åbner efter gæstearbejderårene og udvider sig med familiesammenføring og 2015.",
  ethnicTitle: "Hvem de kortlagte rum tilhørte i 2017",
  ethnicDek:
    "Kühle og Larsen identificerede 160 rum og talte derefter etnicitet og madhhab. Sidste split på papir: sunni 138, shia 20, ahmadiyya 2. Denne protokol er moskéer, ikke 'sunnimoskéer.' Tyrkiske 41 er mest et Diyanet-sogn. Arabiske 39 er den blandede sunnipool, der rummer rejsebureau-knuderne. De ni blandede tæller Masjid al-Faruq, navngivet som Hizb ut-Tahrirs moské. Shia er et andet kommando-problem (Imam Ali), ikke et Syrien-rejsebureau.",
  ethnic: {
    turkish: { name: "Tyrkiske", note: "Største blok. Diyanet-sogn som standard, ikke et cellekort." },
    arab: { name: "Arabiske", note: "Blandet pool: stille sogn, Broderskabs-dawa, salafistiske køkkener. Grimhøj sidder her som type, ikke som tal." },
    pakistani: { name: "Pakistanske", note: "Inkluderer Minhaj og stillere etniske rum." },
    somali: { name: "Somaliske", note: "Yngre flok, noget salafistisk tyngde, ikke en ensartet strøm." },
    bosnian: { name: "Bosniske", note: "Balkansogn. Modeksemplet, smæden skal holde på siden." },
    afghan: { name: "Afghanske (sunni)", note: "Lille kortlagt blok." },
    mixed: { name: "Blandede / øvrige sunni", note: "Ni rum: Dansk Islamisk Center, Mariam, Vordingborg, Vollsmose-musalla, al-Faruq (Hizb ut-Tahrir)." },
    iraqiShia: { name: "Irakiske shia", note: "Tolv af tyve shiarum." },
    afghanShia: { name: "Afghanske shia", note: "Fire rum." },
    pakistaniShia: { name: "Pakistanske shia", note: "To rum." },
    iranian: { name: "Iranske / blandede shia", note: "Imam Ali på Vibevej. Folketinget har ikke kunnet opløse den." },
    ismaili: { name: "Ismailitter", note: "Ét rum. Ikke sagen." },
    ahmadiyya: { name: "Ahmadiyya", note: "To rum, herunder originalen fra 1967. Sunniislam tæller dem ikke som moskéer." },
  },
  ethnicBlocs: { sunni: "Sunni 138", shia: "Shia 20", other: "Ahmadiyya 2" },
  ethnicTotal: "{n} identificerede rum",
  mapTitle: "Det operative kort",
  mapDek:
    "Rummene er ikke spredt vejr. De sidder, hvor flokken sidder: hovedstaden først, så Aarhus, så Odense, så de jyske og sjællandske byer, der tog familiesammenføring og 2015. Dette er en arbejdende geografi af de kortlagte 185 — moderat som regionalt split, bekræftet som hovedstads-tungt. Inklusive kældre følger samme tyngde. En moské i dette atlas er en knude. Kortet er netværket på dansk jord.",
  mapGrade: "Feltgeografi af det kortlagte lag. Ikke en nål for hver musalla.",
  mapTotal: "{n} kortlagt over gitteret",
  geo: {
    copenhagen: {
      name: "Hovedstaden",
      note: "Nørrebro, NV, SV, Ishøj, Hvidovre, Hedehusene. Qatars fotografi, det iranske sogn, HuT's udstillingsvindue, kvinderummet, blodpenge-rummet. Det tætteste gitter.",
    },
    nordsjaelland: {
      name: "Nordsjælland",
      note: "Helsingør, Hillerød, pendler-sognet. Mindre rum, samme jobs.",
    },
    sjaelland: {
      name: "Sjælland",
      note: "Køge, Roskilde, Næstved, den provinsielle fredag. Åbnet efter gæstearbejderårene og igen efter 2015.",
    },
    lolland: {
      name: "Lolland–Falster",
      note: "Tyndt på kortet, ikke tomt. Landområderum er stadig rum.",
    },
    odense: {
      name: "Fyn / Odense",
      note: "Vollsmose som det navngivne kvarter. Et parallelt sogn med skole, velfærd og gade — ikke et rejsebureau i Grimhøj-skala, og ikke en social klub.",
    },
    aarhus: {
      name: "Østjylland / Aarhus",
      note: "Grimhøj som rejsebureau. Gellerup og Brabrand som den omgivende pool. Den læsbare rekrutteringsknude i den danske fil.",
    },
    aalborg: {
      name: "Nordjylland / Aalborg",
      note: "Diyanet og etnisk sogn som standard. Prædikenen svarer stadig udefra.",
    },
    trekanten: {
      name: "Trekanten / Kolding–Vejle–Horsens",
      note: "Det industrielle Jyllands fredag. Gæstearbejder-oprindelse, familiesammenførings-skala.",
    },
    vestjylland: {
      name: "Vestjylland",
      note: "Herning, Holstebro, den lille bys musalla. Let at overse. Stadig en knude.",
    },
    esbjerg: {
      name: "Esbjerg / sydvest",
      note: "Havneby-sogn. Tyrkiske og arabiske rum, samme inventar.",
    },
  },
  purposesTitle: "Hvad rummene er til",
  purposesDek:
    "En moské er ikke kun et sted, man beder. I det operative netværk er den belægning, prædiken, skole, velfærd, familieret, fremmed kommando og — i et navngivet håndfuld — et rejsebureau. Dækket er salat. Jobbene nedenunder er derfor, at undertællingen er en kampagne og ikke et statistikhul. Filtrér de navngivne rum efter job.",
  purposes: {
    salat: {
      name: "Salat / belægning",
      cover: "De fem bønner og fredagsmenigheden. Den definition Kühle brugte: et rum med offentlig salat mindst ugentligt.",
      network: "Belægning af dansk jord. En fast fredag er et flag. Kældre tæller. Dette er laget, registret nægter at lave.",
    },
    khutba: {
      name: "Khutba / prædikenen",
      cover: "Religiøs undervisning til fredagsbøn. Oprindelsessprog, undertiden et dansk resumé.",
      network: "Politisk instruktion under en religiøs overskrift. Hvem der må nævnes, hvem der må hades, hvilken lov der er højere. Diyanet-prædikenen skrives i Ankara. Det salafistiske køkken springer resuméet over.",
    },
    dawa: {
      name: "Dawa / mission",
      cover: "Invitation til islam. Opsøgende arbejde, konvertitklasser, 'dialog.'",
      network: "Identitetserobring. Qaradawis erobring-via-dawa, kørt som sognsprogram. Broderskabs-nære rum behandler kvarteret som høst. Bekræftet som funktion; franchisen varierer.",
    },
    school: {
      name: "Skole / næste generation",
      cover: "Koranskole, weekend-arabisk, lektiecafé, ungdomsklub.",
      network: "Det lange greb. Børn lærer en retsorden og en historie, der ikke svarer til folkeskolen. Parallel dannelse er pointen, ikke en bivirkning.",
    },
    welfare: {
      name: "Velfærd / parallelt sogn",
      cover: "Zakat, madpakker, begravelseskasser, kvindegrupper, 'integrations'-caféer.",
      network: "En socialstat, der ikke løber gennem kommunen. Loyalitet følger den hånd, der betaler. Diyanet og Broderskabet ved begge det. Høj som funktion, ikke som budgetlinje.",
    },
    family: {
      name: "Familie / civilstand",
      cover: "Nikah, begravelse, konvertitpapirer, rådgivning.",
      network: "Hvem der må gifte sig med hvem, under hvilken lov, med hvilke vidner. Den danske stat noterer et bryllup. Rummet noterer en kontrakt. To attester, ét monopol.",
    },
    arbitration: {
      name: "Voldgift / lokal lov",
      cover: "Mægling, sulh, 'konfliktløsning' inde i flokken.",
      network: "Blodpenge, kønsapartheid som politik, kvarteret der ikke ringer til politiet. Al-Hidayyah er det navngivne rum. Moderat som andel af 310; høj som kapacitet dér, hvor den sidder.",
    },
    foreign: {
      name: "Fremmed kommando",
      cover: "Et nationalt sogn: tyrkisk, pakistansk, iransk, qatarisk, bosnisk.",
      network: "Imamløn, byggeri og prædiken, der svarer til Ankara, Teheran, Doha eller Lahore. Kühle: ~40% af identificerede rum knyttet til en transnational organisation. Bekræftet. Imam Ali er den iranske sag, Folketinget ikke kan opløse.",
    },
    politics: {
      name: "Politik / gaden",
      cover: "Underskrifter, 'antiracisme', Palæstina-demoer, vælgerkørsel.",
      network: "Mobilisering af flokken som blok. Moskéen er opslagstavlen og bussen. HuT bruger minbaren som udstillingsvindue. Hovedstadsrum vender gaden ud på kommando.",
    },
    recruitment: {
      name: "Rekruttering / rejsebureau",
      cover: "Studiekreds, broderskab, 'humanitær' konvoj.",
      network: "Poolen til Syrien, og til det, der kommer. Grimhøj som den læsbare knude (~22 af ~100 rejsende). Maskinhuset og københavnske salafistiske køkkener som fætre. Høj for det navngivne håndfuld. Ikke to femtedele af 310.",
    },
  },
  purposeFilterAll: "Alle jobs",
  purposeCover: "Dække",
  purposeNetwork: "Netværk",
  purposeNamed: "{n} navngivne rum",
  fundsTitle: "Hvem betaler",
  fundsDek:
    "Flertallet af danske rum kører på kontingent og lokal indsamling — Kühle har ret i det, og det er ikke en tilsvining af hver fredag. Kommando-problemet sidder i mindretallet, der er stort nok til at tælle: tyrkisk statsløn i ~30 rum, qatarisk beton i hovedstadens fotografi, iransk pant på Vibevej, saudiske og kuwaitiske ambassadegaver, og danske kommunekroner som et blodpenge-rum kunne trække som 'korsang og madlavning.' Inklusive Diyanet ligger den udenlandske støtteandel nær Frankrigs ~20%. Loven fra 2021 om antidemokratiske donationer er kontrolcasen, der forsøger at navngive resten. Kontanter og uanmeldt Golf er mørketallet.",
  funds: {
    membership: {
      name: "Kontingent / lokal indsamling",
      cover: "Kontingent, zakat-tallerkener, naboer i Tyskland og Sverige. Kühle: standarden, og den eneste model de fleste somaliske, pakistanske, bosniske, afghanske rum har.",
      network: "En flok, der betaler sin egen belægning, er stadig belægning. 60% af de kortlagte rum ejede lokalerne i 2017 — lokal kapital, ikke et ministerium. Dette er gulvet. Det er ikke prædikenskriveren.",
    },
    diyanet: {
      name: "Diyanet / tyrkisk løn",
      cover: "Dansk Tyrkisk Islamisk Stiftelse. Omkring 30 rum. Imamer på tyrkiske visa, løn fra Ankara.",
      network: "Prædikenen er et statsprodukt. Efter 2016 blev den samme kanal brugt til at jage gülenister på dansk jord. Fremmed kommando som lønudbetaling, ikke en engangsgave. Bekræftet. Halvdelen af Kühles 40% transnationale andel bor her.",
    },
    qatar: {
      name: "Qatar / PEO",
      cover: "Hamad bin Khalifa al-Thani via Private Engineering Office: 150 millioner kroner til Københavns Store Fond, plus et årligt tilsagn på 5 millioner. Qatar Charity og kuwaitiske Munazzamat al-Dawah som fætre. Fonden købte også rum i Skive (1,0 mio.) og Skælskør (1,3 mio.).",
      network: "Blød magt som arkitektur. DIR/FIOE som Broderskabs-franchisen, der tog posen. Civilstyrelsen-akter (Kühle 2020): total nær 226 millioner, og i 2020 fem af ni bestyrelsesposter bosat i Qatar. Emiren køber ikke en minaret for at være stille udlejer.",
    },
    iran: {
      name: "Iran / Ahlul Bait",
      cover: "Vibevej: lån på 8,5 millioner kroner, 2001, til den iranske ambassadør som panthaver. Byggeomkostning 40–50 millioner. Arkitekter talte om 'rigmænd'; tinglysningen talte om staten.",
      network: "En shia-kommandoknude, Folketinget ikke har kunnet opløse. Ikke et sunnitisk rejsebureau. Høj for pantet; moderat for hele byggeriet som statslinje. Fjendtlig som fremmedstatsligt sogn.",
    },
    saudi: {
      name: "Saudi / Den Muslimske Verdensliga",
      cover: "1970'erne–80'erne: MWL og libyske 'Kaldet' betalte imamer og købte bygninger, mens gitteret stadig var tyndt. 2018: saudisk ambassade, 4,9 millioner til Taiba til en ejendom til 18 millioner.",
      network: "Wahhabitisk såkapital, derefter en stillere ambassadegave under indberetningsloven fra 2017. Historisk bekræftet; den nuværende andel er et håndfuld navngivne linjer, ikke en fjerdedel af Sveriges kortlagte rum.",
    },
    kuwait: {
      name: "Kuwait / dawa-huse",
      cover: "Munazzamat al-Dawah ind i HBKCC. ~0,6 millioner til Taiba i 2019, på trossamfundsblanketten.",
      network: "Mindre Golf-cheks, samme inventar: et rum, en skole, en gæld. Bekræftet hvor indberettet. Ikke det qatariske fotografi.",
    },
    "danish-public": {
      name: "Danske offentlige penge",
      cover: "Folkeoplysningstilskud, trossamfunds-skattestatus, kommunal 'korsang og madlavning.' Al-Hidayyah/ICEL: 1,5 millioner over ti år. 2026: anerkendelse bevaret, intet tilbagekrav.",
      network: "Selvmålet. Et blodpenge-rum trak penge til verdslig aktivitet og beholdt dem. Anerkendelse er et rettighedstal, der bliver et tilskud. Bekræftet som strøm. Ikke byggeren af Hamad Bin Khalifa — rengøringen af Al-Hidayyah.",
    },
    dark: {
      name: "Uanmeldt / kontant",
      cover: "Trossamfundsloven 2017 kræver store udenlandske gaver indberettet. Et håndfuld muslimske samfund gjorde det. Kontant-tallerkener, hawala-nære overførsler og gaver under 20.000-kroners anonymitetslinjen gør det ikke.",
      network: "Finansieringens mørketal er fætter til rummenes mørketal. Moderat som andel af 310. Spekulativt som navngivet donorliste. Donationsloven 2021 blev skrevet, fordi denne kolonne findes.",
    },
  },
  fundFilterAll: "Alle betalere",
  fundLinesTitle: "Navngivne beløb",
  fundLineNotes: {
    "qatar-hbkcc": "Emirens byggerigave, via PEO.",
    "qatar-ksf-total": "Civilstyrelsen-akter: 150 mio. var ikke hele posen.",
    "qatar-annual": "Løbende indskud, ikke engangs.",
    "qatar-skive": "KSF videregave. En hovedstadsmoské finansierer provinsen.",
    "qatar-skaelskoer": "KSF videregave.",
    "iran-vibevej-loan": "Pant til ambassadøren. Tinglysningen, ikke en presselinje.",
    "iran-build": "Arkitekter: rigmænd. Byggepris, ikke en bekræftet statsoverførsel.",
    "saudi-taiba": "Ambassadegave på 2017-blanketten.",
    "kuwait-taiba": "Andet Golf-check, samme rum.",
    "icel-kk": "Københavns Kommune, korsang og madlavning. Beholdt i 2026.",
    "diyanet-payroll": "Ikke beton. Prædikenen, hver fredag.",
  },
  sitesTitle: "Navngivne rum på den offentlige sag",
  sitesDek:
    "Et register findes ikke, så felten har fotografier. Disse er ikke et udsnit af 310. De er rum, en avis, et politital eller en kortlægning allerede har navngivet. Filtrér på etage. Sognerum bliver på siden, så protokollen ikke bliver en hitliste. Kinetiske navne er et håndfuld — derfor forbliver 40% som lagre spekulativt.",
  sites: {
    "nusrat-jahan": {
      name: "Nusrat Jahan",
      note: "Første egentlige moské i Norden. Ahmadiyya. Kontrolårets andet rum — det, sunniislam holdt op med at tælle efter 1974.",
    },
    "hamad-bin-khalifa": {
      name: "Hamad Bin Khalifa Civilisation Center",
      note: "Qatar-finansieret stormoské, Rovsingsgade, 2014. Fotografiet af det nybyggede lag. Et fremmed sogn i hovedstadens arkitektur.",
    },
    "imam-ali": {
      name: "Imam Ali-moskéen",
      note: "Vibevej, 2015. Iransk sogn. Folketinget har ikke kunnet opløse den. Fjendtlig som fremmedstatslig kommando, ikke som et sunnitisk rejsebureau.",
    },
    "fetih-camii": {
      name: "Fetih Camii",
      note: "Hedehusene, 2015. Tyrkisk nybygget. Diyanets arkitektoniske sætning uden for hovedstaden.",
    },
    grimhoj: {
      name: "Grimhøjmoskéen",
      note: "Århusiansk isfabrik. Politi: omkring en femtedel af de danske Syriensrejsende. Rejsebureauet som butiksvindue. Formanden nægter. Rejsen gør ikke.",
    },
    maskinhuset: {
      name: "Maskinhuset",
      note: "København SV, salafistkreds. Fætter til Grimhøj-milieuet: studiekreds og køkken mere end minbar.",
    },
    "al-hidayyah": {
      name: "Al-Hidayyah (Habashi)",
      note: "København NV. Blodpengesamtaler efter Rødovre-drabet 2021. 2026: anerkendelse bevaret, ingen sanktion. Udenretslig håndhævelse i et rettighedssubjekts rum.",
    },
    tauba: {
      name: "Tauba-moskéen",
      note: "Det Islamske Trossamfund. Dom 2026: en 28 cm jagtkniv fra moskékøkkenet brugt i et drabsforsøg. Et køkken er ikke et arsenal. Det er heller ikke ingenting.",
    },
    "al-faruq": {
      name: "Masjid al-Faruq",
      note: "Navngivet i Kühle 2017 som Hizb ut-Tahrirs moské, inde i de ni blandede. Åben kalifatpolitik fra et lovligt dansk rum.",
    },
    vollsmose: {
      name: "Musalla, Vollsmose",
      note: "Odense parallelsamfund. I de ni blandede. Provinsrummet, kortlægningen fangede — og typen, den misser.",
    },
    mariam: {
      name: "Mariam-moskéen",
      note: "Kvindemoské, 2016. Definitionskrigen i ét rum: det er en moské, og det er ikke sagen. Beholdt her, så protokollen ikke smæder hver fredag.",
    },
    "dansk-islamisk": {
      name: "Dansk Islamisk Center",
      note: "Blandet sunniterum i Kühles ni. Ofte læst som Broderskabs-nær dawa. Moderat: linket er argumenteret, ikke et medlemskort.",
    },
    taiba: {
      name: "Taiba-moskéen",
      note: "Saudisk ambassade, 4,9 millioner kroner i 2018, til en ejendom til 18 millioner. Kuwait ~0,6 millioner i 2019. Indberetningsloven 2017 virker som designet — og stadig kun et håndfuld samfund indberettede.",
    },
  },
  siteFilterAll: "Alle navngivne",
  siteFilters: {
    parish: "Sogn / øvrige",
    transnational: "Transnationale",
    hostile: "Fjendtlige",
    recruitment: "Rekruttering",
    kinetic: "Kinetiske",
  },
  syriaTitle: "Syrien-annoncen",
  syriaDek:
    "Træningslejre i Syrien blev annonceret i Danmark. Det er ikke et rygte fra 2026. Det er 2012–16-filen: YouTube-emirer, moské-nære netværk, et rejsebureau i en århusiansk isfabrik. Annoncen har for det meste forladt opslagstavlen til lommen. Poolen har ikke.",
  syria: [
    {
      date: "2012–13",
      place: "København / Aarhus / nettet",
      what: "Danske 'emir'-rekrutteringsvideoer. Krigen i Syrien bliver et dansk ungdomsprodukt.",
      grade: "confirmed",
    },
    {
      date: "2014",
      place: "Grimhøjvej, Aarhus",
      what: "Politi: moskéen sidder på omkring en femtedel af de danske Syriensrejsende. Formanden nægter. Rejsen gør ikke.",
      grade: "high",
    },
    {
      date: "2016-04",
      place: "Danmark",
      what: "PET/CTA: mindst 135 rejsende til Syrien/Irak, primært unge sunnimænd. Blandt de højeste per capita i EU.",
      grade: "confirmed",
    },
    {
      date: "2025–26",
      place: "Online, resterende rum",
      what: "PET: den militante islamistiske trussel stadig 'alvorlig'. Sandsynlig gerningsmand er en lille gruppe eller en lone actor, ofte radikaliseret online. IS har stadig intention om vestlige angreb. Flyeren ligger i Telegram og TikTok; moskéen forbliver poolen.",
      grade: "high",
    },
  ],
  europeTitle: "Danmark er den læsbare sag, ikke den største",
  europeDek:
    "Den samme definitionskrig er kontinental. Frankrig, Tyskland og Storbritannien har firecifrede moskétal på det kortlagte lag alene. Sveriges inklusive lag er allerede i samme bånd som Danmarks feltestimat, i en større flok.",
  europe: [
    { place: "Frankrig", n: "2.600+", note: "Kortlagt; banlieue-musallaer ikke fuldt i tællingen" },
    { place: "Tyskland", n: "2.500+", note: "DITIB som et fremmed sognesystem" },
    { place: "Storbritannien", n: "1.800+", note: "Nybyggede plus ombyggede sale" },
    { place: "Sverige", n: "300+", note: "Inklusivt; advarselsfilen" },
    { place: "Norge", n: "150+", note: "Kortlagt-til-inklusiv tøven" },
    { place: "Danmark", n: "185 kortlagt / ~310 inklusivt", note: "Denne protokol" },
  ],
  anchorsTitle: "Dokumenterede fragmenter",
  anchors: [
    {
      year: "1967",
      n: 1,
      layer: "purpose",
      source: "Nusrat Jahan, Hvidovre",
      note: "Første egentlige moské i Norden. Ahmadiyya. Sunniislam tæller den ikke efter 1974.",
    },
    {
      year: "1974",
      n: 1,
      layer: "field",
      source: "Kontrolobservation",
      note: "Én sunnimoské i levende erindring. Gæstearbejdernes rum kun ved at begynde.",
    },
    {
      year: "2006",
      n: 115,
      layer: "mapped",
      source: "Kühle, Moskeer i Danmark",
      note: "Første nationale walk-in-kortlægning. 104 sunni, 10 shia, 1 Ahmadiyya.",
    },
    {
      year: "2017",
      n: 170,
      layer: "mapped",
      source: "Kühle & Larsen, Moskeér i Danmark II",
      note: "48% stigning på elleve år, i trit med flokken. ~40% transnationale. Kant: +10 ucertificerede.",
    },
    {
      year: "2022",
      n: 190,
      layer: "mapped",
      source: "Journal of Islamic Studies (Reuters, 2026)",
      note: "Det sidste akademiske båndtal i bred cirkulation.",
    },
    {
      year: "2024",
      n: 11,
      layer: "purpose",
      source: "Nielsen, Yearbook of Muslims in Europe / Kristeligt Dagblad",
      note: "Nybyggede i 2020. Flere på vej. Den arkitektoniske sætning er ikke infrastrukturen.",
    },
    {
      year: "2026",
      n: 163,
      layer: "mapped",
      source: "POI-virksomhedslister",
      note: "Kortlægbare facader. Et gulv. Kældre lister ikke.",
    },
  ],
  sources: en.sources,
};

export function censusCopy(locale: Locale): CensusCopy {
  return locale === "da" ? da : en;
}
