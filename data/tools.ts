// Vervang affiliateUrl later met je Daisycon deeplink of affiliate trackinglink.
// Laat affiliateUrl op "#" staan zolang de campagne nog niet is goedgekeurd.

export type ToolCategory =
  | "ai-tools"
  | "website-hosting"
  | "drukwerk"
  | "boekhouding"
  | "social-media"
  | "cursussen"
  | "email-marketing"
  | "ondernemersdiensten";

export type PriceModel =
  | "gratis-betaald"
  | "abonnement"
  | "eenmalig"
  | "offerte"
  | "betaald";

export type ToolType = "software" | "dienst" | "drukwerk" | "training" | "pakket";

export type Tool = {
  slug: string;
  name: string;
  category: ToolCategory;
  shortDescription: string;
  description: string;
  targetAudience: string[];
  benefits: string[];
  attentionPoints: string[];
  priceLabel: string;
  priceModel: PriceModel;
  type: ToolType;
  affiliateUrl: string;
  normalUrl: string;
  featured: boolean;
};

export const priceModelLabels: Record<PriceModel, string> = {
  "gratis-betaald": "Gratis / betaald",
  abonnement: "Abonnement",
  eenmalig: "Eenmalig",
  offerte: "Op aanvraag",
  betaald: "Betaald",
};

export const typeLabels: Record<ToolType, string> = {
  software: "Software",
  dienst: "Dienst",
  drukwerk: "Drukwerk",
  training: "Training",
  pakket: "Pakket",
};

