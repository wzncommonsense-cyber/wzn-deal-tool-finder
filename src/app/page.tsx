import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { AffiliateNotice } from "@/components/AffiliateNotice";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ToolCard } from "@/components/ToolCard";
import { WznCta } from "@/components/WznCta";
import { createMetadata } from "@/lib/site";
import { categories } from "../../data/categories";
import { getFeaturedTools } from "../../data/tools";

export const metadata = createMetadata({
  title: "Vind de beste tools en deals voor jouw bedrijf",
  description:
    "Vergelijk praktische tools, diensten en deals voor kleine ondernemers, starters, zzp'ers en lokale bedrijven.",
  path: "/",
  keywords: [
    "affiliate tools",
    "ondernemerstools",
    "AI tools",
    "website hosting",
    "WZN Production",
  ],
});

export default function Home() {
  const featuredTools = getFeaturedTools(6);

  return (
    <>
      <section className="bg-[#07111f] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:px-8 lg:py-16">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Vind de beste tools en deals voor jouw bedrijf
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              WZN Deal & Tool Finder helpt kleine ondernemers, starters,
              zzp&apos;ers en lokale bedrijven sneller passende software, diensten
              en praktische aanbiedingen vinden.
            </p>

            <form
              action="/deals"
              className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-white p-3 shadow-2xl shadow-black/20 sm:grid-cols-[1fr_auto]"
            >
              <label className="relative block">
                <span className="sr-only">Zoek tools of deals</span>
                <Search
                  aria-hidden="true"
                  size={19}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  name="q"
                  placeholder="Zoek bijvoorbeeld AI, hosting, drukwerk of boekhouding"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-[#0e7c66] focus:bg-white focus:ring-2 focus:ring-[#0e7c66]/20"
                />
              </label>
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0e7c66] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b6654]"
              >
                Zoek deals
                <ArrowRight aria-hidden="true" size={17} />
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-300">
              {categories.slice(0, 5).map((category) => (
                <Link
                  key={category.slug}
                  href={`/categorieen/${category.slug}`}
                  className="rounded-lg border border-white/10 px-3 py-2 transition hover:bg-white/10 hover:text-white"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[#2bd4a7]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
              <Image
                src="/wzn-tool-finder-hero.png"
                alt="Zakelijke toolfinder interface op een laptop"
                width={1200}
                height={800}
                priority
                sizes="(min-width: 1024px) 562px, calc(100vw - 32px)"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Tools, diensten en deals voor ondernemers
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              De site is opgezet als praktische vergelijker. Je vindt hier
              categorieen zoals AI-tools, hosting, drukwerk, boekhouding,
              social media planning, cursussen, e-mail marketing en
              ondernemersdiensten. De vermeldingen zijn bedoeld als startpunt:
              controleer altijd zelf of een tool, dienst of prijsmodel past bij
              jouw bedrijf.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "Centraal beheerde affiliate links",
              "Duidelijke kaarten met voordelen en aandachtspunten",
              "SEO-vriendelijke pagina's per categorie en tool",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold leading-6 text-slate-950">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Populaire categorieen
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Start bij de categorie die past bij je vraag of bedrijfsfase.
            </p>
          </div>
          <Link
            href="/categorieen"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#0e7c66] hover:text-[#0b6654]"
          >
            Bekijk alle categorieen
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <CategoryGrid />
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                Uitgelichte deals en tools
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Een selectie van praktische opties voor ondernemers. Als een
                deal nog niet beschikbaar is, staat dat duidelijk op de knop.
              </p>
            </div>
            <Link
              href="/deals"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#0e7c66] hover:text-[#0b6654]"
            >
              Bekijk alle deals
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Waarom via WZN Deal Finder?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              De website is gemaakt voor ondernemers die snel willen vergelijken
              zonder rommelige affiliate-overzichten. Elke kaart benoemt het
              doel, de doelgroep, voordelen en aandachtspunten.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Praktisch opgezet",
                text: "Je ziet meteen waarvoor een tool bedoeld is en waar je op moet letten.",
              },
              {
                title: "Eerlijk over affiliate links",
                text: "De disclosure staat zichtbaar op de site en er worden geen nepclaims of verzonnen reviews gebruikt.",
              },
              {
                title: "Geen onduidelijke samenwerkingen",
                text: "Een vermelding betekent niet automatisch dat er een officiele samenwerking bestaat.",
              },
              {
                title: "SEO-vriendelijke structuur",
                text: "Categorieen, toolpagina's en blogs hebben eigen metadata en duidelijke Nederlandse content.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WznCta />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <AffiliateNotice />
      </section>
    </>
  );
}
