import Link from "next/link";
import { CheckCircle2, CircleAlert } from "lucide-react";
import { categories } from "../../data/categories";
import type { Tool } from "../../data/tools";
import { AffiliateButton } from "./AffiliateButton";
import { siteConfig, withWznUtm } from "@/lib/site";

function categoryName(slug: string) {
  return categories.find((category) => category.slug === slug)?.name || slug;
}

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
        <Link
          href={`/categorieen/${tool.category}`}
          className="rounded-md bg-slate-100 px-2.5 py-1 hover:bg-slate-200"
        >
          {categoryName(tool.category)}
        </Link>
        <span className="rounded-md bg-[#e9fbf5] px-2.5 py-1 text-[#0b6654]">
          {tool.priceLabel}
        </span>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold tracking-tight text-slate-950">
          <Link href={`/tools/${tool.slug}`} className="hover:text-[#0e7c66]">
            {tool.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {tool.shortDescription}
        </p>
      </div>

      <div className="mt-5 grid gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Voordelen
          </p>
          <ul className="mt-2 grid gap-2 text-sm text-slate-700">
            {tool.benefits.slice(0, 3).map((benefit) => (
              <li key={benefit} className="flex gap-2">
                <CheckCircle2
                  aria-hidden="true"
                  size={16}
                  className="mt-0.5 shrink-0 text-[#0e7c66]"
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Geschikt voor
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {tool.targetAudience.slice(0, 4).map((audience) => (
              <span
                key={audience}
                className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </div>

      {tool.attentionPoints[0] ? (
        <p className="mt-5 flex gap-2 rounded-lg bg-slate-50 p-3 text-xs leading-5 text-slate-600">
          <CircleAlert
            aria-hidden="true"
            size={15}
            className="mt-0.5 shrink-0 text-slate-500"
          />
          {tool.attentionPoints[0]}
        </p>
      ) : null}

      <div className="mt-auto flex flex-col gap-3 pt-5 sm:flex-row">
        <AffiliateButton
          affiliateUrl={tool.affiliateUrl}
          itemName={tool.name}
          location="tool-card"
          className="sm:flex-1"
        />
        <a
          href={`${withWznUtm(siteConfig.wznUrl, "tool_card_help")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-[#0e7c66] hover:text-[#0e7c66] sm:flex-1"
        >
          Laat WZN je helpen
        </a>
      </div>
    </article>
  );
}
