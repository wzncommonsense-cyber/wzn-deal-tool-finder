import type { ToolCategory } from "./tools";

export type Category = {
  slug: ToolCategory;
  name: string;
  shortName: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  explanation: string;
  faq: {
    question: string;
    answer: string;
  }[];
};

export const categories: Category[] = [
  {
    slug: "ai-tools",
    name: "AI tools",
    shortName: "AI",
    seoTitle: "AI tools voor kleine ondernemers vergelijken",
    metaDescription:
      "Bekijk praktische AI tools voor ondernemers, zzp'ers en lokale bedrijven. Vergelijk functies, prijsmodel en aandachtspunten.",
    intro:
      "AI tools kunnen ondernemers helpen om sneller teksten, ideeen, beelden en klantantwoorden voor te bereiden.",
    explanation:
      "Gebruik AI vooral als praktische hulp. Laat de tool het eerste werk doen, maar controleer altijd feiten, toon, privacy en claims. Voor ondernemers werkt AI het best wanneer het gekoppeld is aan duidelijke processen, zoals contentplanning, klantenservice of interne documentatie.",
    faq: [
      {
        question: "Welke AI tool past bij een kleine ondernemer?",
        answer:
          "Dat hangt af van je doel. Voor content is een schrijftool handig, voor beeldmateriaal een beeldgenerator en voor klantvragen een assistent of FAQ-tool.",
      },
      {
        question: "Kan ik AI teksten direct publiceren?",
        answer:
          "Controleer de tekst altijd eerst. AI kan helpen met snelheid, maar jij blijft verantwoordelijk voor juistheid, toon en betrouwbaarheid.",
      },
      {
        question: "Kan WZN Production helpen met AI in mijn bedrijf?",
        answer:
          "Ja. WZN Production helpt met praktische AI tools, prompts en workflows die passen bij jouw website, content of dagelijkse werk.",
      },
    ],
  },
  {
    slug: "website-hosting",
    name: "Website & hosting",
    shortName: "Hosting",
    seoTitle: "Website hosting voor starters en kleine bedrijven",
    metaDescription:
      "Vergelijk hosting, domein en e-mail opties voor starters, zzp'ers en kleine bedrijven.",
    intro:
      "Een goede basis voor je website begint bij hosting, domeinnaam, SSL, e-mail en betrouwbare support.",
    explanation:
      "Kies hosting op basis van je websiteplannen. Een eenvoudige bedrijfssite vraagt iets anders dan een webshop of platform. Let op snelheid, back-ups, beveiliging, support en de kosten na een actieperiode.",
    faq: [
      {
        question: "Waar moet ik op letten bij hosting?",
        answer:
          "Let op SSL, back-ups, support, snelheid, opslagruimte, e-mailmogelijkheden en verlengprijzen.",
      },
      {
        question: "Heb ik direct dure hosting nodig?",
        answer:
          "Voor een kleine bedrijfssite meestal niet. Kies wel een pakket dat betrouwbaar is en later kan meegroeien.",
      },
      {
        question: "Kan WZN Production mijn website bouwen en live zetten?",
        answer:
          "Ja. WZN Production kan helpen met websitebouw, structuur, design, content en praktische livegang.",
      },
    ],
  },
  {
    slug: "drukwerk",
    name: "Drukwerk",
    shortName: "Drukwerk",
    seoTitle: "Drukwerk voor ondernemers: flyers, visitekaartjes en posters",
    metaDescription:
      "Vind drukwerkopties voor lokale acties, visitekaartjes, flyers, posters en promotiemateriaal.",
    intro:
      "Drukwerk blijft nuttig voor lokale zichtbaarheid, acties, evenementen en persoonlijk contact.",
    explanation:
      "Goed drukwerk begint met een duidelijk doel. Wil je mensen naar je website sturen, een actie promoten of contactgegevens meegeven? Zorg dan voor heldere tekst, goede bestandskwaliteit en een herkenbare uitstraling.",
    faq: [
      {
        question: "Wat heb ik nodig om drukwerk aan te leveren?",
        answer:
          "Meestal heb je een drukgeschikt bestand nodig met juiste resolutie, snijmarge en kleurinstellingen.",
      },
      {
        question: "Wat is handig voor lokale promotie?",
        answer:
          "Flyers, posters en visitekaartjes werken vooral goed als de boodschap kort is en de CTA duidelijk zichtbaar is.",
      },
      {
        question: "Kan WZN Production flyers of promotievisuals maken?",
        answer:
          "Ja. WZN Production kan helpen met flyers, banners, social posts en campagnevisuals.",
      },
    ],
  },
  {
    slug: "boekhouding",
    name: "Boekhouding",
    shortName: "Boekhouding",
    seoTitle: "Boekhoudsoftware voor zzp en starters vergelijken",
    metaDescription:
      "Bekijk boekhoudsoftware, facturatietools en registratietools voor zzp'ers en kleine ondernemers.",
    intro:
      "Boekhoudsoftware helpt ondernemers grip houden op facturen, bonnetjes, btw en financieel overzicht.",
    explanation:
      "Kies boekhoudsoftware die past bij je manier van werken. Voor sommige ondernemers is een simpele facturatietool voldoende, terwijl anderen baat hebben bij bankkoppelingen, btw-overzichten en samenwerking met een boekhouder.",
    faq: [
      {
        question: "Heb ik als zzp'er boekhoudsoftware nodig?",
        answer:
          "Niet verplicht, maar het kan veel overzicht geven en fouten verminderen bij facturen, bonnetjes en btw.",
      },
      {
        question: "Waar let ik op bij boekhoudsoftware?",
        answer:
          "Let op bankkoppelingen, facturen, btw, support, exportmogelijkheden en samenwerking met je boekhouder.",
      },
      {
        question: "Geeft WZN Production boekhoudadvies?",
        answer:
          "Nee. WZN Production kan wel helpen met websites, tools en dashboards. Voor fiscaal advies is een boekhouder de juiste partij.",
      },
    ],
  },
  {
    slug: "social-media",
    name: "Social media tools",
    shortName: "Social media",
    seoTitle: "Social media tools voor ondernemers vergelijken",
    metaDescription:
      "Vind social media planningstools, contentkalenders en link-in-bio tools voor ondernemers.",
    intro:
      "Social media tools helpen je om content vooruit te plannen, campagnes te ordenen en bezoekers beter door te sturen.",
    explanation:
      "Voor ondernemers is consistentie vaak belangrijker dan veel posten. Een planningstool of contentkalender maakt het makkelijker om vooruit te werken en acties, posts en visuals op elkaar af te stemmen.",
    faq: [
      {
        question: "Welke social media tool heb ik nodig?",
        answer:
          "Voor planning kies je een planner, voor overzicht een contentkalender en voor profielverkeer een link-in-bio tool.",
      },
      {
        question: "Vervangt een planningstool mijn contentstrategie?",
        answer:
          "Nee. De tool helpt met uitvoering, maar je hebt nog steeds duidelijke onderwerpen, visuals en CTA's nodig.",
      },
      {
        question: "Kan WZN Production social content maken?",
        answer:
          "Ja. WZN Production maakt social posts, promotievisuals, banners en campagnecontent.",
      },
    ],
  },
  {
    slug: "cursussen",
    name: "Cursussen & training",
    shortName: "Cursussen",
    seoTitle: "Cursussen en training voor ondernemers",
    metaDescription:
      "Bekijk cursussen, online trainingen en cursusplatformen voor starters, zzp'ers en ondernemers.",
    intro:
      "Cursussen kunnen helpen wanneer je zelf beter wilt worden in marketing, AI, content of digitale verkoop.",
    explanation:
      "Kies een cursus die past bij jouw fase en doel. Let op praktische toepasbaarheid, actuele inhoud en duidelijke uitleg. Vermijd trainingen die grote resultaten beloven zonder heldere onderbouwing.",
    faq: [
      {
        question: "Hoe kies ik een goede ondernemerscursus?",
        answer:
          "Kijk naar onderwerp, niveau, voorbeelden, actualiteit en of de cursus concrete opdrachten biedt.",
      },
      {
        question: "Is een cursus genoeg om mijn marketing te verbeteren?",
        answer:
          "Een cursus helpt met kennis, maar uitvoering, testen en goede content blijven nodig.",
      },
      {
        question: "Kan WZN Production helpen na een cursus?",
        answer:
          "Ja. WZN Production kan helpen om je idee om te zetten naar een website, webapp, AI workflow of promotiecontent.",
      },
    ],
  },
  {
    slug: "email-marketing",
    name: "E-mail marketing",
    shortName: "E-mail",
    seoTitle: "E-mail marketing tools voor kleine ondernemers",
    metaDescription:
      "Vergelijk e-mail marketing tools voor nieuwsbrieven, lead magnets, formulieren en automatische opvolging.",
    intro:
      "E-mail marketing helpt je contact houden met mensen die al interesse hebben in je bedrijf.",
    explanation:
      "Een goede e-maillijst is van jezelf en minder afhankelijk van social media. Begin eenvoudig: een inschrijfformulier, duidelijke toestemming, een nuttige mail en een logische vervolgstap naar contact of aankoop.",
    faq: [
      {
        question: "Waarom is e-mail marketing nuttig?",
        answer:
          "Omdat je mensen kunt opvolgen die al interesse tonen, bijvoorbeeld na een download, actie of websitebezoek.",
      },
      {
        question: "Moet ik rekening houden met privacy?",
        answer:
          "Ja. Vraag duidelijke toestemming, leg uit wat iemand ontvangt en bied een afmeldmogelijkheid.",
      },
      {
        question: "Kan WZN Production een landingspagina of mailflow maken?",
        answer:
          "Ja. WZN Production kan helpen met landingspagina's, formulieren, content en praktische automatisering.",
      },
    ],
  },
  {
    slug: "ondernemersdiensten",
    name: "Ondernemersdiensten",
    shortName: "Diensten",
    seoTitle: "Ondernemersdiensten voor starters, zzp en kleine bedrijven",
    metaDescription:
      "Bekijk praktische diensten voor ondernemers, zoals startersadvies, juridische documenten en zakelijke checks.",
    intro:
      "Ondernemersdiensten helpen bij praktische keuzes rond starten, risico's, documenten en bedrijfsvoering.",
    explanation:
      "Niet alles hoeft software te zijn. Soms heb je een dienst nodig die meedenkt over documenten, risico's, administratie of eerste stappen. Controleer altijd wat inbegrepen is en wanneer specialistisch advies nodig is.",
    faq: [
      {
        question: "Wanneer kies ik voor een ondernemersdienst?",
        answer:
          "Als je hulp nodig hebt bij praktische keuzes, documenten, risico's of stappen die je niet zelf wilt uitzoeken.",
      },
      {
        question: "Zijn deze diensten juridisch of fiscaal advies?",
        answer:
          "Niet automatisch. Controleer per aanbieder wat de dienst precies inhoudt en vraag specialistisch advies bij complexe situaties.",
      },
      {
        question: "Waar kan WZN Production bij helpen?",
        answer:
          "WZN Production helpt met websites, webapps, AI tools, automatisering, promotiecontent en visuals.",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}
