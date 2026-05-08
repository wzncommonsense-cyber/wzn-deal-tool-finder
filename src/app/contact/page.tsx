import { ExternalLink, Mail } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { createMetadata, siteConfig, withWznUtm } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Neem contact op met WZN Production voor hulp met websites, AI tools, automatisering, social media of promotiecontent.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        description="Heb je hulp nodig met je website, AI, social media, automatisering of promotiecontent? Stuur WZN Production een bericht."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Direct contact
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Mail je vraag, idee of project kort door. Benoem waar je hulp bij
            nodig hebt en welke deadline of wens belangrijk is.
          </p>
          <div className="mt-6 grid gap-3">
            <a
              href={`mailto:${siteConfig.email}?subject=Vraag%20via%20WZN%20Deal%20%26%20Tool%20Finder`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#0e7c66] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b6654]"
            >
              <Mail aria-hidden="true" size={17} />
              Mail naar {siteConfig.email}
            </a>
            <a
              href={withWznUtm()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#0e7c66] hover:text-[#0e7c66]"
            >
              Bekijk wznproduction.nl
              <ExternalLink aria-hidden="true" size={17} />
            </a>
          </div>
        </div>

        <form className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Snelle aanvraag
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Dit formulier is statisch voor de MVP. Gebruik de mailknop hierboven
            om je bericht echt te versturen.
          </p>
          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Naam
              <input
                className="h-11 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:border-[#0e7c66] focus:bg-white focus:ring-2 focus:ring-[#0e7c66]/20"
                placeholder="Jouw naam"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              E-mail
              <input
                type="email"
                className="h-11 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm outline-none focus:border-[#0e7c66] focus:bg-white focus:ring-2 focus:ring-[#0e7c66]/20"
                placeholder="jij@bedrijf.nl"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Waar wil je hulp bij?
              <textarea
                className="min-h-32 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none focus:border-[#0e7c66] focus:bg-white focus:ring-2 focus:ring-[#0e7c66]/20"
                placeholder="Bijvoorbeeld: website, AI workflow, social posts of toolfinder."
              />
            </label>
            <a
              href={`mailto:${siteConfig.email}?subject=Nieuwe%20aanvraag%20WZN`}
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#07111f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12243b]"
            >
              Verstuur via e-mail
            </a>
          </div>
        </form>
      </section>
    </>
  );
}
