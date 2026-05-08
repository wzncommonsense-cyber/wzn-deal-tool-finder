import { PageHero } from "@/components/PageHero";
import { WznCta } from "@/components/WznCta";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Affiliate disclaimer",
  description:
    "Duidelijke uitleg over affiliate links op WZN Deal & Tool Finder.",
  path: "/affiliate-disclaimer",
});

export default function AffiliateDisclaimerPage() {
  return (
    <>
      <PageHero
        title="Affiliate disclaimer"
        description="Transparantie over affiliate links en commissies op deze website."
      />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-800">
            Sommige links op deze website zijn affiliate links. Als je via zo&apos;n
            link iets koopt of aanvraagt, kan WZN Productions een commissie
            ontvangen. Jij betaalt hierdoor niets extra. Wij proberen alleen
            tools en diensten te tonen die relevant zijn voor ondernemers.
          </p>
          <div className="mt-6 grid gap-4 text-sm leading-6 text-slate-600">
            <p>
              Affiliate links worden handmatig beheerd. Zolang er nog geen
              passende of goedgekeurde link beschikbaar is, blijft de knop op
              &quot;Binnenkort beschikbaar&quot; staan.
            </p>
            <p>
              Een vermelding op deze website betekent niet automatisch dat er een
              officiele samenwerking, beoordeling of garantie bestaat. Controleer
              voorwaarden, prijzen en functies altijd zelf bij de aanbieder.
            </p>
          </div>
        </div>
      </section>

      <WznCta />
    </>
  );
}
