import Link from "next/link";
import {
  Bot,
  Building2,
  Calculator,
  GraduationCap,
  Mail,
  Megaphone,
  Printer,
  Server,
  type LucideIcon,
} from "lucide-react";
import { categories } from "../../data/categories";
import type { ToolCategory } from "../../data/tools";

const iconMap: Record<ToolCategory, LucideIcon> = {
  "ai-tools": Bot,
  "website-hosting": Server,
  drukwerk: Printer,
  boekhouding: Calculator,
  "social-media": Megaphone,
  cursussen: GraduationCap,
  "email-marketing": Mail,
  ondernemersdiensten: Building2,
};

export function CategoryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((category) => {
        const Icon = iconMap[category.slug];

        return (
          <Link
            key={category.slug}
            href={`/categorieen/${category.slug}`}
            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#0e7c66]/40 hover:shadow-md"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#e9fbf5] text-[#0e7c66]">
              <Icon aria-hidden="true" size={22} />
            </span>
            <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-950 group-hover:text-[#0e7c66]">
              {category.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {category.intro}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
