import type { Theater } from "./types";

export const theaters: Theater[] = [
  {
    id: "scandinavia",
    name: "Skandinavien",
    short: "Højtillidssamfund som præmien og laboratoriet",
    region: "Danmark, Sverige, Norge, plus Finland som fætter",
    countries: ["Danmark", "Sverige", "Norge", "Finland"],
    summary:
      "Den indre kampagne er lettest at se, hvor udgangstilliden var højest. Sverige kørte eksperimentet i skala: generøs asyl, svag håndhævelse, 'udsatte områder', granatkriminalitet og et politisk brud i 2022. Danmark kørte modeksperimentet: paradigmeskifte, ghetto-/parallelsamfundslove, smykkeloven som teater, Syrien-hjemsendelser og en socialdemokratisk omvendelse. Norge sidder imellem. Dette er ikke et sideshow. Det er beviset for, at politik, ikke vejr, sætter tallene.",
    pressure: "critical",
    whyHere:
      "Små nationer kan ikke gemme volumen i et kontinent. PSB-kulturer (DR, SVT, NRK) er stærke; konsensuspolitik gjorde tabu billigt at håndhæve og, i Danmark, også billigt at bryde, da socialdemokraterne besluttede, at velfærdsstaten var offeret. Sveriges 2015–22-bue er den europæiske advarselsfil.",
    map: { x: 54, y: 20 },
  },
  {
    id: "british-isles",
    name: "De britiske øer",
    short: "Kanalbåde, two-tier, grooming-sager, irsk surge",
    region: "Storbritannien og Irland",
    countries: ["Storbritannien", "Irland"],
    summary:
      "Storbritannien holder den engelsksprogede manual: Rotherham og de andre grooming-bande-sager som officiel kujoneri; EMRK regel 39 mod Rwanda som den overnationale lås på ét fotografi; two-tier-politi i 2024 som en masselektie; Online Safety Act og non-crime hate incidents som taleskorpen. Irland 2022–26 er den komprimerede version — en hurtig asylsurge ind i et land, der havde fortalt sig selv en pænere historie.",
    pressure: "critical",
    whyHere:
      "Common law, et globalt sprog og et stadig brugbart parlament gør dette til teatret, hvor tilbageførsel argumenteres mest og litigieres mest. Dublin er påmindelsen om, at 'vi er ikke Sverige' ikke er en strategi.",
    map: { x: 26, y: 34 },
  },
  {
    id: "france",
    name: "Frankrig",
    short: "Banlieue, laïcité under belejring, læreren som mål",
    region: "Det metropolitane Frankrig og det oversøiske ekko",
    countries: ["Frankrig"],
    summary:
      "Den ældste europæiske fil om islamistisk indtrængen og den hårdeste på gaden: 2005, Charlie Hebdo, Bataclan, Nice, Samuel Paty, Dominique Bernard, Nahel-optøjerne 2023. Laïcité er den tilbageværende statsdoktrin, der navngiver en civilisatorisk konflikt. Det er også doktrinen, universitetet, NGO-laget og dele af PSB gerne vil pensionere som 'fobisk.' Broderskabs- og salafistarbejde her er dokumenteret af fransk efterretning i et sprog, andre lande stadig hedger.",
    pressure: "critical",
    whyHere:
      "En republik, der stadig lærer, at borgeren er nøgen for loven, er den naturlige fjende af parallelsamfund. Mordet på lærere er ikke en kriminalitetsbølge. Det er en kampagne mod skolen som fransk institution.",
    map: { x: 32, y: 50 },
  },
  {
    id: "germany",
    name: "Tyskland",
    short: "2015 som en europæisk beslutning, 2024–26 som en langsom tilbagetagelse",
    region: "Forbundsrepublikken, med Østrig i det samme politiske vejr",
    countries: ["Tyskland", "Østrig"],
    summary:
      "Merkels Öffnung i 2015 var den største enkelte elitebeslutning i den indre krig: et år, der omskrev koalitionsmatematik, AfD, nytår i Köln og det moralske sprog om 'wir schaffen das.' Den tyske stat har siden strammet, og det europæiske skift 2024–26 løber gennem Berlin ligeså meget som Bruxelles. Public service (ARD/ZDF) og Verfassungsschutz' 'ekstremisme'-kategorier er tabumaskinen i industriel skala.",
    pressure: "high",
    whyHere:
      "Størrelse. Hvad Tyskland absorberer, må Europa diskutere. Hvad tyske domstole og PSB kalder ekstremistisk, importerer mindre stater som standard.",
    map: { x: 46, y: 40 },
  },
  {
    id: "low-countries",
    name: "Lavlandene",
    short: "Theo van Gogh til en ny højrefløj, og den oprindelige tegnekrig",
    region: "Nederlandene og Belgien, med Bruxelles som dobbelt hovedstad",
    countries: ["Nederlandene", "Belgien"],
    summary:
      "Fortuyn myrdet, van Gogh myrdet, de danske tegninger eksploderende gennem dette tætte islamistiske miljø, Molenbeek som et europæisk egennavn, og nederlandsk politik som det første langvarige oprør, der stadig skal regere med domstole og EU-lov. Belgien er vært for Kommissionen og for nogle af de hårdeste parallelle bydele i Europa. To lande, én lektie: tidlig advarsel blev straffet.",
    pressure: "high",
    whyHere:
      "Tæthed plus institutioner. Mændene, der sagde det først, blev skudt eller isoleret; børnebørnene af det argument vinder nu sæder og taber stadig i Luxembourg.",
    map: { x: 36, y: 38 },
  },
  {
    id: "mediterranean",
    name: "Middelhavets ankomster",
    short: "Den våde grænse, NGO-smugler-markedet, sydlig politik",
    region: "Italien, Spanien, Grækenland og det centrale Middelhav",
    countries: ["Italien", "Spanien", "Grækenland", "Malta", "Cypern"],
    summary:
      "Lampedusa, De Kanariske Øer, Det Ægæiske Hav og NGO-skibene som en politisk kendsgerning. Sydlige regeringer lever ankomsten; nordlige NGO'er og domstole lever prædikenen. Italiens 2022–26-forsøg på at eksternalisere (Albanien) er en levende lovkrigsfil. Spaniens og Grækenlands tal svinger med ruter, ikke med taler i Bruxelles.",
    pressure: "high",
    whyHere:
      "Geografi. Uden en våd grænse, der faktisk er en grænse, er resten af den indre kampagne en debat om et fait accompli.",
    map: { x: 48, y: 70 },
  },
  {
    id: "brussels",
    name: "Bruxelles-maskinen",
    short: "Kommission, Parlament, tilskuds- og direktivstaten",
    region: "EU-institutionerne og industrien omkring dem",
    countries: ["Belgien (vært)", "Den Europæiske Union"],
    summary:
      "Ikke så meget en by som en metode: direktiver, fonde, adfærdskodeks, 'europæiske værdier' som stok, og en permanent samtale blandt mennesker, der ikke vil bo i Malmös udsatte områder. Pagten om migration, DSA, Democracy Shield og antiracisme- og 'desinfo'-programmerne skrives her. Det samme gør traktatbrudsbreve, når en medlemsstat forsøger Danmark.",
    pressure: "critical",
    whyHere:
      "Her går nationale flertal hen for at dø som tekniske sager. Maskinen er ikke en sammensværgelse. Det er en karriere.",
    map: { x: 37, y: 41 },
  },
  {
    id: "legal-europe",
    name: "Juridisk Europa",
    short: "Strasbourg, Luxembourg, rettighedsskralden",
    region: "EMD, EU-Domstolen, nationale højesteretter, der anvender dem",
    countries: ["Europarådet", "EU-Domstolen", "nationale højesteretter"],
    summary:
      "Teatret uden publikum og med mest magt. Regel 39 mod en Rwanda-flyvning; artikel 8 familieliv, der blokerer udsendelse; artikel 3 som barriere selv for kriminelle; præjudicielle spørgsmål, der fryser et dansk eller italiensk eksperiment. Lovkrig er ikke en metafor, når retten er slagmarken.",
    pressure: "critical",
    whyHere:
      "Et politisk fællesskab, der ikke kan udsende, kan ikke vælge. Domstolene opfandt ikke menneskerettigheder. De opfandt en ensrettet læsning af dem, der behandler demos som risikoen.",
    map: { x: 42, y: 48 },
  },
  {
    id: "campus",
    name: "Campus",
    short: "Hvor det næste ministerium trænes til at se nationen som problemet",
    region: "Europæiske og anglosaksiske universiteter som ét marked",
    countries: ["EU", "Storbritannien", "med amerikanske/golf-føderprogrammer"],
    summary:
      "Ikke på landkortet. På karrierekortet. DEI-administrationer, qatar-finansierede Mellemøststudier, islamistiske studenterorganisationer og et talepklima, hvor 'afkoloniser' er et job, og 'demografisk' er et skældsord. Efter 7. oktober 2023 stoppede campus med at være benægtelig som sideshow: den viste, hvad den havde undervist.",
    pressure: "high",
    whyHere:
      "Erobring her er forsinket erobring af embedsværket, redaktionen, NGO'en og bænken. Det er den lange march som et organigram, ikke som en stemning.",
    map: { x: -1, y: -1 },
  },
  {
    id: "newsroom",
    name: "Redaktion og public service",
    short: "Billedet et land får af sig selv",
    region: "Public service og prestige-pressen",
    countries: ["BBC", "DR", "SVT", "NRK", "ARD/ZDF", "France Télévisions", "RTÉ", "prestigepressen"],
    summary:
      "Den indre krig tabes i rækkefølgen. Public service sætter stadig det moralske vejr i Nordeuropa; prestigeaviser sætter det for de mennesker, der bemander Kommissionen. Stilvejledninger, ekspert-rolodexer og en professionel frygt for 'yderste højre'-historien om sig selv er værktøjerne.",
    pressure: "high",
    whyHere:
      "En vælger kan ikke straffe en politik, de ikke bliver vist. Public service er licenseret som et offentligt gode; hybridspørgsmålet er hvis offentlighed.",
    map: { x: -1, y: -1 },
  },
  {
    id: "online",
    name: "Onlinehåndhævelse",
    short: "Platforme, DSA, modoffentligheden i et bur",
    region: "VLOP'er, adfærdskodeks, national online-sikkerhedslov",
    countries: ["EU's Digital Services Act-rum", "UK Online Safety Act", "nationale hadtale-portaler"],
    summary:
      "Hvor tabuet industrialiseres. Hadtale- og desinfokoder, trusted flaggers, annoncørboykot, betalingsprocessor-disciplin og 2025-boltningen af frivillige koder til DSA-revisioner. Modoffentligheden findes; kampagnen er at gøre den dyr, grim og juridisk klistret.",
    pressure: "high",
    whyHere:
      "Efter pressen mistede monopol, havde staten brug for et nyt knudepunkt. Platformen er det punkt. Kommissionen forstod det tidligere end de fleste parlamenter.",
    map: { x: -1, y: -1 },
  },
];

export const theaterById = Object.fromEntries(theaters.map((t) => [t.id, t])) as Record<
  Theater["id"],
  Theater
>;
