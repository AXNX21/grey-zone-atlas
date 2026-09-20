import type { Locale } from "@/lib/i18n/locale";
import type { Likelihood, Source } from "./types";

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
};

/** Rooms that already have a public file. Not a census — the opposite of a census. */
export const CENSUS_SITES: CensusSite[] = [
  { id: "nusrat-jahan", year: "1967", city: "Hvidovre", layer: "purpose", floor: "parish", grade: "confirmed" },
  { id: "hamad-bin-khalifa", year: "2014", city: "København", layer: "purpose", floor: "transnational", grade: "confirmed" },
  { id: "imam-ali", year: "2015", city: "København", layer: "purpose", floor: "hostile", grade: "high" },
  { id: "fetih-camii", year: "2015", city: "Hedehusene", layer: "purpose", floor: "transnational", grade: "confirmed" },
  { id: "grimhoj", year: "2014", city: "Aarhus V", layer: "mapped", floor: "recruitment", grade: "high" },
  { id: "maskinhuset", year: "2012", city: "København SV", layer: "mapped", floor: "recruitment", grade: "high" },
  { id: "al-hidayyah", year: "2021", city: "København NV", layer: "mapped", floor: "kinetic", grade: "high" },
  { id: "tauba", year: "2026", city: "København", layer: "mapped", floor: "kinetic", grade: "moderate" },
  { id: "al-faruq", year: "2017", city: "København", layer: "mapped", floor: "hostile", grade: "high" },
  { id: "vollsmose", year: "2017", city: "Odense", layer: "field", floor: "hostile", grade: "moderate" },
  { id: "mariam", year: "2016", city: "København", layer: "mapped", floor: "parish", grade: "confirmed" },
  { id: "dansk-islamisk", year: "2008", city: "København", layer: "mapped", floor: "transnational", grade: "moderate" },
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
    "1974 is the control observation: one Sunni mosque in living memory. Nusrat Jahan (Ahmadiyya, 1967) is the first purpose-built house in the Nordic region; Sunni Islam does not count it as a mosque after the 1974 declaration. Guest-worker prayer rooms were just beginning. The curve from that one room to three hundred is the sacral half of settlement.",
    "The 40% 'weaponized' share is a field estimate, not a PET inventory. This ledger splits it into four floors with grades. Reading the kinetic floor as confirmed is a method violation.",
  ],
  controlTitle: "1974 as control",
  control:
    "A person born in 1974 could name one Sunni mosque in Denmark. Fifty-two years later the inclusive layer is above three hundred. That is not 'diversity arriving.' It is an institutional build-out at the tempo of family reunification, asylum, and natalism — the same tempo as the rest of this atlas.",
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
  growthDek: "One Sunni mosque in living memory, 1974. Compound the inclusive layer from that one room. The doubling time is the sacral half of settlement, in a unit a ministry can still refuse to print.",
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
    "Kühle and Larsen identified 160 rooms and then counted ethnicity. This is the last ethnic census of the mapped layer. It is not a hostility census. Turkish 41 is mostly a Diyanet parish. Arab 39 is the mixed pool that includes the travel-bureau nodes. The mixed nine include Masjid al-Faruq, named as Hizb ut-Tahrir's mosque.",
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
    "1974 er kontrolobservationen: én sunnimoské i levende erindring. Nusrat Jahan (Ahmadiyya, 1967) er det første egentlige moskéhus i Norden; sunniislam tæller den ikke som moské efter erklæringen i 1974. Gæstearbejdernes bederum var kun ved at begynde. Kurven fra det ene rum til tre hundrede er den sakrale halvdel af bosættelsen.",
    "De 40% 'væbnede' er et feltestimat, ikke et PET-inventar. Denne protokol splitter det i fire etager med grader. At læse den kinetiske etage som bekræftet er en metodeovertrædelse.",
  ],
  controlTitle: "1974 som kontrol",
  control:
    "Et menneske født i 1974 kunne nævne én sunnimoské i Danmark. Tooghalvtreds år senere ligger det inklusive lag over tre hundrede. Det er ikke 'diversitet, der ankommer.' Det er et institutionelt byggeri i familiesammenføringens, asylets og natalismens tempo — det samme tempo som resten af dette atlas.",
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
  growthDek: "Én sunnimoské i levende erindring, 1974. Renters rente på det inklusive lag fra det ene rum. Fordoblingstiden er den sakrale halvdel af bosættelsen, i en enhed et ministerium stadig kan nægte at trykke.",
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
    "Kühle og Larsen identificerede 160 rum og talte derefter etnicitet. Dette er den sidste etniske tælling af det kortlagte lag. Det er ikke en fjendtlighedstælling. Tyrkiske 41 er mest et Diyanet-sogn. Arabiske 39 er den blandede pool, der rummer rejsebureau-knuderne. De ni blandede tæller Masjid al-Faruq, navngivet som Hizb ut-Tahrirs moské.",
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
