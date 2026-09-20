import type { Campaign } from "./types";

export const lawfareCampaigns: Campaign[] = [
  {
    id: "counter-legislation",
    title: "Counter-legislation",
    dek: "After the shock, a new crime against noticing — hate, disinfo, 'extremism', Islamophobia.",
    status: "active",
    period: { start: "2001" },
    domains: ["lawfare", "taboo", "public-service"],
    theaters: ["british-isles", "scandinavia", "brussels", "online", "legal-europe"],
    attribution: {
      level: "high",
      assigned: ["managerial-class", "european-commission", "oic"],
      note: "Parliaments pass these laws. The campaign character is the recursion: each migration, crime, or cartoon shock produces not reversal but a wider speech crime, a wider 'hate' definition, a wider platform duty. Model bills and NGO glossaries travel. Sincerity is irrelevant.",
      hypotheses: [
        {
          actorId: "managerial-class",
          likelihood: "high",
          motive: "Protect a policy that cannot survive ordinary description. Stigma first, statute second.",
          capability: "Justice ministries, equality bodies, prosecutors, HR, professional associations.",
          evidence:
            "UK non-crime hate incidents at six figures before partial climb-down; Scotland Hate Crime Act 2021; Irish hate-speech attempts; national 'anti-racism' action plans that treat demographic talk as a threat. The operational test: can a journalist report crime by origin without a process?",
          counter:
            "Incitement law is older than this file. Some hate is real. The bizarre element is the expansion from violence to offence to 'harmful but legal' to police-recorded non-crime.",
        },
        {
          actorId: "european-commission",
          likelihood: "high",
          motive: "A continental speech infrastructure through the DSA and the hate/disinfo codes.",
          capability: "Regulation, codes of conduct, VLOP audits, infringement.",
          evidence:
            "2016 hate-speech code; 2025 Hate Speech+ and Disinfo codes endorsed into the DSA; Democracy Shield. Trusted flaggers are often the same NGO layer.",
          counter: "Illegal content is illegal. The fight is the definition, and who is trusted to flag it.",
        },
        {
          actorId: "oic",
          likelihood: "moderate",
          motive: "Blasphemy as hate. Islamophobia as the working title.",
          capability: "UN track, crisis diplomacy after cartoons and Quran burnings, alliances with Western NGOs.",
          evidence: "Defamation-of-religions history; Istanbul Process; 2025 CFM resolution on Scandinavian Quran burnings.",
          counter: "European hate-speech law has Christian-era blasphemy cousins and secular ones. The OIC did not write the Scottish Act. It is happy to use it.",
        },
      ],
    },
    summary:
      "The user's word was right: bizarre. A political community under settlement pressure, Islamist speech enforcement, and parallel streets answers by criminalising the description. 'Hate' and 'disinformation' become the working titles of a veto on arithmetic, origin, and Islamism. The UK's non-crime hate incident was the pure type — police product without a crime. Scotland's 2021 Act was the statutory cousin. The DSA is the continental factory. Each bill is sold as safety. Each bill raises the cost of the only politics that would reverse the cause.",
    mechanism:
      "Glossary (NGO, academic, OIC) → action plan → statute or code → platform duty → HR and prosecution practice. After a riot or a poll, add a clause. Never add a removal.",
    effects: [
      "Self-censorship in newsrooms and classrooms as the cheap version of a ban",
      "A police and prosecutor workload pointed at words",
      "A counter-public trained to talk like a hunted animal — and then displayed as proof of extremism",
    ],
    incidents: [
      {
        date: "2021-04",
        place: "Scotland",
        what: "Hate Crime and Public Order Act. Stirring-up offences expanded; dwelling defence as the argument.",
        attribution: "Statute",
      },
      {
        date: "2024–2026",
        place: "United Kingdom",
        what: "Political row and partial climb-down on non-crime hate incidents after the Streeting/Braverman years of argument.",
        attribution: "Police practice meeting politics",
      },
      {
        date: "2025-01",
        place: "Brussels",
        what: "Hate Speech+ code integrated into the DSA framework.",
        attribution: "Commission and Board for Digital Services",
      },
    ],
    responses: [
      "Repeal and climb-down attempts (UK NCHI)",
      "Free-speech carve-outs that NGOs call loopholes",
      "Jurisdictions (Denmark on Quran burnings, 2023) that sometimes go the other way under street and diplomatic pressure",
    ],
    sources: [
      { title: "Hate Crime and Public Order (Scotland) Act 2021", publisher: "Scottish Parliament", date: "2021" },
      {
        title: "First results under the revised Code of Conduct on Countering Illegal Hate Speech+",
        publisher: "European Commission",
        date: "2026-04",
      },
      { title: "A definition of anti-Muslim hostility", publisher: "UK Government", date: "2026-03" },
    ],
  },
  {
    id: "dsa-speech",
    title: "DSA as speech infrastructure",
    dek: "Voluntary codes, then audits. Platforms as the chokepoint the press no longer is.",
    status: "active",
    period: { start: "2022" },
    domains: ["lawfare", "media", "taboo"],
    theaters: ["brussels", "online", "newsroom"],
    attribution: {
      level: "confirmed",
      assigned: ["european-commission"],
      note: "The DSA is a regulation. The 2025 conversion of the disinfo and hate-speech codes into DSA codes of conduct is on the Commission press wire. What is contested is not the machine. It is whether 'disinformation' and 'hate' will be operated as a veto on this atlas's subject matter. Early enforcement (Meta, TikTok, X, election-related orders) says the machine is live.",
      hypotheses: [
        {
          actorId: "european-commission",
          likelihood: "confirmed",
          motive: "A continent-sized handle on the only remaining public square, sold as safety and democracy.",
          capability: "VLOP designation, risk assessments, audits, fines, data-access fights, trusted flaggers.",
          evidence:
            "DSA fully in force 2024; Hate Speech+ endorsed January 2025; Disinfo code endorsed 13 February 2025, auditable from 1 July 2025; 2025–26 proceedings against designated platforms.",
          counter:
            "Illegal content, scams, and child-safety are real. A regulation can do two jobs. The hybrid job is the second one: who is a trusted flagger, what is a 'systemic risk' to civic discourse, and whether a true statement about origin or Islamism is a risk.",
        },
        {
          actorId: "ngo-litigation",
          likelihood: "high",
          motive: "Become the flagger. Export the glossary into platform policy.",
          capability: "Trusted-flagger status, monitoring reporter networks, Brussels presence.",
          evidence: "The hate-speech code's independent monitoring reporters; the same organisations in the anti-racism and 'disinfo' grant circuit.",
          counter: "Someone must flag illegal content. The question is the roster.",
        },
      ],
    },
    summary:
      "When the press lost monopoly, the interior campaign needed a new chokepoint. The Digital Services Act, plus two codes that began 'voluntary', is that chokepoint at EU scale. Hate and disinformation — the two working titles of counter-legislation — are now audit criteria for companies that cannot afford to lose the European market. A Danish or Italian restrictionist can still tweet. The distribution layer is no longer a liberal given.",
    mechanism:
      "Designate VLOPs. Oblige systemic-risk assessments. Bolt codes of conduct onto the audit. Staff trusted flaggers from the NGO layer. Fine. Repeat at each election via the Rapid Response System.",
    effects: [
      "Over-removal as the rational corporate strategy",
      "A Brussels handle on the counter-public",
      "National online-safety laws (UK) as cousins, not alternatives",
    ],
    incidents: [
      {
        date: "2024-02",
        place: "EU",
        what: "DSA fully applicable.",
        attribution: "Regulation",
      },
      {
        date: "2025-02-13",
        place: "Brussels",
        what: "Disinfo code integrated into the DSA. Auditable from 1 July 2025.",
        attribution: "Commission + European Board for Digital Services",
      },
      {
        date: "2025-10",
        place: "Brussels",
        what: "Preliminary findings against Meta and TikTok on DSA duties.",
        attribution: "Commission enforcement",
      },
    ],
    responses: [
      "US political counter-pressure on 'censorship by proxy'",
      "Platforms that comply and platforms that litigate",
      "Almost no European party of government running on repeal",
    ],
    sources: [
      {
        title: "Commission endorses integration of the Code of Practice on Disinformation into the DSA",
        publisher: "European Commission",
        date: "2025-02-13",
      },
      { title: "Supervision of designated VLOPs and VLOSEs under the DSA", publisher: "European Commission", date: "2026" },
    ],
  },
  {
    id: "ecthr-lock",
    title: "The Strasbourg lock",
    dek: "Articles 3 and 8, Rule 39: you may vote for removal. You may not remove.",
    status: "active",
    period: { start: "1990" },
    domains: ["supranational", "lawfare", "migration"],
    theaters: ["legal-europe", "british-isles", "scandinavia", "mediterranean"],
    attribution: {
      level: "confirmed",
      assigned: ["ecthr"],
      note: "Judgments and interim measures are public. The hybrid character is the ratchet: a rights instrument built for a different Europe, operated as a constitutional bar on the interior policy voters now pick. Leaving the Convention is the nuclear counter, and it is no longer a crank sentence in London.",
      hypotheses: [
        {
          actorId: "ecthr",
          likelihood: "confirmed",
          motive: "A jurisprudence in which the state's migration control is the suspect and the applicant is the default victim.",
          capability: "Binding judgments for Convention states; Rule 39 as a last-minute veto (Rwanda, June 2022).",
          evidence:
            "Rule 39 against the first UK–Rwanda flight, 14 June 2022; Article 8 family-life immigration case-law; Article 3 as a bar even where domestic courts had allowed removal; M.A. v. Denmark.",
          counter:
            "Torture is a crime. Family life is a good. A court that cannot stop a removal to harm is not a court. The campaign question is the one-way reading, the NGO-fed docket, and the political non-accountability of the bench.",
        },
        {
          actorId: "ngo-litigation",
          likelihood: "high",
          motive: "Find the applicant. Feed the ratchet.",
          capability: "A standing army of lawyers who know the Court's forms better than interior ministries do.",
          evidence: "Repeat litigators on the immigration docket; Commission and foundation funding of the same shops.",
          counter: "Access to court is a right. Repeat work is how test cases are made in any field.",
        },
      ],
    },
    summary:
      "The photograph is a runway at night: a flight that a parliament had authorised, a supreme court had not yet killed, and a European court stopped with an interim measure. Rwanda 2022 is not the whole file. It is the file the public can see. Article 8 family life and Article 3 non-refoulement do the daily work — criminals who cannot be sent, failed asylum seekers who become facts on the ground, waiting-period experiments that die in Strasbourg. A political community that cannot remove cannot choose. That is a constitutional fact, not a mood.",
    mechanism:
      "Applicant plus NGO plus Rule 39 or a full judgment. Domestic human-rights acts transmit. Politicians discover they bought a one-way valve.",
    effects: [
      "Effective return rates that make asylum a settlement route",
      "A live 'leave the Convention' politics in the UK",
      "Danish and Italian experiments designed as workarounds, then sued as such",
    ],
    incidents: [
      {
        date: "2022-06-14",
        place: "UK / Strasbourg",
        what: "Rule 39 interim measures empty the first Rwanda flight.",
        attribution: "ECtHR. Not the EU. The distinction itself became a political fact.",
      },
      {
        date: "2024",
        place: "UK",
        what: "Safety of Rwanda Act as an attempt to legislate past the Court. Later political collapse of the scheme.",
        attribution: "Parliament vs the lock",
      },
      {
        date: "2026-09",
        place: "Kigali / EU",
        what: "Denmark, Germany, Austria, Greece, Netherlands talking Rwanda-style return hubs after an EU legal opening.",
        attribution: "The workaround, round two",
      },
    ],
    responses: [
      "Domestic statutes that try to disapply HRA/Convention pieces",
      "Third-country processing as geography instead of repeal",
      "Talk of leaving the Convention — still mostly talk",
    ],
    sources: [
      { title: "EU court didn’t prevent Rwanda flight from taking off", publisher: "Full Fact", date: "2022-06" },
      { title: "Safety of Rwanda (Asylum and Immigration) Bill factsheet", publisher: "UK Government", date: "2024-01" },
    ],
  },
  {
    id: "oic-islamophobia",
    title: "Islamophobia as imported blasphemy law",
    dek: "From 'defamation of religions' at the UN to European hate definitions and diplomatic crises.",
    status: "ongoing",
    period: { start: "1999" },
    domains: ["lawfare", "taboo", "islamist-entry", "supranational"],
    theaters: ["legal-europe", "brussels", "scandinavia", "online"],
    attribution: {
      level: "high",
      assigned: ["oic", "muslim-brotherhood"],
      note: "The OIC track is documented across twenty-five years of UN resolutions and the Istanbul Process. European statutes are written in European buildings. The rhyme is the campaign: a blasphemy standard the voters did not pass, advanced in the language of hate and safety, with cartoon and Quran-burning crises as the forcing events.",
      hypotheses: [
        {
          actorId: "oic",
          likelihood: "high",
          motive: "Protect Islamic doctrine and Islamist politics from European speech. Win in Geneva what cannot be won in a Danish election.",
          capability: "57 states, UNHRC arithmetic, crisis diplomacy, a dedicated Islamophobia file.",
          evidence:
            "Defamation-of-religions resolutions; HRC 16/18 and Istanbul Process; 2025 CFM resolution condemning Quran burnings in Sweden, Denmark, the Netherlands and calling to 'revigorate' Istanbul.",
          counter:
            "Western negotiators thought 16/18 moved the frame from religions to persons. They are not entirely wrong. The OIC is not entirely finished.",
        },
        {
          actorId: "muslim-brotherhood",
          likelihood: "high",
          motive: "The domestic amplifier: Islamophobia as the working veto on security policy, satire, and apostasy talk.",
          capability: "Federations, complaints, campus, media allies.",
          evidence: "European Brotherhood-linked orgs as standard partners in 'anti-hate' coalitions; the same word, the same crises.",
          counter: "Muslims are a protected class against actual violence. The campaign is the expansion from persons to doctrine to politics.",
        },
      ],
    },
    summary:
      "The cartoons were a Danish press story. The OIC made them a diplomatic system. Quran burnings in 2023 were a Swedish and Danish legal-political crisis with a street and a foreign ministry attached. 'Islamophobia' is the successful rebrand of a blasphemy demand that could not be sold under its own name. Real bigotry exists and is not this file. This file is the attempt to make Islamic doctrine, Islamist politics, and settlement statistics uncriticisable in the only political communities still able to laugh at a prophet.",
    mechanism:
      "Crisis (cartoon, film, burning) → OIC and street → Western politicians offer a definition, a unit, a bill → NGO glossary hardens → platform and PSB enforcement. Repeat.",
    effects: [
      "A European blasphemy law that dare not use the word",
      "Cartoonists and teachers as the unprotected class",
      "Diplomatic cost imposed on small states (Denmark, Sweden) that still have a memory of press freedom",
    ],
    incidents: [
      {
        date: "2005-09",
        place: "Denmark",
        what: "Jyllands-Posten cartoons. The teaching case for the whole domain.",
        attribution: "Press freedom meeting a transnational enforcement network",
      },
      {
        date: "2011–",
        place: "Istanbul / Geneva",
        what: "Istanbul Process as the implementation track of HRC 16/18.",
        attribution: "OIC–Western diplomatic compromise, unfinished",
      },
      {
        date: "2023–2025",
        place: "Sweden / Denmark / Netherlands",
        what: "Quran-burning crises; Danish legal tightening; OIC 2025 resolution still seized of the file.",
        attribution: "Street plus diplomacy plus statute",
      },
    ],
    responses: [
      "Occasional official definitions that try to protect criticism of religion (UK 2026 anti-Muslim hostility text is one such attempt)",
      "Danish cartoon-era holdouts, then partial legal tightening in 2023",
      "Teachers who still show the image — a shrinking set",
    ],
    sources: [
      { title: "UN resolution 16/18 and the Istanbul Process", publisher: "CMI", date: "2023" },
      { title: "OIC CFM-51 political resolutions (Quran burnings, Istanbul Process)", publisher: "OIC", date: "2025-06" },
    ],
  },
];
