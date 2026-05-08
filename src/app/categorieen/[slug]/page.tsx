import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AffiliateNotice } from "@/components/AffiliateNotice";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { ToolExplorer } from "@/components/ToolExplorer";
import { WznCta } from "@/components/WznCta";
import { createMetadata } from "@/lib/site";
import { categories, getCategoryBySlug } from "../../../../data/categories";
import { getToolsByCategory, type ToolCategory } from "../../../../data/tools";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return createMetadata({
      title: "Categorie niet gevonden",
      description: "Deze categorie bestaat niet.",
      path: `/categorieen/${slug}`,
    });
  }

  return createMetadata({
    title: category.seoTitle,
    description: category.metaDescription,
    path: `/categorieen/${category.slug}`,
    keywords: [category.name, "ondernemerstools", "affiliate deals"],
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryTools = getToolsByCategory(category.slug as ToolCategory);

  return (
    <>
      <PageHero title={category.seoTitle} description={category.intro} />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Waarvoor gebruik je {category.name.toLowerCase()}?
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {category.explanation}
          </p>
          <div className="mt-6">
            <WznCta compact />
          </div>
        </div>

        <ToolExplorer
          tools={categoryTools}
          title={`Vergelijk ${category.name.toLowerCase()}`}
        />
      </section>

      <Faq items={category.faq} />

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <AffiliateNotice />
      </section>
    </>
  );
}