export const tools: Tool[] = [
  {
    slug: "ai-content-tool",
    name: "AI Content Tool",
    category: "ai-tools",
    shortDescription:
      "AI-tool voor ondernemers die sneller teksten, ideeen en content willen voorbereiden.",
    description:
      "AI Content Tool helpt bij het maken van eerste versies voor social posts, blogs, productteksten en e-mails. De tool is vooral handig als je sneller van idee naar concept wilt gaan, terwijl je de output zelf blijft controleren en aanpassen aan jouw bedrijf.",
    targetAudience: ["zzp", "kleine bedrijven", "marketing", "starters"],
    benefits: [
      "Bespaart tijd bij het voorbereiden van content",
      "Handig voor blogs, social posts en advertenties",
      "Geschikt voor ondernemers zonder vaste copywriter",
    ],
    attentionPoints: [
      "Controleer altijd feiten, prijzen en claims",
      "Niet elke functie is gratis beschikbaar",
      "Menselijke eindredactie blijft belangrijk",
    ],
    priceLabel: "Gratis / betaald",
    priceModel: "gratis-betaald",
    type: "software",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: true,
  },
  {
    slug: "ai-klantenservice-assistent",
    name: "AI Klantenservice Assistent",
    category: "ai-tools",
    shortDescription:
      "Tool om veelgestelde klantvragen sneller te verzamelen, structureren en beantwoorden.",
    description:
      "Deze AI-assistent is bedoeld voor ondernemers die vaak dezelfde vragen krijgen via mail, chat of social media. Je gebruikt de tool om antwoordvoorstellen, FAQ-teksten en interne werkinstructies voor te bereiden.",
    targetAudience: ["lokale bedrijven", "webshops", "dienstverleners"],
    benefits: [
      "Maakt terugkerende klantvragen overzichtelijker",
      "Helpt bij het opbouwen van een praktische FAQ",
      "Kan antwoordvoorstellen sneller voorbereiden",
    ],
    attentionPoints: [
      "Laat gevoelige klantdata niet zomaar verwerken",
      "Controleer antwoorden voordat je ze verstuurt",
      "Niet bedoeld als vervanging van persoonlijk contact",
    ],
    priceLabel: "Betaald",
    priceModel: "betaald",
    type: "software",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: false,
  },
  {
    slug: "ai-beeldgenerator-voor-content",
    name: "AI Beeldgenerator voor Content",
    category: "ai-tools",
    shortDescription:
      "Maak conceptbeelden voor social media, advertenties en campagne-ideeen.",
    description:
      "Een AI-beeldgenerator kan helpen bij het uitwerken van visuele richtingen voor posts, flyers, banners en advertenties. Vooral handig voor het testen van stijlen en campagnebeelden voordat je definitief ontwerpwerk laat maken.",
    targetAudience: ["creators", "marketing", "kleine bedrijven"],
    benefits: [
      "Snel visuele richtingen testen",
      "Handig voor social media concepten",
      "Kan inspiratie geven voor flyers en banners",
    ],
    attentionPoints: [
      "Controleer rechten en gebruiksvoorwaarden",
      "Gebruik geen misleidende beelden",
      "Tekst in gegenereerde beelden moet vaak worden nagekeken",
    ],
    priceLabel: "Abonnement",
    priceModel: "abonnement",
    type: "software",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: true,
  },
  {
    slug: "website-hosting-starter",
    name: "Website Hosting Starter",
    category: "website-hosting",
    shortDescription:
      "Hostingpakket voor ondernemers die een eenvoudige zakelijke website willen publiceren.",
    description:
      "Website Hosting Starter is een generiek hostingpakket voor een eerste bedrijfswebsite, portfolio of landingspagina. Let bij hosting vooral op snelheid, support, back-ups, SSL en de mogelijkheid om later uit te breiden.",
    targetAudience: ["starters", "zzp", "lokale bedrijven"],
    benefits: [
      "Geschikt voor een eerste zakelijke website",
      "Meestal inclusief SSL en basisbeheer",
      "Goed startpunt voor landingspagina's",
    ],
    attentionPoints: [
      "Controleer opslag, dataverkeer en support",
      "Let op verlengprijzen na een actieperiode",
      "Niet elk pakket is geschikt voor zware webshops",
    ],
    priceLabel: "Vanaf-prijs per maand",
    priceModel: "abonnement",
    type: "pakket",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: true,
  },
  {
    slug: "wordpress-hosting-lokaal",
    name: "WordPress Hosting Lokaal",
    category: "website-hosting",
    shortDescription:
      "Hostingoptie voor ondernemers die met WordPress werken of willen starten.",
    description:
      "WordPress Hosting Lokaal is bedoeld voor ondernemers die hun website op WordPress willen draaien. Dit type pakket past bij websites met blogs, dienstenpagina's en eenvoudige formulieren.",
    targetAudience: ["zzp", "lokale bedrijven", "dienstverleners"],
    benefits: [
      "Past goed bij WordPress websites",
      "Handig voor blogs en dienstenpagina's",
      "Makkelijker beheer dan algemene hosting",
    ],
    attentionPoints: [
      "Updates en beveiliging blijven belangrijk",
      "Plugins kunnen snelheid beinvloeden",
      "Controleer of back-ups zijn inbegrepen",
    ],
    priceLabel: "Abonnement",
    priceModel: "abonnement",
    type: "pakket",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: false,
  },
  {
    slug: "domein-en-email-pakket",
    name: "Domein en E-mail Pakket",
    category: "website-hosting",
    shortDescription:
      "Basis voor ondernemers die een professionele domeinnaam en zakelijk e-mailadres nodig hebben.",
    description:
      "Een domein en e-mail pakket is een logische eerste stap voor ondernemers die professioneler willen communiceren. Je gebruikt dit voor een herkenbare domeinnaam en een zakelijk e-mailadres zoals info@jouwdomein.nl.",
    targetAudience: ["starters", "zzp", "lokale bedrijven"],
    benefits: [
      "Professioneler dan een gratis e-mailadres",
      "Goede basis voor website en e-mailmarketing",
      "Vaak snel te activeren",
    ],
    attentionPoints: [
      "Controleer inboxruimte en spamfiltering",
      "Let op DNS-instellingen",
      "Domeinnaamkosten komen jaarlijks terug",
    ],
    priceLabel: "Eenmalig en jaarlijks",
    priceModel: "eenmalig",
    type: "pakket",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: false,
  },
  {
    slug: "drukwerk-partner",
    name: "Drukwerk Partner",
    category: "drukwerk",
    shortDescription:
      "Drukwerkdienst voor flyers, posters, visitekaartjes en promotiemateriaal.",
    description:
      "Drukwerk Partner is een placeholder voor een drukwerkcampagne via Daisycon. Dit type dienst is interessant voor lokale acties, beurzen, horeca, winkels en ondernemers die offline zichtbaar willen zijn.",
    targetAudience: ["lokale bedrijven", "winkels", "horeca", "starters"],
    benefits: [
      "Geschikt voor acties en lokale promotie",
      "Veel keuze in formaten en papiersoorten",
      "Handig voor herkenbare offline zichtbaarheid",
    ],
    attentionPoints: [
      "Controleer levertijd en aanleverspecificaties",
      "Laat bestanden goed op drukformaat maken",
      "Prijs hangt af van oplage en afwerking",
    ],
    priceLabel: "Vanaf-prijs per oplage",
    priceModel: "eenmalig",
    type: "drukwerk",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: true,
  },
  {
    slug: "visitekaartjes-starterpakket",
    name: "Visitekaartjes Starterpakket",
    category: "drukwerk",
    shortDescription:
      "Eenvoudig drukwerkpakket voor ondernemers die professioneel willen starten.",
    description:
      "Een visitekaartjespakket is handig voor afspraken, netwerken, lokale klanten en events. Kies een ontwerp dat past bij je website en social media, zodat je uitstraling herkenbaar blijft.",
    targetAudience: ["starters", "zzp", "dienstverleners"],
    benefits: [
      "Laagdrempelig voor afspraken en events",
      "Geeft contactgegevens snel mee",
      "Goed te combineren met flyers of stickers",
    ],
    attentionPoints: [
      "Controleer snijmarges en resolutie",
      "Vermijd te kleine tekst",
      "Gebruik actuele contactgegevens",
    ],
    priceLabel: "Eenmalig",
    priceModel: "eenmalig",
    type: "drukwerk",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: false,
  },
  {
    slug: "flyers-actiecampagne",
    name: "Flyers Actiecampagne",
    category: "drukwerk",
    shortDescription:
      "Flyerdrukwerk voor aanbiedingen, openingen, lokale acties en evenementen.",
    description:
      "Flyers kunnen nog steeds goed werken voor lokale zichtbaarheid, vooral als het aanbod duidelijk is en de flyer een herkenbare actie of contactmoment bevat. Denk aan een QR-code, korte URL of duidelijke belknop op de landingspagina.",
    targetAudience: ["lokale bedrijven", "horeca", "winkels", "events"],
    benefits: [
      "Handig voor lokale verspreiding",
      "Past bij acties, openingen en events",
      "Goed te koppelen aan een landingspagina",
    ],
    attentionPoints: [
      "Zorg voor een duidelijke CTA",
      "Controleer drukbestand en kleuren",
      "Verspreiding bepaalt mede het resultaat",
    ],
    priceLabel: "Vanaf-prijs per oplage",
    priceModel: "eenmalig",
    type: "drukwerk",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: true,
  },
  {
    slug: "boekhoudsoftware-zzp",
    name: "Boekhoudsoftware ZZP",
    category: "boekhouding",
    shortDescription:
      "Boekhoudtool voor facturen, bonnetjes, btw en financieel overzicht.",
    description:
      "Boekhoudsoftware voor zzp'ers helpt bij factureren, bonnetjes verwerken, btw-aangifte voorbereiden en inkomsten overzichtelijk houden. Kies vooral software die past bij jouw manier van werken en je boekhouder.",
    targetAudience: ["zzp", "starters", "dienstverleners"],
    benefits: [
      "Meer overzicht in inkomsten en kosten",
      "Handig voor facturen en btw",
      "Kan samenwerken met een boekhouder makkelijker maken",
    ],
    attentionPoints: [
      "Controleer koppelingen met bank en boekhouder",
      "Niet elk pakket heeft dezelfde support",
      "Administratie blijft jouw verantwoordelijkheid",
    ],
    priceLabel: "Abonnement",
    priceModel: "abonnement",
    type: "software",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: true,
  },
  {
    slug: "facturatie-tool-starter",
    name: "Facturatie Tool Starter",
    category: "boekhouding",
    shortDescription:
      "Eenvoudige tool voor offertes, facturen en betalingsherinneringen.",
    description:
      "Een facturatietool is handig wanneer je vooral netjes offertes en facturen wilt maken zonder direct een uitgebreid boekhoudpakket te gebruiken. Dit past bij starters en kleine dienstverleners.",
    targetAudience: ["starters", "zzp", "freelancers"],
    benefits: [
      "Sneller professionele facturen maken",
      "Helpt bij overzicht van openstaande betalingen",
      "Vaak eenvoudiger dan volledige boekhouding",
    ],
    attentionPoints: [
      "Controleer of btw en nummering goed werken",
      "Niet altijd geschikt voor volledige administratie",
      "Exportmogelijkheden verschillen per pakket",
    ],
    priceLabel: "Gratis / betaald",
    priceModel: "gratis-betaald",
    type: "software",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: false,
  },
  {
    slug: "uren-en-kilometerregistratie",
    name: "Uren en Kilometerregistratie",
    category: "boekhouding",
    shortDescription:
      "Tool voor ondernemers die uren, ritten en projecttijd willen bijhouden.",
    description:
      "Deze tool helpt bij het vastleggen van gewerkte uren, kilometers en projecttijd. Dat kan nuttig zijn voor facturatie, planning en administratie, vooral als je voor meerdere klanten werkt.",
    targetAudience: ["zzp", "freelancers", "dienstverleners"],
    benefits: [
      "Geeft beter zicht op bestede tijd",
      "Handig voor projectfacturatie",
      "Kan administratie eenvoudiger maken",
    ],
    attentionPoints: [
      "Registratie moet consequent worden bijgehouden",
      "Controleer export naar boekhoudsoftware",
      "Niet elke tool heeft mobiele ritregistratie",
    ],
    priceLabel: "Abonnement",
    priceModel: "abonnement",
    type: "software",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: false,
  },
  {
    slug: "social-planner-pro",
    name: "Social Planner Pro",
    category: "social-media",
    shortDescription:
      "Planningstool voor ondernemers die social posts vooruit willen klaarzetten.",
    description:
      "Social Planner Pro helpt met het plannen, ordenen en publiceren van social media content. Dit is handig als je actief wilt blijven posten zonder elke dag handmatig alles te plaatsen.",
    targetAudience: ["zzp", "creators", "kleine bedrijven", "marketing"],
    benefits: [
      "Posts vooruit plannen",
      "Meer overzicht in contentmomenten",
      "Handig voor campagnes en vaste rubrieken",
    ],
    attentionPoints: [
      "Platformkoppelingen kunnen per pakket verschillen",
      "Controleer limieten per social kanaal",
      "Sterke contentplanning blijft nodig",
    ],
    priceLabel: "Abonnement",
    priceModel: "abonnement",
    type: "software",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: true,
  },
  {
    slug: "contentkalender-tool",
    name: "Contentkalender Tool",
    category: "social-media",
    shortDescription:
      "Tool om campagnes, posts, ideeen en publicatiedata overzichtelijk te plannen.",
    description:
      "Een contentkalender is handig voor ondernemers die meer structuur willen in hun communicatie. Je ziet welke posts, acties, mails en campagnes eraan komen en voorkomt dat alles op het laatste moment moet.",
    targetAudience: ["marketing", "kleine bedrijven", "creators"],
    benefits: [
      "Brengt structuur in contentplanning",
      "Helpt campagnes vooruit te bekijken",
      "Makkelijk te combineren met AI-contenttools",
    ],
    attentionPoints: [
      "Een planning werkt alleen als je hem bijhoudt",
      "Niet elke tool publiceert automatisch",
      "Maak ruimte voor actuele posts",
    ],
    priceLabel: "Gratis / betaald",
    priceModel: "gratis-betaald",
    type: "software",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: false,
  },
  {
    slug: "link-in-bio-tool",
    name: "Link in Bio Tool",
    category: "social-media",
    shortDescription:
      "Verzamel belangrijke links voor Instagram, TikTok en andere social profielen.",
    description:
      "Een link in bio pagina helpt bezoekers vanuit social media sneller naar je aanbod, contactpagina, acties of afspraaklink. Voor kleine ondernemers is dit een eenvoudige manier om social verkeer beter te sturen.",
    targetAudience: ["creators", "zzp", "lokale bedrijven"],
    benefits: [
      "Zet meerdere links achter een social profiel",
      "Handig voor acties en contactmomenten",
      "Snel aan te passen bij nieuwe campagnes",
    ],
    attentionPoints: [
      "Houd de pagina kort en duidelijk",
      "Gebruik herkenbare CTA's",
      "Een eigen landingspagina kan professioneler zijn",
    ],
    priceLabel: "Gratis / betaald",
    priceModel: "gratis-betaald",
    type: "software",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: false,
  },
  {
    slug: "online-cursusplatform",
    name: "Online Cursusplatform",
    category: "cursussen",
    shortDescription:
      "Platform voor ondernemers die kennis, trainingen of lessen online willen aanbieden.",
    description:
      "Een online cursusplatform is interessant voor ondernemers die hun kennis willen verkopen of trainingen willen structureren. Let op betaalmogelijkheden, lesopbouw, deelnemersbeheer en support.",
    targetAudience: ["trainers", "coaches", "creators", "dienstverleners"],
    benefits: [
      "Geschikt voor online lessen en modules",
      "Kan kennisproducten overzichtelijk aanbieden",
      "Handig voor coaches en trainers",
    ],
    attentionPoints: [
      "Content maken kost voorbereiding",
      "Controleer betaal- en toegangsmogelijkheden",
      "Niet ieder platform past bij maatwerk",
    ],
    priceLabel: "Abonnement",
    priceModel: "abonnement",
    type: "training",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: true,
  },
  {
    slug: "ondernemerscursus-marketing",
    name: "Ondernemerscursus Marketing",
    category: "cursussen",
    shortDescription:
      "Training voor starters die beter willen begrijpen hoe online zichtbaarheid werkt.",
    description:
      "Een marketingcursus kan helpen om keuzes te maken rond website, social media, advertenties en e-mail. Kies een training die praktisch genoeg is voor jouw fase en geen onrealistische resultaten belooft.",
    targetAudience: ["starters", "zzp", "kleine bedrijven"],
    benefits: [
      "Geeft meer grip op marketingkeuzes",
      "Helpt bij website en social media planning",
      "Goed voor ondernemers die zelf willen leren",
    ],
    attentionPoints: [
      "Resultaat hangt af van uitvoering",
      "Vermijd trainingen met grote beloftes",
      "Kies een cursus die past bij jouw branche",
    ],
    priceLabel: "Eenmalig",
    priceModel: "eenmalig",
    type: "training",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: false,
  },
  {
    slug: "ai-training-voor-ondernemers",
    name: "AI Training voor Ondernemers",
    category: "cursussen",
    shortDescription:
      "Praktische training voor ondernemers die AI veilig en nuttig willen gebruiken.",
    description:
      "Een AI-training helpt ondernemers beter begrijpen waar AI voor kan worden gebruikt, zoals content voorbereiden, klantvragen structureren en workflows versnellen. Een goede training blijft praktisch en eerlijk over beperkingen.",
    targetAudience: ["zzp", "kleine bedrijven", "marketing", "starters"],
    benefits: [
      "Maakt AI-toepassingen concreter",
      "Handig voor content en dagelijkse workflows",
      "Helpt risico's en beperkingen beter begrijpen",
    ],
    attentionPoints: [
      "Controleer of de training actueel is",
      "Geen enkele training vervangt vakkennis",
      "Let op privacy bij klantgegevens",
    ],
    priceLabel: "Betaald",
    priceModel: "betaald",
    type: "training",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: false,
  },
  {
    slug: "email-marketing-starter",
    name: "E-mail Marketing Starter",
    category: "email-marketing",
    shortDescription:
      "Tool voor nieuwsbrieven, inschrijfformulieren en eenvoudige e-mailcampagnes.",
    description:
      "E-mailmarketing helpt ondernemers contact houden met mensen die al interesse hebben getoond. Een starterstool is geschikt voor nieuwsbrieven, acties, downloads en opvolgmails.",
    targetAudience: ["zzp", "webshops", "lokale bedrijven", "marketing"],
    benefits: [
      "Bouwt een eigen contactlijst op",
      "Handig voor nieuwsbrieven en acties",
      "Kan websitebezoekers beter opvolgen",
    ],
    attentionPoints: [
      "Werk volgens privacy- en toestemmingsregels",
      "Een goede onderwerpregel en inhoud blijven nodig",
      "Gratis pakketten hebben vaak limieten",
    ],
    priceLabel: "Gratis / betaald",
    priceModel: "gratis-betaald",
    type: "software",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: true,
  },
  {
    slug: "nieuwsbrief-automatisering",
    name: "Nieuwsbrief Automatisering",
    category: "email-marketing",
    shortDescription:
      "Software voor automatische opvolgmails, welkomstreeksen en campagnes.",
    description:
      "Nieuwsbrief automatisering is handig als je nieuwe inschrijvers automatisch een reeks mails wilt sturen. Denk aan een welkomstmail, aanbod, afspraaklink of korte uitleg over je dienst.",
    targetAudience: ["dienstverleners", "webshops", "marketing"],
    benefits: [
      "Volgt inschrijvers automatisch op",
      "Handig voor lead magnets en acties",
      "Geeft meer structuur aan e-mailcampagnes",
    ],
    attentionPoints: [
      "Automatisering moet menselijk blijven klinken",
      "Segmentatie vraagt onderhoud",
      "Controleer verzendlimieten en kosten",
    ],
    priceLabel: "Abonnement",
    priceModel: "abonnement",
    type: "software",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: false,
  },
  {
    slug: "lead-magnet-tool",
    name: "Lead Magnet Tool",
    category: "email-marketing",
    shortDescription:
      "Tool om downloads, formulieren en opvolging voor leads te organiseren.",
    description:
      "Een lead magnet tool helpt bij het aanbieden van een checklist, gids, kortingsactie of intakeformulier. Combineer dit met duidelijke toestemming en een opvolgmail die echt waarde geeft.",
    targetAudience: ["zzp", "dienstverleners", "marketing"],
    benefits: [
      "Helpt bezoekers om contactgegevens achter te laten",
      "Past bij downloads en intakeformulieren",
      "Goed te combineren met een landingspagina",
    ],
    attentionPoints: [
      "Bied iets relevants aan",
      "Vraag niet meer gegevens dan nodig",
      "Zorg voor duidelijke privacy-informatie",
    ],
    priceLabel: "Betaald",
    priceModel: "betaald",
    type: "software",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: false,
  },
  {
    slug: "zakelijke-verzekering-check",
    name: "Zakelijke Verzekering Check",
    category: "ondernemersdiensten",
    shortDescription:
      "Dienst om te bekijken welke zakelijke verzekeringen mogelijk relevant zijn.",
    description:
      "Een zakelijke verzekering check kan starters en ondernemers helpen nadenken over risico's zoals aansprakelijkheid, inventaris, arbeidsongeschiktheid of beroepsfouten. Laat je altijd goed informeren voordat je iets afsluit.",
    targetAudience: ["starters", "zzp", "lokale bedrijven"],
    benefits: [
      "Geeft overzicht van mogelijke risico's",
      "Handig bij de start van een bedrijf",
      "Kan helpen om bewuster te kiezen",
    ],
    attentionPoints: [
      "Geen vervanging voor persoonlijk advies",
      "Voorwaarden verschillen per aanbieder",
      "Kijk niet alleen naar de laagste premie",
    ],
    priceLabel: "Op aanvraag",
    priceModel: "offerte",
    type: "dienst",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: false,
  },
  {
    slug: "startersadvies-dienst",
    name: "Startersadvies Dienst",
    category: "ondernemersdiensten",
    shortDescription:
      "Dienst voor ondernemers die hulp willen bij de eerste praktische keuzes.",
    description:
      "Startersadvies kan helpen bij keuzes rond rechtsvorm, administratie, website, positionering en basisprocessen. Gebruik dit als startpunt, niet als vervanging van specialistisch juridisch of fiscaal advies.",
    targetAudience: ["starters", "zzp", "kleine bedrijven"],
    benefits: [
      "Geeft structuur aan de startfase",
      "Helpt bij praktische keuzes",
      "Kan tijd besparen bij uitzoekwerk",
    ],
    attentionPoints: [
      "Vraag altijd wat wel en niet inbegrepen is",
      "Specialistisch advies kan apart nodig zijn",
      "Controleer of de dienst past bij jouw branche",
    ],
    priceLabel: "Op aanvraag",
    priceModel: "offerte",
    type: "dienst",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: true,
  },
  {
    slug: "juridische-documenten-service",
    name: "Juridische Documenten Service",
    category: "ondernemersdiensten",
    shortDescription:
      "Dienst voor basisdocumenten zoals algemene voorwaarden, contracten en privacyteksten.",
    description:
      "Een juridische documenten service kan helpen met basisdocumenten voor je bedrijf. Denk aan algemene voorwaarden, verwerkingsovereenkomsten of eenvoudige contracten. Laat belangrijke documenten controleren als de situatie complex is.",
    targetAudience: ["zzp", "webshops", "dienstverleners", "starters"],
    benefits: [
      "Geeft sneller een professionele basis",
      "Handig voor webshops en dienstverleners",
      "Maakt afspraken duidelijker",
    ],
    attentionPoints: [
      "Templates passen niet altijd bij elke situatie",
      "Laat complexe afspraken juridisch controleren",
      "Houd documenten actueel",
    ],
    priceLabel: "Eenmalig of abonnement",
    priceModel: "eenmalig",
    type: "dienst",
    affiliateUrl: "#",
    normalUrl: "#",
    featured: false,
  },
];

export function getFeaturedTools(limit = 8) {
  return tools.filter((tool) => tool.featured).slice(0, limit);
}

export function getToolsByCategory(category: ToolCategory) {
  return tools.filter((tool) => tool.category === category);
}

export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}
