import type { Campaign } from "./types";

export const institutionCampaigns: Campaign[] = [
  {
    id: "university-capture",
    title: "Universitetet som fabrik",
    dek: "Eliteformering, talekoder, golfpenge og en plæne, der viste sit arbejde efter 7. oktober.",
    status: "active",
    period: { start: "1968" },
    domains: ["university", "taboo", "islamist-entry"],
    theaters: ["campus", "british-isles", "france", "germany", "brussels"],
    attribution: {
      level: "high",
      assigned: ["university-admin", "qatar", "muslim-brotherhood"],
      note: "Tre lag, ikke én oberst: en lang administrativ-ideologisk erobring (marchen gennem institutionen som selvbeskrivelse), et udenlandsk-gave-lag (Qatar det største enkeltstatseksempel) og en islamistisk studenterrørledning (FEMYSO og fætre). 7. oktober 2023 skabte ikke produktet. Den udstillede det.",
      hypotheses: [
        {
          actorId: "university-admin",
          likelihood: "high",
          motive: "Vækst i den administrative stand; risiko-off fred med aktivister; et moralsk monopol, der også er et ansættelsesfilter.",
          capability: "Talekoder, DEI-vetoer, etiknævn, studentersanktioner, kontrol med det rolodex, der fodrer ministerier.",
          evidence:
            "Spredning af ligestillingskontorer; no-platform-skik; replikerede rammedokumenter på tværs af hundredvis af campusser; den post-2023 disciplinære asymmetri (hvilke chants var 'kontekst').",
          counter:
            "Universiteter har altid været ideologiske. 1968 er ikke et golfplot. Hybridopgraderingen er det administrative veto plus de udenlandske penge plus vægringen ved synspunktsdiversitet i de professioner, der betyder noget.",
        },
        {
          actorId: "qatar",
          likelihood: "high",
          motive: "Køb formeringen af diplomater, Mellemøststudier og klimaet, hvori Broderskabets politik er et centrum, og Israel er den anklagede.",
          capability: "Gaver i en skala, vestlige universiteter ikke vil nægte; filialcampusser; professorater.",
          evidence:
            "ISGAP og relateret tracking af deklarerede og udeklarerede golfgaver i den anglosaksiske verden; europæiske programmer mindre og stadig materielle; Georgetown, Cornell og andre som det amerikanske spejl, europæiske eliter stadig kopierer.",
          counter:
            "En gave er ikke en fatwa. Nogle programmer er medicinske og tekniske. Kampagnespørgsmålet er samfundsvidenskab, diplomatuddannelse og korrelationen med campusklima — ikke eksistensen af en qatarisk hospitalsfløj.",
        },
        {
          actorId: "femyso",
          likelihood: "high",
          motive: "Kadrer. Respektabel adgang. Den næste forbundspræsident er studerende nu.",
          capability: "Studenterpolitik, EU-ungdomsmidler, træning.",
          evidence: "Fransk efterretningssprog 2025 om FEMYSO som et broderskabs-farmsystem; qatari-finansieringsrapporter siden 2016.",
          counter: "Studenterpolitik er tilladt. En navngivet rørledning er stadig en navngivet rørledning.",
        },
      ],
    },
    summary:
      "Et politisk fællesskab reproduceres i sine skoler. Erobring af universitetet er forsinket erobring af embedsværket, redaktionen, NGO'en og bænken. Værktøjerne er administrative (kontoret, der godkender ansættelser og arrangementer), intellektuelle (den historiske nation som anklaget) og finansielle (golf- og fondspenge). Efter 7. oktober 2023 stoppede plænen med at være en metafor. Hvad den havde undervist, var synligt for enhver, der ikke havde været i bygningen.",
    mechanism:
      "Ansæt administratorer, der taler sproget. Filtrér fakultet. Finansier de programmer, der sætter Overton-vinduet om islamisme, grænser og 'afkolonisering.' Træn studentorganisationerne. Eksportér dimittenderne ind i public service. Gentag i en generation. Det er stillingskrig, ikke et debatselskab.",
    effects: [
      "En professionel klasse, der behandler demografiske og islamistiske spørgsmål som moralsk kontaminering",
      "Mellemøststudier som et klima, ikke et felt",
      "Et farmsystem for NGO- og Broderskabslagene",
      "7. oktober som en afslørende begivenhed snarere end en aberration",
    ],
    incidents: [
      {
        date: "2016–",
        place: "Europa / USA",
        what: "ISGAP-klasse arbejde om udeklarerede golfgaver begynder at bule 'ingen udenlandsk indflydelse her'-linjen.",
        attribution: "Gaveledgere, stadig ufuldstændige",
      },
      {
        date: "2023-10",
        place: "Campusser, transatlantisk",
        what: "Post-7. oktober-lejre, chikane og administrativ lammelse.",
        attribution: "Produktet, udstillet",
      },
      {
        date: "2025",
        place: "Frankrig",
        what: "Efterretningssprog om FEMYSO som en broderskabstræningsplatform bliver en offentlig europæisk kendsgerning.",
        attribution: "Franske tjenester, som rapporteret 2025–26",
      },
    ],
    responses: [
      "Gaveregisterlove, stadig utætte",
      "Trustee- og donoreroprør, mest anglosaksiske",
      "Europæiske indenrigsministerier, der stadig rekrutterer fra de samme fakulteter",
    ],
    sources: [
      { title: "ISGAP reporting on Qatari and Gulf university funding", publisher: "ISGAP", date: "2024–2026" },
      { title: "French intelligence on FEMYSO / Council of European Muslims", publisher: "French services via press", date: "2025" },
    ],
  },
  {
    id: "psb-monopoly",
    title: "Public service som vejrsystem",
    dek: "BBC, DR, SVT, ARD/ZDF — billedet et land får af sig selv, licenseret som et offentligt gode.",
    status: "active",
    period: { start: "1990" },
    domains: ["media", "public-service", "taboo"],
    theaters: ["newsroom", "scandinavia", "british-isles", "germany", "france"],
    attribution: {
      level: "moderate",
      assigned: ["psb-complex", "managerial-class"],
      note: "Bias kan være professionel, ikke beordret. Tegnet er gentagelse: oprindelse hedget, restriktionistisk politik patologiseret, islamistisk vold som en samhørighedshistorie, det samme ekspert-rolodex som ministeriet. Ombudsmandsafgørelser, lækkede slacks og publikums-tillidssammenbrud er den åbne sag. Et politbureau er ikke nødvendigt. Rekruttering er nok.",
      hypotheses: [
        {
          actorId: "psb-complex",
          likelihood: "high",
          motive: "Forblive det moralske centrum; beskytte licensaftalen; behandle 'polarisering' som truslen snarere end den underliggende politik.",
          capability: "Rækkefølge, stilvejledninger, aftennyhederne som liturgi, interne værdiregimer.",
          evidence:
            "Stilvejledningskampe efter Köln og Rotherham; skandinaviske og tyske tillidsrækker; BBC-upartiskhedsreviews, der aldrig rigtig bider; migrationsfilen 2015–24 som et årti af humanitære nærbilleder mod et manglende mønster.",
          counter:
            "PSB undersøger også islamistiske netværk og bandekriminalitet — senere, under pres, og med et 'kontekst'-wrap. Nogle biaspåstande er partiske. Tillidssammenbrud har flere årsager end denne fil. Kampagnespørgsmålet er default-rammen, ikke eksistensen af en modsat dokumentar.",
        },
        {
          actorId: "managerial-class",
          likelihood: "high",
          motive: "En broadcaster, der lyder som ministeriet, er en forstærker.",
          capability: "Udnævnelser, charterreviews, det delte universitet.",
          evidence: "Svingdøre; 'værdier'-sprog i charters, der mapper på embedsværkets antidiscriminations-maximalisme.",
          counter: "Højre-regeringer udnævner også og får stadig det samme vejr. Det er erobringstesen, ikke en gendrivelse af den.",
        },
      ],
    },
    summary:
      "På nordisk og britisk engelsk betyder 'public service' den broadcaster, der skal være landet, der taler med sig selv. Hybridkrig, der ikke tager dette lag, er en protest. Husideologien er ikke marxisme i et licenskostume. Det er en professionel common sense: diversitet som sakramente, begrænsning som karakterbrist, islamisme som en misforståelse, vælgeren som en risiko, der skal styres. DR, SVT, BBC, ARD — forskellige huse, samme vejr. Kommerciel prestigepresse er fætteren for de mennesker, der bemander Bruxelles.",
    mechanism:
      "Rekruttér fra de samme fakulteter som ministeriet. Skriv en stilvejledning, der hedger oprindelse og religion. Hold et ekspert-rolodex, der er NGO-laget. Efter hvert angreb en samhørighedspakke. Efter hver meningsmåling et stykke om 'hvorfor de falder for det.' Kald dette upartiskhed.",
    effects: [
      "En offentlighed, der lærer mønsteret fra gaden og Telegram, og så får at vide, at gaden er det yderste højre",
      "Licenspolitik som en stedfortræderkrig om virkeligheden",
      "En redaktion ude af stand til at dække to-strenget politi uden selv at blive historien",
      "Danmarks medieforlig 2023–26 som kontrolcase-versionen: ordet overlevede, auditoren gjorde det ikke",
    ],
    incidents: [
      {
        date: "2016-01",
        place: "Tyskland",
        what: "Nytår i Köln: forsinkelse og hedge på oprindelse som en europæisk PSB-sag.",
        attribution: "Redaktionel praksis",
      },
      {
        date: "2014–2022",
        place: "England",
        what: "Grooming-bande-sager: officiel kujoneri, så mediekujoneri, så en langsom indrømmelse.",
        attribution: "Institutionelt tabu, senere dokumenteret",
      },
      {
        date: "2023-06-14",
        place: "København",
        what: "Dansk medieaftale: 'alsidighed og pluralisme' bliver den målrettede pligt. 'Upartisk' forbliver en sætning. Diversitet bliver tællelig. Se neutralitetsdossieret.",
        attribution: "Bekræftet (tekst); høj (som det operationelle bytte)",
      },
    ],
    responses: [
      "Charterkampe, af-finansier-snak, konkurrerende private kanaler",
      "Ombudsmænd som overtryksventil",
      "Modoffentligheden på platforme — som DSA så rammer",
    ],
    sources: [
      { title: "BBC impartiality reviews and editorial guidelines (migration / religion)", publisher: "BBC", date: "2016–2025" },
      { title: "Cologne New Year coverage post-mortems", publisher: "German press / regulators", date: "2016" },
    ],
  },
  {
    id: "civil-service",
    title: "Det uløselige lag",
    dek: "Policy-enheder, ligestillingsorganer, anklagere, udlændingestyrelser — valget er ikke det sidste ord.",
    status: "active",
    period: { start: "1990" },
    domains: ["public-service", "lawfare", "supranational"],
    theaters: ["brussels", "british-isles", "scandinavia", "legal-europe"],
    attribution: {
      level: "moderate",
      assigned: ["managerial-class", "european-commission"],
      note: "En embedsmand, der håndhæver en traktat, gør jobbet, som jobbet nu er skrevet. Det er pointen med låsen. Attribution er til kultur, lov og rekruttering, ikke til en celle. Enkelte kontorister dissenterer. Maskinens default er sidste generations moralske sprog, hærdet til procedure.",
      hypotheses: [
        {
          actorId: "managerial-class",
          likelihood: "high",
          motive: "Kontinuitet mod vælgeren. Status som dem, der virkelig styrer.",
          capability: "Udkast, slæb, læk, 'juridisk rådgivning' som veto, ligestillingsvurdering som kill-switch.",
          evidence:
            "Gentagne mønstre, når restriktionistiske regeringer tiltræder: læk, forsinkelse, judicial review primet af de samme NGO'er, PSB briefet. Britiske small-boats-år; Sveriges 2022–26-forsøg; Kommissionen som et kontinentalt embedsværk mod Ungarn og, mere høfligt, Danmark.",
          counter:
            "Embedsværk skal begrænse ulovlig regeringsaktion. Nogle restriktionistiske forslag er ulovlige under nuværende eder. Kampagnespørgsmålet er, hvem der skrev eden, og om et valg kan omskrive den.",
        },
        {
          actorId: "european-commission",
          likelihood: "high",
          motive: "Et andet embedsværk, over det nationale.",
          capability: "Traktatbrud, finansiering, teknisk 'støtte', der er en politik.",
          evidence: "Retsstatskonditionalitet; pagtimplementering; refleksen, at en national stramning er et europæisk problem.",
          counter: "Medlemsstater byggede dette. De kan i teorien afbygge det. Teori gør en masse arbejde.",
        },
      ],
    },
    summary:
      "Public service i den ældre betydning: administrationen. Hybridkrig, der vinder ministeriet og taber bygningen, har vundet et pressemøde. Ligestillingsinspektorater, anklagerretningslinjer, udlændingestyrelser og 'værdier'-HR gør tilbageførsel til en proces snarere end en beslutning. Den danske undtagelse er igen tegnet — socialdemokraterne måtte omvende bygningen, ikke bare manifestet. Hvor bygningen ikke omvendes, er næste valg en smag af administration.",
    mechanism:
      "Rekruttér fra det erobrede fakultet. Skriv vejledning, der fortolker lov mod kornet af det sidste manifest. Når en minister insisterer, opdag en juridisk hindring, en høring, en ligestillingsvurdering, en læk. Hvis ministeren stadig insisterer, sagsøger NGO'en, og PSB forklarer.",
    effects: [
      "Restriktionistiske manifester, der dør i implementering",
      "En klasse med en højere loyalitet (traktat, 'værdier', profession) end demos",
      "Vælgere, der korrekt konkluderer, at stemmeafgivning ikke bider — og så stemmer hårdere eller slet ikke",
    ],
    incidents: [
      {
        date: "2010–2024",
        place: "Storbritannien",
        what: "Gentagne konservative forsøg på at 'stoppe bådene' møder juridisk, administrativ og Strasbourg-modstand.",
        attribution: "Låsen i ét land",
      },
      {
        date: "2019–",
        place: "Danmark",
        what: "Socialdemokratisk omvendelse af bygningen som det sjældne tilfælde af delvis erobrings-tilbageførsel.",
        attribution: "Politisk vilje plus en lille stat",
      },
    ],
    responses: [
      "Politiseret udnævnelse (den ungarske og polske metode — og den europæiske straf for den)",
      "Lov, der fjerner skøn",
      "Den danske metode: skift partiets mening, så bygningen ingen steder har at lække hen",
    ],
    sources: [
      { title: "UK small-boats / Rwanda administrative and legal chronology", publisher: "Home Office / courts", date: "2022–2024" },
      { title: "Danish paradigm-shift legislation", publisher: "Folketinget", date: "2019–2024" },
    ],
  },
  {
    id: "ngo-complex",
    title: "Det andet embedsværk",
    dek: "Tilskud fra staten, sagsanlæg mod staten, et moralsk flag på en operationel hær.",
    status: "active",
    period: { start: "1990" },
    domains: ["ngo", "lawfare", "migration", "taboo"],
    theaters: ["brussels", "legal-europe", "mediterranean", "newsroom"],
    attribution: {
      level: "high",
      assigned: ["ngo-litigation", "open-society", "european-commission", "un-migration"],
      note: "Det meste af dette står i tilskudsdatabasen. Regeringer betaler NGO'er for at gøre, hvad de ikke vil skrive i et manifest, og påberåber sig så afmagt, når NGO'en sagsøger. Open Society er navngivet, fordi tilskuddene er navngivne — ikke fordi én mand kører Europa. 'Soros' som dæmonologi er en anden, værre fil.",
      hypotheses: [
        {
          actorId: "ngo-litigation",
          likelihood: "confirmed",
          motive: "Volumen, standing og en verden, hvor håndhævelse ser ud som en krænkelse.",
          capability: "Både, senge, advokater, presseofficerer, Bruxelles-kontorer.",
          evidence: "ECRE og fætre som en koordineret juridisk linje; SAR-NGO'er; modtageentreprenører betalt per ankomst; de samme navne på kommissionstilskudslister og Strasbourg-dockets.",
          counter: "At redde mennesker og repræsentere dem i retten er lovligt og, i enkelte sager, anstændigt. Kampagnen er systemet: en self-licking ice cream af volumen.",
        },
        {
          actorId: "open-society",
          likelihood: "high",
          motive: "Et Europa, hvor nationale flertal ikke kan lukke døren eller debatten.",
          capability: "Penge, retssagsvehikler, ekspertforsyning.",
          evidence: "Offentlige tilskudsporteføljer om migration, retfærdighed, medier, 'had', civilt 'resilience.'",
          counter: "Én fond blandt flere (Sigrid Rausing, nationale lotterier, kirkepenge, golfpengene). At navngive OSF er ikke en teori om alting.",
        },
        {
          actorId: "european-commission",
          likelihood: "high",
          motive: "Klienter snarere end vælgere som det arbejdende civilsamfund.",
          capability: "AMIF og 'borgerskab, ligestilling, værdier'-fonde; partnerskabsaftaler.",
          evidence: "Cirkulariteten: Kommissionen finansierer NGO, NGO sagsøger medlemsstat, Kommissionen åbner traktatbrud.",
          counter: "Noget finansieret arbejde er integration og hjemsendelsesrådgivning. Læs linjeposterne.",
        },
      ],
    },
    summary:
      "Hæren, der ikke kaldes en hær. Søredning, retshjælp, antiracisme, desinformationsovervågning, modtagelse. Finansieret af stater, Kommissionen, FN-agenturer og private fonde, så vendt om til at skamme og sagsøge de samme stater. Dette er ikke Tocqueville. Det er et andet embedsværk med et moralsk flag, et retssagsbudget og et glossar, der senere dukker op i lov. En stillingskrig har brug for dette lag. Det er infanteriet.",
    mechanism:
      "Tilskud. Lever en kendsgerning på jorden (en seng, en båd, en sag). Fotografér den. Litigier den. Skriv definitionen af had, som den næste lov har brug for. Gentag i næste hovedstad inden aften.",
    effects: [
      "Håndhævelse som en skandale på timer",
      "En professionel aktivistklasse uden off-ramp",
      "Glossar-til-lov som et standardprodukt",
    ],
    incidents: [
      {
        date: "2015–2026",
        place: "Middelhavet / Bruxelles",
        what: "SAR- og omfordelings-NGO'er som en permanent politisk kendsgerning.",
        attribution: "Operationslag",
      },
    ],
    responses: [
      "Tilskudstransparenslove, stadig svage",
      "Lejlighedsvis af-finansiering, så retten",
      "Ungarns NGO-lov som den europæiske advarselshistorie — overgreb brugt til at beskytte laget andre steder",
    ],
    sources: [
      { title: "Commission AMIF and Citizens, Equality, Values grant lists", publisher: "European Commission", date: "2014–2026" },
      { title: "Open Society Foundations European portfolios", publisher: "OSF", date: "ongoing" },
    ],
  },
  {
    id: "medieforlig-neutrality",
    title: "Medieforliget, der pensionerede neutraliteten",
    dek: "Ordet 'upartisk' blev på siden. Pligten til at være politisk balanceret gjorde det ikke. Pluralisme blev KPI'en.",
    status: "active",
    period: { start: "2019" },
    domains: ["media", "public-service", "taboo"],
    theaters: ["scandinavia", "newsroom"],
    attribution: {
      level: "high",
      assigned: ["psb-complex", "managerial-class"],
      note: "Dette er ikke sletningen af en sætning. Radio- og fjernsynsloven § 10 siger stadig saglighed og upartiskhed. DR's kontrakt 2024–26 siger stadig, at nyheder skal være 'alsidig og upartisk.' Wipet er operationelt: medieaftalen 2023 gjorde 'alsidighed og pluralisme' til den målrettede, tællelige pligt; diversitet og ligestilling blev afrapporterbare; politisk balance blev overladt til DR's egen redaktør. Regeringsgrundlaget juni 2026 instruerede så det næste forlig i at 'afbureaukratisere og forenkle' DR's ramme — slank kontrakten, auditér ikke politikken. Et politbureau, der strøg ordet 'upartisk' af loven, er en påstand, der skal have et afsnit. Pensioneringen af pligten ligger på papir.",
      hypotheses: [
        {
          actorId: "managerial-class",
          likelihood: "high",
          motive:
            "Armslængde som en envejsventil: politikere må ikke instruere redaktionen; redaktionens husideologi er ikke en politisk instruks. 'Afbureaukratisering' er arbejdstitlen for at tage de resterende detaljerede pligter af siden.",
          capability: "Forligskredsen. Kulturministeriet. Public service-kontrakten som et politisk instrument, der ser ud som deregulering.",
          evidence:
            "2018 VLAK/DF-forlig forsøgte at binde DR (20% cut, ingen lange netartikler, kerne-PS). 2019 S-regering rullede begrænsningerne tilbage som 'armslængde.' 2022 'slanke' kontrakt: ministeren bryster sig af at fjerne 'unødvendig detailregulering' og tilføjer en positiv pligt til at fremme ligestilling og mangfoldighed. 14. juni 2023 medieaftale (S, V, M, SF, EL, RV, DF): DR og TV 2 'skal arbejde målrettet med at skabe større alsidighed og pluralisme.' Juni 2026 S–SF–RV–M-program: modernisér mediestøtten, skær ikke i DR, 'afbureaukratisér og forenkl' rammen, så huset er 'agilt' mod techplatforme. Den lovede Engel-Schmidt-undersøgelse af slagside 2025 — fløjet under blåt pres — står ikke i det program.",
          counter:
            "At slanke en kontrakt kan være en ægte armslængdereform. Techplatforme er en ægte konkurrent. Nogle detaljerede 2018-pligter var erhvervspolitik mod private aviser, ikke et neutralitetsaudit. Kampagnespørgsmålet er, hvilke pligter der blev slanket: outputkvoter og artikellængde, eller den politiske-balance-test, som højre blev ved med at bede om og aldrig fik en uvildig bedømmer til.",
        },
        {
          actorId: "psb-complex",
          likelihood: "high",
          motive:
            "Hold licensaftalen og retten til at rette sit eget hjemmearbejde. 'Balance' scoret af Brugernes redaktør er ikke et public service-krav. Det er en intern etikklumme.",
          capability: "Kontrakten som skjold. Den årlige public service-redegørelse som selvbeskrivelse. Radio- og tv-nævnet som en proces, der tjekker kontraktens tællelige poster, ikke et politisk-balance-regnskab.",
          evidence:
            "Kontrakt 2024–26 stadig: 'DR's nyhedsdækning skal være alsidig og upartisk.' Samme kontrakt: målrettet arbejde med 'større alsidighed og pluralisme' 'i samspil med hensynet til den redaktionelle dækning' — redaktionen beholder det sidste ord. September 2026: DR's egen redaktør lukker fem levende 'balance'-klager som i overensstemmelse med DR's retningslinjer, herunder klima-som-ramme og en blind vinkel på mænds ligestilling. Corydons 2025 Gaza-erklæring-inhabilitet er huset, der politier sit eget personale, ikke et eksternt politisk-balance-audit. Tillidsrækker og 'Grønlands hvide guld'-kollapset er den åbne sag for, at sloganet og outputtet er gledet fra hinanden.",
          counter:
            "Et PSB, der lod politikere score dets politik, ville være en statsradiofoni. Interne etikredaktører findes i hvert alvorligt hus. Nogle 'bias'-klager er partiske. Tegnet er asymmetrien: diversitetsandel af musikere er afrapporterbar; rækkefølgen på migration, islamisme og restriktionistisk politik er 'redaktionel dækning.'",
        },
        {
          actorId: "denmark-state",
          likelihood: "moderate",
          motive:
            "Kontrolcasen, der navngav volumen, finansierer stadig vejrsystemet, der behandler at navngive volumen som en karakterbrist. Hold DR som national liturgi. Vælg ikke en kamp med redaktionen, der dækker regeringen.",
          capability: "Finanslovstilskuddet. Forligskredsen. Kulturministerens udnævnelser.",
          evidence:
            "Danmark flyttede tallene og skriver stadig en check på fire milliarder til DR. Forliget 2023 beholdt kristen kulturarv som en sætning og gjorde pluralisme til den målrettede pligt. Regeringen 2026, uden Venstre, droppede selv det retoriske tilbud om et slagsidestudie. Kontrolcasen har en PSB-undtagelse.",
          counter:
            "En lille stat vil have én national nyhedsredaktion mod Netflix. Det er ikke en konspiration. Det er også derfor, undtagelsen betyder noget: den samme bygning, der kan skrive ghettolove, vil ikke skrive en upartiskheds-auditor for huset, der forklarer de love for landet.",
        },
      ],
    },
    summary:
      "Brugerens påstand er næsten rigtig, og 'næsten' er metoden. Ingen strøg 'upartisk' af radio- og fjernsynsloven. Medieaftalen 2023 slettede ikke sætningen i DR's kontrakt om, at nyheder skal være alsidige og upartiske. Det, det sidste afsluttede forlig gjorde — og det, programmet fra juni 2026 siger til det næste, at det skal gøre færdigt — er at pensionere politisk balance som en håndhævelig public service-pligt. I stedet: 'alsidighed og pluralisme' som en målrettet opgave, ligestilling og mangfoldighed som afrapporterbare, og 'afbureaukratisering' som ordet for at tage de resterende detaljerede pligter af siden. Upartiskhed forbliver et hus-slogan. Bedømmeren er DR's egen redaktør. Radio- og tv-nævnet tjekker de tællelige poster i kontrakten. Højre 2018 forsøgte at binde huset og blev rullet tilbage i armslængdens navn. Kulturministeren 2025, under blåt pres, flød en undersøgelse af politisk slagside som del af det kommende forlig. Regeringen, der tiltrådte i juni 2026, er S, SF, Radikale, Moderaterne. Deres medielinje er: skær ikke i DR, slank rammen, konkurrér med tech. Undersøgelsen står ikke i programmet. Et krav, der ikke kan auditeres, ikke kan dumps, og scores af den institution, det binder, er blevet wipet som krav. Ordet er et relikt. Det er den danske kontrolcase-version af PSB-vejrsystemet: landet, der navngav volumen, betaler stadig for liturgien, der ikke vil.",
    mechanism:
      "Vind forliget. Behold 'upartisk' som en sætning, så sletningspåstanden er benægtelig. Tilføj pluralisme og diversitet som de pligter en bestyrelse kan tælle. Kald fjernelsen af resterende politiske tests 'armslængde' og 'afbureaukratisering.' Lad klager gå til husets egen redaktør. Gentag ved næste forlig.",
    effects: [
      "Politisk balance er ikke længere et operationelt public service-krav i det danske forlig — kun et slogan i § 10 og en kontraktklausul uden tredjepart-bedømmer",
      "Pluralisme og diversitet er de tællelige pligter; rækkefølgen på migration, islamisme og restriktion er 'redaktionel dækning'",
      "Den lovede slagsideundersøgelse 2025 overlever ikke en forligskreds, der ikke ville have den",
      "Kontrolcasen finansierer vejrsystemet, der behandler dens egen restriktion som et problem, der skal forklares",
    ],
    incidents: [
      {
        date: "2018-06",
        place: "Christiansborg",
        what: "VLAK/DF-medieaftale: 20% DR-cut, ingen lange netartikler, 'ikke alt til alle.' Sidste forsøg på at binde huset fra højre.",
        attribution: "Bekræftet",
      },
      {
        date: "2019-09",
        place: "København",
        what: "S-regering plus SF, RV, EL, Alternativet: ruller netartikel-forbuddet tilbage som 'armslængde.' Skralden.",
        attribution: "Bekræftet",
      },
      {
        date: "2022-09-26",
        place: "Kulturministeriet",
        what: "Slank public service-kontrakt 2022–25. Minister: fjern 'unødvendig detailregulering.' Tilføj en positiv pligt til at fremme ligestilling og mangfoldighed, herunder afrapporterbar andel kvindelige kunstnere.",
        attribution: "Bekræftet",
      },
      {
        date: "2023-06-14",
        place: "Christiansborg",
        what: "Medieaftale 2023–26: S, V, M, SF, EL, RV, DF. DR og TV 2 'skal arbejde målrettet med at skabe større alsidighed og pluralisme' i samspil med redaktionel dækning. 'Upartisk' bliver. Pluralisme bliver den målrettede pligt.",
        attribution: "Bekræftet",
      },
      {
        date: "2024-01",
        place: "DR",
        what: "Public service-kontrakt 2024–26 i kraft: nyheder 'alsidig og upartisk'; pluralismeopgaven; ligestillingssprog. Radio- og tv-nævnet scorer de tællelige poster. Balance bliver in-house.",
        attribution: "Bekræftet",
      },
      {
        date: "2025-11",
        place: "Folketinget",
        what: "Kulturminister Engel-Schmidt, under blåt pres efter Gaza-erklæring og tillidsrækker, fløder en slagsideundersøgelse som del af det kommende forlig. Mogens Jensen (S) havde allerede nikke. En ventil.",
        attribution: "Bekræftet (tilbuddet); høj (som et præ-valgs trykafløb)",
      },
      {
        date: "2026-06",
        place: "København",
        what: "S–SF–RV–M-regeringsgrundlag: et nyt medieforlig, ingen DR-cut, mediestøtte moderniseres, DR's ramme skal 'afbureaukratiseres og forenkles', så huset er agilt mod tech. Slagsidestudiet står ikke i programmet.",
        attribution: "Bekræftet (programtekst); høj (som instruksen til næste forlig)",
      },
    ],
    responses: [
      "DF B 123 (feb. 2025): pålæg regeringen at sikre mere objektiv, balanceret DR-nyhed — et beslutningsforslag, ikke et forlig",
      "LA, DF, DD: skær eller send DR i udbud. Ikke i 2026-programmet",
      "Engel-Schmidts 2025-tilbud om et biasstudie — overhalet af valget og den nye forligskreds",
      "DR's interne redaktør som den stående trykventil",
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
        date: "gældende",
      },
      {
        title: "Ny regering: Nyheder skrevet af AI skal ikke have mediestøtte",
        publisher: "Journalisten (regeringsgrundlag S–SF–RV–M)",
        date: "2026-06-03",
      },
    ],
  },
];
