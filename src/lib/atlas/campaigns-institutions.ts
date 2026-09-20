import type { Campaign } from "./types";

export const institutionCampaigns: Campaign[] = [
  {
    id: "university-capture",
    title: "The university as factory",
    dek: "Elite formation, speech codes, Gulf money, and a quad that showed its work after 7 October.",
    status: "active",
    period: { start: "1968" },
    domains: ["university", "taboo", "islamist-entry"],
    theaters: ["campus", "british-isles", "france", "germany", "brussels"],
    attribution: {
      level: "high",
      assigned: ["university-admin", "qatar", "muslim-brotherhood"],
      note: "Three layers, not one colonel: a long administrative-ideological capture (the march through the institution as self-description), a foreign-gift layer (Qatar the largest single-state example), and an Islamist student pipeline (FEMYSO and cousins). 7 October 2023 did not create the product. It displayed it.",
      hypotheses: [
        {
          actorId: "university-admin",
          likelihood: "high",
          motive: "Growth of the administrative estate; risk-off peace with activists; a moral monopoly that is also a hiring filter.",
          capability: "Speech codes, DEI vetoes, ethics boards, student discipline, control of the rolodex that feeds ministries.",
          evidence:
            "Proliferation of equity offices; no-platform customs; replicated framework documents across hundreds of campuses; the post-2023 disciplinary asymmetry (which chants were 'context').",
          counter:
            "Universities have always been ideological. 1968 is not a Gulf plot. The hybrid upgrade is the administrative veto plus the foreign money plus the refusal of viewpoint diversity in the professions that matter.",
        },
        {
          actorId: "qatar",
          likelihood: "high",
          motive: "Buy the formation of diplomats, Middle East studies, and the climate in which Brotherhood politics is a centre and Israel is a defendant.",
          capability: "Gifts at a scale Western universities will not refuse; branch campuses; chairs.",
          evidence:
            "ISGAP and related tracking of declared and undeclared Gulf gifts in the Anglophone world; European programmes smaller and still material; Georgetown, Cornell, and others as the American mirror European elites still copy.",
          counter:
            "A gift is not a fatwa. Some programmes are medical and technical. The campaign question is social-science, diplomatic training, and the correlation with campus climate — not the existence of a Qatari hospital wing.",
        },
        {
          actorId: "femyso",
          likelihood: "high",
          motive: "Cadre. Respectable access. The next federation president is a student now.",
          capability: "Student politics, EU youth funds, training.",
          evidence: "French 2025 intelligence language on FEMYSO as a Brotherhood farm system; Qatari funding reports since 2016.",
          counter: "Student politics is allowed. A named pipeline is still a named pipeline.",
        },
      ],
    },
    summary:
      "A political community is reproduced in its schools. Capture of the university is delayed capture of the civil service, the newsroom, the NGO, and the bench. The tools are administrative (the office that signs off hiring and events), intellectual (the historic nation as defendant), and financial (Gulf and foundation money). After 7 October 2023 the quad stopped being a metaphor. What it had been teaching was visible to anyone who had not been in the building.",
    mechanism:
      "Hire administrators who speak the language. Filter faculty. Fund the programmes that set the Overton window on Islamism, borders, and 'decolonisation.' Train the student orgs. Export the graduates into public service. Repeat for a generation. That is a war of position, not a debate society.",
    effects: [
      "A professional class that treats demographic and Islamist questions as moral contamination",
      "Middle East studies as a climate, not a field",
      "A farm system for the NGO and Brotherhood layers",
      "7 October as a revealing event rather than an aberration",
    ],
    incidents: [
      {
        date: "2016–",
        place: "Europe / US",
        what: "ISGAP-class work on undeclared Gulf gifts begins to dent the 'no foreign influence here' line.",
        attribution: "Gift ledgers, still incomplete",
      },
      {
        date: "2023-10",
        place: "Campuses, transatlantic",
        what: "Post-7 October encampments, harassment, and administrative paralysis.",
        attribution: "The product, on display",
      },
      {
        date: "2025",
        place: "France",
        what: "Intelligence language on FEMYSO as a Brotherhood training platform becomes a public European fact.",
        attribution: "French services, as reported 2025–26",
      },
    ],
    responses: [
      "Gift-register statutes, still leaky",
      "Trustee and donor revolts, mostly Anglophone",
      "European interior ministries still hiring from the same faculties",
    ],
    sources: [
      { title: "ISGAP reporting on Qatari and Gulf university funding", publisher: "ISGAP", date: "2024–2026" },
      { title: "French intelligence on FEMYSO / Council of European Muslims", publisher: "French services via press", date: "2025" },
    ],
  },
  {
    id: "psb-monopoly",
    title: "Public service as weather system",
    dek: "BBC, DR, SVT, ARD/ZDF — the picture a country gets of itself, licensed as a public good.",
    status: "active",
    period: { start: "1990" },
    domains: ["media", "public-service", "taboo"],
    theaters: ["newsroom", "scandinavia", "british-isles", "germany", "france"],
    attribution: {
      level: "moderate",
      assigned: ["psb-complex", "managerial-class"],
      note: "Bias can be professional, not tasked. The tell is repetition: origin hedged, restrictionist politics pathologised, Islamist violence as a cohesion story, the same expert rolodex as the ministry. Ombudsman rulings, leaked slacks, and audience-trust collapse are the open record. A politburo is not required. Recruitment is enough.",
      hypotheses: [
        {
          actorId: "psb-complex",
          likelihood: "high",
          motive: "Remain the moral centre; protect the licence-fee bargain; treat 'polarisation' as the threat rather than the underlying policy.",
          capability: "Running order, style guides, the evening news as liturgy, internal values regimes.",
          evidence:
            "Style-guide fights after Cologne and Rotherham; Scandinavian and German audience-trust rows; BBC impartiality reviews that never quite bite; the 2015–24 migration file as a decade of humanitarian close-ups against a missing pattern.",
          counter:
            "PSBs also investigate Islamist networks and gang crime — later, under pressure, and with a 'context' wrap. Some bias claims are partisan. Trust collapse has more causes than this file. The campaign question is the default frame, not the existence of a contrary documentary.",
        },
        {
          actorId: "managerial-class",
          likelihood: "high",
          motive: "A broadcaster that sounds like the ministry is a force multiplier.",
          capability: "Appointments, charter reviews, the shared university.",
          evidence: "Revolving doors; 'values' language in charters that maps onto the anti-discrimination maximalism of the civil service.",
          counter: "Governments of the right appoint too, and still get the same weather. That is the capture thesis, not a refutation of it.",
        },
      ],
    },
    summary:
      "In Nordic and British English, 'public service' means the broadcaster that is supposed to be the country talking to itself. Hybrid war that does not take this layer is a protest. The house ideology is not Marxism in a licence-fee costume. It is a professional common sense: diversity as sacrament, restriction as character defect, Islamism as a misunderstanding, the voter as a risk to be managed. DR, SVT, BBC, ARD — different houses, same weather. Commercial prestige press is the cousin for the people who staff Brussels.",
    mechanism:
      "Recruit from the same faculties as the ministry. Write a style guide that hedges origin and religion. Keep an expert rolodex that is the NGO layer. After each attack, a cohesion package. After each poll, a piece on 'why they fall for it.' Call this impartiality.",
    effects: [
      "A public that learns the pattern from the street and Telegram, then is told the street is the far right",
      "Licence-fee politics as a proxy war over reality",
      "A newsroom unable to cover two-tier policing without becoming the story",
      "Denmark's 2023–26 forlig as the control-case version: the word survived, the auditor did not",
    ],
    incidents: [
      {
        date: "2016-01",
        place: "Germany",
        what: "Cologne New Year: delay and hedge on origin as a European PSB case.",
        attribution: "Editorial practice",
      },
      {
        date: "2014–2022",
        place: "England",
        what: "Grooming-gang files: official cowardice, then media cowardice, then a slow admission.",
        attribution: "Institutional taboo, later documented",
      },
      {
        date: "2023-06-14",
        place: "Copenhagen",
        what: "Danish medieaftale: 'alsidighed og pluralisme' becomes the targeted duty. 'Upartisk' remains a sentence. Diversity becomes countable. See the neutrality dossier.",
        attribution: "Confirmed (text); high (as the operational swap)",
      },
    ],
    responses: [
      "Charter fights, defund talk, competing private channels",
      "Ombudsmen as a pressure valve",
      "The counter-public on platforms — which the DSA then targets",
    ],
    sources: [
      { title: "BBC impartiality reviews and editorial guidelines (migration / religion)", publisher: "BBC", date: "2016–2025" },
      { title: "Cologne New Year coverage post-mortems", publisher: "German press / regulators", date: "2016" },
    ],
  },
  {
    id: "civil-service",
    title: "The unvotable layer",
    dek: "Policy units, equality bodies, prosecutors, migration boards — the election is not the last word.",
    status: "active",
    period: { start: "1990" },
    domains: ["public-service", "lawfare", "supranational"],
    theaters: ["brussels", "british-isles", "scandinavia", "legal-europe"],
    attribution: {
      level: "moderate",
      assigned: ["managerial-class", "european-commission"],
      note: "A civil servant enforcing a treaty is doing the job as the job is now written. That is the point of the lock. Attribution is to culture, statute, and recruitment, not to a cell. Individual clerks dissent. The machine's default is the last generation's moral language, hardened into procedure.",
      hypotheses: [
        {
          actorId: "managerial-class",
          likelihood: "high",
          motive: "Continuity against the voter. Status as the people who really govern.",
          capability: "Drafting, slow-walking, leaking, 'legal advice' as a veto, equality-impact as a kill-switch.",
          evidence:
            "Repeated patterns when restrictionist governments take office: leak, delay, judicial review primed by the same NGOs, PSB briefed. UK small-boats years; Swedish 2022–26 attempt; the Commission as a continental civil service against Hungary and, more politely, Denmark.",
          counter:
            "Civil services are supposed to constrain illegal government action. Some restrictionist proposals are illegal under current oaths. The campaign question is who wrote the oath, and whether an election can rewrite it.",
        },
        {
          actorId: "european-commission",
          likelihood: "high",
          motive: "A second civil service, above the national one.",
          capability: "Infringement, funding, technical 'support' that is a policy.",
          evidence: "Rule-of-law conditionality; Pact implementation; the reflex that a national restriction is a European problem.",
          counter: "Member states built this. They can, in theory, unbuild it. Theory is doing a lot of work.",
        },
      ],
    },
    summary:
      "Public service in the older sense: the administration. Hybrid war that wins the ministry and loses the building has won a press conference. Equality inspectorates, prosecution guidelines, migration boards, and 'values' HR make reversal a process rather than a decision. The Danish exception is again the tell — social democrats had to convert the building, not just the manifesto. Where the building is not converted, the next election is a flavour of administration.",
    mechanism:
      "Recruit from the captured faculty. Write guidance that interprets statute against the grain of the last manifesto. When a minister insists, discover a legal obstacle, a consultation, an equality impact, a leak. If the minister still insists, the NGO sues and the PSB explains.",
    effects: [
      "Restrictionist manifestos that die in implementation",
      "A class with a higher loyalty (treaty, 'values', profession) than the demos",
      "Voters who correctly conclude that voting does not bite — and then vote harder or not at all",
    ],
    incidents: [
      {
        date: "2010–2024",
        place: "United Kingdom",
        what: "Repeated Conservative attempts to 'stop the boats' meeting legal, administrative, and Strasbourg resistance.",
        attribution: "The lock in one country",
      },
      {
        date: "2019–",
        place: "Denmark",
        what: "Social Democratic conversion of the building as the rare case of partial capture reversal.",
        attribution: "Political will plus a small state",
      },
    ],
    responses: [
      "Politicised appointment (the Hungarian and Polish method — and the European punishment for it)",
      "Statute that removes discretion",
      "The Danish method: change the party's mind so the building has nowhere to leak to",
    ],
    sources: [
      { title: "UK small-boats / Rwanda administrative and legal chronology", publisher: "Home Office / courts", date: "2022–2024" },
      { title: "Danish paradigm-shift legislation", publisher: "Folketinget", date: "2019–2024" },
    ],
  },
  {
    id: "ngo-complex",
    title: "The second civil service",
    dek: "Grants from the state, lawsuits against the state, a moral flag on an operational army.",
    status: "active",
    period: { start: "1990" },
    domains: ["ngo", "lawfare", "migration", "taboo"],
    theaters: ["brussels", "legal-europe", "mediterranean", "newsroom"],
    attribution: {
      level: "high",
      assigned: ["ngo-litigation", "open-society", "european-commission", "un-migration"],
      note: "Most of this is on the grant database. Governments pay NGOs to do what they do not wish to put in a manifesto, then plead helplessness when the NGO sues. Open Society is named because the grants are named — not because a single man runs Europe. 'Soros' as demonology is a different, worse file.",
      hypotheses: [
        {
          actorId: "ngo-litigation",
          likelihood: "confirmed",
          motive: "Volume, standing, and a world in which enforcement looks like a violation.",
          capability: "Boats, beds, lawyers, press officers, Brussels offices.",
          evidence: "ECRE and cousins as a coordinated legal line; SAR NGOs; reception contractors paid per arrival; the same names on Commission grant lists and Strasbourg dockets.",
          counter: "Rescuing people and representing them in court is legal and, in individual cases, decent. The campaign is the system: a self-licking ice cream of volume.",
        },
        {
          actorId: "open-society",
          likelihood: "high",
          motive: "A Europe in which national majorities cannot close the door or the debate.",
          capability: "Money, litigation vehicles, expert supply.",
          evidence: "Public grant portfolios on migration, justice, media, 'hate', civic 'resilience.'",
          counter: "One foundation among several (Sigrid Rausing, national lotteries, church money, Gulf money). Naming OSF is not a theory of everything.",
        },
        {
          actorId: "european-commission",
          likelihood: "high",
          motive: "Clients rather than voters as the working civil society.",
          capability: "AMIF and 'citizenship, equality, values' funds; partnership agreements.",
          evidence: "The circularity: Commission funds NGO, NGO sues member state, Commission opens infringement.",
          counter: "Some funded work is integration and return counselling. Read the line items.",
        },
      ],
    },
    summary:
      "The army that is not called an army. Search-and-rescue, legal aid, anti-racism, disinformation watch, reception. Funded by states, the Commission, UN agencies, and private foundations, then turned around to shame and sue those states. This is not Tocqueville. It is a second civil service with a moral flag, a litigation budget, and a glossary that later appears in statute. A war of position needs this layer. It is the infantry.",
    mechanism:
      "Grant. Deliver a fact on the ground (a bed, a boat, a case). Photograph it. Litigate it. Write the definition of hate that the next bill needs. Repeat in the next capital by nightfall.",
    effects: [
      "Enforcement as a scandal on a timer",
      "A professional activist class with no off-ramp",
      "Glossary-to-statute as a standard product",
    ],
    incidents: [
      {
        date: "2015–2026",
        place: "Mediterranean / Brussels",
        what: "SAR and relocation NGOs as a permanent political fact.",
        attribution: "Operational layer",
      },
    ],
    responses: [
      "Grant transparency statutes, still weak",
      "Occasional defunding, then court",
      "Hungary's NGO law as the European cautionary tale — overreach used to protect the layer elsewhere",
    ],
    sources: [
      { title: "Commission AMIF and Citizens, Equality, Values grant lists", publisher: "European Commission", date: "2014–2026" },
      { title: "Open Society Foundations European portfolios", publisher: "OSF", date: "ongoing" },
    ],
  },
  {
    id: "medieforlig-neutrality",
    title: "The medieforlig that retired neutrality",
    dek: "The word 'impartial' stayed on the page. The duty to be politically balanced did not. Pluralism became the KPI.",
    status: "active",
    period: { start: "2019" },
    domains: ["media", "public-service", "taboo"],
    theaters: ["scandinavia", "newsroom"],
    attribution: {
      level: "high",
      assigned: ["psb-complex", "managerial-class"],
      note: "This is not a deletion of a sentence. Radio- og fjernsynsloven § 10 still says saglighed and upartiskhed. DR's 2024–26 contract still says news must be 'alsidig og upartisk.' The wipe is operational: the 2023 medieaftale made 'alsidighed og pluralisme' the targeted, countable duty; diversity and equality became reportable; political balance was left to DR's own editor. The June 2026 government programme then instructed the next forlig to 'afbureaukratisere og forenkle' DR's frame — slim the contract, do not audit the politics. A politburo that struck the word 'upartisk' from the law is a claim that needs a paragraph. The retirement of the duty is on paper.",
      hypotheses: [
        {
          actorId: "managerial-class",
          likelihood: "high",
          motive:
            "Arm's length as a one-way valve: politicians may not instruct the newsroom; the newsroom's house ideology is not a political instruction. 'Afbureaukratisering' is the working title for taking the remaining detailed duties off the page.",
          capability: "The forligskreds. The culture ministry. The public-service contract as a political instrument that looks like deregulation.",
          evidence:
            "2018 VLAK/DF forlig tried to constrain DR (20% cut, no long web articles, core PS). 2019 S government reversed the constraints as 'armslængde.' 2022 'slim' contract: minister boasts of removing 'unødvendig detailregulering' and adds a positive duty to promote ligestilling og mangfoldighed. 14 June 2023 medieaftale (S, V, M, SF, EL, RV, DF): DR and TV 2 'skal arbejde målrettet med at skabe større alsidighed og pluralisme.' June 2026 S–SF–RV–M programme: modernise press support, do not cut DR, 'afbureaukratisere og forenkle' its frame so it is 'agile' against tech platforms. The promised 2025 Engel-Schmidt 'slagside' investigation — floated under blue pressure — is not in that programme.",
          counter:
            "Slimming a contract can be a real arms-length reform. Tech platforms are a real competitor. Some detailed 2018 duties were industrial policy against private papers, not a neutrality audit. The campaign question is which duties were slimmed: output quotas and web-article length, or the political-balance test that the right kept asking for and never got a third-party scorer for.",
        },
        {
          actorId: "psb-complex",
          likelihood: "high",
          motive:
            "Keep the licence-fee bargain and the right to mark one's own homework. 'Balance' scored by Brugernes redaktør is not a public-service requirement. It is an internal ethics column.",
          capability: "The contract as a shield. The annual public-service report as self-description. Radio- og tv-nævnet as a process that checks the contract's countable items, not a political-balance ledger.",
          evidence:
            "Contract 2024–26 still: 'DR's nyhedsdækning skal være alsidig og upartisk.' Same contract: targeted work on 'større alsidighed og pluralisme' 'i samspil med hensynet til den redaktionelle dækning' — the newsroom keeps the last word. September 2026: DR's own editor closes five live 'balance' complaints as in line with DR's guidelines, including climate-as-frame and a male-equality blind spot. Corydon's 2025 Gaza-declaration inhabilitet ruling is the house policing its own staff, not an external political-balance audit. Trust rows and the 'Grønlands hvide guld' collapse are the open record that the slogan and the output have diverged.",
          counter:
            "A PSB that let politicians score its politics would be a state broadcaster. Internal ethics editors exist in every serious house. Some 'bias' complaints are partisan. The tell is the asymmetry: diversity share of musicians is reportable; the running order on migration, Islamism, and restrictionist politics is 'redaktionel dækning.'",
        },
        {
          actorId: "denmark-state",
          likelihood: "moderate",
          motive:
            "The control-case state that named volume still funds the weather system that treats naming volume as a character defect. Keep DR as national liturgy. Do not pick a fight with the newsroom that covers the government.",
          capability: "The finance-act grant. The forligskreds. The culture minister's appointments.",
          evidence:
            "Denmark moved the numbers and still writes a four-billion-kroner cheque to DR. The 2023 forlig kept Christian cultural heritage as a sentence and made pluralism the targeted duty. The 2026 government, without Venstre, dropped even the rhetorical offer of a slagside study. The control case has a PSB exception.",
          counter:
            "A small state wants one national newsroom against Netflix. That is not a conspiracy. It is also why the exception matters: the same building that can write ghetto laws will not write an impartiality auditor for the house that explains those laws to the country.",
        },
      ],
    },
    summary:
      "The user's claim is almost right, and the 'almost' is the method. Nobody struck 'upartisk' from the Radio and Television Act. The 2023 medieaftale did not delete the sentence in DR's contract that news must be versatile and impartial. What the last completed settlement did — and what the June 2026 programme tells the next one to finish — is retire political balance as an enforceable public-service duty. In its place: 'alsidighed og pluralisme' as a targeted task, ligestilling and mangfoldighed as reportable, and 'afbureaukratisering' as the word for taking the remaining detailed duties off the page. Impartiality remains a house slogan. The scorer is DR's own editor. Radio- og tv-nævnet checks the countable items in the contract. The 2018 right tried to constrain the house and was reversed in the name of arm's length. The 2025 culture minister, under blue pressure, floated an investigation of political slagside as part of the coming forlig. The government that took office in June 2026 is S, SF, Radikale, Moderaterne. Their media line is: do not cut DR, slim its frame, compete with tech. The investigation is not in the programme. A requirement that cannot be audited, cannot be failed, and is scored by the institution it binds, has been wiped as a requirement. The word is a relic. That is the Danish control-case version of the PSB weather system: the country that named volume still pays for the liturgy that will not.",
    mechanism:
      "Win the forlig. Keep 'upartisk' as a sentence so the deletion claim is deniable. Add pluralism and diversity as the duties a board can count. Call the removal of remaining political tests 'armslængde' and 'afbureaukratisering.' Leave complaints to the in-house editor. Repeat at the next settlement.",
    effects: [
      "Political balance is no longer an operational public-service requirement in the Danish settlement — only a slogan in § 10 and a contract clause with no third-party scorer",
      "Pluralism and diversity are the countable duties; the running order on migration, Islamism, and restriction is 'editorial coverage'",
      "The promised slagside investigation of 2025 does not survive a forligskreds that did not want it",
      "The control-case state funds the weather system that treats its own restriction as a problem to be explained",
    ],
    incidents: [
      {
        date: "2018-06",
        place: "Christiansborg",
        what: "VLAK/DF medieaftale: 20% DR cut, no long web articles, 'not everything to everyone.' The last attempt to constrain the house from the right.",
        attribution: "Confirmed",
      },
      {
        date: "2019-09",
        place: "Copenhagen",
        what: "S government plus SF, RV, EL, Alternativet: reverse the web-article ban as 'armslængde.' The ratchet.",
        attribution: "Confirmed",
      },
      {
        date: "2022-09-26",
        place: "Kulturministeriet",
        what: "Slim public-service contract 2022–25. Minister: remove 'unødvendig detailregulering.' Add a positive duty to promote ligestilling og mangfoldighed, including a reportable share of female artists.",
        attribution: "Confirmed",
      },
      {
        date: "2023-06-14",
        place: "Christiansborg",
        what: "Medieaftale 2023–26: S, V, M, SF, EL, RV, DF. DR and TV 2 'skal arbejde målrettet med at skabe større alsidighed og pluralisme' in interplay with editorial coverage. 'Upartisk' stays. Pluralism becomes the targeted duty.",
        attribution: "Confirmed",
      },
      {
        date: "2024-01",
        place: "DR",
        what: "Public-service contract 2024–26 in force: news 'alsidig og upartisk'; the pluralism task; equality language. Radio- og tv-nævnet will score the countable items. Balance stays in-house.",
        attribution: "Confirmed",
      },
      {
        date: "2025-11",
        place: "Folketinget",
        what: "Culture minister Engel-Schmidt, under blue pressure after Gaza-declaration and trust rows, floats a slagside investigation as part of the coming forlig. Mogens Jensen (S) had already nodded. A valve.",
        attribution: "Confirmed (the offer); high (as a pre-election pressure release)",
      },
      {
        date: "2026-06",
        place: "Copenhagen",
        what: "S–SF–RV–M government programme: a new medieforlig, no DR cut, press support modernised, DR's frame to be 'afbureaukratiseret og forenklet' so the house is agile against tech. The slagside study is not in the programme.",
        attribution: "Confirmed (programme text); high (as the instruction to the next settlement)",
      },
    ],
    responses: [
      "DF B 123 (Feb 2025): instruct the government to secure more objective, balanced DR news — a decision proposal, not a forlig",
      "LA, DF, DD: cut or retender DR. Not in the 2026 programme",
      "Engel-Schmidt's 2025 offer of a bias study — overtaken by the election and the new forligskreds",
      "DR's in-house editor as the standing pressure valve",
    ],
    sources: [
      {
        title: "Medieaftale for 2023–2026: Samling om frie medier og stærkt dansk indhold",
        publisher: "Kulturministeriet",
        date: "2023-06-14",
        url: "https://kum.dk/fileadmin/_kum/1_Nyheder_og_presse/2023/Medieaftale_for_2023-2026__Samling_om_frie_medier_og_staerkt_dansk_indhold_-_TG.pdf",
      },
      {
        title: "DR's public service-kontrakt for 2024–2026",
        publisher: "Kulturministeriet / DR",
        date: "2024",
        url: "https://kum.dk/fileadmin/_kum/2_Kulturomraader/Medier/DR/Public_service-kontrakt_for_DR_2024-2026.pdf",
      },
      {
        title: "Kulturministeren indgår ny public service-kontrakt med DR",
        publisher: "Kulturministeriet",
        date: "2022-09-26",
      },
      {
        title: "Lov om radio- og fjernsynsvirksomhed § 10",
        publisher: "retsinformation.dk",
        date: "in force",
      },
      {
        title: "Ny regering: Nyheder skrevet af AI skal ikke have mediestøtte",
        publisher: "Journalisten (regeringsgrundlag S–SF–RV–M)",
        date: "2026-06-03",
      },
    ],
  },
];
