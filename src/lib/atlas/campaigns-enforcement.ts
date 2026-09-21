import type { Campaign } from "./types";

export const enforcementCampaigns: Campaign[] = [
  {
    id: "brotherhood-settlement",
    title: "Brotherhood settlement",
    dek: "Institutions, dawa, entryism — civilisation jihad as a self-description, not a meme.",
    status: "active",
    period: { start: "1980" },
    domains: ["islamist-entry", "university", "ngo", "taboo"],
    theaters: ["france", "low-countries", "germany", "british-isles", "campus", "brussels"],
    attribution: {
      level: "high",
      assigned: ["muslim-brotherhood", "qatar", "femyso"],
      note: "French, Austrian, and German intelligence have said the quiet part about European Brotherhood infrastructure in public language other countries still hedge. The 1991 Explanatory Memorandum is a US trial exhibit, not a European command order, and Georgetown's Bridge Initiative is not wrong that it has been over-read. It is also not a forgery. Qaradawi's dawa-conquest is on tape. Qatar's chequebook is not a theory.",
      hypotheses: [
        {
          actorId: "muslim-brotherhood",
          likelihood: "high",
          motive: "Enable Islam as a civilisational alternative: institutions, observant base, a veto on security policy, time.",
          capability: "Federations, schools, charities, youth orgs, a human-rights dialect, natalism.",
          evidence:
            "Named European lattice (CEM, FEMYSO, IESH, national federations); French 2025 reporting; Austrian and German Brotherhood files; the memorandum as a document of intent, not an org chart.",
          counter:
            "The Brotherhood is not 'the Muslims.' Many federations deny the link. Some denials are true. A mosque is not a cell. The campaign is the political project, not the prayer.",
        },
        {
          actorId: "qatar",
          likelihood: "high",
          motive: "Regional tool. Elite access. A European climate in which Brotherhood politics is a partner.",
          capability: "Money into IESH, FEMYSO, campuses, Al Jazeera.",
          evidence: "Reported multi-year funding of IESH since 2007 and FEMYSO since 2016; university gifts; Doha as a Brotherhood haven.",
          counter: "Qatar also funds museums and football. Those are not this dossier. These gifts are.",
        },
      ],
    },
    summary:
      "The most serious Islamist political project in Europe that is not a bomb. Settle, build (mosque, school, welfare, arbitration), police speech about Islam, enter the party and the campus, wait. This is not a GRU tempo. It is a natal and institutional tempo. The managerial complex is useful to it: Islamophobia as a shared working title, 'inclusion' as a shield, the university as a farm. Treating the Brotherhood as a cartoon caliphate is how it prefers to be fought. Treating it as a social club is how it prefers to be governed.",
    mechanism:
      "Dawa and institution-building. Youth pipeline (FEMYSO). Complaints and definitions (Islamophobia). Entry into unions, parties, and 'interfaith.' Gulf money. Time. The host state's taboo does the rest.",
    effects: [
      "A parallel institutional floor under parts of European Islam",
      "Cadres in respectable rooms",
      "Security policy that must first negotiate a glossary",
    ],
    incidents: [
      {
        date: "1991-05",
        place: "North America (document) / European rhyme",
        what: "Explanatory Memorandum: settlement as a 'civilisation-jihadist process.' Trial exhibit, not a European order — and not nothing.",
        attribution: "Document of intent; representativeness contested",
      },
      {
        date: "2025",
        place: "France",
        what: "Public intelligence language on FEMYSO as a Brotherhood training platform.",
        attribution: "French services",
      },
    ],
    responses: [
      "French, Austrian, and (intermittent) German attempts to name and restrict the network",
      "Gulf (UAE/Saudi) counter-files that Europe is slow to use because they come from unpleasant states",
      "A British and Scandinavian hesitation that still treats this as a community-relations file",
    ],
    sources: [
      {
        title: "An Explanatory Memorandum on the General Strategic Goal for the Group in North America",
        publisher: "US v. Holy Land Foundation exhibit",
        date: "1991 / entered 2007–08",
      },
      { title: "Qatari funding of Brotherhood-linked European orgs", publisher: "Israeli Diaspora Ministry / European press", date: "2026" },
    ],
  },
  {
    id: "blasphemy-enforcement",
    title: "Killing as blasphemy law",
    dek: "Van Gogh, Hebdo, Paty, the teacher as target — extra-legal enforcement of the OIC demand.",
    status: "ongoing",
    period: { start: "2004" },
    domains: ["street", "islamist-entry", "taboo", "university"],
    theaters: ["france", "low-countries", "british-isles", "scandinavia", "campus"],
    attribution: {
      level: "confirmed",
      assigned: ["islamist-street"],
      note: "The murders are not a metaphor. They are a campaign against the school, the cartoon, and the apostate. Perpetrators are usually lone or small-cell, often with Salafi or Brotherhood-adjacent milieus in the background, not a general staff. The hybrid payoff is downstream: a continent that teaches its teachers to flinch.",
      hypotheses: [
        {
          actorId: "islamist-street",
          likelihood: "confirmed",
          motive: "Make a lesson of the teacher and the cartoonist. Police the boundary of the sayable by death.",
          capability: "A gun, a knife, a milieu that calls it justice, a diaspora internet that cheers.",
          evidence:
            "Theo van Gogh 2004; Charlie Hebdo 2015; Samuel Paty 2020; Dominique Bernard 2023; Rushdie 2022; the Danish cartoon aftermath as a global hunt. The list is the argument.",
          counter:
            "These are crimes by individuals. Most European Muslims condemned them. Both sentences are true. A campaign does not need a majority. It needs a veto of fear.",
        },
        {
          actorId: "oic",
          likelihood: "plausible",
          motive: "Diplomatic track and street track rhyme: the same demand, different tools.",
          capability: "Resolutions and crisis diplomacy, not the knife.",
          evidence: "The same crises appear on OIC agendas. That is not a tasking order for a murderer.",
          counter: "Do not launder a beheading into a UN resolution. Do not pretend the resolution is unrelated to the climate that makes the beheading a 'community tension.'",
        },
      ],
    },
    summary:
      "The enforcement arm of the speech campaign does not always wear a suit. It murders a filmmaker on an Amsterdam street, a newsroom in Paris, a teacher outside a school in Conflans. Each time the PSB and the ministry reach for cohesion. Each time a few more teachers take the cartoon out of the lesson. That is a strategic effect. Laïcité is the remaining European doctrine that names it. The university would like to retire laïcité as phobic. The street is helping.",
    mechanism:
      "A blasphemy demand, unmet by statute, is met by a killing. Media liturgy ('not Islam', 'a troubled young man', 'community tensions'). Institutions adapt by silence. The next teacher gets the message without a memo.",
    effects: [
      "A shrinking set of people willing to teach the Enlightenment as if they meant it",
      "Satire as a high-risk profession",
      "A generation of officials who think courage is a far-right aesthetic",
    ],
    incidents: [
      {
        date: "2004-11-02",
        place: "Amsterdam",
        what: "Theo van Gogh murdered.",
        attribution: "Islamist killing, political effect immediate",
      },
      {
        date: "2015-01-07",
        place: "Paris",
        what: "Charlie Hebdo. The newsroom as target.",
        attribution: "Confirmed Islamist attack",
      },
      {
        date: "2020-10-16",
        place: "Conflans-Sainte-Honorine",
        what: "Samuel Paty beheaded for a lesson. The school as target.",
        attribution: "Confirmed. The campaign against the teacher, completed",
      },
      {
        date: "2023-10-13",
        place: "Arras",
        what: "Dominique Bernard murdered. The sequel.",
        attribution: "Confirmed",
      },
    ],
    responses: [
      "French security and laïcité hardening — the European outlier",
      "Memorials that sometimes remember the man and sometimes the 'tensions'",
      "A continent of curricula quietly edited",
    ],
    sources: [
      { title: "French interior and education communications on Paty and Bernard", publisher: "République française", date: "2020–2023" },
      { title: "Van Gogh murder trial record", publisher: "Dutch courts", date: "2005" },
    ],
  },
  {
    id: "two-tier",
    title: "Two-tier order",
    dek: "Under-police the communal riot. Over-police the native protest that names it.",
    status: "active",
    period: { start: "2001" },
    domains: ["street", "taboo", "public-service", "lawfare"],
    theaters: ["british-isles", "france", "scandinavia", "low-countries", "germany"],
    attribution: {
      level: "high",
      assigned: ["managerial-class", "islamist-street", "psb-complex"],
      note: "Anarcho-tyranny is a pattern, not a signed order. Rotherham's 'don't be racist' was official. The 2024 UK two-tier row was a mass lesson. French banlieue policing is a thirty-year bargain. Swedish bombings in 'vulnerable areas' are a statistic. The campaign question is why equal protection was traded — and who is served by the trade.",
      hypotheses: [
        {
          actorId: "managerial-class",
          likelihood: "high",
          motive: "Buy communal peace, protect a moral story, avoid the photograph of a 'racist' police force.",
          capability: "Guidance, CPS/prosecutor priorities, hate-crime uplifts, 'community tension' as a KPI.",
          evidence:
            "Jay report and sister grooming files (official cowardice); 2024 UK riot charging compared with 2020 BLM; Swedish vulnerable-area maps; French post-Nahel 2023. Police leaderships graded on tension, not on equal protection.",
          counter:
            "Different riots have different violence profiles. Some 'two-tier' claims are partisan accounting. The pattern across countries and decades is still the pattern.",
        },
        {
          actorId: "islamist-street",
          likelihood: "high",
          motive: "A low-enforcement zone as a good in itself: drugs, status, blasphemy enforcement, women.",
          capability: "Riot as a tariff on ordinary policing; clan and gang as a parallel order.",
          evidence: "The tariff works. Districts exist where the state's monopoly of force is a rumour after dark.",
          counter: "Crime groups want impunity in every city on earth. The hybrid piece is the political shield.",
        },
      ],
    },
    summary:
      "The street domain of the interior war. A state that will not police a grooming network because of race, will not police a riot because of 'community', and will then police a native protest with extraordinary speed, is not failing at random. It is teaching. The lesson is that noticing is more dangerous than the thing noticed. UK 2024 made the lesson national. Rotherham made it unforgivable. France has lived it so long it is a landscape. Sweden put it on a map and called the map 'vulnerable.'",
    mechanism:
      "Grade police on tension. Grade prosecutors on hate. Grade PSB on cohesion. The communal riot becomes a negotiation. The naming riot becomes a raid. Legislate after the second one.",
    effects: [
      "Parallel policing as a European urban fact",
      "Native radicalisation as a downstream product the taboo then cites",
      "Women and girls in the grooming files as the bill the rest of the country was not shown",
    ],
    incidents: [
      {
        date: "2014",
        place: "Rotherham",
        what: "Jay report. Official cowardice, named.",
        attribution: "Confirmed institutional failure with a racial taboo at the centre",
      },
      {
        date: "2023-06",
        place: "France",
        what: "Nahel riots. A week of burned France as a political tariff.",
        attribution: "Riot as politics",
      },
      {
        date: "2024-08",
        place: "United Kingdom",
        what: "Two-tier as a household phrase after the Southport riots and the charging optics.",
        attribution: "Contested as accounting, real as a mass perception — itself a strategic fact",
      },
    ],
    responses: [
      "Occasional equal-protection politicians (Denmark, bits of France, a late UK conversion)",
      "Vulnerable-area policing experiments that do not survive contact with the glossary",
      "A public that now films the disparity, which is why the DSA layer matters",
    ],
    sources: [
      { title: "Independent Inquiry into Child Sexual Exploitation in Rotherham (Jay)", publisher: "Rotherham MBC", date: "2014" },
      { title: "Swedish police vulnerable-area assessments", publisher: "Polisen", date: "2015–2025" },
    ],
  },
  {
    id: "taboo-naming",
    title: "The kill-switch on naming",
    dek: "Far right, racist, conspiracy theory, Great Replacement as a brand — arithmetic as a crime of style.",
    status: "active",
    period: { start: "1990" },
    domains: ["taboo", "media", "university", "lawfare"],
    theaters: ["newsroom", "campus", "online", "brussels"],
    attribution: {
      level: "unattributed",
      assigned: ["managerial-class", "un-migration", "psb-complex"],
      note: "A taboo is a social fact, not a signed order. Funders of 'narrative change' write manuals. HR departments enforce. PSBs perform. The worst men who noticed (Breivik) are kept on the desk as a kill-switch. Demographic arithmetic is not a conspiracy brand. This dossier exists to keep them apart — and to name the people who fuse them on purpose.",
      hypotheses: [
        {
          actorId: "un-migration",
          likelihood: "high",
          motive: "Written: treat restrictionist talk as a harmful narrative to be rewritten.",
          capability: "Toolkits, journalist training, national-agency partnerships.",
          evidence: "OHCHR and IOM products in their own names. ICMPD-class databases of hundreds of European migration-communication campaigns.",
          counter: "Public information campaigns exist in every field. These ones have a direction.",
        },
        {
          actorId: "managerial-class",
          likelihood: "high",
          motive: "A coalition that shrinks if census, crime-by-origin, and Islamist entry are ordinary news.",
          capability: "Stigma, HR, funding, the word 'responsible'.",
          evidence: "The speed with which a statistic becomes a character issue. The career fates of the civil servants and journalists who published the wrong table.",
          counter: "Some 'naming' is in fact bigotry. A filter is not automatically a weapon. This filter is one-way.",
        },
        {
          actorId: "russia",
          likelihood: "plausible",
          motive: "Ride the groove. Sell the West as decadent and the counter-public as Moscow's.",
          capability: "FIMI. A small gift compared with a PSB style guide.",
          evidence: "Documented amplification of both identitarian and anti-racist extremes.",
          counter: "The primitive file, again. Do not give him the taboo. He is trying to rent it.",
        },
      ],
    },
    summary:
      "Cognitive terrain. The campaign is won if a journalist, teacher, or MP cannot say 'this is a pattern' without losing the job. Kill-words do the work that statutes later ratify: far right, racist, conspiracy theory. 'Great Replacement' is the most successful fuse — a phrase that names an arithmetic and a brand that names a sewer. This atlas uses the arithmetic and will not run the brand. The taboo's favourite move is to pretend they are the same thing. Breivik is kept on the desk for that purpose. He does not own fertility rates. Do not hand them to him; do not become him.",
    mechanism:
      "Stigma first. Equate description with prescription. Keep a monster on file. Fund narrative-change. When the counter-public still talks, statute and DSA. When it still talks, two-tier.",
    effects: [
      "A professional class that cannot think the problem in public",
      "A counter-public deformed by the hunt — and then displayed",
      "Policy that can only be discussed in euphemism, which is how you get bizarre law",
    ],
    incidents: [
      {
        date: "2011-07-22",
        place: "Norway",
        what: "Breivik. A monster who cited replacement. The taboo's favourite kill-switch, still on the desk.",
        attribution: "A crime. Not a refutation of census data. Not a licence to become him",
      },
      {
        date: "2018-12",
        place: "Europe",
        what: "Global Compact row: the centre's line was that only the far right could see a script. The script was published.",
        attribution: "Taboo meeting a text",
      },
    ],
    responses: [
      "Heterodox academics and a handful of social-democratic conversions (Denmark) as the respectable breach",
      "Alternative media, then the DSA",
      "Politicians who talk like statisticians and are called extremists until the polls move",
    ],
    sources: [
      { title: "OHCHR narrative-change toolkits on migration", publisher: "OHCHR", date: "2020–2024" },
      { title: "European migration communication campaign databases", publisher: "ICMPD / Dennison et al.", date: "2024" },
    ],
  },
  {
    id: "denmark-reversal",
    title: "Denmark as control case",
    dek: "A small country named volume as a threat to the welfare state and moved the numbers.",
    status: "ongoing",
    period: { start: "2015" },
    domains: ["migration", "public-service", "lawfare", "supranational"],
    theaters: ["scandinavia", "legal-europe", "brussels"],
    attribution: {
      level: "confirmed",
      assigned: ["denmark-state"],
      note: "This dossier is the negative: proof that the interior campaign is policy, not weather. Social democrats converted. Statutes passed. Numbers moved. Strasbourg and Geneva fought pieces of it. The NGO layer made Denmark a villain. That reaction is itself evidence.",
      hypotheses: [
        {
          actorId: "denmark-state",
          likelihood: "confirmed",
          motive: "Keep a welfare state a welfare state. Return as default. A public language in which the problem may be named.",
          capability: "A small, high-capacity administration once the party of the building agrees. Ghetto/parallel-society packages. Diplomatic stubbornness.",
          evidence:
            "Paradigm shift 2019; jewellery-law theatre; Syrian protection withdrawals; parallel-society ('ghetto') legislation; asylum numbers down relative to Sweden's path; the 2026 return-hub diplomacy with DE/AT/NL/EL.",
          counter:
            "Denmark is small, a peninsula, and not Berlin. Copy-paste is not automatic. Some measures are theatre. Some are in court. The direction is still the point.",
        },
        {
          actorId: "ecthr",
          likelihood: "high",
          motive: "Hold the ratchet even against a social-democratic restriction.",
          capability: "Judgments (M.A. v. Denmark) and the threat of more.",
          evidence: "Family-reunion waiting periods struck. Other Danish measures under continuous NGO fire.",
          counter: "A court applying a convention Denmark signed. The campaign question is whether an election can rewrite the reading.",
        },
      ],
    },
    summary:
      "If Sweden is the cautionary file, Denmark is the experiment that showed the variables. The same Nordic starting trust, a different decision: volume is a threat to the equality that the welfare state is made of, parallel society is a named enemy, return is a policy not a slogan, and the social democrats will say so. The interior campaign's operators in Brussels and Geneva treated this as backsliding. They were right, from their side. A war of position can be fought back. It takes the building, not a press conference.",
    mechanism:
      "Convert the party that owns the civil service. Write statute that removes discretion. Accept the villain role in the NGO press. Fight in Strasbourg without pretending Strasbourg is the demos. Publish the numbers.",
    effects: [
      "A European reference point for restriction that is not 'the far right'",
      "A permanent lawfare target",
      "A proof, dangerous to the taboo, that policy sets the numbers",
      "The Samsam wound as the other Danish file: the same state that moved the numbers then left its own eyes in a Spanish dock",
    ],
    incidents: [
      {
        date: "2019",
        place: "Copenhagen",
        what: "Paradigm shift under a Social Democratic government. The conversion.",
        attribution: "Elected policy",
      },
      {
        date: "2021",
        place: "Strasbourg",
        what: "M.A. v. Denmark on family-reunion waiting periods.",
        attribution: "The lock, applied",
      },
      {
        date: "2026-08",
        place: "Kigali",
        what: "Danish-led return-hub diplomacy with four other states.",
        attribution: "The workaround, exported",
      },
    ],
    responses: [
      "UN and NGO campaigns against the ghetto/parallel-society laws",
      "Quiet study in other social-democratic parties",
      "The remaining question: whether a large state can copy a small one against its own building",
    ],
    sources: [
      { title: "Danish parallel-society / ghetto packages and paradigm-shift bills", publisher: "Folketinget", date: "2018–2024" },
      { title: "M.A. v. Denmark [GC]", publisher: "ECtHR", date: "2021" },
    ],
  },
  {
    id: "mosque-census",
    title: "The mosque dark figure",
    dek: "No official count, on purpose. Mapped 160–200. Inclusive three hundred and change, majority Sunni. 1974 control: one named Sunni mosque.",
    status: "active",
    period: { start: "1967" },
    domains: ["islamist-entry", "taboo", "migration", "public-service"],
    theaters: ["scandinavia", "germany", "france", "british-isles", "low-countries"],
    attribution: {
      level: "high",
      assigned: ["muslim-brotherhood", "diyanet", "salafi-milieu"],
      note: "The undercount is the mechanism. Denmark publishes recognised trossamfund, not rooms. Kühle's walk-ins (115 in 2006, ~170 in 2017) are the last honest mapped band. Commercial listings in 2026 scrape ~163 fronts. A demographic identity — ~300,000 Muslims ÷ ~950 per regular prayer site — lands on ~310 inclusive rooms. The field estimate of 300+ is that meeting, not a poster number. The 40% 'weaponized' share is a field estimate: moderate as hostile/mobilizable infrastructure, speculative as weapons caches. The ledger splits the word.",
      hypotheses: [
        {
          actorId: "salafi-milieu",
          likelihood: "high",
          motive: "Rooms as dawa, isolation, and a pool for the travel bureau. Architecture is optional. A basement is enough.",
          capability: "Study circles, kitchens, Telegram, a handful of named nodes (Grimhøj and cousins).",
          evidence:
            "Grimhøj as travel bureau for ~22 of ~100 Danish Syria travellers. PET still rates militant Islamist terrorism 'serious' in 2025–26. Salafi milieus are the European services' named problem in France, Austria, Germany — Denmark hedges the vocabulary and keeps the rooms.",
          counter:
            "Salafis are a minority of prayer. Many mapped mosques are ethnic parish clubs, Diyanet, or quiet. A milieu is not a majority. It is a capability.",
        },
        {
          actorId: "diyanet",
          likelihood: "high",
          motive: "A Turkish parish system on Danish (and German, Dutch, French) soil that does not answer to the host interior ministry.",
          capability: "Imam salaries, construction, youth and women's associations, a reporting channel home.",
          evidence:
            "Diyanet is a state directorate. Kühle 2017: ~40% of identified Danish mosques tied to a transnational organisation. DITIB rows in Germany are the public version of the same parish.",
          counter:
            "A foreign state church can be conservative without being a magazine. The hybrid fact is foreign command of the sermon, not a rifle under the minbar.",
        },
        {
          actorId: "muslim-brotherhood",
          likelihood: "high",
          motive: "Mosque, school, welfare, arbitration — the institutional floor under settlement. Time.",
          capability: "Federations, dawa, a human-rights dialect, Gulf money.",
          evidence:
            "The European lattice (CEM, FEMYSO, national federations) is named by French, Austrian, and German services. Qaradawi's dawa-conquest is on tape. A mosque is the local franchise.",
          counter:
            "The Brotherhood is not 'the Muslims.' Some denials of the link are true. The campaign is the political project, not the prayer.",
        },
        {
          actorId: "islamist-street",
          likelihood: "plausible",
          motive: "Rooms as cover for extra-legal enforcement, clan arbitration, and — in the strong field claim — caches against the day.",
          capability: "Blood-money talks, kitchen knives, a handful of terror-logistics touches on the public record.",
          evidence:
            "Al-Hidayyah blood-money negotiations (2021 talks; 2026, no sanction). Tauba mosque kitchen knife in an attempted killing (2026 judgment). Historical armed fundraising around Grimhøj-adjacent circles. The 40% cache claim is the field's strongest reading of the same pattern.",
          counter:
            "No public PET inventory supports weapons caches in two-fifths of Danish mosques. Blood-money and a kitchen knife are not an armory. Preparation can be organisational for years before it is kinetic. That still does not mint 124 magazines. Speculative as a share.",
        },
        {
          actorId: "hizb-ut-tahrir",
          likelihood: "high",
          motive: "A legal Danish mosque as a caliphate shop window. Germany banned the party. Denmark kept the room.",
          capability: "Rallies, literature, Masjid al-Faruq as a named franchise.",
          evidence:
            "Kühle 2017 places al-Faruq in the mixed nine and names it as Hizb ut-Tahrir's mosque. Public Copenhagen demonstrations. A documented room, not a rumour.",
          counter:
            "One named mosque is not two-fifths. HuT is small, loud, and legal. A ban debate is not a census. High for the room; irrelevant as a theory of 310.",
        },
        {
          actorId: "managerial-class",
          likelihood: "moderate",
          motive: "Keep the sacral network in the 'diversity' column. A register would make a political number. A trossamfund list makes a rights number.",
          capability: "Kirkeministerium definitions, research framing, the taboo on counting rooms as infrastructure.",
          evidence:
            "Recognised societies (37) offered as if they were the count. Purpose-built (~12) offered in the press as if they were the infrastructure. Kühle had to be commissioned twice because the state still had no number.",
          counter:
            "Privacy law forbids a religion census. That is a real constraint, not only a tactic. It is also a tactic: the constraint is not used to estimate. It is used to end the sentence.",
        },
      ],
    },
    summary:
      "The interior campaign has a sacral wing. In 1967 the Nordic region got its first purpose-built mosque — Ahmadiyya, Hvidovre — and the papers were curious. In 1974 a Dane of that year could name one Sunni mosque; Sunni Islam had just stopped counting the Ahmadiyya house. In 2006 a walk-in mapping found 115 (104 Sunni, 10 Shia, 1 Ahmadiyya). In 2017, 170 identified, last ethnic split 138 Sunni / 20 Shia / 2 Ahmadiyya. In 2026 the mapped band is still 160–200 and the inclusive layer — every regular Friday room, majority Sunni, not Sunni-only — is the number nobody is paid to make. Two identities meet at three hundred and change: population over catchment, and mapped times a dark-figure ratio. That is settlement as architecture. The field then says: not all of them friendly; about two-fifths weaponized. This atlas splits that word into four floors. Transnational affiliation at ~40% is on paper (Kühle). Hostile/mobilizable infrastructure at ~40% is a moderate field reading — a Sunni-Islamist story at Grimhøj and cousins, a Shia/Iranian command story at Imam Ali. Recruitment nodes are a named handful (high). Weapons caches at 40% are a speculation the record does not presently carry at scale. The method forbids laundering the last as the first. It also forbids pretending the undercount is weather, and forbids labelling the whole ledger 'Sunni mosques.'",
    mechanism:
      "Refuse a register. Count trossamfund instead of rooms. Let guest-worker prayer become family-reunion parish become asylum basement become provincial musalla, never in the same spreadsheet. Fund the mapped layer's research once a decade. Treat purpose-built as the public story. Advertise the Syria camp in the milieu, then in the pocket. Call any inclusive count 'Islamophobic arithmetic.'",
    effects: [
      "A sacral lattice that grew faster than any ministry's vocabulary for it",
      "A 40% transnational parish system hiding inside a 'community' frame",
      "A recruitment pool whose advertisement moved from the noticeboard to Telegram without shrinking the pool",
      "A political class that can say 'about a hundred mosques' and be technically true of the wrong layer",
    ],
    incidents: [
      {
        date: "1967-07-21",
        place: "Hvidovre",
        what: "Nusrat Jahan inaugurated. First purpose-built mosque in the Nordic region. The papers were curious. The Folketing was not.",
        attribution: "Confirmed",
      },
      {
        date: "1974",
        place: "Denmark",
        what: "Control year: one Sunni mosque in living memory. Ahmadiyya declared outside Islam by the Pakistani state and the Muslim World League the same year.",
        attribution: "Field control / confirmed declaration",
      },
      {
        date: "2014-06",
        place: "Rovsingsgade, København",
        what: "Hamad Bin Khalifa Civilisation Center inaugurated. Qatar's purpose-built photograph. The architectural sentence arrives.",
        attribution: "Confirmed",
      },
      {
        date: "2015",
        place: "Vibevej, København",
        what: "Imam Ali Mosque opens. Iranian parish. The Folketing later cannot dissolve it.",
        attribution: "Confirmed",
      },
      {
        date: "2017-12",
        place: "Denmark",
        what: "Kühle & Larsen: ~170, +48% in eleven years, ~40% transnational, at least ten uncertified. The last honest mapped band.",
        attribution: "Confirmed (mapped layer)",
      },
      {
        date: "2025–26",
        place: "Copenhagen NV / Folketinget",
        what: "Al-Hidayyah blood-money talks: no sanction, recognition kept. Imam Ali as Iranian parish: no dissolution. The hostile room is still a rights-holder.",
        attribution: "High",
      },
    ],
    responses: [
      "Two commissioned mappings (2006, 2017) instead of a living register",
      "Recognised-trossamfund lists as a substitute for a count",
      "Parallel-society / ghetto legislation that names the housing estate and still will not name the room",
      "This ledger: two identities, four floors, grades attached",
    ],
    sources: [
      { title: "Moskeér i Danmark II", publisher: "Kühle & Larsen, Aarhus University", date: "2017" },
      { title: "Moskeer i Danmark", publisher: "Lene Kühle", date: "2006" },
      { title: "Muslim population estimates", publisher: "Brian Arly Jacobsen, UCPH", date: "2020–2025" },
      { title: "Vurdering af terrortruslen mod Danmark", publisher: "PET / CTA", date: "2025–2026" },
    ],
  },
  {
    id: "syria-pipeline",
    title: "The Syria advertisement",
    dek: "Camps were sold in Denmark. Grimhøj as travel bureau. 135+ travellers. The flyer moved to the pocket; the pool did not.",
    status: "ongoing",
    period: { start: "2012" },
    domains: ["islamist-entry", "street", "taboo", "media"],
    theaters: ["scandinavia", "online"],
    attribution: {
      level: "high",
      assigned: ["salafi-milieu", "islamist-street"],
      note: "The 2012–16 file is confirmed: recruitment videos, a mosque-adjacent travel bureau in Aarhus, PET's 135+ count, among the highest per-capita rates in the EU. The 2025–26 residual is high as intent (IS still wants Western attacks; PET still says 'serious') and moderate as a physical-camp advertisement inside Danish rooms. The ad is now mostly online. The mosque remains the pool.",
      hypotheses: [
        {
          actorId: "salafi-milieu",
          likelihood: "high",
          motive: "A battlefield, a status, a purification. The camp is the product. The room is the shop window.",
          capability: "Study circles, returning veterans, encrypted channels, a handful of named mosques.",
          evidence:
            "Grimhøj: ~22 of ~100 Danish travellers. YouTube 'emir' videos aimed at Danish youth. Aarhus police built an exit programme because the pipeline was local. Abdessamad Fateh (Abu Hamza) placed on the US terrorist list from that orbit.",
          counter:
            "Returnee interviews often credit the friend-group, not the minbar. That is a division of labour: mosque as pool, kitchen as office, Telegram as flyer. It is not an acquittal of the milieu.",
        },
        {
          actorId: "islamist-street",
          likelihood: "high",
          motive: "Veterans, status, a kinetic résumé for the next argument with the Danish state.",
          capability: "Clans, gangs, the criminal-to-jihad hop that Danish reporting documented in the Syria cohort.",
          evidence:
            "Necef / DR 2016: a large share of identified travellers had criminal pasts in the cities. PET 2025: criminals as proxies also appear in the wider terror picture (Iran). The street and the camp rhyme.",
          counter:
            "A criminal past is not a camp. Most gangsters did not go. The hop is a pattern in a minority, not a draft.",
        },
        {
          actorId: "managerial-class",
          likelihood: "moderate",
          motive: "Keep the pipeline inside 'radicalisation' as a social-work noun, not inside settlement as a strategy.",
          capability: "Aarhus model as exportable kindness; PSB framing; the taboo on asking which rooms fed the bus.",
          evidence:
            "The Aarhus exit programme was real and probably reduced travel. It was also a way of not closing Grimhøj. Kindness as containment. The room stayed.",
          counter:
            "Exit work is not a crime. Some returnees were pulled back. A social-work frame can save a person and still refuse the institutional question.",
        },
      ],
    },
    summary:
      "Denmark, a small high-trust state, sent foreign fighters to Syria at among the highest per-capita rates in the European Union. That is not a mystery of 'the internet' alone. The advertisement was aggressive in 2012–16: videos, recruiters, a mosque in an Aarhus ice factory that police tied to about a fifth of the Danish traffic. PET counted at least 135 travellers by April 2016; around half came home; dozens died. In 2026 the camp flyer is mostly in the pocket — Telegram, TikTok, IS still calling for Western attacks — and PET says the likely attacker is a lone actor or a small group, often radicalised online. That shift is real. It is also a way of retiring the mosque from the sentence. The pool is still the pool. A training camp advertised in Denmark is a witness, as the field says, that a fraction of the sacral network was never only a parish. How large a fraction is the ledger's 40% question. This dossier holds the advertisement. The census holds the rooms.",
    mechanism:
      "Preach a duty. Film an emir. Park a recruiter in a known room. Move the willing through Turkey. When the state arrives, deny the minbar and keep the kitchen. After the caliphate falls, move the flyer into the phone. Keep the pool.",
    effects: [
      "A Danish veteran problem PET still treats as live",
      "Proof that a Nordic mosque-adjacent milieu can function as a travel bureau",
      "A template: advertise the camp, deny the mosque, retain the room",
    ],
    incidents: [
      {
        date: "2012-11",
        place: "YouTube / Denmark",
        what: "Danish jihadi 'emir' video recruiting for Syria. The war becomes a domestic product.",
        attribution: "Confirmed",
      },
      {
        date: "2014",
        place: "Grimhøjvej, Aarhus",
        what: "Police: the mosque is the travel bureau for about a fifth of Danish Syria fighters. Chairman waves it away.",
        attribution: "High (police count); denial on the record",
      },
      {
        date: "2016-04",
        place: "Denmark",
        what: "PET/CTA: at least 135 travellers to Syria/Iraq. Among the highest per-capita rates in the EU.",
        attribution: "Confirmed",
      },
      {
        date: "2025–26",
        place: "Denmark / online",
        what: "PET: militant Islamist threat still 'serious'. Likely attacker lone or small-group, often online. IS intent against the West unchanged. The flyer left the noticeboard.",
        attribution: "Confirmed (threat level); high (online residual)",
      },
    ],
    responses: [
      "Aarhus exit/dialogue model — travel down, room still open",
      "Foreign-fighter criminalisation after the fact",
      "PET threat assessments that name militant Islamism and still will not publish a mosque map",
    ],
    sources: [
      { title: "Vurdering af terrortruslen mod Danmark", publisher: "PET / CTA", date: "2016, 2025, 2026" },
      { title: "Aarhus Grimhøj reporting", publisher: "Washington Post / Kristeligt Dagblad / East Jutland Police", date: "2014" },
      { title: "Danish Syria-warriors investigation", publisher: "DR / Politiken / Necef, SDU", date: "2016–2017" },
    ],
  },
  {
    id: "samsam-case",
    title: "The Samsam wound",
    dek: "Denmark sent a source into the Syria pipeline, then neither-confirmed-nor-denied him into a Spanish terror conviction — and the Supreme Court made the services say so.",
    aliases: [
      "samsam",
      "samasama",
      "Ahmed Samsam",
      "Samsam-sagen",
      "Samsam case",
      "PET Samsam",
      "FE Samsam",
      "NCND",
      "Højesteret Samsam",
    ],
    status: "ongoing",
    period: { start: "2012" },
    domains: ["lawfare", "islamist-entry", "media", "taboo", "public-service"],
    theaters: ["scandinavia", "legal-europe", "newsroom"],
    attribution: {
      level: "high",
      assigned: ["pet-fe"],
      note: "The wound is on paper: a leaked PET memo of failure, thirteen leadership meetings about millions while the public line was silence, a unanimous Supreme Court on 2 September 2025, and a joint PET/FE statement the same afternoon. Who used that wound as a campaign is the live question. A politburo that ran Ahmed Samsam as a weapon against Danish intelligence is a claim that needs a document. Convergence is not innocence. A shop that cannot protect a source, and cannot stay silent when the source sues, will not see the next pipeline.",
      hypotheses: [
        {
          actorId: "pet-fe",
          likelihood: "high",
          motive:
            "Keep the source list closed. Avoid a Spanish courtroom becoming a catalogue of Danish HUMINT into jihadi groups. Pay in a closed room rather than speak in an open one.",
          capability: "Recruitment, cash, kit, a foreign service, the neither-confirm-nor-deny doctrine, Kammeradvokaten.",
          evidence:
            "Supreme Court 2 September 2025: Samsam proved he worked for the services on the 2013–14 Syria trips and was paid for reporting on Danish travellers. PET and FE said so the same day. Berlingske 2019: money and equipment, including an FE-paid Mitsubishi Pajero and tracking kit delivered into a fighting group. A leaked PET note (2021) called the Spain handling a serious failure. Thirteen meetings with service leadership about million-kroner compensation if he swallowed the Spanish conviction. Lars Findsen, as FE chief, told a court he was in contact with Spain about a transfer and payment for the damage — the verdict itself was not to be touched.",
          counter:
            "Neither-confirm-nor-deny is how every serious service protects the next source, not a confession of guilt. Confirming Samsam in 2017 would have named a method and a man still in reach of the people he had reported on. Some of the silence was duty. Duty that leaves your own source in a foreign dock for eight years is also a failure. The services are the authors of the first half of this file. They are the target of the second.",
        },
        {
          actorId: "managerial-class",
          likelihood: "plausible",
          motive:
            "A political culture in which the secret state's silence is the outrage, while the Syria pipeline the source was sent to map is background weather. Rights against the building, always; HUMINT into Islamist milieus, never quite the emergency.",
          capability: "Courts, the press that treats NCND as cover-up, a justice minister who answers new evidence with 'he was convicted anyway'.",
          evidence:
            "The Supreme Court's own formula: confidentiality of intelligence work must, in this case, yield to a citizen's interest in establishing a source relationship. That sentence is now a tool. Østre Landsret had refused to look. Højesteret looked. The political class did not spend equivalent energy on why Denmark had among the EU's highest per-capita flows into Syria.",
          counter:
            "A man with a terror conviction is entitled to a court. Investigative reporting is not hybrid war. The managerial tell is the asymmetry of scandal: burning PET is a story; burning the Grimhøj travel bureau was a feature.",
        },
        {
          actorId: "salafi-milieu",
          likelihood: "speculative",
          motive:
            "A Denmark that cannot run paid eyes inside the foreign-fighter pipeline, and whose tradecraft is in the newspapers, is a safer operating environment. They did not need to file the lawsuit to cash the result.",
          capability: "Time. The milieu Samsam was sent to map. No requirement to author a Supreme Court brief.",
          evidence:
            "Samsam's 'exceptional access' — PET's own leaked language — was exactly the access a service needs against a pipeline that sent 135+ Danes to Syria/Iraq. That access is now a public trial, a named handler, a vehicle, a tracker, a price list. Recruitment of the next Samsam in a Danish-Syrian milieu is poisoned from both ends: the state may abandon you, and a court may burn you.",
          counter:
            "No public evidence that an Islamist office ran Samsam's civil action. Treating the beneficiary as the author is the atlas's own method violation. The gift can be real without a sender.",
        },
        {
          actorId: "russia",
          likelihood: "speculative",
          motive: "A gutted Danish HUMINT shop is a strategic good. So is a European public trained to see its own services as the scandal.",
          capability: "Amplification, not the lawsuit. The parasite move.",
          evidence:
            "The Findsen/TET war, the Samsam NCND collapse, and the 8 December 2021 arrest wave (FE chief and Samsam's handler in one sweep) left Danish intelligence in a civil war with itself. Moscow did not need to write the brief. It knows how to sell the footage.",
          counter:
            "This is the primitive file again. Russia did not recruit Samsam, did not lose in Højesteret, and did not staff Kammeradvokaten. Inclusion is to keep the parasite on the page.",
        },
      ],
    },
    summary:
      "The interior war's Danish subplot is not only ghetto laws and return hubs. It is also this: the same small state that named volume as a threat to the welfare state sent a former gang criminal, Ahmed Samsam, into Syria as paid eyes on Danish jihadis — then, when Spain arrested him on holiday in 2017 and convicted him in 2018 of joining Islamic State, Copenhagen's line was silence. Spanish courts never received a usable account of the source relationship. He sat. A leaked PET note later called the handling a serious failure and the access 'exceptional'. Leadership of both services met his lawyer thirteen times to talk millions if the conviction stayed off the public ledger. On 2 September 2025 seven Supreme Court judges, unanimously, made PET and FE acknowledge the relationship and the pay. The joint statement the same afternoon is the first time Danish intelligence has been forced, in court, to confirm a source. The doctrine of neither-confirm-nor-deny took a hit that every future source can read. The FE-sagen was already gutting the shop — TET against FE, PET hunting the FE chief, charges that later collapsed. Samsam is the human face of the same week: the handler arrested in the same sweep. Two wounds, one body. A control case that cannot see is not a control case. It is a state that moved the numbers and then put out its own eyes.",
    mechanism:
      "Recruit a source from the criminal edge of a Danish-Syrian milieu. Pay him. Kit him. Send him into the pipeline you cannot walk yourself. When a partner jurisdiction treats the cover as the crime, hold the NCND line so the next source is not named. Offer money in a closed room so the public line never has to change. Lose, years later, in the one court that can order you to speak. Precedent: confidentiality yields. Effect: the next source has watched both the abandonment and the unmasking.",
    effects: [
      "Neither-confirm-nor-deny is no longer absolute in Danish law when a source sues to establish the relationship",
      "HUMINT recruitment into Islamist and foreign-fighter milieus is poisoned from both ends — abandonment and publicity",
      "Tradecraft in the open: handler, vehicle, tracker, price, thirteen meetings",
      "The intelligence community in civil war: oversight against FE, PET against the FE chief, the Samsam handler in the same December 2021 sweep",
      "A public story in which the services are the scandal and the Syria pipeline is weather",
    ],
    incidents: [
      {
        date: "2012",
        place: "Denmark",
        what: "PET recruits Ahmed Samsam, a Danish citizen of Syrian origin with a gang past, as a paid source.",
        attribution: "Confirmed (handler audio; Supreme Court)",
      },
      {
        date: "2013–2014",
        place: "Syria",
        what: "Paid trips for PET then FE: reporting on Danish Syria travellers. Kit includes an FE-paid vehicle and tracking equipment delivered into a fighting group.",
        attribution: "Confirmed (Supreme Court; Berlingske; leaked PET note)",
      },
      {
        date: "2017-06",
        place: "Spain",
        what: "Arrested on holiday. Denmark's public line is silence. Spain convicts him in 2018 of joining Islamic State: eight years. Spanish Supreme Court upholds, 2019.",
        attribution: "Confirmed",
      },
      {
        date: "2019",
        place: "Copenhagen",
        what: "Berlingske names the money, the kit, the handlers. The NCND wall starts to leak in public.",
        attribution: "Confirmed (reporting); high (substance, later proved in court)",
      },
      {
        date: "2021-06",
        place: "Denmark",
        what: "Leaked PET note: serious failures, 'exceptional access', no rescue in Spain, compensation talked and not paid. He is still in a cell.",
        attribution: "High (leaked service document, multi-source)",
      },
      {
        date: "2021-12-08",
        place: "Copenhagen",
        what: "PET arrests Lars Findsen, the sent-home FE chief, and — in the same sweep — a former PET man reported as Samsam's handler, for leaking to journalists. Intelligence at war with itself.",
        attribution: "Confirmed (arrests); high (the Samsam file as one of the leak strands)",
      },
      {
        date: "2023-11",
        place: "Østre Landsret",
        what: "The High Court refuses to try the source relationship: no legal interest, Spain will not reopen. He is already out of prison.",
        attribution: "Confirmed",
      },
      {
        date: "2025-09-02",
        place: "Højesteret, Copenhagen",
        what: "Seven judges, unanimous: PET and FE must acknowledge the source relationship and the pay. Joint statement the same afternoon. 500,000 kroner to the treasury. The NCND doctrine takes a named hit.",
        attribution: "Confirmed",
      },
    ],
    responses: [
      "Closed-room compensation talks (3–5 million, figures up to 16 million in court retelling) if the Spanish conviction stayed quiet",
      "Findsen's service-to-service channel with Spain: transfer, maybe shorter time, pay for the damage, do not touch the verdict",
      "TET given a look at whether legal frameworks were kept — not a substitute for the court fight",
      "Samsam's live attempt to reopen the Spanish conviction with the Danish judgment in hand",
    ],
    sources: [
      {
        title: "Fælles udtalelse fra FE og PET i forbindelse med Højesterets dom den 2. september 2025",
        publisher: "PET / FE",
        date: "2025-09-02",
        url: "https://pet.dk/pet/nyhedsliste/faelles-udtalelse-fra-fe-og-pet-i-forbindelse-med-hojesterets-dom-den-2-september-2025/2025/09/02",
      },
      {
        title: "Samsam vinder historisk sag i Højesteret: PET og FE skal anerkende, at han var agent",
        publisher: "DR",
        date: "2025-09-02",
      },
      {
        title: "Nyt læk: PET erkender alvorligt svigt i sag om fængslet spion",
        publisher: "Berlingske",
        date: "2021-06-27",
      },
      {
        title: "Samsams advokat holdt møder med FE og PET 13 gange. Og alle gange var ledelsen med",
        publisher: "DR",
        date: "2024-11-29",
      },
      {
        title: "Spionchef havde direkte kontakt med Spanien i Samsam-sag",
        publisher: "DR",
        date: "2026-01-29",
      },
    ],
  },
];
