import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, withWznUtm } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/categorieen", label: "Categorieen" },
  { href: "/deals", label: "Deals" },
  { href: "/blog", label: "Blog" },
  { href: "/over", label: "Over" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/95 text-white shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="WZN Deal & Tool Finder home">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-black text-[#07111f]">
            WZN
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold tracking-wide">
              {siteConfig.name}
            </span>
            <span className="block text-xs text-slate-300">
              Tools, diensten en deals voor ondernemers
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 overflow-x-auto pb-1 text-sm text-slate-200 lg:pb-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-md px-3 py-2 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={withWznUtm()}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[#2bd4a7] px-4 py-2 text-sm font-semibold text-[#07111f] transition hover:bg-[#7ce7cb]"
        >
          Bekijk WZN Productions
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
    </header>
  );
}
