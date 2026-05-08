import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { AffiliateNotice } from "@/components/AffiliateNotice";
import { Faq } from "@/components/Faq";
import { ToolCard } from "@/components/ToolCard";
import { WznCta } from "@/components/WznCta";
import { createMetadata } from "@/lib/site";
import { blogPosts, getBlogPostBySlug } from "../../../../data/blog-posts";
import { categories } from "../../../../data/categories";
import { getToolsByCategory } from "../../../../data/tools";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

function categoryName(slug: string) {
  return categories.find((category) => category.slug === slug)?.name || slug;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return createMetadata({
      title: "Blogartikel niet gevonden",
      description: "Dit blogartikel bestaat niet.",
      path: `/blog/${slug}`,
    });
  }

  return createMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    keywords: [categoryName(post.category), "ondernemers", "tools"],
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedTools = getToolsByCategory(post.category).slice(0, 3);

  return (
    <>
      <article>
        <header className="bg-[#07111f] text-white">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#7ce7cb] hover:text-white"
            >
              <ArrowLeft aria-hidden="true" size={16} />
              Terug naar blog
            </Link>
            <p className="mt-8 text-sm font-semibold text-[#7ce7cb]">
              {categoryName(post.category)} - {post.readTime}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
              {post.excerpt}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            {post.sections.map((section) => (
              <section key={section.heading} className="mt-10 first:mt-0">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {section.heading}
                </h2>
                <div className="mt-4 grid gap-4 text-base leading-7 text-slate-700">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>

      <Faq items={post.faq} />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Relevante tools bij dit onderwerp
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Bekijk opties uit dezelfde categorie en controleer zelf welke
            oplossing past bij je bedrijf, budget en werkwijze.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {relatedTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <WznCta />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <AffiliateNotice />
      </section>
    </>
  );
}
