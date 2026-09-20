import type { Theater } from "./types";

export const theaters: Theater[] = [
  {
    id: "scandinavia",
    name: "Scandinavia",
    short: "High-trust societies as the prize and the laboratory",
    region: "Denmark, Sweden, Norway, plus Finland as cousin",
    countries: ["Denmark", "Sweden", "Norway", "Finland"],
    summary:
      "The interior campaign is easiest to see where the starting trust was highest. Sweden ran the experiment at scale: generous asylum, weak enforcement, 'vulnerable areas', grenade crime, and a 2022 political break. Denmark ran the counter-experiment: paradigm shift, ghetto/parallel-society laws, jewellery law as theatre, Syria returns, and a social-democratic conversion. Norway sits between. This is not a sideshow. It is the proof that policy, not weather, sets the numbers.",
    pressure: "critical",
    whyHere:
      "Small nations cannot hide volume in a continent. PSB cultures (DR, SVT, NRK) are strong; consensus politics made taboo cheap to enforce and, in Denmark, also cheap to break once social democrats decided the welfare state was the victim. Sweden's 2015–22 arc is the European cautionary file.",
    map: { x: 54, y: 20 },
  },
  {
    id: "british-isles",
    name: "British Isles",
    short: "Channel boats, two-tier, grooming files, Irish surge",
    region: "United Kingdom and Ireland",
    countries: ["United Kingdom", "Ireland"],
    summary:
      "The UK holds the English-language manual: Rotherham and the other grooming-gang files as official cowardice; ECHR Rule 39 against Rwanda as the supranational lock in one photograph; 2024 two-tier policing as a mass lesson; Online Safety Act and non-crime hate incidents as the speech crust. Ireland 2022–26 is the compressed version — a rapid asylum surge into a country that had told itself a nicer story.",
    pressure: "critical",
    whyHere:
      "Common law, a global language, and a still-usable parliament make this the theatre where reversal is most argued and most litigated. Dublin is the reminder that 'we are not Sweden' is not a strategy.",
    map: { x: 26, y: 34 },
  },
  {
    id: "france",
    name: "France",
    short: "Banlieue, laïcité under siege, the teacher as target",
    region: "Metropolitan France and the overseas echo",
    countries: ["France"],
    summary:
      "The oldest European file on Islamist entry and the hardest on the street: 2005, Charlie Hebdo, Bataclan, Nice, Samuel Paty, Dominique Bernard, 2023 Nahel riots. Laïcité is the remaining state doctrine that names a civilisational conflict. It is also the doctrine the university, the NGO layer, and parts of the PSB would like to retire as 'phobic.' Brotherhood and Salafi work here is documented by French intelligence in language other countries still hedge.",
    pressure: "critical",
    whyHere:
      "A republic that still teaches that the citizen is naked before the law is the natural enemy of parallel society. The assassination of teachers is not a crime wave. It is a campaign against the school as a French institution.",
    map: { x: 32, y: 50 },
  },
  {
    id: "germany",
    name: "Germany",
    short: "2015 as a European decision, 2024–26 as a slow take-back",
    region: "Federal Republic, with Austria in the same political weather",
    countries: ["Germany", "Austria"],
    summary:
      "Merkel's 2015 Öffnung was the largest single elite decision in the interior war: a year that rewrote coalition maths, AfD, New Year's Cologne, and the moral language of 'we can do it.' The German state has since tightened, and the 2024–26 European shift runs through Berlin as much as Brussels. Public-service broadcasting (ARD/ZDF) and the Verfassungsschutz's 'extremism' categories are the taboo machine at industrial scale.",
    pressure: "high",
    whyHere:
      "Size. What Germany absorbs, Europe must argue about. What German courts and PSB call extremist, smaller states import as a standard.",
    map: { x: 46, y: 40 },
  },
  {
    id: "low-countries",
    name: "Low Countries",
    short: "Theo van Gogh to a new right, and the original cartoon war",
    region: "Netherlands and Belgium, with Brussels the double capital",
    countries: ["Netherlands", "Belgium"],
    summary:
      "Fortuyn murdered, van Gogh murdered, the Danish cartoons exploding through this dense Islamist milieu, Molenbeek as a European proper noun, and Dutch politics as the first long-running revolt that still has to govern with courts and EU law. Belgium is the host of the Commission and of some of the hardest parallel districts in Europe. Two countries, one lesson: early warning was punished.",
    pressure: "high",
    whyHere:
      "Density plus institutions. The men who said it first were shot or isolated; the grandchildren of that argument now win seats and still lose in Luxembourg.",
    map: { x: 36, y: 38 },
  },
  {
    id: "mediterranean",
    name: "Mediterranean arrivals",
    short: "The wet border, the NGO-smuggler market, southern politics",
    region: "Italy, Spain, Greece, and the central Mediterranean",
    countries: ["Italy", "Spain", "Greece", "Malta", "Cyprus"],
    summary:
      "Lampedusa, the Canaries, the Aegean, and the NGO ships as a political fact. Southern governments live the arrival; northern NGOs and courts live the sermon. Italy's 2022–26 attempt to externalise (Albania) is a live lawfare file. Spain's and Greece's numbers swing with routes, not with speeches in Brussels.",
    pressure: "high",
    whyHere:
      "Geography. Without a wet border that is actually a border, the rest of the interior campaign is a debate about a fait accompli.",
    map: { x: 48, y: 70 },
  },
  {
    id: "brussels",
    name: "Brussels machine",
    short: "Commission, Parliament, the grant-and-directive state",
    region: "EU institutions and the industry around them",
    countries: ["Belgium (host)", "European Union"],
    summary:
      "Not a city so much as a method: directives, funds, codes of conduct, 'European values' as a stick, and a permanent conversation among people who will not live in Malmö's vulnerable areas. The Pact on Migration, the DSA, the Democracy Shield, and the anti-racism and 'disinfo' programmes are written here. So are the infringement letters when a member state tries Denmark.",
    pressure: "critical",
    whyHere:
      "This is where national majorities go to die as technical files. The machine is not a conspiracy. It is a career.",
    map: { x: 37, y: 41 },
  },
  {
    id: "legal-europe",
    name: "Legal Europe",
    short: "Strasbourg, Luxembourg, the rights ratchet",
    region: "ECtHR, CJEU, national apex courts applying them",
    countries: ["Council of Europe", "EU Court of Justice", "national apex courts"],
    summary:
      "The theatre with no crowd and the most power. Rule 39 against a Rwanda flight; Article 8 family-life blocking removal; Article 3 as a bar even to criminals; preliminary references that freeze a Danish or Italian experiment. Lawfare is not a metaphor when the court is the battlefield.",
    pressure: "critical",
    whyHere:
      "A political community that cannot remove, cannot choose. The courts did not invent human rights. They invented a one-way reading of them that treats the demos as the risk.",
    map: { x: 42, y: 48 },
  },
  {
    id: "campus",
    name: "Campus",
    short: "Where the next ministry is trained to see the nation as the problem",
    region: "European and Anglophone universities as one market",
    countries: ["EU", "United Kingdom", "with US/Gulf feeder programmes"],
    summary:
      "Not on the land map. On the career map. DEI administrations, Qatar-funded Middle East studies, student Islamist orgs, and a speech climate in which 'decolonise' is a job and 'demographic' is a slur. After 7 October 2023 the campus stopped being deniable as a side-show: it showed what it had been teaching.",
    pressure: "high",
    whyHere:
      "Capture here is delayed capture of the civil service, the newsroom, the NGO, and the bench. That is the long march as an org chart, not as a vibe.",
    map: { x: -1, y: -1 },
  },
  {
    id: "newsroom",
    name: "Newsroom and PSB",
    short: "The picture a country gets of itself",
    region: "Public-service broadcasting and prestige press",
    countries: ["BBC", "DR", "SVT", "NRK", "ARD/ZDF", "France Télévisions", "RTÉ", "prestige press"],
    summary:
      "The interior war is lost in the running order. Public-service broadcasters still set the moral weather in northern Europe; prestige papers set it for the people who staff the Commission. Style guides, expert rolodexes, and a professional fear of the 'far-right' story about themselves are the tools.",
    pressure: "high",
    whyHere:
      "A voter cannot punish a policy they are not shown. PSB is licensed as a public good; the hybrid question is whose public.",
    map: { x: -1, y: -1 },
  },
  {
    id: "online",
    name: "Online enforcement",
    short: "Platforms, DSA, the counter-public in a cage",
    region: "VLOPs, codes of conduct, national online-safety law",
    countries: ["EU Digital Services Act space", "UK Online Safety Act", "national hate-speech portals"],
    summary:
      "Where the taboo is industrialised. Hate-speech and disinfo codes, trusted flaggers, advertiser boycotts, payment-processor discipline, and the 2025 bolting of voluntary codes onto DSA audits. The counter-public exists; the campaign is to make it expensive, ugly, and legally sticky.",
    pressure: "high",
    whyHere:
      "After the press lost monopoly, the state needed a new chokepoint. The platform is that point. The Commission understood this earlier than most parliaments.",
    map: { x: -1, y: -1 },
  },
];

export const theaterById = Object.fromEntries(theaters.map((t) => [t.id, t])) as Record<
  Theater["id"],
  Theater
>;
