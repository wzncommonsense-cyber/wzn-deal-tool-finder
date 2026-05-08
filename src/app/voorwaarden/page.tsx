import { PageHero } from "@/components/PageHero";
import { WznCta } from "@/components/WznCta";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Voorwaarden",
  description:
    "Voorwaarden en gebruiksinformatie voor WZN Deal & Tool Finder.",
  path: "/voorwaarden",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Voorwaarden"
        description="Gebruik deze website als praktisch startpunt. Controleer keuzes altijd zelf bij de aanbieder."
      />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="grid gap-8">
            <section>
              <h2 className="text-xl font-semibold text-slate-950">
                Gebruik van de informatie
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                WZN Deal & Tool Finder geeft algemene informatie over tools,
                diensten en deals voor ondernemers. De informatie is bedoeld als
                praktische oriëntatie en is geen persoonlijk advies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-950">
                Prijzen en beschikbaarheid
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Prijzen, functies en voorwaarden kunnen veranderen. Controleer
                altijd de actuele informatie bij de aanbieder voordat je iets
                koopt, aanvraagt of afsluit.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-950">
                Affiliate links
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Sommige links kunnen affiliate links zijn. Als je via zo&apos;n link
                iets koopt of aanvraagt, kan WZN Productions een commissie
                ontvangen. Jij betaalt hierdoor niets extra.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-950">
                Geen garanties
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Een tool of dienst kan nuttig zijn, maar resultaat hangt af van
                je bedrijf, uitvoering, budget en situatie. WZN Deal & Tool
                Finder doet geen beloftes over omzet, groei of gegarandeerd
                resultaat.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-950">Contact</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Voor vragen kun je mailen naar{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-[#0e7c66] hover:text-[#0b6654]"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>

      <WznCta />
    </>
  );
}
