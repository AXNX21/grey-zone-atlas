import type { Campaign } from "./types";

export const settlementCampaigns: Campaign[] = [
  {
    id: "mass-settlement",
    title: "Mass settlement as strategy",
    dek: "Labour, asylum, family reunion, and birth-rate stacked until the demos is a different country.",
    status: "active",
    period: { start: "1990" },
    domains: ["migration", "supranational", "ngo", "taboo"],
    theaters: ["scandinavia", "germany", "france", "british-isles", "mediterranean", "brussels"],
    attribution: {
      level: "high",
      assigned: ["managerial-class", "european-commission", "un-migration"],
      note: "No single 1990 order said 'replace the demos.' The gates are written: asylum maximalism, family reunification, weak return, regularisation, and a humanitarian vocabulary that treats enforcement as the scandal. Volume plus origin mix plus time is a strategy whether or not it was announced as one. The counter — 'labour shortage and kindness' — explains starts. It does not explain the refusal to stop.",
      hypotheses: [
        {
          actorId: "managerial-class",
          likelihood: "high",
          motive:
            "A post-national Europe, cheaper labour, a moral monopoly, and in some cities a new electorate that does not vote like the old one.",
          capability: "Ministries, parties of the centre, HR, universities, PSB, the NGO layer.",
          evidence:
            "Thirty years of net extra-European migration into high-trust states; Eurostat asylum peaks in 2015 and 2023 both above a million first-time applications; family reunion as a quiet multiplier; citizenship and voting as a lock. Restriction, when tried, is litigated and stigmatised rather than evaluated.",
          counter:
            "Employers wanted workers. Geneva Convention obligations are real. Low European fertility created a hole. Some of this is drift plus path-dependence, not a project. Drift that is defended with lawfare is no longer just drift.",
        },
        {
          actorId: "un-migration",
          likelihood: "high",
          motive: "Migration as a permanent, positively framed, rights-bearing process — the Compact's own language.",
          capability: "Soft law, operational presence, narrative-change toolkits, partnership with the Commission.",
          evidence:
            "Global Compact 2018; IOM as coordinator; OHCHR #StandUp4Migrants and 'harmful narratives' toolboxes; UNHCR doctrine exported into EU asylum law.",
          counter: "Non-binding. States signed. Signing is still a choice — and a tell.",
        },
        {
          actorId: "muslim-brotherhood",
          likelihood: "moderate",
          motive: "Settlement as the precondition for a civilisational hold. Natalism and institutions do the rest.",
          capability: "Federations, mosques, schools, dawa. Not the asylum office.",
          evidence:
            "Primary-source settlement language (Qaradawi, the 1991 memorandum as a document of intent). The Brotherhood did not invent European asylum law. It is the actor most prepared to use what the law delivers.",
          counter:
            "Most arrivals are not Brotherhood cadres. Conflating volume with Islamist command is the cartoon. Ignoring who organises the settled population is the other cartoon.",
        },
        {
          actorId: "russia",
          likelihood: "plausible",
          motive: "Fracture. Occasional border instrumentalisation (Finland, Belarus as platform).",
          capability: "FIMI plus a frontier trick. Not the German BAMF.",
          evidence: "Belarus 2021–26 and the Finnish copy are real and small next to 2015 and family reunion.",
          counter: "This is the primitive file. It does not staff Malmö.",
        },
      ],
    },
    summary:
      "The interior war's body. From late-century labour recruitment through family reunification, the 1990s asylum widening, 2015 as a European elite decision, and the 2022–24 second peak, extra-European settlement has been fast enough to change schools, streets, crime maps, and party systems within a generation. People on the path are persons. Volume, tempo, origin, and the legal refusal to reverse are policy. Policy at this scale is strategy. Denmark after 2019 is the control: the numbers move when the law moves. Sweden 2015–22 is the cautionary file. Germany 2015 is the year the centre of Europe decided, and then spent a decade arguing with the decision.",
    mechanism:
      "Keep several gates half-open at once — asylum, subsidiary protection, family reunion, student and work routes — so that closing one is a press conference and not a stop. Pair with weak return (single-digit effective rates in several large states), a contractor layer paid per arrival, and a taboo on describing origin mix. Citizenship and family formation lock the arithmetic. The next election is then asked to treat the result as the weather.",
    effects: [
      "School and housing segregation as a normal European fact",
      "Party-system shocks (AfD, SD, PVV, RN, Reform, DF, Chega) as a trailing indicator",
      "A welfare-state math problem that social democrats in Denmark named and others still will not",
      "Islamist and clan infrastructure with a demographic floor",
      "A taboo industry whose job is to call the above 'far right'",
    ],
    incidents: [
      {
        date: "2015-09",
        place: "Germany / Europe",
        what: "Merkel's Öffnung. The year that rewrote coalition maths and the moral language of the centre.",
        attribution: "Elite decision, not a weather event",
      },
      {
        date: "2015-12-31",
        place: "Cologne",
        what: "New Year attacks. Origin of the offenders became a style-guide crisis.",
        attribution: "Crime plus a media-taboo case",
      },
      {
        date: "2023",
        place: "EU",
        what: "Second peak of first-time asylum, again around a million, after the 'never again 2015' sermons.",
        attribution: "Policy still open",
      },
    ],
    responses: [
      "Denmark's paradigm shift as the working counter-example",
      "Italy 2022–26 externalisation attempts (Albania) as a live lawfare file",
      "EU Pact as a managerial substitute for a stop — redistribution plus procedures, not a closed gate",
      "Electoral revolts that then meet courts and PSB",
    ],
    sources: [
      { title: "Asylum statistics — first-time applicants", publisher: "Eurostat", date: "2015–2025" },
      { title: "Global Compact for Safe, Orderly and Regular Migration", publisher: "UN / IOM", date: "2018-12" },
      {
        title: "Reframing narratives on migration",
        publisher: "OHCHR",
        date: "2020",
        url: "https://www.ohchr.org/en/migration/reframing-narratives-migration",
      },
    ],
  },
  {
    id: "family-reunification",
    title: "Family reunification as the multiplier",
    dek: "The quiet volume driver that turns an arrival into a settlement.",
    status: "ongoing",
    period: { start: "1990" },
    domains: ["migration", "lawfare", "supranational"],
    theaters: ["scandinavia", "germany", "france", "british-isles", "legal-europe"],
    attribution: {
      level: "confirmed",
      assigned: ["ecthr", "european-commission"],
      note: "The legal texts are public. Article 8 case-law, EU family-reunion directive, and national implementing statutes do more long-run demographic work than the inflatable boat in the photograph. Denmark's attempt to impose waiting periods was litigated (M.A. v. Denmark). That is the file.",
      hypotheses: [
        {
          actorId: "ecthr",
          likelihood: "high",
          motive: "A rights reading in which family life outranks the state's interest in controlling the gate.",
          capability: "Judgments that become the floor under national law.",
          evidence: "M.A. v. Denmark (2021) on waiting periods; a wider Article 8 immigration jurisprudence that NGOs plead as a routine.",
          counter: "The Convention does not, on its face, create a right to choose the country of residence. The Court has said so and then built a practice that often does the opposite.",
        },
        {
          actorId: "ngo-litigation",
          likelihood: "high",
          motive: "Volume as mission. Family reunion is the respectable multiplier.",
          capability: "Applications, test cases, media packaging of the separated family.",
          evidence: "Standardised litigation across capitals; Commission-funded legal networks.",
          counter: "A spouse and a child are not a trick. The campaign question is scale, origin mix, and the refusal of waiting periods that other immigration states treat as ordinary.",
        },
      ],
    },
    summary:
      "If asylum is the camera, family reunification is the arithmetic. Over a decade it often outruns the original arrival. It is legally harder to attack because it photographs as love. The hybrid use is to make a 'pause' look like cruelty and a waiting period look like a violation. Denmark tried. Strasbourg answered. The control case is again the point: this is not gravity.",
    mechanism:
      "Arrive on any gate. Apply for family. Use Article 8, the family-reunion directive, and national welfare to make refusal expensive. Repeat. NGOs supply the case; PSB supplies the face; the court supplies the ratchet.",
    effects: [
      "A second wave that never needs a Mediterranean crossing",
      "Household formation in high-welfare districts",
      "A political third rail: 'you would split families'",
    ],
    incidents: [
      {
        date: "2021",
        place: "Strasbourg / Denmark",
        what: "M.A. v. Denmark — waiting period on family reunion for temporary protection held as a breach.",
        attribution: "ECtHR Grand Chamber",
      },
    ],
    responses: [
      "Waiting periods, income and housing tests, age floors — where courts still allow them",
      "Temporary protection statuses designed (and then litigated) to delay reunion",
    ],
    sources: [
      { title: "M.A. v. Denmark [GC]", publisher: "ECtHR", date: "2021" },
      { title: "Guide on the case-law of the Convention — Immigration", publisher: "ECtHR", date: "2026" },
    ],
  },
  {
    id: "mediterranean-route",
    title: "The wet border and the NGO-smuggler market",
    dek: "Boats, SAR NGOs, smugglers, and the claim that a corridor cannot be closed because it exists.",
    status: "active",
    period: { start: "2013" },
    domains: ["migration", "ngo", "media"],
    theaters: ["mediterranean", "brussels", "newsroom", "legal-europe"],
    attribution: {
      level: "contested",
      assigned: ["ngo-litigation"],
      note: "Humanitarian facts and strategic effects can both be true. People drown. Smugglers sell a product whose last mile has been, in several seasons, a European-flagged deck. Whether SAR NGOs are a pull factor is the live argument — not whether they intend to be soldiers.",
      hypotheses: [
        {
          actorId: "ngo-litigation",
          likelihood: "contested",
          motive: "Save lives; also keep the route politically open; budget and meaning from volume.",
          capability: "Ships, spotter aircraft, lawyers, a media operation that photographs the state as the killer.",
          evidence:
            "Years of SAR–libyan-coast–Italian-port triangles; Italian and Danish political claims of pull; NGO denials that presence changes smugglers' calculus. The market structure is not a secret: a crossing is priced.",
          counter:
            "The duty to rescue at sea is real. Closing SAR without a southern enforcement partner kills people. Attribution of intent (as opposed to effect) is the contested piece.",
        },
        {
          actorId: "european-commission",
          likelihood: "moderate",
          motive: "A managed appearance of control that does not include a closed gate.",
          capability: "Frontex as theatre, relocation as morality, infringement as stick.",
          evidence: "Pact on Migration as redistribution-plus-procedure; fights with Italy and Hungary; funding of both border management and the NGO layer.",
          counter: "The Commission is not captaining the boats. It is refusing the only policy that would empty them.",
        },
      ],
    },
    summary:
      "Lampedusa, the Canaries, the Aegean: the photograph of the interior war. The hybrid move is downstream of the deck — to treat any actual border as a crime scene, and any southern government that tries to externalise (Italy–Albania, the new Rwanda-hub talk in 2026) as a defendant. Northern NGOs and courts live the sermon. Southern interior ministries live the night.",
    mechanism:
      "A crossing is sold in a Libyan or Tunisian market. Rescue, disembarkation in a safe European port, and a slow asylum procedure complete the product. NGOs, smugglers, and reception contractors do not need a meeting. They need the last mile to remain European.",
    effects: [
      "A permanent wet corridor as a political fact",
      "Italian, Greek, and Spanish politics as the first responders of a continental policy they do not set",
      "A media liturgy in which the drowned are a brief against enforcement, never against the market",
    ],
    incidents: [
      {
        date: "2013-10",
        place: "Lampedusa",
        what: "Shipwreck that set the European moral frame for a decade.",
        attribution: "Tragedy used as policy",
      },
      {
        date: "2023–2026",
        place: "Italy–Albania",
        what: "Externalisation attempt, immediately a lawfare target.",
        attribution: "Elected policy vs courts",
      },
    ],
    responses: [
      "Externalisation and return hubs (Italy, Denmark-led 2026 Rwanda talk with DE/AT/NL/EL)",
      "Deals with origin and transit states that NGOs call complicity",
      "Naval pushback that courts call illegal and voters call a border",
    ],
    sources: [
      { title: "Italy–Albania protocol litigation coverage", publisher: "Italian courts / press", date: "2024–2026" },
      { title: "Rwanda as Return-Hub: EU plans", publisher: "NZZ", date: "2026-09" },
    ],
  },
  {
    id: "global-compact",
    title: "The Global Compact and narrative change",
    dek: "Soft law plus a professional project to change what the public is allowed to believe.",
    status: "ongoing",
    period: { start: "2016" },
    domains: ["migration", "taboo", "supranational", "media"],
    theaters: ["brussels", "newsroom", "online"],
    attribution: {
      level: "confirmed",
      assigned: ["un-migration"],
      note: "The Compact is a text. The narrative-change programmes are branded. This is the rare file where the campaign writes its own name. Non-binding is the preferred dismissal. Implementation architecture (IOM as coordinator, UN Network on Migration, Compact objectives on inclusion and public perception) is the preferred reality.",
      hypotheses: [
        {
          actorId: "un-migration",
          likelihood: "confirmed",
          motive: "Make migration a governed, positive, permanent condition and treat restrictionist talk as a harmful narrative to be rewritten.",
          capability: "UN process, IOM field presence, OHCHR toolkits, journalist training, partnership with national integration agencies.",
          evidence:
            "GCM adopted 19 December 2018; IOM as coordinator; OHCHR #StandUp4Migrants and seven-element narrative toolboxes; ICMPD-class databases of hundreds of European 'migration communication campaigns' 2012–22.",
          counter:
            "States signed a non-binding compact. Several (US, Hungary, others) refused. A compact is not a tank. It is a script — and scripts are how a war of position is fought.",
        },
        {
          actorId: "european-commission",
          likelihood: "high",
          motive: "Align EU communication and funding with the Compact's moral weather.",
          capability: "Grants, integration funds, anti-racism and 'disinfo' programmes.",
          evidence: "Commission communication lines that rhyme with Compact objectives; funding of the NGO amplifiers.",
          counter: "The EU has its own migration competence. It does not need the UN to want more Europe.",
        },
      ],
    },
    summary:
      "The Marrakech compact was sold as boring and denounced as a stealth constitution. Both were half right. It is not justiciable like a directive. It is a licence for a professional class — IOM, OHCHR, national integration agencies, NGOs — to treat public hostility to volume as a communications failure rather than a political fact. 'Narrative change' is their term. This atlas takes them at their word.",
    mechanism:
      "Write a cooperative framework. Staff it. Fund campaigns that 'humanise', 'myth-bust', and 'reframe.' Measure success as a shift in public preference. Pair with hate and disinfo law so the old narrative becomes not only unfashionable but sticky.",
    effects: [
      "A funded industry whose KPI is the Overton window",
      "Journalists trained inside the toolkit and then presented as independent",
      "A 2018 European political row that the centre still calls a far-right panic — and that several governments quietly stayed out of",
    ],
    incidents: [
      {
        date: "2018-12-10",
        place: "Marrakech",
        what: "Adoption conference. European protests ('March against Marrakech') and several government opt-outs.",
        attribution: "Text plus political weather",
      },
      {
        date: "2020",
        place: "Geneva / global",
        what: "OHCHR narrative toolbox and #StandUp4Migrants as an explicit campaign against 'harmful' frames.",
        attribution: "OHCHR, in its own name",
      },
    ],
    responses: [
      "Non-signature and later distancing by several states",
      "Parliamentary motions treating the Compact as a constitutional risk",
      "Almost no dent in the implementation bureaucracy",
    ],
    sources: [
      {
        title: "Global Compact for Migration",
        publisher: "IOM",
        date: "2018",
        url: "https://www.iom.int/global-compact-migration",
      },
      {
        title: "Building human rights-based narratives on migrants and migration",
        publisher: "OHCHR",
        date: "2020",
      },
    ],
  },
];
