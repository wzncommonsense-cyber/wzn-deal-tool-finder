import { PageHero } from "@/components/PageHero";
import { WznCta } from "@/components/WznCta";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Privacy",
  description:
    "Privacy-informatie voor bezoekers van WZN Deal & Tool Finder.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy"
        description="Korte privacy-informatie voor bezoekers van WZN Deal & Tool Finder."
      />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="grid gap-8">
            <section>
              <h2 className="text-xl font-semibold text-slate-950">
                Welke gegevens verwerken we?
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Deze eerste versie heeft geen login, database of actieve
                gebruikersaccounts. Als je contact opneemt via e-mail, verwerken
                we de gegevens die je zelf meestuurt, zoals naam, e-mailadres en
                je bericht.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-950">
                Affiliate links
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Wanneer je later op een affiliate link klikt, kan de aanbieder of
                het affiliate netwerk tracking gebruiken om de verwijzing te
                meten. Controleer ook de privacyvoorwaarden van de aanbieder.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-950">
                Analytics en cookies
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Op dit moment is er geen analytics-platform verplicht ingebouwd.
                Als later Google Analytics, Plausible of vergelijkbare tracking
                wordt toegevoegd, moet dit netjes worden verwerkt in deze
                privacytekst en cookie-informatie.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-slate-950">Contact</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Voor vragen over privacy kun je mailen naar{" "}
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
