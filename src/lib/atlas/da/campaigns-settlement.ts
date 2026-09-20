import type { Campaign } from "./types";

export const settlementCampaigns: Campaign[] = [
  {
    id: "mass-settlement",
    title: "Massebosættelse som strategi",
    dek: "Arbejdskraft, asyl, familiesammenføring og fødselsrate stablet, indtil demos er et andet land.",
    status: "active",
    period: { start: "1990" },
    domains: ["migration", "supranational", "ngo", "taboo"],
    theaters: ["scandinavia", "germany", "france", "british-isles", "mediterranean", "brussels"],
    attribution: {
      level: "high",
      assigned: ["managerial-class", "european-commission", "un-migration"],
      note: "Ingen enkelt ordre i 1990 sagde 'erstat demos.' Portene er skrevet: asylmaximalisme, familiesammenføring, svag hjemsendelse, regularisering og et humanitært vocabularium, der behandler håndhævelse som skandalen. Volumen plus oprindelsesmix plus tid er en strategi, uanset om den blev bekendtgjort som en. Modargumentet — 'arbejdskraftmangel og venlighed' — forklarer starter. Det forklarer ikke vægringen ved at stoppe.",
      hypotheses: [
        {
          actorId: "managerial-class",
          likelihood: "high",
          motive:
            "Et postnationalt Europa, billigere arbejdskraft, et moralsk monopol, og i nogle byer et nyt vælgerkorps, der ikke stemmer som det gamle.",
          capability: "Ministerier, centrumspartier, HR, universiteter, PSB, NGO-laget.",
          evidence:
            "Tredive år med netto ekstra-europæisk indvandring ind i højtillidsstater; Eurostat asyltoppe i 2015 og 2023 begge over en million førstegangsansøgninger; familiesammenføring som stille multiplikator; statsborgerskab og stemmeret som lås. Begrænsning, når den prøves, litigieres og stigmatiseres snarere end evalueres.",
          counter:
            "Arbejdsgivere ville have arbejdere. Geneve-konventionens forpligtelser er ægte. Lav europæisk fertilitet skabte et hul. Noget af dette er drift plus stiafhængighed, ikke et projekt. Drift, der forsvares med lovkrig, er ikke længere bare drift.",
        },
        {
          actorId: "un-migration",
          likelihood: "high",
          motive: "Migration som en permanent, positivt framed, rettighedsbærende proces — kompaktens eget sprog.",
          capability: "Blød lov, operationel tilstedeværelse, narrativ-forandring-værktøjskasser, partnerskab med Kommissionen.",
          evidence:
            "Global Compact 2018; IOM som koordinator; OHCHR #StandUp4Migrants og værktøjskasser mod 'skadelige narrativer'; UNHCR-doktrin eksporteret ind i EU-asylret.",
          counter: "Ikke-bindende. Stater underskrev. Underskrift er stadig et valg — og et tegn.",
        },
        {
          actorId: "muslim-brotherhood",
          likelihood: "moderate",
          motive: "Bosættelse som forudsætning for et civilisatorisk tag. Natalisme og institutioner gør resten.",
          capability: "Forbund, moskeer, skoler, dawa. Ikke asylkontoret.",
          evidence:
            "Primærkildesprog om bosættelse (Qaradawi, 1991-memorandummet som et intensdokument). Broderskabet opfandt ikke europæisk asylret. Det er den aktør, der er bedst forberedt til at bruge, hvad loven leverer.",
          counter:
            "De fleste ankomster er ikke broderskabskadrer. At sammenblande volumen med islamistisk kommando er karikaturen. At ignorere, hvem der organiserer den bosatte befolkning, er den anden karikatur.",
        },
        {
          actorId: "russia",
          likelihood: "plausible",
          motive: "Brud. Lejlighedsvis grænseinstrumentalisering (Finland, Hviderusland som platform).",
          capability: "FIMI plus et frontiertrick. Ikke det tyske BAMF.",
          evidence: "Hviderusland 2021–26 og den finske kopi er ægte og små ved siden af 2015 og familiesammenføring.",
          counter: "Dette er den primitive fil. Den bemander ikke Malmö.",
        },
      ],
    },
    summary:
      "Den indre krigs krop. Fra slutårhundredets arbejdskraftrekruttering gennem familiesammenføring, 1990'ernes asyludvidelse, 2015 som en europæisk elitebeslutning og 2022–24-andentoppen har ekstra-europæisk bosættelse været hurtig nok til at ændre skoler, gader, kriminalitetskort og partisystemer inden for en generation. Mennesker på vejen er personer. Volumen, tempo, oprindelse og den juridiske vægring ved at rulle tilbage er politik. Politik i denne skala er strategi. Danmark efter 2019 er kontrollen: tallene flytter sig, når loven flytter sig. Sverige 2015–22 er advarselsfilen. Tyskland 2015 er året, Europas centrum besluttede, og så brugte et årti på at skændes med beslutningen.",
    mechanism:
      "Hold flere porte halvt åbne på én gang — asyl, subsidiær beskyttelse, familiesammenføring, studie- og arbejdsspor — så lukning af én er et pressemøde og ikke et stop. Par med svag hjemsendelse (encifrede effektive rater i flere store stater), et entreprenørlag betalt per ankomst og et tabu mod at beskrive oprindelsesmix. Statsborgerskab og familiedannelse låser aritmetikken. Næste valg bliver så bedt om at behandle resultatet som vejret.",
    effects: [
      "Skole- og boligsegregation som en normal europæisk kendsgerning",
      "Partisystemchok (AfD, SD, PVV, RN, Reform, DF, Chega) som en slæbende indikator",
      "Et velfærdsstatsregnestykke, som socialdemokrater i Danmark navngav, og andre stadig ikke vil",
      "Islamistisk og klaninfrastruktur med et demografisk gulv",
      "En tabuindustri, hvis job er at kalde ovenstående 'yderste højre'",
    ],
    incidents: [
      {
        date: "2015-09",
        place: "Tyskland / Europa",
        what: "Merkels Öffnung. Året, der omskrev koalitionsmatematik og centrummets moralske sprog.",
        attribution: "Elitebeslutning, ikke en vejrbegivenhed",
      },
      {
        date: "2015-12-31",
        place: "Köln",
        what: "Nytårsangreb. Geringsmændenes oprindelse blev en stilvejledningskrise.",
        attribution: "Kriminalitet plus en medietabu-sag",
      },
      {
        date: "2023",
        place: "EU",
        what: "Anden top i førstegangsasyl, igen omkring en million, efter 'aldrig mere 2015'-prædikenerne.",
        attribution: "Politikken stadig åben",
      },
    ],
    responses: [
      "Danmarks paradigmeskifte som det arbejdende modeksempel",
      "Italiens 2022–26-eksternaliseringsforsøg (Albanien) som en levende lovkrigsfil",
      "EU-pagten som et managerielt substitut for et stop — omfordeling plus procedurer, ikke en lukket port",
      "Valgmæssige oprør, der så møder domstole og PSB",
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
    title: "Familiesammenføring som multiplikatoren",
    dek: "Den stille volumedriver, der gør en ankomst til en bosættelse.",
    status: "ongoing",
    period: { start: "1990" },
    domains: ["migration", "lawfare", "supranational"],
    theaters: ["scandinavia", "germany", "france", "british-isles", "legal-europe"],
    attribution: {
      level: "confirmed",
      assigned: ["ecthr", "european-commission"],
      note: "Lovteksterne er offentlige. Artikel 8-praksis, EU's familiesammenføringsdirektiv og nationale gennemførelseslove gør mere langsigtet demografisk arbejde end den oppustelige båd på fotografiet. Danmarks forsøg på at pålægge ventetider blev litigieret (M.A. mod Danmark). Det er filen.",
      hypotheses: [
        {
          actorId: "ecthr",
          likelihood: "high",
          motive: "En rettighedslæsning, hvor familieliv rangerer over statens interesse i at kontrollere porten.",
          capability: "Domme, der bliver gulvet under national ret.",
          evidence: "M.A. mod Danmark (2021) om ventetider; en bredere artikel 8-indvandringsjurisprudens, som NGO'er påberåber som rutine.",
          counter: "Konventionen skaber ikke, på sin flade, en ret til at vælge bopælsland. Domstolen har sagt det og så bygget en praksis, der ofte gør det modsatte.",
        },
        {
          actorId: "ngo-litigation",
          likelihood: "high",
          motive: "Volumen som mission. Familiesammenføring er den respektable multiplikator.",
          capability: "Ansøgninger, testsager, mediepakning af den adskilte familie.",
          evidence: "Standardiseret retssagsførelse på tværs af hovedstæder; kommissionsfinansierede juridiske netværk.",
          counter: "En ægtefælle og et barn er ikke et trick. Kampagnespørgsmålet er skala, oprindelsesmix og vægringen ved ventetider, som andre indvandringsstater behandler som almindelige.",
        },
      ],
    },
    summary:
      "Hvis asyl er kameraet, er familiesammenføring aritmetikken. Over et årti overhaler den ofte den oprindelige ankomst. Den er juridisk sværere at angribe, fordi den fotograferer som kærlighed. Den hybride brug er at få en 'pause' til at se ud som grusomhed og en ventetid til at se ud som en krænkelse. Danmark prøvede. Strasbourg svarede. Kontrolcasen er igen pointen: dette er ikke tyngdekraft.",
    mechanism:
      "Ankom på hvilken som helst port. Ansøg om familie. Brug artikel 8, familiesammenføringsdirektivet og national velfærd til at gøre afslag dyrt. Gentag. NGO'er leverer sagen; PSB leverer ansigtet; retten leverer skralden.",
    effects: [
      "En anden bølge, der aldrig behøver en middelhavsoverfart",
      "Husstandsdannelse i højvelfærdsbydele",
      "En politisk tredje skinne: 'I ville splitte familier'",
    ],
    incidents: [
      {
        date: "2021",
        place: "Strasbourg / Danmark",
        what: "M.A. mod Danmark — ventetid på familiesammenføring for midlertidig beskyttelse kendt som brud.",
        attribution: "EMD's storkammer",
      },
    ],
    responses: [
      "Ventetider, indkomst- og boligkrav, aldersgulve — hvor domstole stadig tillader dem",
      "Midlertidige beskyttelsesstatusser designet (og så litigieret) til at forsinke sammenføring",
    ],
    sources: [
      { title: "M.A. v. Denmark [GC]", publisher: "ECtHR", date: "2021" },
      { title: "Guide on the case-law of the Convention — Immigration", publisher: "ECtHR", date: "2026" },
    ],
  },
  {
    id: "mediterranean-route",
    title: "Den våde grænse og NGO-smugler-markedet",
    dek: "Både, SAR-NGO'er, smuglere og påstanden om, at en korridor ikke kan lukkes, fordi den findes.",
    status: "active",
    period: { start: "2013" },
    domains: ["migration", "ngo", "media"],
    theaters: ["mediterranean", "brussels", "newsroom", "legal-europe"],
    attribution: {
      level: "contested",
      assigned: ["ngo-litigation"],
      note: "Humanitære kendsgerninger og strategiske virkninger kan begge være sande. Folk drukner. Smuglere sælger et produkt, hvis sidste mil i flere sæsoner har været et europæisk-flaget dæk. Om SAR-NGO'er er en pull-faktor er det levende argument — ikke om de har til hensigt at være soldater.",
      hypotheses: [
        {
          actorId: "ngo-litigation",
          likelihood: "contested",
          motive: "Redde liv; også holde ruten politisk åben; budget og mening fra volumen.",
          capability: "Skibe, spotterfly, advokater, en medieoperation, der fotograferer staten som morderen.",
          evidence:
            "År af SAR–libysk kyst–italiensk havn-trekanter; italienske og danske politiske påstande om pull; NGO-benægtelser af, at tilstedeværelse ændrer smuglernes kalkule. Markedsstrukturen er ikke en hemmelighed: en overfart er prissat.",
          counter:
            "Pligten til at redde til søs er ægte. At lukke SAR uden en sydlig håndhævelsespartner slår folk ihjel. Attribution af hensigt (i modsætning til virkning) er det omtvistede stykke.",
        },
        {
          actorId: "european-commission",
          likelihood: "moderate",
          motive: "Et styret skin af kontrol, der ikke inkluderer en lukket port.",
          capability: "Frontex som teater, omfordeling som moral, traktatbrud som stok.",
          evidence: "Pagten om migration som omfordeling-plus-procedure; kampe med Italien og Ungarn; finansiering af både grænseforvaltning og NGO-laget.",
          counter: "Kommissionen kaptajner ikke bådene. Den nægter den eneste politik, der ville tømme dem.",
        },
      ],
    },
    summary:
      "Lampedusa, De Kanariske Øer, Det Ægæiske Hav: fotografiet af den indre krig. Hybridtrækket ligger nedstrøms for dækket — at behandle enhver faktisk grænse som et gerningssted, og enhver sydlig regering, der forsøger at eksternalisere (Italien–Albanien, den nye Rwanda-hub-snak i 2026) som en sagsøgt. Nordlige NGO'er og domstole lever prædikenen. Sydlige indenrigsministerier lever natten.",
    mechanism:
      "En overfart sælges på et libysk eller tunesisk marked. Redning, ilandstigning i en sikker europæisk havn og en langsom asylprocedure fuldfører produktet. NGO'er, smuglere og modtageentreprenører har ikke brug for et møde. De har brug for, at den sidste mil forbliver europæisk.",
    effects: [
      "En permanent våd korridor som politisk kendsgerning",
      "Italiensk, græsk og spansk politik som førsterespondenter på en kontinental politik, de ikke sætter",
      "En medieliturgi, hvor de druknede er et brief mod håndhævelse, aldrig mod markedet",
    ],
    incidents: [
      {
        date: "2013-10",
        place: "Lampedusa",
        what: "Skibbrud, der satte den europæiske moralske ramme for et årti.",
        attribution: "Tragedie brugt som politik",
      },
      {
        date: "2023–2026",
        place: "Italien–Albanien",
        what: "Eksternaliseringsforsøg, straks et lovkrigsmål.",
        attribution: "Valgt politik vs. domstole",
      },
    ],
    responses: [
      "Eksternalisering og returhubs (Italien, danskledet Rwanda-snak 2026 med DE/AT/NL/EL)",
      "Aftaler med oprindelses- og transitstater, som NGO'er kalder medvirken",
      "Naval pushback, som domstole kalder ulovlig, og vælgere kalder en grænse",
    ],
    sources: [
      { title: "Italy–Albania protocol litigation coverage", publisher: "Italian courts / press", date: "2024–2026" },
      { title: "Rwanda as Return-Hub: EU plans", publisher: "NZZ", date: "2026-09" },
    ],
  },
  {
    id: "global-compact",
    title: "Den globale kompakt og narrativ forandring",
    dek: "Blød lov plus et professionelt projekt for at ændre, hvad offentligheden må tro.",
    status: "ongoing",
    period: { start: "2016" },
    domains: ["migration", "taboo", "supranational", "media"],
    theaters: ["brussels", "newsroom", "online"],
    attribution: {
      level: "confirmed",
      assigned: ["un-migration"],
      note: "Kompakten er en tekst. Narrativ-forandring-programmerne er brandede. Dette er den sjældne fil, hvor kampagnen skriver sit eget navn. Ikke-bindende er den foretrukne afvisning. Implementeringsarkitekturen (IOM som koordinator, UN Network on Migration, kompaktmål om inklusion og offentlig opfattelse) er den foretrukne virkelighed.",
      hypotheses: [
        {
          actorId: "un-migration",
          likelihood: "confirmed",
          motive: "Gøre migration til en styret, positiv, permanent tilstand og behandle restriktionistisk tale som et skadeligt narrativ, der skal omskrives.",
          capability: "FN-proces, IOM i felten, OHCHR-værktøjskasser, journalistuddannelse, partnerskab med nationale integrationsagenturer.",
          evidence:
            "GCM vedtaget 19. december 2018; IOM som koordinator; OHCHR #StandUp4Migrants og syv-elements narrativværktøjskasser; ICMPD-klasse databaser over hundredvis af europæiske 'migrationskommunikationskampagner' 2012–22.",
          counter:
            "Stater underskrev en ikke-bindende kompakt. Flere (USA, Ungarn, andre) nægtede. En kompakt er ikke en kampvogn. Det er et script — og scripts er, hvordan en stillingskrig føres.",
        },
        {
          actorId: "european-commission",
          likelihood: "high",
          motive: "Afstemme EU-kommunikation og finansiering med kompaktens moralske vejr.",
          capability: "Tilskud, integrationsfonde, antiracisme- og 'desinfo'-programmer.",
          evidence: "Kommissionens kommunikationslinjer, der rimer med kompaktmål; finansiering af NGO-forstærkerne.",
          counter: "EU har sin egen migrationskompetence. Den behøver ikke FN for at ville mere Europa.",
        },
      ],
    },
    summary:
      "Marrakech-kompakten blev solgt som kedelig og fordømt som en snigende forfatning. Begge var halvt rigtige. Den er ikke justitiabel som et direktiv. Den er en licens til en professionel klasse — IOM, OHCHR, nationale integrationsagenturer, NGO'er — til at behandle offentlig fjendtlighed over for volumen som en kommunikationsfejl snarere end en politisk kendsgerning. 'Narrativ forandring' er deres term. Dette atlas tager dem på ordet.",
    mechanism:
      "Skriv en samarbejdsramme. Bemænd den. Finansier kampagner, der 'humaniserer', 'myteafviser' og 'reframer.' Mål succes som et skift i offentlig præference. Par med had- og desinfolov, så det gamle narrativ ikke kun bliver umoderne, men klistret.",
    effects: [
      "En finansieret industri, hvis KPI er Overton-vinduet",
      "Journalister trænet inde i værktøjskassen og så præsenteret som uafhængige",
      "En europæisk politisk række i 2018, som centrum stadig kalder en yderste-højre-panik — og som flere regeringer stille holdt sig ude af",
    ],
    incidents: [
      {
        date: "2018-12-10",
        place: "Marrakech",
        what: "Vedtagelseskonference. Europæiske protester ('March against Marrakech') og flere regeringers opt-outs.",
        attribution: "Tekst plus politisk vejr",
      },
      {
        date: "2020",
        place: "Genève / globalt",
        what: "OHCHR's narrativværktøjskasse og #StandUp4Migrants som en eksplicit kampagne mod 'skadelige' rammer.",
        attribution: "OHCHR, i eget navn",
      },
    ],
    responses: [
      "Ikke-underskrift og senere distancering af flere stater",
      "Parlamentsmotioner, der behandler kompakten som en konstitutionel risiko",
      "Næsten intet hak i implementeringsbureaukratiet",
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
