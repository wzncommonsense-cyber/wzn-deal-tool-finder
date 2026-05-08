# WZN Deal & Tool Finder

Professionele affiliate/lead-gen website voor kleine ondernemers, starters, zzp'ers en lokale bedrijven.

De site helpt bezoekers om praktische tools, diensten en deals te vinden voor AI, hosting, drukwerk, boekhouding, social media, cursussen, e-mail marketing en ondernemersdiensten.

## Installatie

```bash
npm install
```

## Lokaal draaien

```bash
npm run dev
```

Open daarna:

```text
http://localhost:3000
```

## Productiebuild

```bash
npm run build
```

## Affiliate links beheren

Alle tools en affiliate links staan in:

```text
data/tools.ts
```

Zolang er nog geen goedgekeurde Daisycon link is, blijft `affiliateUrl` op `"#"` staan. De knop toont dan automatisch `Binnenkort beschikbaar`.

Voor Daisycon stappen staat er een aparte handleiding:

```text
README-AFFILIATE-LINKS.md
```

## Nieuwe tool toevoegen

Voeg een nieuw object toe aan `tools` in `data/tools.ts`.

Belangrijke velden:

- `slug`: unieke URL-naam
- `name`: naam van de tool of deal
- `category`: een bestaande categorie
- `shortDescription`: korte kaarttekst
- `description`: langere detailtekst
- `targetAudience`: doelgroepen
- `benefits`: voordelen
- `attentionPoints`: aandachtspunten
- `priceLabel`: zichtbare prijsindicatie
- `priceModel`: filterwaarde
- `type`: filterwaarde
- `affiliateUrl`: Daisycon deeplink of `"#"`
- `featured`: tonen op de homepage

## Env

Maak lokaal eventueel een `.env.local` op basis van `.env.example`.

```env
NEXT_PUBLIC_SITE_URL=https://jouwdomein.nl
```

Voor lokale ontwikkeling:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Deze variabele wordt gebruikt voor canonical URLs, Open Graph URLs, `robots.ts` en `sitemap.ts`.

## Deploy naar Vercel

1. Push het project naar GitHub.
2. Maak een nieuw project aan in Vercel.
3. Kies dit repository.
4. Zet de environment variable:

```text
NEXT_PUBLIC_SITE_URL=https://jouwdomein.nl
```

5. Build command:

```text
npm run build
```

6. Deploy.

## Pagina's

- `/`
- `/categorieen`
- `/categorieen/ai-tools`
- `/categorieen/website-hosting`
- `/categorieen/drukwerk`
- `/categorieen/boekhouding`
- `/categorieen/social-media`
- `/categorieen/cursussen`
- `/categorieen/email-marketing`
- `/categorieen/ondernemersdiensten`
- `/deals`
- `/tools/[slug]`
- `/blog`
- `/blog/beste-ai-tools-voor-kleine-ondernemers`
- `/blog/beste-website-hosting-voor-starters`
- `/blog/visitekaartjes-en-flyers-laten-drukken`
- `/blog/beste-boekhoudprogramma-voor-zzp`
- `/blog/social-media-tools-voor-ondernemers`
- `/over`
- `/contact`
- `/affiliate-disclaimer`
- `/privacy`
- `/voorwaarden`

## WZN Production

De site verwijst op meerdere plekken naar WZN Production voor websites, webapps, AI tools, automatisering, promotiecontent en visuals.

Contact:

```text
info@wznproduction.nl
https://www.wznproduction.nl
```
