import type { ToolCategory } from "./tools";

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  category: ToolCategory;
  publishedAt: string;
  readTime: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "beste-ai-tools-voor-kleine-ondernemers",
    title: "Beste AI tools voor kleine ondernemers: waar let je op?",
    metaDescription:
      "Praktische gids voor kleine ondernemers die AI tools willen kiezen voor content, klantvragen en dagelijkse workflows.",
    excerpt:
      "AI kan veel werk versnellen, maar de juiste keuze hangt af van je doel, data en manier van werken.",
    category: "ai-tools",
    publishedAt: "2026-05-08",
    readTime: "6 min",
    sections: [
      {
        heading: "Begin met een concreet doel",
        body: [
          "Kies geen AI tool omdat het populair klinkt. Begin met de vraag waar je tijd verliest. Denk aan social posts voorbereiden, klantvragen sorteren, ideeen uitwerken of ruwe teksten herschrijven.",
          "Als het doel duidelijk is, kun je beter beoordelen of een tool echt past. Een ondernemer die vooral content maakt, heeft iets anders nodig dan een bedrijf dat veel supportvragen ontvangt.",
        ],
      },
      {
        heading: "Let op controle en privacy",
        body: [
          "AI-output moet altijd worden gecontroleerd. Feiten, prijzen, voorwaarden en klantinformatie mogen niet blind worden overgenomen.",
          "Gebruik geen gevoelige klantgegevens in een AI tool zonder goed te weten hoe die data wordt verwerkt. Zeker bij offertes, medische informatie, juridische zaken of financiele gegevens is voorzichtigheid belangrijk.",
        ],
      },
      {
        heading: "Praktische toepassingen voor ondernemers",
        body: [
          "Voor veel kleine ondernemers zit de winst in eenvoudige toepassingen: een eerste versie van een blog, varianten op advertentietekst, een FAQ voor de website of een betere structuur voor een aanbodpagina.",
          "AI werkt het best als onderdeel van een proces. Combineer de tool bijvoorbeeld met een contentkalender, een vaste promptset of een workflow voor klantvragen.",
        ],
      },
    ],
    faq: [
      {
        question: "Wat is een goede eerste AI tool voor ondernemers?",
        answer:
          "Een schrijftool of algemene AI-assistent is vaak een goed startpunt, omdat je die breed kunt gebruiken voor tekst, ideeen en structuur.",
      },
      {
        question: "Kan WZN Production helpen met AI workflows?",
        answer:
          "Ja. WZN Production kan helpen met praktische prompts, AI tools en automatisering die passen bij je website, content of interne werk.",
      },
    ],
  },
  {
    slug: "beste-website-hosting-voor-starters",
    title: "Website hosting voor starters: wat heb je echt nodig?",
    metaDescription:
      "Lees waar starters op moeten letten bij hosting, domeinnaam, SSL, e-mail en support voor een zakelijke website.",
    excerpt:
      "Hosting hoeft niet ingewikkeld te zijn, maar de basis moet betrouwbaar zijn als je professioneel online wilt staan.",
    category: "website-hosting",
    publishedAt: "2026-05-08",
    readTime: "5 min",
    sections: [
      {
        heading: "De basis: domein, hosting, SSL en e-mail",
        body: [
          "Voor een zakelijke website heb je meestal een domeinnaam, hostingpakket, SSL-certificaat en zakelijk e-mailadres nodig. Daarmee staat je website bereikbaar en communiceer je professioneler.",
          "Let niet alleen op de actieprijs. Kijk ook naar verlengkosten, support, back-ups en hoeveel ruimte je krijgt.",
        ],
      },
      {
        heading: "Kies hosting op basis van je website",
        body: [
          "Een eenvoudige landingspagina vraagt minder dan een webshop of zware WordPress website met veel plugins. Kies dus niet automatisch het grootste pakket, maar wel een pakket dat past bij je plannen.",
          "Als je later wilt uitbreiden, is het prettig als je hosting makkelijk kan meegroeien zonder technische rommel.",
        ],
      },
      {
        heading: "Laat de techniek je aanbod ondersteunen",
        body: [
          "Hosting is geen doel op zich. Het moet zorgen dat je website snel laadt, veilig bereikbaar is en bezoekers makkelijk richting contact of aanvraag stuurt.",
          "WZN Production kan helpen met websitebouw, structuur, content en livegang, zodat hosting en website logisch bij elkaar passen.",
        ],
      },
    ],
    faq: [
      {
        question: "Is goedkope hosting genoeg voor een starter?",
        answer:
          "Soms wel, zolang snelheid, SSL, support en back-ups op orde zijn. Let vooral op de totale kosten en betrouwbaarheid.",
      },
      {
        question: "Heb ik WordPress hosting nodig?",
        answer:
          "Alleen als je website op WordPress draait of je bewust voor WordPress kiest. Voor andere websites kan andere hosting logischer zijn.",
      },
    ],
  },
  {
    slug: "visitekaartjes-en-flyers-laten-drukken",
    title: "Visitekaartjes en flyers laten drukken: praktische checklist",
    metaDescription:
      "Checklist voor ondernemers die visitekaartjes, flyers of ander drukwerk willen laten maken voor lokale promotie.",
    excerpt:
      "Goed drukwerk begint met een duidelijk doel, sterke tekst en een bestand dat technisch klopt.",
    category: "drukwerk",
    publishedAt: "2026-05-08",
    readTime: "5 min",
    sections: [
      {
        heading: "Bepaal eerst het doel",
        body: [
          "Een visitekaartje is bedoeld om contactgegevens mee te geven. Een flyer moet meestal een actie, opening, dienst of evenement duidelijk maken. Die doelen vragen om andere tekst en opmaak.",
          "Zet niet alles op een flyer. Kies een hoofdboodschap, korte uitleg en een duidelijke vervolgstap zoals bellen, mailen, scannen of een pagina bezoeken.",
        ],
      },
      {
        heading: "Controleer het drukbestand",
        body: [
          "Drukwerk vraagt om goede resolutie, juiste snijmarges en leesbare tekst. Vooral kleine lettertypes, lage beeldkwaliteit en ontbrekende marges zorgen snel voor problemen.",
          "Gebruik bij voorkeur een ontwerp dat past bij je website en social media, zodat je bedrijf herkenbaar blijft.",
        ],
      },
      {
        heading: "Koppel offline promotie aan online actie",
        body: [
          "Een flyer werkt beter als mensen makkelijk kunnen reageren. Voeg een QR-code, korte URL, mailadres of telefoonnummer toe.",
          "Wil je drukwerk combineren met een landingspagina of social campagne? Dan kan WZN Production helpen met ontwerp, webpagina en promotiecontent.",
        ],
      },
    ],
    faq: [
      {
        question: "Wat moet er op een visitekaartje staan?",
        answer:
          "Naam, bedrijfsnaam, functie of aanbod, telefoonnummer, e-mailadres, website en eventueel een QR-code of social profiel.",
      },
      {
        question: "Wat is belangrijk bij flyers?",
        answer:
          "Een korte boodschap, duidelijke actie, goede leesbaarheid en een ontwerp dat past bij je bedrijf.",
      },
    ],
  },
  {
    slug: "beste-boekhoudprogramma-voor-zzp",
    title: "Boekhoudprogramma voor zzp: hoe kies je praktisch?",
    metaDescription:
      "Praktische gids voor zzp'ers die boekhoudsoftware, facturatie en administratie overzichtelijk willen regelen.",
    excerpt:
      "Een goed boekhoudprogramma past bij je werk, je boekhouder en de hoeveelheid administratie die je hebt.",
    category: "boekhouding",
    publishedAt: "2026-05-08",
    readTime: "6 min",
    sections: [
      {
        heading: "Wat moet je kunnen bijhouden?",
        body: [
          "Voor de meeste zzp'ers zijn facturen, bonnetjes, btw, kosten, inkomsten en uren belangrijk. Sommige ondernemers hebben ook rittenregistratie, offertes of projectoverzichten nodig.",
          "Schrijf eerst op wat jij echt gebruikt. Zo voorkom je dat je betaalt voor functies die je voorlopig niet nodig hebt.",
        ],
      },
      {
        heading: "Samenwerken met je boekhouder",
        body: [
          "Als je met een boekhouder werkt, vraag dan welke software handig is. Een pakket dat goed exporteert of direct toegang geeft, kan tijd en misverstanden besparen.",
          "Let ook op bankkoppelingen, btw-overzichten, factuurnummering en ondersteuning wanneer iets fout gaat.",
        ],
      },
      {
        heading: "Begin eenvoudig, maar denk vooruit",
        body: [
          "Een eenvoudige facturatietool kan genoeg zijn als je net start. Zodra je meer klanten, kosten of projecten krijgt, kan een volledig boekhoudpakket praktischer zijn.",
          "Boekhoudsoftware vervangt geen fiscaal advies. Bij twijfel blijft een boekhouder of adviseur belangrijk.",
        ],
      },
    ],
    faq: [
      {
        question: "Wat kost boekhoudsoftware voor zzp'ers?",
        answer:
          "Dat verschilt per aanbieder. Veel pakketten werken met een maandabonnement en soms een gratis proefperiode.",
      },
      {
        question: "Kan ik boekhouding zelf doen?",
        answer:
          "Dat kan, maar zorg dat je de regels begrijpt. Bij twijfel is een boekhouder verstandig.",
      },
    ],
  },
  {
    slug: "social-media-tools-voor-ondernemers",
    title: "Social media tools voor ondernemers: plannen zonder rommel",
    metaDescription:
      "Overzicht van social media tools voor planning, contentkalenders en link-in-bio pagina's voor ondernemers.",
    excerpt:
      "Met de juiste tools wordt social media overzichtelijker, maar de inhoud moet nog steeds helder en herkenbaar zijn.",
    category: "social-media",
    publishedAt: "2026-05-08",
    readTime: "5 min",
    sections: [
      {
        heading: "Planning geeft rust",
        body: [
          "Veel ondernemers posten pas wanneer er tijd over is. Een planningstool helpt om posts vooruit te zetten en campagnes beter te verdelen.",
          "Je hoeft niet elke dag iets nieuws te bedenken. Werk met vaste rubrieken, acties, klantvragen en voorbeelden uit je werk.",
        ],
      },
      {
        heading: "Gebruik een contentkalender",
        body: [
          "Een contentkalender laat zien wat eraan komt. Denk aan posts, flyers, nieuwsbrieven, acties en website-updates.",
          "Zo voorkom je dat je promotie los zand wordt. Je ziet sneller welke content elkaar ondersteunt.",
        ],
      },
      {
        heading: "Stuur verkeer naar een duidelijke plek",
        body: [
          "Een link-in-bio tool of eigen landingspagina helpt bezoekers vanaf social media sneller naar je aanbod, afspraaklink of contactpagina.",
          "WZN Production kan helpen om social content, visuals en landingspagina's op elkaar aan te laten sluiten.",
        ],
      },
    ],
    faq: [
      {
        question: "Heb ik een betaalde social media tool nodig?",
        answer:
          "Niet altijd. Begin met wat je nodig hebt: plannen, overzicht, analyses of linkbeheer. Daarna kun je gericht kiezen.",
      },
      {
        question: "Kan WZN Production social posts ontwerpen?",
        answer:
          "Ja. WZN Production maakt social posts, promotievisuals, banners en content voor acties of lanceringen.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
