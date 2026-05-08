import { AffiliateNotice } from "@/components/AffiliateNotice";
import { PageHero } from "@/components/PageHero";
import { WznCta } from "@/components/WznCta";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Over WZN Deal & Tool Finder",
  description:
    "Lees hoe WZN Deal & Tool Finder ondernemers helpt met het vergelijken van tools, software en diensten.",
  path: "/over",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Over WZN Deal & Tool Finder"
        description="Een praktische vergelijkingssite voor ondernemers die sneller goede tools, software en diensten willen vinden."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Wat deze site doet
          </h2>
          <div className="mt-5 grid gap-4 text-base leading-7 text-slate-700">
            <p>
              WZN Deal & Tool Finder helpt ondernemers snel betrouwbare tools,
              software en diensten te vergelijken. De site is bedoeld voor
              kleine ondernemers, starters, zzp&apos;ers en lokale bedrijven die
              praktisch willen kiezen.
            </p>
            <p>
              Sommige links zijn affiliate links. Dat kost de bezoeker niets
              extra, maar kan WZN Productions een commissie opleveren. De
              bedoeling is om alleen tools en diensten te tonen die relevant
              zijn voor ondernemers.
            </p>
            <p>
              WZN Production is zichtbaar op de site omdat veel ondernemers niet
              alleen een tool zoeken, maar ook hulp nodig hebben met uitvoering:
              een website, AI workflow, social content, automatisering of
              promotiemateriaal.
            </p>
          </div>
        </div>

        <div className="grid content-start gap-5">
          <WznCta compact />
          <AffiliateNotice />
        </div>
      </section>
    </>
  );
}
