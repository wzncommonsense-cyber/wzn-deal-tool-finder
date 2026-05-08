import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2, CircleAlert } from "lucide-react";
import { AffiliateButton } from "@/components/AffiliateButton";
import { AffiliateNotice } from "@/components/AffiliateNotice";
import { Faq } from "@/components/Faq";
import { ToolCard } from "@/components/ToolCard";
import { WznCta } from "@/components/WznCta";
import { createMetadata } from "@/lib/site";
import { categories } from "../../../../data/categories";
import {
  getToolBySlug,
  getToolsByCategory,
  tools,
  type Tool,
} from "../../../../data/tools";

type ToolPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

function getCategoryName(tool: Tool) {
  return categories.find((category) => category.slug === tool.category)?.name || tool.category;
}

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return createMetadata({
      title: "Tool niet gevonden",
      description: "Deze tool bestaat niet.",
      path: `/tools/${slug}`,
    });
  }

  return createMetadata({
    title: `${tool.name} - uitleg, voordelen en aandachtspunten`,
    description: tool.shortDescription,
    path: `/tools/${tool.slug}`,
    keywords: [tool.name, getCategoryName(tool), "affiliate tool", "ondernemers"],
  });
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const categoryName = getCategoryName(tool);
  const relatedTools = getToolsByCategory(tool.category)
    .filter((item) => item.slug !== tool.slug)
    .slice(0, 2);
  const faq = [
    {
      question: `Voor wie is ${tool.name} geschikt?`,
      answer: `${tool.name} is vooral geschikt voor ${tool.targetAudience.join(
        ", ",
      )}. Kijk altijd of de functies passen bij jouw bedrijf en werkwijze.`,
    },
    {
      question: "Waarom staat de knop soms op Binnenkort beschikbaar?",
      answer:
        "Dan is er nog geen openbare deal- of aanvraaglink toegevoegd. Zodra een passende link beschikbaar is, wordt deze handmatig gecontroleerd en toegevoegd.",
    },
    {
      question: "Kan WZN Production helpen met selectie of uitvoering?",
      answer:
        "Ja. WZN Production kan helpen met websites, webapps, AI tools, automatisering, promotiecontent en praktische koppeling van tools aan je proces.",
    },
  ];

  return (
    <>
      <section className="bg-[#07111f] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href={`/categorieen/${tool.category}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7ce7cb] hover:text-white"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Terug naar {categoryName}
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.6fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-[#7ce7cb]">{categoryName}</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                {tool.name}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                {tool.description}
              </p>
            </div>
            <aside className="rounded-2xl border border-white/10 bg-white p-5 text-slate-950 shadow-2xl shadow-black/20">
              <p className="text-sm font-semibold text-slate-500">Prijsindicatie</p>
              <p className="mt-1 text-2xl font-semibold">{tool.priceLabel}</p>
              <div className="mt-5">
                <AffiliateButton
                  affiliateUrl={tool.affiliateUrl}
                  itemName={tool.name}
                  label="Bekijk aanbieder"
                  location="tool-detail-hero"
                  className="w-full"
                />
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">
                Staat de knop op &quot;Binnenkort beschikbaar&quot;? Dan is er nog geen
                deal- of aanvraaglink beschikbaar.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.42fr] lg:px-8">
        <div className="grid gap-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Voor wie geschikt
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {tool.targetAudience.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Voordelen
              </h2>
              <ul className="mt-5 grid gap-3">
                {tool.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <CheckCircle2
                      aria-hidden="true"
                      size={18}
                      className="mt-1 shrink-0 text-[#0e7c66]"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Aandachtspunten
              </h2>
              <ul className="mt-5 grid gap-3">
                {tool.attentionPoints.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <CircleAlert
                      aria-hidden="true"
                      size={18}
                      className="mt-1 shrink-0 text-amber-600"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <AffiliateNotice />
        </div>

        <aside className="grid content-start gap-5">
          <WznCta compact />
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-950">
              Hulp nodig met je website, AI of social media?
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              WZN Production kan helpen om de juiste tools praktisch te gebruiken
              binnen je website, contentflow of automatisering.
            </p>
          </div>
        </aside>
      </section>

      <Faq items={faq} />

      {relatedTools.length > 0 ? (
        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              Meer in {categoryName}
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {relatedTools.map((item) => (
              <ToolCard key={item.slug} tool={item} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
