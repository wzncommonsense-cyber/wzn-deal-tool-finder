import { AffiliateNotice } from "@/components/AffiliateNotice";
import { PageHero } from "@/components/PageHero";
import { ToolExplorer } from "@/components/ToolExplorer";
import { WznCta } from "@/components/WznCta";
import { createMetadata } from "@/lib/site";
import { tools } from "../../../data/tools";

type DealsPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export const metadata = createMetadata({
  title: "Alle tools en deals",
  description:
    "Zoek en filter tools, diensten en deals voor ondernemers in een overzicht.",
  path: "/deals",
});

export default async function DealsPage({ searchParams }: DealsPageProps) {
  const { q } = await searchParams;

  return (
    <>
      <PageHero
        title="Alle tools en deals"
        description="Zoek op onderwerp, filter op prijsmodel, doelgroep, type en categorie. Zo vind je sneller opties die passen bij je bedrijf, fase en manier van werken."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ToolExplorer
          tools={tools}
          initialSearch={q || ""}
          showCategoryFilter
          title="Zoek in alle tools en deals"
        />
      </section>

      <WznCta />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <AffiliateNotice />
      </section>
    </>
  );
}
