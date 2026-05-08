import { CategoryGrid } from "@/components/CategoryGrid";
import { PageHero } from "@/components/PageHero";
import { WznCta } from "@/components/WznCta";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Categorieën",
  description:
    "Bekijk alle categorieën met tools, diensten en deals voor ondernemers: AI, hosting, drukwerk, boekhouding, social media, cursussen, e-mail marketing en diensten.",
  path: "/categorieen",
});

export default function CategoriesPage() {
  return (
    <>
      <PageHero
        title="Categorieën voor tools en ondernemersdeals"
        description="Kies een categorie en vergelijk praktische opties voor je bedrijf. Elke pagina bevat uitleg, filters, toolcards en veelgestelde vragen."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <CategoryGrid />
      </section>
      <WznCta />
    </>
  );
}
