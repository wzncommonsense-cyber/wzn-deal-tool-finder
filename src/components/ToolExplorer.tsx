"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { categories } from "../../data/categories";
import {
  priceModelLabels,
  typeLabels,
  type Tool,
  type ToolCategory,
  type PriceModel,
  type ToolType,
} from "../../data/tools";
import { ToolCard } from "./ToolCard";

type ToolExplorerProps = {
  tools: Tool[];
  initialSearch?: string;
  showCategoryFilter?: boolean;
  title?: string;
};

export function ToolExplorer({
  tools,
  initialSearch = "",
  showCategoryFilter = false,
  title = "Zoek en filter tools",
}: ToolExplorerProps) {
  const [search, setSearch] = useState(initialSearch);
  const [priceModel, setPriceModel] = useState<PriceModel | "all">("all");
  const [audience, setAudience] = useState("all");
  const [type, setType] = useState<ToolType | "all">("all");
  const [category, setCategory] = useState<ToolCategory | "all">("all");

  const audiences = useMemo(
    () => Array.from(new Set(tools.flatMap((tool) => tool.targetAudience))).sort(),
    [tools],
  );

  const filteredTools = useMemo(() => {
    const query = search.trim().toLowerCase();

    return tools.filter((tool) => {
      const matchesSearch =
        !query ||
        [tool.name, tool.shortDescription, tool.description, tool.category]
          .join(" ")
          .toLowerCase()
          .includes(query);
      const matchesPrice = priceModel === "all" || tool.priceModel === priceModel;
      const matchesAudience =
        audience === "all" || tool.targetAudience.includes(audience);
      const matchesType = type === "all" || tool.type === type;
      const matchesCategory = category === "all" || tool.category === category;

      return (
        matchesSearch &&
        matchesPrice &&
        matchesAudience &&
        matchesType &&
        matchesCategory
      );
    });
  }, [audience, category, priceModel, search, tools, type]);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-950">
            {title}
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Filter op prijsmodel, doelgroep en type. Affiliate links kun je later
            centraal toevoegen.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 text-sm font-medium text-[#0e7c66]">
          <SlidersHorizontal aria-hidden="true" size={17} />
          {filteredTools.length} resultaten
        </div>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <label className="relative block">
          <span className="sr-only">Zoeken</span>
          <Search
            aria-hidden="true"
            size={18}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Zoek op tool, dienst of onderwerp"
            className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0e7c66] focus:bg-white focus:ring-2 focus:ring-[#0e7c66]/20"
          />
        </label>

        <label>
          <span className="sr-only">Prijsmodel</span>
          <select
            value={priceModel}
            onChange={(event) =>
              setPriceModel(event.target.value as PriceModel | "all")
            }
            className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition focus:border-[#0e7c66] focus:bg-white focus:ring-2 focus:ring-[#0e7c66]/20"
          >
            <option value="all">Alle prijsmodellen</option>
            {Object.entries(priceModelLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className="sr-only">Doelgroep</span>
          <select
            value={audience}
            onChange={(event) => setAudience(event.target.value)}
            className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition focus:border-[#0e7c66] focus:bg-white focus:ring-2 focus:ring-[#0e7c66]/20"
          >
            <option value="all">Alle doelgroepen</option>
            {audiences.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className="sr-only">Type</span>
          <select
            value={type}
            onChange={(event) => setType(event.target.value as ToolType | "all")}
            className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition focus:border-[#0e7c66] focus:bg-white focus:ring-2 focus:ring-[#0e7c66]/20"
          >
            <option value="all">Alle types</option>
            {Object.entries(typeLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {showCategoryFilter ? (
        <div className="mt-3">
          <label>
            <span className="sr-only">Categorie</span>
            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value as ToolCategory | "all")
              }
              className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition focus:border-[#0e7c66] focus:bg-white focus:ring-2 focus:ring-[#0e7c66]/20 sm:max-w-sm"
            >
              <option value="all">Alle categorieen</option>
              {categories.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      ) : null}

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      {filteredTools.length === 0 ? (
        <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
          <p className="font-semibold text-slate-950">Geen resultaten gevonden.</p>
          <p className="mt-2 text-sm text-slate-600">
            Pas je zoekterm of filters aan. Je kunt ook WZN Production mailen als
            je een specifieke tool zoekt.
          </p>
        </div>
      ) : null}
    </section>
  );
}
