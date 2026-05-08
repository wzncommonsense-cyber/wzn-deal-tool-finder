import Link from "next/link";
import { Mail } from "lucide-react";
import { siteConfig, withWznUtm } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#07111f] text-sm font-black text-white">
              WZN
            </span>
            <div>
              <p className="font-semibold text-slate-950">{siteConfig.name}</p>
              <p className="text-sm text-slate-600">Powered by WZN Production</p>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
            WZN Deal & Tool Finder helpt ondernemers sneller passende tools,
            diensten en deals vinden. Sommige links zijn affiliate links.
          </p>
        </div>

        <div>
          <p className="font-semibold text-slate-950">Pagina&apos;s</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link href="/categorieen" className="hover:text-[#0e7c66]">
              Categorieen
            </Link>
            <Link href="/deals" className="hover:text-[#0e7c66]">
              Alle deals
            </Link>
            <Link href="/blog" className="hover:text-[#0e7c66]">
              Blog
            </Link>
            <Link href="/over" className="hover:text-[#0e7c66]">
              Over ons
            </Link>
            <Link href="/contact" className="hover:text-[#0e7c66]">
              Contact
            </Link>
            <Link href="/affiliate-disclaimer" className="hover:text-[#0e7c66]">
              Affiliate disclaimer
            </Link>
            <Link href="/privacy" className="hover:text-[#0e7c66]">
              Privacy
            </Link>
            <Link href="/voorwaarden" className="hover:text-[#0e7c66]">
              Voorwaarden
            </Link>
          </div>
        </div>

        <div>
          <p className="font-semibold text-slate-950">WZN Production</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Wil je zelf zo&apos;n systeem, website of automatisering laten maken?
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={withWznUtm()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center rounded-lg bg-[#07111f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#12243b]"
            >
              Bekijk WZN Productions
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0e7c66] hover:text-[#0b6654]"
            >
              <Mail aria-hidden="true" size={16} />
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
