import { ArrowUpRight, Mail } from "lucide-react";
import { siteConfig, withWznUtm } from "@/lib/site";

type WznCtaProps = {
  title?: string;
  text?: string;
  compact?: boolean;
};

export function WznCta({
  title = "Wil je zelf zo'n systeem, website of automatisering laten maken?",
  text = "WZN Production helpt ondernemers met websites, webapps, AI-tools, automatisering en promotiecontent die praktisch inzetbaar is.",
  compact = false,
}: WznCtaProps) {
  return (
    <section
      className={
        compact
          ? "rounded-xl border border-slate-200 bg-white p-5"
          : "bg-[#07111f] text-white"
      }
    >
      <div
        className={
          compact
            ? ""
            : "mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"
        }
      >
        <div className={compact ? "" : "max-w-3xl"}>
          <p
            className={
              compact
                ? "text-lg font-semibold text-slate-950"
                : "text-2xl font-semibold tracking-tight sm:text-3xl"
            }
          >
            {title}
          </p>
          <p
            className={
              compact
                ? "mt-2 text-sm leading-6 text-slate-600"
                : "mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base"
            }
          >
            {text}
          </p>
        </div>
        <div className={compact ? "mt-5 flex flex-col gap-3" : "flex flex-col gap-3 sm:flex-row"}>
          <a
            href={withWznUtm()}
            target="_blank"
            rel="noopener noreferrer"
            className={
              compact
                ? "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#07111f] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#12243b]"
                : "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#2bd4a7] px-5 py-2.5 text-sm font-semibold text-[#07111f] transition hover:bg-[#7ce7cb]"
            }
          >
            Bekijk WZN Production
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className={
              compact
                ? "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-[#0e7c66] hover:text-[#0e7c66]"
                : "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            }
          >
            <Mail aria-hidden="true" size={16} />
            Mail WZN
          </a>
        </div>
      </div>
    </section>
  );
}
