import type { Campaign } from "./types";

export const lawfareCampaigns: Campaign[] = [
  {
    id: "counter-legislation",
    title: "Modlovgivning",
    dek: "Efter chokket en ny forbrydelse mod at lægge mærke til — had, desinfo, 'ekstremisme', islamofobi.",
    status: "active",
    period: { start: "2001" },
    domains: ["lawfare", "taboo", "public-service"],
    theaters: ["british-isles", "scandinavia", "brussels", "online", "legal-europe"],
    attribution: {
      level: "high",
      assigned: ["managerial-class", "european-commission", "oic"],
      note: "Parlamenter vedtager disse love. Kampagnekarakteren er rekursionen: hvert migrations-, kriminalitets- eller tegnechok producerer ikke tilbageførsel, men en bredere taleforbrydelse, en bredere 'had'-definition, en bredere platformpligt. Modellove og NGO-glossarer rejser. Oprigtighed er irrelevant.",
      hypotheses: [
        {
          actorId: "managerial-class",
          likelihood: "high",
          motive: "Beskytte en politik, der ikke kan overleve almindelig beskrivelse. Stigma først, lov bagefter.",
          capability: "Justitsministerier, ligestillingsorganer, anklagere, HR, faglige foreninger.",
          evidence:
            "Britiske non-crime hate incidents i sekscifrede tal før delvist tilbagetog; Skotlands Hate Crime Act 2021; irske hadtaleforsøg; nationale 'antiracisme'-handlingsplaner, der behandler demografisk tale som en trussel. Den operationelle test: kan en journalist rapportere kriminalitet efter oprindelse uden en sag?",
          counter:
            "Ophidselseslov er ældre end denne fil. Noget had er ægte. Det bizarre element er udvidelsen fra vold til krænkelse til 'skadeligt men lovligt' til politiregistreret non-crime.",
        },
        {
          actorId: "european-commission",
          likelihood: "high",
          motive: "En kontinental taleinfrastruktur gennem DSA og had-/desinfokoderne.",
          capability: "Forordning, adfærdskodeks, VLOP-revisioner, traktatbrud.",
          evidence:
            "Hadtalekodeks 2016; Hate Speech+ og Disinfo-koder endorseret ind i DSA i 2025; Democracy Shield. Trusted flaggers er ofte det samme NGO-lag.",
          counter: "Ulovligt indhold er ulovligt. Kampen er definitionen, og hvem der er betroet at flagge det.",
        },
        {
          actorId: "oic",
          likelihood: "moderate",
          motive: "Blasfemi som had. Islamofobi som arbejdstitlen.",
          capability: "FN-spor, krisediplomati efter tegninger og koranafbrændinger, alliancer med vestlige NGO'er.",
          evidence: "Historien om religiøs bagtalelse; Istanbul-processen; CFM-resolution 2025 om skandinaviske koranafbrændinger.",
          counter: "Europæisk hadtalelov har kristne blasfemifætre og sekulære. OIC skrev ikke den skotske lov. Den er glad for at bruge den.",
        },
      ],
    },
    summary:
      "Brugerens ord var rigtigt: bizar. Et politisk fællesskab under bosættelsespres, islamistisk talehåndhævelse og parallelle gader svarer ved at kriminalisere beskrivelsen. 'Had' og 'desinformation' bliver arbejdstitlerne på et veto over aritmetik, oprindelse og islamisme. Storbritanniens non-crime hate incident var den rene type — politiprodukt uden en forbrydelse. Skotlands lov fra 2021 var den lovmæssige fætter. DSA er den kontinentale fabrik. Hver lov sælges som sikkerhed. Hver lov hæver prisen på den eneste politik, der ville rulle årsagen tilbage.",
    mechanism:
      "Glossar (NGO, akademisk, OIC) → handlingsplan → lov eller kodeks → platformpligt → HR- og anklagerpraksis. Efter et optøjer eller en meningsmåling, tilføj en klausul. Tilføj aldrig en udsendelse.",
    effects: [
      "Selvcensur i redaktioner og klasseværelser som den billige version af et forbud",
      "En politi- og anklagerarbejdsbyrde peget på ord",
      "En modoffentlighed trænet til at tale som et jaget dyr — og så udstillet som bevis på ekstremisme",
    ],
    incidents: [
      {
        date: "2021-04",
        place: "Skotland",
        what: "Hate Crime and Public Order Act. Ophidselsesforbrydelser udvidet; boligforsvar som argumentet.",
        attribution: "Lov",
      },
      {
        date: "2024–2026",
        place: "Storbritannien",
        what: "Politisk række og delvist tilbagetog på non-crime hate incidents efter Streeting/Braverman-årene.",
        attribution: "Politipraksis møder politik",
      },
      {
        date: "2025-01",
        place: "Bruxelles",
        what: "Hate Speech+-kodeks integreret i DSA-rammen.",
        attribution: "Kommissionen og Board for Digital Services",
      },
    ],
    responses: [
      "Ophævelses- og tilbagetogsforsøg (UK NCHI)",
      "Ytringsfrihedsundtagelser, som NGO'er kalder smuthuller",
      "Jurisdiktioner (Danmark om koranafbrændinger, 2023), der nogle gange går den anden vej under gade- og diplomatisk pres",
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
    title: "DSA som taleinfrastruktur",
    dek: "Frivillige koder, så revisioner. Platforme som knudepunktet, pressen ikke længere er.",
    status: "active",
    period: { start: "2022" },
    domains: ["lawfare", "media", "taboo"],
    theaters: ["brussels", "online", "newsroom"],
    attribution: {
      level: "confirmed",
      assigned: ["european-commission"],
      note: "DSA er en forordning. 2025-konverteringen af desinfo- og hadtalekoderne til DSA-adfærdskodeks står på Kommissionens pressetråd. Det omtvistede er ikke maskinen. Det er, om 'desinformation' og 'had' vil blive drevet som et veto over dette atlas' emne. Tidlig håndhævelse (Meta, TikTok, X, valgrelaterede ordrer) siger, at maskinen er live.",
      hypotheses: [
        {
          actorId: "european-commission",
          likelihood: "confirmed",
          motive: "Et kontinentsstort håndtag på det eneste tilbageværende offentlige torv, solgt som sikkerhed og demokrati.",
          capability: "VLOP-udpegning, risikovurderinger, revisioner, bøder, dataadgangskampe, trusted flaggers.",
          evidence:
            "DSA fuldt i kraft 2024; Hate Speech+ endorseret januar 2025; Disinfo-kodeks endorseret 13. februar 2025, reviderbar fra 1. juli 2025; 2025–26-sager mod udpegede platforme.",
          counter:
            "Ulovligt indhold, svindel og børnesikkerhed er ægte. En forordning kan gøre to job. Hybridjobbet er det andet: hvem er trusted flagger, hvad er en 'systemisk risiko' for den borgerlige samtale, og om en sand sætning om oprindelse eller islamisme er en risiko.",
        },
        {
          actorId: "ngo-litigation",
          likelihood: "high",
          motive: "Bliv flaggeren. Eksportér glossaret ind i platformpolitik.",
          capability: "Trusted-flagger-status, overvågningsreporter-netværk, Bruxelles-tilstedeværelse.",
          evidence: "Hadtalekodeksens uafhængige overvågningsreportere; de samme organisationer i antiracisme- og 'desinfo'-tilskudskredsløbet.",
          counter: "Nogen skal flagge ulovligt indhold. Spørgsmålet er listen.",
        },
      ],
    },
    summary:
      "Da pressen mistede monopol, havde den indre kampagne brug for et nyt knudepunkt. Digital Services Act plus to koder, der begyndte som 'frivillige', er det knudepunkt i EU-skala. Had og desinformation — de to arbejdstitler på modlovgivning — er nu revisionskriterier for selskaber, der ikke har råd til at miste det europæiske marked. En dansk eller italiensk restriktionist kan stadig tweete. Distributionslaget er ikke længere et liberalt given.",
    mechanism:
      "Udpeg VLOP'er. Pålæg systemiske risikovurderinger. Bolt adfærdskodeks på revisionen. Bemænd trusted flaggers fra NGO-laget. Bød. Gentag ved hvert valg via Rapid Response System.",
    effects: [
      "Overfjernelse som den rationelle virksomhedsstrategi",
      "Et Bruxelles-håndtag på modoffentligheden",
      "Nationale online-sikkerhedslove (UK) som fætre, ikke alternativer",
    ],
    incidents: [
      {
        date: "2024-02",
        place: "EU",
        what: "DSA fuldt gældende.",
        attribution: "Forordning",
      },
      {
        date: "2025-02-13",
        place: "Bruxelles",
        what: "Desinfo-kodeks integreret i DSA. Reviderbar fra 1. juli 2025.",
        attribution: "Kommissionen + European Board for Digital Services",
      },
      {
        date: "2025-10",
        place: "Bruxelles",
        what: "Foreløbige fund mod Meta og TikTok om DSA-pligter.",
        attribution: "Kommissionshåndhævelse",
      },
    ],
    responses: [
      "Amerikansk politisk modpres på 'censur via stedfortræder'",
      "Platforme, der efterlever, og platforme, der litigierer",
      "Næsten intet europæisk regeringsparti, der kører på ophævelse",
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
    title: "Strasbourg-låsen",
    dek: "Artikel 3 og 8, regel 39: du må stemme for udsendelse. Du må ikke udsende.",
    status: "active",
    period: { start: "1990" },
    domains: ["supranational", "lawfare", "migration"],
    theaters: ["legal-europe", "british-isles", "scandinavia", "mediterranean"],
    attribution: {
      level: "confirmed",
      assigned: ["ecthr"],
      note: "Domme og midlertidige foranstaltninger er offentlige. Hybridkarakteren er skralden: et rettighedsinstrument bygget til et andet Europa, drevet som en konstitutionel barriere mod den indre politik, vælgerne nu vælger. At forlade konventionen er det nukleare modtræk, og det er ikke længere en kætterdom i London.",
      hypotheses: [
        {
          actorId: "ecthr",
          likelihood: "confirmed",
          motive: "En jurisprudens, hvor statens migrationskontrol er den mistænkte, og ansøgeren er default-offeret.",
          capability: "Bindende domme for konventionsstater; regel 39 som et sidste-øjebliks-veto (Rwanda, juni 2022).",
          evidence:
            "Regel 39 mod den første UK–Rwanda-flyvning, 14. juni 2022; artikel 8 familielivs-indvandringspraksis; artikel 3 som barriere selv hvor nationale domstole havde tilladt udsendelse; M.A. mod Danmark.",
          counter:
            "Tortur er en forbrydelse. Familieliv er et gode. En ret, der ikke kan stoppe en udsendelse til skade, er ikke en ret. Kampagnespørgsmålet er den ensrettede læsning, den NGO-fodrede docket og bænkens politiske uansvarlighed.",
        },
        {
          actorId: "ngo-litigation",
          likelihood: "high",
          motive: "Find ansøgeren. Fodr skralden.",
          capability: "En stående hær af advokater, der kender rettens formularer bedre end indenrigsministerier.",
          evidence: "Gentagne litigators på indvandringsdocketen; kommissions- og fondfinansiering af de samme butikker.",
          counter: "Adgang til retten er en ret. Gentaget arbejde er, hvordan testsager laves i ethvert felt.",
        },
      ],
    },
    summary:
      "Fotografiet er en landingsbane om natten: en flyvning, et parlament havde autoriseret, en højesteret endnu ikke havde slået ihjel, og en europæisk ret stoppede med en midlertidig foranstaltning. Rwanda 2022 er ikke hele filen. Det er filen, offentligheden kan se. Artikel 8 familieliv og artikel 3 non-refoulement gør det daglige arbejde — kriminelle, der ikke kan sendes, afviste asylansøgere, der bliver kendsgerninger på jorden, ventetidseksperimenter, der dør i Strasbourg. Et politisk fællesskab, der ikke kan udsende, kan ikke vælge. Det er en konstitutionel kendsgerning, ikke et humør.",
    mechanism:
      "Ansøger plus NGO plus regel 39 eller en fuld dom. Nationale menneskerettighedslove transmitterer. Politikere opdager, at de købte en ensrettet ventil.",
    effects: [
      "Effektive hjemsendelsesrater, der gør asyl til en bosættelsesrute",
      "En levende 'forlad konventionen'-politik i Storbritannien",
      "Danske og italienske eksperimenter designet som workarounds, så sagsøgt som sådanne",
    ],
    incidents: [
      {
        date: "2022-06-14",
        place: "UK / Strasbourg",
        what: "Regel 39 midlertidige foranstaltninger tømmer den første Rwanda-flyvning.",
        attribution: "EMD. Ikke EU. Distinktionen selv blev en politisk kendsgerning.",
      },
      {
        date: "2024",
        place: "Storbritannien",
        what: "Safety of Rwanda Act som forsøg på at lovgive forbi retten. Senere politisk sammenbrud af ordningen.",
        attribution: "Parlament vs. låsen",
      },
      {
        date: "2026-09",
        place: "Kigali / EU",
        what: "Danmark, Tyskland, Østrig, Grækenland, Nederlandene taler Rwanda-agtige returhubs efter en EU-juridisk åbning.",
        attribution: "Workaround, runde to",
      },
    ],
    responses: [
      "Nationale love, der forsøger at sætte HRA/konventionsstykker ud af kraft",
      "Tredjelandsbehandling som geografi i stedet for ophævelse",
      "Snak om at forlade konventionen — stadig mest snak",
    ],
    sources: [
      { title: "EU court didn’t prevent Rwanda flight from taking off", publisher: "Full Fact", date: "2022-06" },
      { title: "Safety of Rwanda (Asylum and Immigration) Bill factsheet", publisher: "UK Government", date: "2024-01" },
    ],
  },
  {
    id: "oic-islamophobia",
    title: "Islamofobi som importeret blasfemilov",
    dek: "Fra 'religiøs bagtalelse' i FN til europæiske haddefinitioner og diplomatiske kriser.",
    status: "ongoing",
    period: { start: "1999" },
    domains: ["lawfare", "taboo", "islamist-entry", "supranational"],
    theaters: ["legal-europe", "brussels", "scandinavia", "online"],
    attribution: {
      level: "high",
      assigned: ["oic", "muslim-brotherhood"],
      note: "OIC-sporet er dokumenteret over femogtyve år af FN-resolutioner og Istanbul-processen. Europæiske love skrives i europæiske bygninger. Rimet er kampagnen: en blasfemistandard, vælgerne ikke vedtog, fremført i sproget om had og sikkerhed, med tegne- og koranafbrændingskriser som tvangsbegivenhederne.",
      hypotheses: [
        {
          actorId: "oic",
          likelihood: "high",
          motive: "Beskytte islamisk doktrin og islamistisk politik mod europæisk tale. Vind i Genève, hvad der ikke kan vindes ved et dansk valg.",
          capability: "57 stater, UNHRC-aritmetik, krisediplomati, en dedikeret islamofobisag.",
          evidence:
            "Resolutioner om religiøs bagtalelse; HRC 16/18 og Istanbul-processen; CFM-resolution 2025, der fordømmer koranafbrændinger i Sverige, Danmark, Nederlandene og kalder til at 'genoplive' Istanbul.",
          counter:
            "Vestlige forhandlere troede, 16/18 flyttede rammen fra religioner til personer. De tager ikke helt fejl. OIC er ikke helt færdig.",
        },
        {
          actorId: "muslim-brotherhood",
          likelihood: "high",
          motive: "Den indenlandske forstærker: islamofobi som det arbejdende veto over sikkerhedspolitik, satire og frafaldssnak.",
          capability: "Forbund, klager, campus, medieallierede.",
          evidence: "Europæiske broderskabsrelaterede organisationer som standardpartnere i 'anti-had'-koalitioner; det samme ord, de samme kriser.",
          counter: "Muslimer er en beskyttet klasse mod faktisk vold. Kampagnen er udvidelsen fra personer til doktrin til politik.",
        },
      ],
    },
    summary:
      "Tegningerne var en dansk presshistorie. OIC gjorde dem til et diplomatisk system. Koranafbrændinger i 2023 var en svensk og dansk juridisk-politisk krise med en gade og et udenrigsministerium påsat. 'Islamofobi' er den succesfulde rebrand af et blasfemikrav, der ikke kunne sælges under sit eget navn. Ægte bigotteri findes og er ikke denne fil. Denne fil er forsøget på at gøre islamisk doktrin, islamistisk politik og bosættelsesstatistik ukritiserbar i de eneste politiske fællesskaber, der stadig kan le ad en profet.",
    mechanism:
      "Krise (tegning, film, afbrænding) → OIC og gade → vestlige politikere tilbyder en definition, en enhed, en lov → NGO-glossar hærder → platform- og PSB-håndhævelse. Gentag.",
    effects: [
      "En europæisk blasfemilov, der ikke tør bruge ordet",
      "Tegnere og lærere som den ubeskyttede klasse",
      "Diplomatisk omkostning pålagt små stater (Danmark, Sverige), der stadig har en hukommelse om pressens frihed",
    ],
    incidents: [
      {
        date: "2005-09",
        place: "Danmark",
        what: "Jyllands-Postens tegninger. Undervisningscasen for hele domænet.",
        attribution: "Pressefrihed møder et transnationalt håndhævelsesnetværk",
      },
      {
        date: "2011–",
        place: "Istanbul / Genève",
        what: "Istanbul-processen som implementeringssporet af HRC 16/18.",
        attribution: "OIC–vestligt diplomatisk kompromis, uafsluttet",
      },
      {
        date: "2023–2025",
        place: "Sverige / Danmark / Nederlandene",
        what: "Koranafbrændingskriser; dansk juridisk stramning; OIC-resolution 2025 stadig optaget af sagen.",
        attribution: "Gade plus diplomati plus lov",
      },
    ],
    responses: [
      "Lejlighedsvise officielle definitioner, der forsøger at beskytte religionskritik (UK 2026 anti-muslimsk fjendtlighedstekst er ét sådant forsøg)",
      "Danske tegne-æra-holdouts, så delvis juridisk stramning i 2023",
      "Lærere, der stadig viser billedet — et skrumpende sæt",
    ],
    sources: [
      { title: "UN resolution 16/18 and the Istanbul Process", publisher: "CMI", date: "2023" },
      { title: "OIC CFM-51 political resolutions (Quran burnings, Istanbul Process)", publisher: "OIC", date: "2025-06" },
    ],
  },
];
