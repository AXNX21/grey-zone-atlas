/** Million DKK. Working stock in 2026 kroner, not historic purchase prices. */
export const CENSUS_COST_DEFAULTS = {
  /** Purpose-built other than HBKCC and Imam Ali. Fetih-class hall. */
  purposeOtherM: 16,
  /**
   * Owned conversion / industrial hall.
   * Taiba 18m is Copenhagen high. Skive 1.0m / Skælskør 1.3m are the floor.
   */
  ownedM: 4.5,
  /** Inclusive musalla: carpets, wudu, a few years of basement rent. */
  musallaM: 0.8,
  /** Kühle 2017: 60% of identified rooms owned their premises. */
  ownShare: 0.6,
  /** Fully loaded Diyanet imam, million DKK / year. */
  imamWageM: 0.42,
  /** Years of Turkish payroll sitting in the lattice. */
  imamYears: 18,
  /** Annual keep-the-lights-on, owned room. */
  opexOwnedM: 0.08,
  /** Annual rent + utilities, rented mapped room. */
  opexRentedM: 0.18,
  /** Annual basement musalla. */
  opexMusallaM: 0.05,
  namedQatarM: 226,
  namedIranM: 45,
  namedGulfM: 5.5,
  namedPublicM: 1.5,
  namedDiyanetImams: 30,
  grandCount: 1,
  iranCount: 1,
};

export const CENSUS_COST_BOUNDS = {
  purposeOtherM: { min: 8, max: 35, step: 1 },
  ownedM: { min: 1.2, max: 12, step: 0.1 },
  musallaM: { min: 0.2, max: 2.5, step: 0.05 },
  ownShare: { min: 0.4, max: 0.8, step: 0.01 },
};

export type CensusCostInput = {
  mapped: number;
  inclusive: number;
  purposeBuilt: number;
  purposeOtherM: number;
  ownedM: number;
  musallaM: number;
  ownShare: number;
};

export type CensusCostResult = {
  owned: number;
  rented: number;
  conversions: number;
  dark: number;
  otherPurpose: number;
  capitalGrand: number;
  capitalIran: number;
  capitalPurpose: number;
  capitalOwned: number;
  capitalDark: number;
  capitalTotal: number;
  namedCapital: number;
  unaccounted: number;
  donationShare: number;
  diyanetPayroll: number;
  annualOpex: number;
  annualPublic: number;
};

export function mosqueCapital(input: CensusCostInput): CensusCostResult {
  const d = CENSUS_COST_DEFAULTS;
  const owned = Math.round(input.mapped * input.ownShare);
  const rented = Math.max(0, input.mapped - owned);
  const conversions = Math.max(0, owned - input.purposeBuilt);
  const dark = Math.max(0, input.inclusive - input.mapped);
  const otherPurpose = Math.max(0, input.purposeBuilt - d.grandCount - d.iranCount);
  const capitalGrand = d.namedQatarM;
  const capitalIran = d.namedIranM;
  const capitalPurpose = otherPurpose * input.purposeOtherM;
  const capitalOwned = conversions * input.ownedM;
  const capitalDark = dark * input.musallaM;
  const capitalTotal = capitalGrand + capitalIran + capitalPurpose + capitalOwned + capitalDark;
  const namedCapital = d.namedQatarM + d.namedIranM + d.namedGulfM;
  const unaccounted = Math.max(0, capitalTotal - namedCapital);
  const donationShare = capitalTotal > 0 ? unaccounted / capitalTotal : 0;
  const diyanetPayroll = d.namedDiyanetImams * d.imamWageM * d.imamYears;
  const annualOpex =
    owned * d.opexOwnedM + rented * d.opexRentedM + dark * d.opexMusallaM;
  return {
    owned,
    rented,
    conversions,
    dark,
    otherPurpose,
    capitalGrand,
    capitalIran,
    capitalPurpose,
    capitalOwned,
    capitalDark,
    capitalTotal,
    namedCapital,
    unaccounted,
    donationShare,
    diyanetPayroll,
    annualOpex,
    annualPublic: d.namedPublicM / 10,
  };
}

export function fmtMio(n: number, locale: "da" | "en" = "da") {
  const abs = Math.abs(n);
  if (abs >= 1000) {
    const v = (n / 1000).toFixed(2);
    return locale === "da" ? `${v.replace(".", ",")} mia.` : `${v} bn`;
  }
  const v = n >= 100 ? String(Math.round(n)) : n.toFixed(1).replace(/\.0$/, "");
  return locale === "da" ? `${v.replace(".", ",")} mio.` : `${v}m`;
}
