# Daisycon affiliate links toevoegen

De eerste versie gebruikt handmatige affiliate links via `data/tools.ts`. Er is nog geen Daisycon API nodig.

## Stappen

1. Log in bij Daisycon als Publisher.
2. Ga naar `Campagnes`.
3. Meld je aan voor relevante campagnes.
4. Wacht tot de campagne is goedgekeurd.
5. Ga na goedkeuring naar promotiemateriaal of deeplinks.
6. Maak per product of dienst een deeplink.
7. Kopieer de trackinglink.
8. Open `data/tools.ts`.
9. Plak de trackinglink bij `affiliateUrl`.
10. Test lokaal of de knop opent.

Voorbeeld:

```ts
{
  slug: "website-hosting-starter",
  affiliateUrl: "https://jouw-daisycon-trackinglink.nl/...",
}
```

## Belangrijk

- Laat `affiliateUrl` op `"#"` staan zolang een campagne nog niet is goedgekeurd.
- De knop toont dan automatisch `Binnenkort beschikbaar`.
- Verander de bestandsnaam of datastructuur alleen als je ook de componenten aanpast.
- Zet nooit geheime keys in frontend code.
- API keys zijn niet nodig voor deze eerste versie.
- Gebruik geen nepclaims, verzonnen partnerships of reviews.

## Waar staat tracking?

De knop gebruikt `window.open(affiliateUrl)` in `src/components/AffiliateButton.tsx`.

In `src/lib/tracking.ts` staat een korte helper waar later Google Analytics, Plausible of server-side tracking aan gekoppeld kan worden.
