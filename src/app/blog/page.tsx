import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { WznCta } from "@/components/WznCta";
import { createMetadata } from "@/lib/site";
import { categories } from "../../../data/categories";
import { blogPosts } from "../../../data/blog-posts";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Lees praktische artikelen over AI-tools, hosting, drukwerk, boekhouding en social media voor ondernemers.",
  path: "/blog",
});

function categoryName(slug: string) {
  return categories.find((category) => category.slug === slug)?.name || slug;
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog voor ondernemers"
        description="Praktische artikelen over tools, software, promotie en digitale keuzes voor starters, zzp'ers en kleine bedrijven."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-[#0e7c66]">
                {categoryName(post.category)} - {post.readTime}
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
                <Link href={`/blog/${post.slug}`} className="hover:text-[#0e7c66]">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#0e7c66] hover:text-[#0b6654]"
              >
                Lees artikel
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <WznCta />
    </>
  );
}
