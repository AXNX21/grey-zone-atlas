import type { Campaign } from "./types";

export const enforcementCampaigns: Campaign[] = [
  {
    id: "brotherhood-settlement",
    title: "Broderskabets bosættelse",
    dek: "Institutioner, dawa, indtrængen — civilisationsjihad som selvbeskrivelse, ikke et meme.",
    status: "active",
    period: { start: "1980" },
    domains: ["islamist-entry", "university", "ngo", "taboo"],
    theaters: ["france", "low-countries", "germany", "british-isles", "campus", "brussels"],
    attribution: {
      level: "high",
      assigned: ["muslim-brotherhood", "qatar", "femyso"],
      note: "Fransk, østrigsk og tysk efterretning har sagt den stille del om europæisk broderskabsinfrastruktur i et offentligt sprog, andre lande stadig hedger. 1991-forklaringsmemorandummet er et amerikansk retssagsbilag, ikke en europæisk kommandordre, og Georgetowns Bridge Initiative tager ikke fejl i, at det er blevet overfortolket. Det er heller ikke en forfalskning. Qaradawis dawa-erobring ligger på bånd. Qatars checkhæfte er ikke en teori.",
      hypotheses: [
        {
          actorId: "muslim-brotherhood",
          likelihood: "high",
          motive: "Gøre islam til et civilisatorisk alternativ: institutioner, observant base, et veto over sikkerhedspolitik, tid.",
          capability: "Forbund, skoler, velgørenhed, ungdomsorganisationer, en menneskerettighedsdialekt, natalisme.",
          evidence:
            "Navngivet europæisk gitter (CEM, FEMYSO, IESH, nationale forbund); fransk rapportering 2025; østrigske og tyske broderskabsfiler; memorandummet som et intensdokument, ikke et organigram.",
          counter:
            "Broderskabet er ikke 'muslimerne.' Mange forbund nægter forbindelsen. Nogle benægtelser er sande. En moske er ikke en celle. Kampagnen er det politiske projekt, ikke bønnen.",
        },
        {
          actorId: "qatar",
          likelihood: "high",
          motive: "Regionalt værktøj. Eliteadgang. Et europæisk klima, hvori Broderskabets politik er en partner.",
          capability: "Penge ind i IESH, FEMYSO, campusser, Al Jazeera.",
          evidence: "Rapporteret flerårig finansiering af IESH siden 2007 og FEMYSO siden 2016; universitetsgaver; Doha som broderskabshavn.",
          counter: "Qatar finansierer også museer og fodbold. Det er ikke dette dossier. Disse gaver er.",
        },
      ],
    },
    summary:
      "Det alvorligste islamistiske politiske projekt i Europa, der ikke er en bombe. Bosæt, byg (moske, skole, velfærd, voldgift), politiser tale om islam, træng ind i partiet og campus, vent. Dette er ikke et GRU-tempo. Det er et natalt og institutionelt tempo. Det managerielle kompleks er nyttigt for det: islamofobi som delt arbejdstitel, 'inklusion' som skjold, universitetet som farm. At behandle Broderskabet som et karikaturkalifat er, hvordan det foretrækker at blive bekæmpet. At behandle det som en social klub er, hvordan det foretrækker at blive styret.",
    mechanism:
      "Dawa og institutionsbygning. Ungdomsrørledning (FEMYSO). Klager og definitioner (islamofobi). Indtrængen i fagforeninger, partier og 'interreligiøst.' Golfpengene. Tid. Værtsstatens tabu gør resten.",
    effects: [
      "Et parallelt institutionelt gulv under dele af europæisk islam",
      "Kadrer i respektable rum",
      "Sikkerhedspolitik, der først skal forhandle et glossar",
    ],
    incidents: [
      {
        date: "1991-05",
        place: "Nordamerika (dokument) / europæisk rim",
        what: "Forklaringsmemorandum: bosættelse som en 'civilisations-jihadistisk proces.' Retssagsbilag, ikke en europæisk ordre — og ikke ingenting.",
        attribution: "Intensdokument; repræsentativitet omtvistet",
      },
      {
        date: "2025",
        place: "Frankrig",
        what: "Offentligt efterretningssprog om FEMYSO som en broderskabstræningsplatform.",
        attribution: "Franske tjenester",
      },
    ],
    responses: [
      "Franske, østrigske og (intermitterende) tyske forsøg på at navngive og begrænse netværket",
      "Golf-modfiler (UAE/Saudi), som Europa er langsom til at bruge, fordi de kommer fra ubehagelige stater",
      "En britisk og skandinavisk tøven, der stadig behandler dette som en community-relations-fil",
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
    title: "Drab som blasfemilov",
    dek: "Van Gogh, Hebdo, Paty, læreren som mål — udenretslig håndhævelse af OIC-kravet.",
    status: "ongoing",
    period: { start: "2004" },
    domains: ["street", "islamist-entry", "taboo", "university"],
    theaters: ["france", "low-countries", "british-isles", "scandinavia", "campus"],
    attribution: {
      level: "confirmed",
      assigned: ["islamist-street"],
      note: "Mordene er ikke en metafor. De er en kampagne mod skolen, tegningen og frafaldne. Geringsmænd er som regel alene eller små celler, ofte med salafistiske eller broderskabsnære miljøer i baggrunden, ikke en generalstab. Den hybride gevinst er nedstrøms: et kontinent, der lærer sine lærere at flinche.",
      hypotheses: [
        {
          actorId: "islamist-street",
          likelihood: "confirmed",
          motive: "Gøre læreren og tegneren til en lektie. Politier det sigbares grænse med døden.",
          capability: "Et gevær, en kniv, et miljø, der kalder det retfærdighed, et diaspora-internet, der jubler.",
          evidence:
            "Theo van Gogh 2004; Charlie Hebdo 2015; Samuel Paty 2020; Dominique Bernard 2023; Rushdie 2022; de danske tegningers efterspil som et globalt jag. Listen er argumentet.",
          counter:
            "Dette er forbrydelser af individer. De fleste europæiske muslimer fordømte dem. Begge sætninger er sande. En kampagne behøver ikke et flertal. Den behøver et frygtens veto.",
        },
        {
          actorId: "oic",
          likelihood: "plausible",
          motive: "Diplomatisk spor og gadespor rimer: det samme krav, forskellige værktøjer.",
          capability: "Resolutioner og krisediplomati, ikke kniven.",
          evidence: "De samme kriser dukker op på OIC-dagsordener. Det er ikke en opgaveordre til en morder.",
          counter: "Vask ikke en halshugning ind i en FN-resolution. Lad være med at lade som om resolutionen er uden relation til klimaet, der gør halshugningen til en 'samfundsspænding.'",
        },
      ],
    },
    summary:
      "Håndhævelsesarmen af talekampagnen bærer ikke altid jakkesæt. Den myrder en filminstruktør på en amsterdamsk gade, en redaktion i Paris, en lærer uden for en skole i Conflans. Hver gang rækker PSB og ministeriet efter samhørighed. Hver gang tager et par lærere mere tegningen ud af lektionen. Det er en strategisk virkning. Laïcité er den tilbageværende europæiske doktrin, der navngiver det. Universitetet vil gerne pensionere laïcité som fobisk. Gaden hjælper.",
    mechanism:
      "Et blasfemikrav, uopfyldt af lov, mødes af et drab. Medieliturgi ('ikke islam', 'en urolig ung mand', 'samfundsspændinger'). Institutioner tilpasser sig ved tavshed. Den næste lærer får budskabet uden et memo.",
    effects: [
      "Et skrumpende sæt mennesker villige til at undervise oplysningen, som om de mente det",
      "Satire som en højrisiko-profession",
      "En generation af embedsmænd, der tror, mod er en yderste-højre-æstetik",
    ],
    incidents: [
      {
        date: "2004-11-02",
        place: "Amsterdam",
        what: "Theo van Gogh myrdet.",
        attribution: "Islamistisk drab, politisk virkning øjeblikkelig",
      },
      {
        date: "2015-01-07",
        place: "Paris",
        what: "Charlie Hebdo. Redaktionen som mål.",
        attribution: "Bekræftet islamistisk angreb",
      },
      {
        date: "2020-10-16",
        place: "Conflans-Sainte-Honorine",
        what: "Samuel Paty halshugget for en lektion. Skolen som mål.",
        attribution: "Bekræftet. Kampagnen mod læreren, fuldført",
      },
      {
        date: "2023-10-13",
        place: "Arras",
        what: "Dominique Bernard myrdet. Fortsættelsen.",
        attribution: "Bekræftet",
      },
    ],
    responses: [
      "Fransk sikkerheds- og laïcité-hærdning — den europæiske outlier",
      "Mindesmærker, der nogle gange husker manden og nogle gange 'spændingerne'",
      "Et kontinent af pensum stille redigeret",
    ],
    sources: [
      { title: "French interior and education communications on Paty and Bernard", publisher: "République française", date: "2020–2023" },
      { title: "Van Gogh murder trial record", publisher: "Dutch courts", date: "2005" },
    ],
  },
  {
    id: "two-tier",
    title: "To-strenget orden",
    dek: "Underpolitiér det kommunale optøjer. Overpolitiér den indfødte protest, der navngiver det.",
    status: "active",
    period: { start: "2001" },
    domains: ["street", "taboo", "public-service", "lawfare"],
    theaters: ["british-isles", "france", "scandinavia", "low-countries", "germany"],
    attribution: {
      level: "high",
      assigned: ["managerial-class", "islamist-street", "psb-complex"],
      note: "Anarko-tyranni er et mønster, ikke en underskrevet ordre. Rotherhams 'vær ikke racistisk' var officielt. Den britiske two-tier-række i 2024 var en masselektie. Fransk banlieue-politi er et trediveårigt forlig. Svenske bombninger i 'udsatte områder' er en statistik. Kampagnespørgsmålet er, hvorfor ligelig beskyttelse blev handlet — og hvem der tjener på handlen.",
      hypotheses: [
        {
          actorId: "managerial-class",
          likelihood: "high",
          motive: "Køb kommunal fred, beskyt en moralsk historie, undgå fotografiet af et 'racistisk' politi.",
          capability: "Vejledning, anklagerprioriteter, hate-crime-tillæg, 'samfundsspænding' som KPI.",
          evidence:
            "Jay-rapporten og søster-grooming-filer (officiel kujoneri); 2024 UK optøjer-sigtelser sammenlignet med 2020 BLM; svenske udsat-område-kort; Frankrig efter Nahel 2023. Politiledelser bedømt på spænding, ikke på ligelig beskyttelse.",
          counter:
            "Forskellige optøjer har forskellige voldsprofiler. Nogle 'two-tier'-påstande er partisk regnskab. Mønsteret på tværs af lande og årtier er stadig mønsteret.",
        },
        {
          actorId: "islamist-street",
          likelihood: "high",
          motive: "En lavhåndhævelseszone som et gode i sig selv: narkotika, status, blasfemihåndhævelse, kvinder.",
          capability: "Optøjer som takst på almindeligt politi; klan og bande som en parallel orden.",
          evidence: "Taksten virker. Der findes bydele, hvor statens voldsmonopol er et rygte efter mørkets frembrud.",
          counter: "Kriminelle grupper vil have straffrihed i hver by på jorden. Det hybride stykke er det politiske skjold.",
        },
      ],
    },
    summary:
      "Gadedomænet i den indre krig. En stat, der ikke vil politiere et grooming-netværk på grund af race, ikke vil politiere et optøjer på grund af 'samfund' og så vil politiere en indfødt protest med ekstraordinær fart, fejler ikke tilfældigt. Den underviser. Lektien er, at det at lægge mærke til er farligere end det, der lægges mærke til. UK 2024 gjorde lektien national. Rotherham gjorde den utilgivelig. Frankrig har levet den så længe, den er et landskab. Sverige satte den på et kort og kaldte kortet 'udsat.'",
    mechanism:
      "Bedøm politi på spænding. Bedøm anklagere på had. Bedøm PSB på samhørighed. Det kommunale optøjer bliver en forhandling. Navngivningsoptøjet bliver en razzia. Lovgiv efter det andet.",
    effects: [
      "Parallelt politi som en europæisk urban kendsgerning",
      "Indfødt radikalisering som et nedstrømsprodukt, tabuet så citerer",
      "Kvinder og piger i grooming-sagerne som regningen, resten af landet ikke blev vist",
    ],
    incidents: [
      {
        date: "2014",
        place: "Rotherham",
        what: "Jay-rapporten. Officiel kujoneri, navngivet.",
        attribution: "Bekræftet institutionelt svigt med et racetabu i centrum",
      },
      {
        date: "2023-06",
        place: "Frankrig",
        what: "Nahel-optøjerne. En uge af brændt Frankrig som politisk takst.",
        attribution: "Optøjer som politik",
      },
      {
        date: "2024-08",
        place: "Storbritannien",
        what: "Two-tier som et husstandsord efter Southport-optøjerne og sigtelsesoptikken.",
        attribution: "Omtvistet som regnskab, ægte som masseopfattelse — selv en strategisk kendsgerning",
      },
    ],
    responses: [
      "Lejlighedsvise ligelig-beskyttelse-politikere (Danmark, bidder af Frankrig, en sen britisk omvendelse)",
      "Udsat-område-politieksperimenter, der ikke overlever kontakt med glossaret",
      "En offentlighed, der nu filmer dispariteten, hvilket er derfor DSA-laget betyder noget",
    ],
    sources: [
      { title: "Independent Inquiry into Child Sexual Exploitation in Rotherham (Jay)", publisher: "Rotherham MBC", date: "2014" },
      { title: "Swedish police vulnerable-area assessments", publisher: "Polisen", date: "2015–2025" },
    ],
  },
  {
    id: "taboo-naming",
    title: "Kill-switchen på navngivning",
    dek: "Yderste højre, racist, konspirationsteori, den store udskiftning som brand — aritmetik som en stilforbrydelse.",
    status: "active",
    period: { start: "1990" },
    domains: ["taboo", "media", "university", "lawfare"],
    theaters: ["newsroom", "campus", "online", "brussels"],
    attribution: {
      level: "unattributed",
      assigned: ["managerial-class", "un-migration", "psb-complex"],
      note: "Et tabu er en social kendsgerning, ikke en underskrevet ordre. Donorer af 'narrativ forandring' skriver manualer. HR-afdelinger håndhæver. PSB performer. De værste mænd, der lagde mærke til det (Breivik), holdes på skrivebordet som en kill-switch. Demografisk aritmetik er ikke et konspirationsbrand. Dette dossier findes for at holde dem adskilt — og for at navngive de mennesker, der fusionerer dem med vilje.",
      hypotheses: [
        {
          actorId: "un-migration",
          likelihood: "high",
          motive: "Skrevet: behandle restriktionistisk tale som et skadeligt narrativ, der skal omskrives.",
          capability: "Værktøjskasser, journalistuddannelse, partnerskaber med nationale agenturer.",
          evidence: "OHCHR- og IOM-produkter i deres egne navne. ICMPD-klasse databaser over hundredvis af europæiske migrationskommunikationskampagner.",
          counter: "Offentlige informationskampagner findes i hvert felt. Disse har en retning.",
        },
        {
          actorId: "managerial-class",
          likelihood: "high",
          motive: "En koalition, der skrumper, hvis census, kriminalitet-efter-oprindelse og islamistisk indtrængen er almindelige nyheder.",
          capability: "Stigma, HR, finansiering, ordet 'ansvarlig'.",
          evidence: "Den fart, hvormed en statistik bliver et karakterspørgsmål. Karriereskæbnerne for de embedsmænd og journalister, der offentliggjorde den forkerte tabel.",
          counter: "Noget 'navngivning' er i virkeligheden bigotteri. Et filter er ikke automatisk et våben. Dette filter er ensrettet.",
        },
        {
          actorId: "russia",
          likelihood: "plausible",
          motive: "Rid rillen. Sælg Vesten som dekadent og modoffentligheden som Moskvas.",
          capability: "FIMI. En lille gave sammenlignet med en PSB-stilvejledning.",
          evidence: "Dokumenteret forstærkning af både identitære og antirasistiske ekstremer.",
          counter: "Den primitive fil, igen. Giv ham ikke tabuet. Han forsøger at leje det.",
        },
      ],
    },
    summary:
      "Kognitivt terræn. Kampagnen er vundet, hvis en journalist, lærer eller folketingsmedlem ikke kan sige 'dette er et mønster' uden at miste jobbet. Drabsord gør det arbejde, love senere ratificerer: yderste højre, racist, konspirationsteori. 'Den store udskiftning' er den mest succesfulde sikring — en frase, der navngiver en aritmetik, og et brand, der navngiver et kloaknet. Dette atlas bruger aritmetikken og kører ikke brandet. Tabuets yndlingstræk er at lade som om, de er det samme. Breivik holdes på skrivebordet til det formål. Han ejer ikke fertilitetsrater. Giv dem ikke til ham; bliv ikke ham.",
    mechanism:
      "Stigma først. Ligne beskrivelse med forskrift. Hold et monster på fil. Finansier narrativ forandring. Når modoffentligheden stadig taler, lov og DSA. Når den stadig taler, to-strenget.",
    effects: [
      "En professionel klasse, der ikke kan tænke problemet offentligt",
      "En modoffentlighed deformeret af jagten — og så udstillet",
      "Politik, der kun kan diskuteres i eufemisme, hvilket er, hvordan man får bizar lov",
    ],
    incidents: [
      {
        date: "2011-07-22",
        place: "Norge",
        what: "Breivik. Et monster, der citerede udskiftning. Tabuets yndlings-kill-switch, stadig på skrivebordet.",
        attribution: "En forbrydelse. Ikke en gendrivelse af censusdata. Ikke en licens til at blive ham",
      },
      {
        date: "2018-12",
        place: "Europa",
        what: "Global Compact-rækken: centrummets linje var, at kun det yderste højre kunne se et script. Scriptet var offentliggjort.",
        attribution: "Tabu møder en tekst",
      },
    ],
    responses: [
      "Heterodokse akademikere og en håndfuld socialdemokratiske omvendelser (Danmark) som det respektable brud",
      "Alternative medier, så DSA",
      "Politikere, der taler som statistikere og kaldes ekstremister, indtil meningsmålingerne flytter sig",
    ],
    sources: [
      { title: "OHCHR narrative-change toolkits on migration", publisher: "OHCHR", date: "2020–2024" },
      { title: "European migration communication campaign databases", publisher: "ICMPD / Dennison et al.", date: "2024" },
    ],
  },
  {
    id: "denmark-reversal",
    title: "Danmark som kontrolcase",
    dek: "Et lille land navngav volumen som en trussel mod velfærdsstaten og flyttede tallene.",
    status: "ongoing",
    period: { start: "2015" },
    domains: ["migration", "public-service", "lawfare", "supranational"],
    theaters: ["scandinavia", "legal-europe", "brussels"],
    attribution: {
      level: "confirmed",
      assigned: ["denmark-state"],
      note: "Dette dossier er negativet: bevis for, at den indre kampagne er politik, ikke vejr. Socialdemokraterne omvendte. Love blev vedtaget. Tal flyttede sig. Strasbourg og Genève kæmpede stykker af det. NGO-laget gjorde Danmark til skurken. Den reaktion er selv evidens.",
      hypotheses: [
        {
          actorId: "denmark-state",
          likelihood: "confirmed",
          motive: "Holde en velfærdsstat som velfærdsstat. Hjemsendelse som default. Et offentligt sprog, hvori problemet må navngives.",
          capability: "En lille, højkapacitets administration, når partiet i bygningen er enig. Ghetto-/parallelsamfundspakker. Diplomatisk stædighed.",
          evidence:
            "Paradigmeskiftet 2019; smykkeloven som teater; syriske beskyttelsesinddragelser; parallelsamfunds- ('ghetto'-)lovgivning; asyltal ned relativt til Sveriges sti; returhub-diplomatiet 2026 med DE/AT/NL/EL.",
          counter:
            "Danmark er lille, en halvø, og ikke Berlin. Copy-paste er ikke automatisk. Nogle tiltag er teater. Nogle er i retten. Retningen er stadig pointen.",
        },
        {
          actorId: "ecthr",
          likelihood: "high",
          motive: "Holde skralden selv mod en socialdemokratisk stramning.",
          capability: "Domme (M.A. mod Danmark) og truslen om flere.",
          evidence: "Ventetider for familiesammenføring underkendt. Andre danske tiltag under kontinuerlig NGO-ild.",
          counter: "En ret, der anvender en konvention, Danmark underskrev. Kampagnespørgsmålet er, om et valg kan omskrive læsningen.",
        },
      ],
    },
    summary:
      "Hvis Sverige er advarselsfilen, er Danmark eksperimentet, der viste variablerne. Den samme nordiske udgangstillid, en anden beslutning: volumen er en trussel mod den lighed, velfærdsstaten er gjort af, parallelsamfund er en navngivet fjende, hjemsendelse er en politik ikke et slogan, og socialdemokraterne vil sige det. Den indre kampagnes operatører i Bruxelles og Genève behandlede dette som tilbageskridt. De havde ret, fra deres side. En stillingskrig kan kæmpes tilbage. Det tager bygningen, ikke et pressemøde.",
    mechanism:
      "Omvend partiet, der ejer embedsværket. Skriv lov, der fjerner skøn. Acceptér skurkerollen i NGO-pressen. Kæmp i Strasbourg uden at lade som om Strasbourg er demos. Offentliggør tallene.",
    effects: [
      "Et europæisk referencepunkt for begrænsning, der ikke er 'det yderste højre'",
      "Et permanent lovkrigsmål",
      "Et bevis, farligt for tabuet, for at politik sætter tallene",
      "Samsam-såret som den anden danske fil: den samme stat, der flyttede tallene, og så efterlod sine egne øjne i en spansk dok",
    ],
    incidents: [
      {
        date: "2019",
        place: "København",
        what: "Paradigmeskifte under en socialdemokratisk regering. Omvendelsen.",
        attribution: "Valgt politik",
      },
      {
        date: "2021",
        place: "Strasbourg",
        what: "M.A. mod Danmark om ventetider for familiesammenføring.",
        attribution: "Låsen, anvendt",
      },
      {
        date: "2026-08",
        place: "Kigali",
        what: "Danskledet returhub-diplomati med fire andre stater.",
        attribution: "Workaround, eksporteret",
      },
    ],
    responses: [
      "FN- og NGO-kampagner mod ghetto-/parallelsamfundslovene",
      "Stille studie i andre socialdemokratiske partier",
      "Det tilbageværende spørgsmål: om en stor stat kan kopiere en lille mod sin egen bygning",
    ],
    sources: [
      { title: "Danish parallel-society / ghetto packages and paradigm-shift bills", publisher: "Folketinget", date: "2018–2024" },
      { title: "M.A. v. Denmark [GC]", publisher: "ECtHR", date: "2021" },
    ],
  },
  {
    id: "mosque-census",
    title: "Moskéernes mørketal",
    dek: "Intet officielt tal, med vilje. Kortlagt 160–200. Inklusivt tre hundrede og lidt. 1974: én sunnimoské.",
    status: "active",
    period: { start: "1967" },
    domains: ["islamist-entry", "taboo", "migration", "public-service"],
    theaters: ["scandinavia", "germany", "france", "british-isles", "low-countries"],
    attribution: {
      level: "high",
      assigned: ["muslim-brotherhood", "diyanet", "salafi-milieu"],
      note: "Undertællingen er mekanismen. Danmark offentliggør anerkendte trossamfund, ikke rum. Kühles walk-ins (115 i 2006, ~170 i 2017) er det sidste ærlige kortlagte bånd. Kommercielle lister i 2026 scraper ~163 facader. En demografisk identitet — ~300.000 muslimer ÷ ~950 per fast bedested — lander på ~310 inklusive rum. Feltestimatet på 300+ er det møde, ikke et plakattal. De 40% 'væbnede' er et feltestimat: moderat som fjendtlig/mobiliserbar infrastruktur, spekulativt som våbenlagre. Protokollen splitter ordet.",
      hypotheses: [
        {
          actorId: "salafi-milieu",
          likelihood: "high",
          motive: "Rum som dawa, isolation og en pool til rejsebureauet. Arkitektur er valgfri. En kælder er nok.",
          capability: "Studiekredse, køkkener, Telegram, et håndfuld navngivne knuder (Grimhøj og fætre).",
          evidence:
            "Grimhøj som rejsebureau for ~22 af ~100 danske Syriensrejsende. PET vurderer stadig den militante islamistiske terrortrussel som 'alvorlig' i 2025–26. Salafistiske miljøer er de europæiske tjenesters navngivne problem i Frankrig, Østrig, Tyskland — Danmark hedger vocabularet og beholder rummene.",
          counter:
            "Salafister er et mindretal af bønnen. Mange kortlagte moskéer er etniske sogneklubber, Diyanet eller stille. Et milieu er ikke et flertal. Det er en kapacitet.",
        },
        {
          actorId: "diyanet",
          likelihood: "high",
          motive: "Et tyrkisk sognesystem på dansk (og tysk, nederlandsk, fransk) jord, der ikke svarer til værtslandets indenrigsministerium.",
          capability: "Imamlønninger, byggeri, ungdoms- og kvindeforeninger, en rapporteringskanal hjem.",
          evidence:
            "Diyanet er et statsdirektorat. Kühle 2017: ~40% af identificerede danske moskéer knyttet til en transnational organisation. DITIB-rækker i Tyskland er den offentlige version af samme sogn.",
          counter:
            "En fremmed statskirke kan være konservativ uden at være et magasin. Den hybride kendsgerning er fremmed kommando over prædikenen, ikke et gevær under minbaren.",
        },
        {
          actorId: "muslim-brotherhood",
          likelihood: "high",
          motive: "Moské, skole, velfærd, mægling — det institutionelle gulv under bosættelsen. Tid.",
          capability: "Forbund, dawa, et menneskerettighedsdialekt, golfpenge.",
          evidence:
            "Det europæiske gitter (CEM, FEMYSO, nationale forbund) navngives af franske, østrigske og tyske tjenester. Qaradawis dawa-erobring er på bånd. En moské er den lokale franchise.",
          counter:
            "Broderskabet er ikke 'muslimerne.' Nogle benægtelser af linket er sande. Kampagnen er det politiske projekt, ikke bønnen.",
        },
        {
          actorId: "islamist-street",
          likelihood: "plausible",
          motive: "Rum som dække for udenretslig håndhævelse, klanmægling og — i den stærke feltpåstand — lagre mod dagen.",
          capability: "Blodpengesamtaler, køkkenknive, et håndfuld terrorlogistik-berøringer på det offentlige spor.",
          evidence:
            "Al-Hidayyah-blodpengesamtaler (2021; 2026, ingen sanktion). Tauba-moskéens køkkenkniv i et drabsforsøg (dom 2026). Historisk væbnet fundraising omkring Grimhøj-nære kredse. De 40% lager-påstand er feltets stærkeste læsning af samme mønster.",
          counter:
            "Intet offentligt PET-inventar understøtter våbenlagre i to femtedele af danske moskéer. Blodpenge og en køkkenkniv er ikke et arsenal. Forberedelse kan være organisatorisk i årevis, før den er kinetisk. Det mønter stadig ikke 124 magasiner. Spekulativt som andel.",
        },
        {
          actorId: "hizb-ut-tahrir",
          likelihood: "high",
          motive: "En lovlig dansk moské som kalifatets butiksvindue. Tyskland forbød partiet. Danmark beholdt rummet.",
          capability: "Demonstrationer, litteratur, Masjid al-Faruq som en navngivet franchise.",
          evidence:
            "Kühle 2017 placerer al-Faruq i de ni blandede og navngiver den som Hizb ut-Tahrirs moské. Offentlige københavnske demonstrationer. Et dokumenteret rum, ikke et rygte.",
          counter:
            "Én navngivet moské er ikke to femtedele. HuT er lille, højrøstet og lovlig. En forbudsdebat er ikke en tælling. Høj for rummet; irrelevant som teori om 310.",
        },
        {
          actorId: "managerial-class",
          likelihood: "moderate",
          motive: "Holde det sakrale netværk i 'diversitet'-kolonnen. Et register ville lave et politisk tal. En trossamfundsliste laver et rettighedstal.",
          capability: "Kirkeministeriets definitioner, forskningsframing, tabuet mod at tælle rum som infrastruktur.",
          evidence:
            "Anerkendte samfund (37) budt frem, som om de var tællingen. Nybyggede (~12) budt frem i pressen, som om de var infrastrukturen. Kühle måtte bestilles to gange, fordi staten stadig ikke havde et tal.",
          counter:
            "Privatret forbyder en religionstælling. Det er en ægte binding, ikke kun en taktik. Det er også en taktik: bindingen bruges ikke til at skønne. Den bruges til at afslutte sætningen.",
        },
      ],
    },
    summary:
      "Den indre kampagne har en sakral fløj. I 1967 fik Norden sin første egentlige moské — Ahmadiyya, Hvidovre — og aviserne var nysgerrige. I 1974 kunne en dansker fra det år nævne én sunnimoské. I 2006 fandt en walk-in-kortlægning 115. I 2017 170, plus en kant forfatterne ikke ville certificere. I 2026 er det kortlagte bånd stadig 160–200, og det inklusive lag — hvert fast fredagsrum — er tallet, ingen er betalt for at lave. To identiteter mødes ved tre hundrede og lidt: befolkning over opland, og kortlagt gange en mørketalsfaktor. Det er bosættelse som arkitektur. Feltet siger så: langtfra alle venlige; omkring to femtedele væbnede. Dette atlas splitter det ord i fire etager. Transnational tilknytning på ~40% står på papir (Kühle). Fjendtlig/mobiliserbar infrastruktur på ~40% er en moderat feltlæsning. Rekrutteringsknuder er et navngivet håndfuld (høj). Våbenlagre på 40% er en spekulation, sagen ikke bærer i skala. Metoden forbyder at hvidvaske den sidste som den første. Den forbyder også at lade som om undertællingen er vejr.",
    mechanism:
      "Nægt et register. Tæl trossamfund i stedet for rum. Lad gæstearbejderbøn blive familiesammenføringssogn blive asylkælder blive provinsmusalla, aldrig i samme regneark. Finansier det kortlagte lags forskning en gang om årtiet. Behandl nybyggede som den offentlige historie. Annoncér Syrien-lejren i milieuet, så i lommen. Kald enhver inklusiv tælling 'islamofobisk aritmetik.'",
    effects: [
      "Et sakralt gitter, der groede hurtigere end nogen ministeriums vocabularium for det",
      "Et 40% transnationalt sognesystem, der gemmer sig i en 'fællesskab'-ramme",
      "En rekrutteringspool, hvis annonce flyttede fra opslagstavlen til Telegram uden at formindske poolen",
      "En politisk klasse, der kan sige 'omkring hundrede moskéer' og være teknisk sand om det forkerte lag",
    ],
    incidents: [
      {
        date: "1967-07-21",
        place: "Hvidovre",
        what: "Nusrat Jahan indviet. Første egentlige moské i Norden. Aviserne var nysgerrige. Folketinget var ikke.",
        attribution: "Bekræftet",
      },
      {
        date: "1974",
        place: "Danmark",
        what: "Kontrolår: én sunnimoské i levende erindring. Ahmadiyya erklæret uden for islam af den pakistanske stat og Den Muslimske Verdensliga samme år.",
        attribution: "Feltkontrol / bekræftet erklæring",
      },
      {
        date: "2014-06",
        place: "Rovsingsgade, København",
        what: "Hamad Bin Khalifa Civilisation Center indviet. Qatars nybyggede fotografi. Den arkitektoniske sætning ankommer.",
        attribution: "Bekræftet",
      },
      {
        date: "2015",
        place: "Vibevej, København",
        what: "Imam Ali-moskéen åbner. Iransk sogn. Folketinget kan senere ikke opløse den.",
        attribution: "Bekræftet",
      },
      {
        date: "2017-12",
        place: "Danmark",
        what: "Kühle & Larsen: ~170, +48% på elleve år, ~40% transnationale, mindst ti ucertificerede. Det sidste ærlige kortlagte bånd.",
        attribution: "Bekræftet (kortlagt lag)",
      },
      {
        date: "2025–26",
        place: "København NV / Folketinget",
        what: "Al-Hidayyah-blodpengesamtaler: ingen sanktion, anerkendelse beholdt. Imam Ali som iransk sogn: ingen opløsning. Det fjendtlige rum er stadig en rettighedshaver.",
        attribution: "Høj",
      },
    ],
    responses: [
      "To bestilte kortlægninger (2006, 2017) i stedet for et levende register",
      "Anerkendte-trossamfundslister som erstatning for et tal",
      "Parallelsamfunds-/ghettolovgivning, der navngiver boligområdet og stadig ikke vil navngive rummet",
      "Denne protokol: to identiteter, fire etager, grader påsat",
    ],
    sources: [
      { title: "Moskeér i Danmark II", publisher: "Kühle & Larsen, Aarhus Universitet", date: "2017" },
      { title: "Moskeer i Danmark", publisher: "Lene Kühle", date: "2006" },
      { title: "Muslim population estimates", publisher: "Brian Arly Jacobsen, KU", date: "2020–2025" },
      { title: "Vurdering af terrortruslen mod Danmark", publisher: "PET / CTA", date: "2025–2026" },
    ],
  },
  {
    id: "syria-pipeline",
    title: "Syrien-annoncen",
    dek: "Lejre blev solgt i Danmark. Grimhøj som rejsebureau. 135+ rejsende. Flyeren flyttede til lommen; poolen gjorde ikke.",
    status: "ongoing",
    period: { start: "2012" },
    domains: ["islamist-entry", "street", "taboo", "media"],
    theaters: ["scandinavia", "online"],
    attribution: {
      level: "high",
      assigned: ["salafi-milieu", "islamist-street"],
      note: "2012–16-filen er bekræftet: rekrutteringsvideoer, et moské-nært rejsebureau i Aarhus, PET's 135+-tal, blandt de højeste per capita i EU. 2025–26-residualen er høj som intention (IS vil stadig angribe i Vesten; PET siger stadig 'alvorlig') og moderat som fysisk lejr-annonce inde i danske rum. Annoncen er nu mest online. Moskéen forbliver poolen.",
      hypotheses: [
        {
          actorId: "salafi-milieu",
          likelihood: "high",
          motive: "En slagmark, en status, en renselse. Lejren er produktet. Rummet er butiksvinduet.",
          capability: "Studiekredse, hjemvendte veteraner, krypterede kanaler, et håndfuld navngivne moskéer.",
          evidence:
            "Grimhøj: ~22 af ~100 danske rejsende. YouTube-'emir'-videoer rettet mod dansk ungdom. Aarhus Politi byggede et exit-program, fordi rørledningen var lokal. Abdessamad Fateh (Abu Hamza) sat på USA's terroristliste fra den bane.",
          counter:
            "Hjemvendte nægter ofte minbaren og krediterer vennegruppen. Det er en arbejdsdeling: moské som pool, køkken som kontor, Telegram som flyer. Det er ikke en frifindelse af milieuet.",
        },
        {
          actorId: "islamist-street",
          likelihood: "high",
          motive: "Veteraner, status, et kinetisk cv til den næste diskussion med den danske stat.",
          capability: "Klaner, bander, det kriminel-til-jihad-hop, dansk journalistik dokumenterede i Syrien-kohorten.",
          evidence:
            "Necef / DR 2016: en stor andel af identificerede rejsende havde kriminel fortid i byerne. PET 2025: kriminelle som stedfortrædere optræder også i det bredere terrorbillede (Iran). Gaden og lejren rimer.",
          counter:
            "En kriminel fortid er ikke en lejr. De fleste bandemedlemmer tog ikke afsted. Hoppet er et mønster i et mindretal, ikke en session.",
        },
        {
          actorId: "managerial-class",
          likelihood: "moderate",
          motive: "Holde rørledningen inde i 'radikalisering' som et socialt substansiv, ikke inde i bosættelse som strategi.",
          capability: "Aarhus-modellen som eksporterbar venlighed; PSB-framing; tabuet mod at spørge, hvilke rum der fodrede bussen.",
          evidence:
            "Aarhus' exit-program var ægte og bremsede sandsynligvis rejser. Det var også en måde ikke at lukke Grimhøj. Venlighed som inddæmning. Rummet blev.",
          counter:
            "Exit-arbejde er ikke en forbrydelse. Nogle hjemvendte blev trukket tilbage. En socialramme kan redde et menneske og stadig nægte det institutionelle spørgsmål.",
        },
      ],
    },
    summary:
      "Danmark, en lille højtillidsstat, sendte fremmedkrigere til Syrien med blandt de højeste per capita-rater i EU. Det er ikke kun et 'internet'-mysterie. Annoncen var aggressiv i 2012–16: videoer, rekrutterere, en moské i en århusiansk isfabrik, som politiet knyttede til omkring en femtedel af den danske trafik. PET talte mindst 135 rejsende frem til april 2016; omkring halvdelen kom hjem; dusinvis døde. I 2026 ligger lejr-flyeren mest i lommen — Telegram, TikTok, IS kalder stadig til vestlige angreb — og PET siger, at den sandsynlige gerningsmand er en lone actor eller en lille gruppe, ofte radikaliseret online. Det skift er ægte. Det er også en måde at pensionere moskéen fra sætningen. Poolen er stadig poolen. En træningslejr annonceret i Danmark er et vidne, som feltet siger, at en brøkdel af det sakrale netværk aldrig kun var et sogn. Hvor stor en brøkdel er protokollens 40%-spørgsmål. Dette dossier holder annoncen. Tællingen holder rummene.",
    mechanism:
      "Prædik en pligt. Film en emir. Parker en rekrutterer i et kendt rum. Flyt de villige gennem Tyrkiet. Når staten kommer, nægt minbaren og behold køkkenet. Efter kalifatet falder, flyt flyeren ind i telefonen. Behold poolen.",
    effects: [
      "Et dansk veteranproblem, PET stadig behandler som levende",
      "Bevis for, at et nordisk moské-nært milieu kan fungere som rejsebureau",
      "En skabelon: annoncér lejren, nægt moskéen, behold rummet",
    ],
    incidents: [
      {
        date: "2012-11",
        place: "YouTube / Danmark",
        what: "Dansk jihadi-'emir'-video, der rekrutterer til Syrien. Krigen bliver et indenlandsk produkt.",
        attribution: "Bekræftet",
      },
      {
        date: "2014",
        place: "Grimhøjvej, Aarhus",
        what: "Politi: moskéen er rejsebureau for omkring en femtedel af danske Syrienskrigere. Formanden vifter det væk.",
        attribution: "Høj (politital); benægtelse på sagen",
      },
      {
        date: "2016-04",
        place: "Danmark",
        what: "PET/CTA: mindst 135 rejsende til Syrien/Irak. Blandt de højeste per capita i EU.",
        attribution: "Bekræftet",
      },
      {
        date: "2025–26",
        place: "Danmark / online",
        what: "PET: militant islamistisk trussel stadig 'alvorlig'. Sandsynlig gerningsmand alene eller lille gruppe, ofte online. IS-intention mod Vesten uændret. Flyeren forlod opslagstavlen.",
        attribution: "Bekræftet (trusselsniveau); høj (online residual)",
      },
    ],
    responses: [
      "Aarhus exit-/dialogmodel — rejser ned, rummet stadig åbent",
      "Fremmedkrigerkriminalisering efter kendsgerningen",
      "PET-trusselsvurderinger, der navngiver militant islamisme og stadig ikke vil udgive et moskékort",
    ],
    sources: [
      { title: "Vurdering af terrortruslen mod Danmark", publisher: "PET / CTA", date: "2016, 2025, 2026" },
      { title: "Aarhus Grimhøj-dækning", publisher: "Washington Post / Kristeligt Dagblad / Østjyllands Politi", date: "2014" },
      { title: "Danish Syria-warriors investigation", publisher: "DR / Politiken / Necef, SDU", date: "2016–2017" },
    ],
  },
  {
    id: "samsam-case",
    title: "Samsam-såret",
    dek: "Danmark sendte en kilde ind i Syrien-rørledningen, hverken-be-eller-afkræftede ham ind i en spansk terrordom — og Højesteret tvang tjenesterne til at sige det.",
    status: "ongoing",
    period: { start: "2012" },
    domains: ["lawfare", "islamist-entry", "media", "taboo", "public-service"],
    theaters: ["scandinavia", "legal-europe", "newsroom"],
    attribution: {
      level: "high",
      assigned: ["pet-fe"],
      note: "Såret ligger på papir: et lækket PET-notat om svigt, tretten ledelsesmøder om millioner mens den offentlige linje var tavshed, en enstemmig Højesteret 2. september 2025, og en fælles PET/FE-udtalelse samme eftermiddag. Hvem der brugte såret som kampagne er det levende spørgsmål. Et politbureau, der kørte Ahmed Samsam som våben mod dansk efterretning, er en påstand, der skal have et dokument. Konvergens er ikke uskyld. En butik, der ikke kan beskytte en kilde, og ikke kan tie når kilden sagsøger, vil ikke se den næste rørledning.",
      hypotheses: [
        {
          actorId: "pet-fe",
          likelihood: "high",
          motive:
            "Hold kildelisten lukket. Undgå at en spansk retssal bliver et katalog over dansk HUMINT ind i jihadistgrupper. Betal i et lukket rum frem for at tale i et åbent.",
          capability: "Rekruttering, kontanter, udstyr, en udenlandsk tjeneste, hverken-be-eller-afkræft-doktrinen, Kammeradvokaten.",
          evidence:
            "Højesteret 2. september 2025: Samsam beviste, at han arbejdede for tjenesterne på Syrien-turene 2013–14 og blev betalt for at indberette om danske rejsende. PET og FE sagde det samme dag. Berlingske 2019: penge og udstyr, herunder en FE-betalt Mitsubishi Pajero og sporingsudstyr afleveret til en kampgruppe. Et lækket PET-notat (2021) kaldte Spanien-håndteringen et alvorligt svigt. Tretten møder med tjenesternes ledelse om millionkompensation, hvis han slugte den spanske dom. Lars Findsen, som FE-chef, forklarede i retten, at han havde kontakt med Spanien om overførsel og betaling for skaden — selve dommen skulle ikke røres.",
          counter:
            "Hverken-be-eller-afkræft er, hvordan enhver alvorlig tjeneste beskytter den næste kilde, ikke en tilståelse. At bekræfte Samsam i 2017 ville have navngivet en metode og et menneske, der stadig var i rækkevidde af dem, han havde indberettet. Noget af tavsheden var pligt. Pligt, der efterlader ens egen kilde i en udenlandsk dok i otte år, er også et svigt. Tjenesterne er forfattere til den første halvdel af denne fil. De er målet for den anden.",
        },
        {
          actorId: "managerial-class",
          likelihood: "plausible",
          motive:
            "En politisk kultur, hvor den hemmelige stats tavshed er forargelsen, mens Syrien-rørledningen kilden blev sendt ind for at kortlægge er baggrundsvejr. Rettigheder mod bygningen, altid; HUMINT ind i islamistiske miljøer, aldrig helt nødsituationen.",
          capability: "Domstole, pressen der behandler NCND som dække, en justitsminister der svarer på nye beviser med 'han blev dømt alligevel'.",
          evidence:
            "Højesterets egen formel: hensynet til fortroligheden om efterretningstjenesternes arbejde må i denne sag vige for borgerens interesse i at få fastslået et kildeforhold. Den sætning er nu et værktøj. Østre Landsret havde nægtet at se. Højesteret så. Den politiske klasse brugte ikke tilsvarende energi på, hvorfor Danmark havde blandt EU's højeste per capita-strømme ind i Syrien.",
          counter:
            "En mand med en terrordom har krav på en ret. Gravende journalistik er ikke hybridkrig. Det managerielle tegn er skandalens asymmetri: at brænde PET er en historie; at brænde Grimhøjs rejsebureau var et feature.",
        },
        {
          actorId: "salafi-milieu",
          likelihood: "speculative",
          motive:
            "Et Danmark, der ikke kan køre betalte øjne inde i fremmedkriger-rørledningen, og hvis tradecraft ligger i aviserne, er et sikrere operationsmiljø. De behøvede ikke at anlægge sagen for at indkassere resultatet.",
          capability: "Tid. Miljøet Samsam blev sendt ind for at kortlægge. Intet krav om at forfatte et højesteretsindlæg.",
          evidence:
            "Samsams 'enestående access' — PET's eget lækkede sprog — var præcis den adgang en tjeneste skal have mod en rørledning, der sendte 135+ danskere til Syrien/Irak. Den adgang er nu en offentlig retssag, en navngivet kildefører, et køretøj, en tracker, en prisliste. Rekruttering af den næste Samsam i et dansk-syrisk miljø er forgiftet fra begge ender: staten kan svigte dig, og en domstol kan brænde dig.",
          counter:
            "Intet offentligt bevis for, at et islamistisk kontor kørte Samsams civile sag. At behandle begunstigede som forfatter er protokollens egen metodeovertrædelse. Gaven kan være ægte uden en afsender.",
        },
        {
          actorId: "russia",
          likelihood: "speculative",
          motive: "En tømt dansk HUMINT-butik er et strategisk gode. Det er også en europæisk offentlighed trænet til at se sine egne tjenester som skandalen.",
          capability: "Forstærkning, ikke retssagen. Parasittrækket.",
          evidence:
            "Findsen/TET-krigen, Samsams NCND-kollaps og anholdelsesbølgen 8. december 2021 (FE-chefen og Samsams kildefører i ét hug) efterlod dansk efterretning i borgerkrig med sig selv. Moskva behøvede ikke at skrive indlægget. Det ved, hvordan man sælger optagelserne.",
          counter:
            "Dette er den primitive fil igen. Rusland rekrutterede ikke Samsam, tabte ikke i Højesteret og bemandede ikke Kammeradvokaten. Optagelse er at holde parasitten på siden.",
        },
      ],
    },
    summary:
      "Den indre krigs danske sidehistorie er ikke kun ghettolove og returhubs. Den er også dette: den samme lille stat, der navngav volumen som en trussel mod velfærdsstaten, sendte en tidligere bandekriminel, Ahmed Samsam, ind i Syrien som betalte øjne på danske jihadister — og da Spanien anholdt ham på ferie i 2017 og i 2018 dømte ham for at have tilsluttet sig Islamisk Stat, var Københavns linje tavshed. Spanske domstole fik aldrig et brugbart regnskab for kildeforholdet. Han sad. Et lækket PET-notat kaldte senere håndteringen et alvorligt svigt og adgangen 'enestående'. Ledelsen i begge tjenester mødtes med hans advokat tretten gange for at tale millioner, hvis dommen blev ude af det offentlige register. Den 2. september 2025 gjorde syv højesteretsdommere, enstemmigt, at PET og FE skulle anerkende forholdet og betalingen. Den fælles udtalelse samme eftermiddag er første gang dansk efterretning er blevet tvunget, i retten, til at bekræfte en kilde. Doktrinen om hverken-be-eller-afkræft tog et hit, som enhver fremtidig kilde kan læse. FE-sagen var allerede i gang med at tømme butikken — TET mod FE, PET på jagt efter FE-chefen, sigtelser der senere faldt. Samsam er det menneskelige ansigt på samme uge: kildeføreren anholdt i samme aktion. To sår, ét legeme. En kontrolcase, der ikke kan se, er ikke en kontrolcase. Det er en stat, der flyttede tallene og så slukkede sine egne øjne.",
    mechanism:
      "Rekruttér en kilde fra den kriminelle kant af et dansk-syrisk miljø. Betal ham. Udstyr ham. Send ham ind i rørledningen, du ikke selv kan gå. Når en partnerjurisdiktion behandler dækket som forbrydelsen, hold NCND-linjen, så den næste kilde ikke navngives. Tilbyd penge i et lukket rum, så den offentlige linje aldrig skal skifte. Tab, år senere, i den ene ret, der kan beordre dig til at tale. Præcedens: fortrolighed viger. Virkning: den næste kilde har set både svigtet og afsløringen.",
    effects: [
      "Hverken-be-eller-afkræft er ikke længere absolut i dansk ret, når en kilde sagsøger for at få fastslået forholdet",
      "HUMINT-rekruttering ind i islamistiske og fremmedkriger-miljøer er forgiftet fra begge ender — svigt og offentlighed",
      "Tradecraft i det åbne: kildefører, køretøj, tracker, pris, tretten møder",
      "Efterretningsmiljøet i borgerkrig: tilsyn mod FE, PET mod FE-chefen, Samsams kildefører i samme sweep december 2021",
      "En offentlig historie, hvor tjenesterne er skandalen og Syrien-rørledningen er vejr",
    ],
    incidents: [
      {
        date: "2012",
        place: "Danmark",
        what: "PET rekrutterer Ahmed Samsam, dansk statsborger med syrisk baggrund og bandefortid, som betalt kilde.",
        attribution: "Bekræftet (kildefører-lyd; Højesteret)",
      },
      {
        date: "2013–2014",
        place: "Syrien",
        what: "Betalte ture for PET og siden FE: indberetning om danske Syrien-rejsende. Udstyr inkluderer et FE-betalt køretøj og sporingsudstyr afleveret til en kampgruppe.",
        attribution: "Bekræftet (Højesteret; Berlingske; lækket PET-notat)",
      },
      {
        date: "2017-06",
        place: "Spanien",
        what: "Anholdt på ferie. Danmarks offentlige linje er tavshed. Spanien dømmer ham i 2018 for at have tilsluttet sig Islamisk Stat: otte år. Spansk højesteret stadfæster, 2019.",
        attribution: "Bekræftet",
      },
      {
        date: "2019",
        place: "København",
        what: "Berlingske navngiver pengene, udstyret, kildeførerne. NCND-muren begynder at lække i offentligheden.",
        attribution: "Bekræftet (dækning); høj (substans, senere bevist i retten)",
      },
      {
        date: "2021-06",
        place: "Danmark",
        what: "Lækket PET-notat: alvorlige svigt, 'enestående access', ingen redning i Spanien, kompensation talt og ikke betalt. Han sidder stadig.",
        attribution: "Høj (lækket tjenestedokument, flere kilder)",
      },
      {
        date: "2021-12-08",
        place: "København",
        what: "PET anholder Lars Findsen, den hjemsendte FE-chef, og — i samme aktion — en tidligere PET-mand omtalt som Samsams kildefører, for læk til journalister. Efterretning i krig med sig selv.",
        attribution: "Bekræftet (anholdelser); høj (Samsam-filen som en af lækagestrengene)",
      },
      {
        date: "2023-11",
        place: "Østre Landsret",
        what: "Landsretten nægter at prøve kildeforholdet: ingen retlig interesse, Spanien genoptager ikke. Han er allerede ude af fængslet.",
        attribution: "Bekræftet",
      },
      {
        date: "2025-09-02",
        place: "Højesteret, København",
        what: "Syv dommere, enstemmigt: PET og FE skal anerkende kildeforholdet og betalingen. Fælles udtalelse samme eftermiddag. 500.000 kroner til statskassen. NCND-doktrinen tager et navngivet hit.",
        attribution: "Bekræftet",
      },
    ],
    responses: [
      "Lukkede kompensationssamtaler (3–5 millioner, tal op til 16 millioner i retsgengivelse), hvis den spanske dom blev tavs",
      "Findsens tjeneste-til-tjeneste-kanal med Spanien: overførsel, måske kortere tid, betaling for skaden, rør ikke dommen",
      "TET fik et kig på, om de retlige rammer blev holdt — ikke en erstatning for retssagen",
      "Samsams levende forsøg på at få den spanske dom genoptaget med den danske kendelse i hånden",
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
