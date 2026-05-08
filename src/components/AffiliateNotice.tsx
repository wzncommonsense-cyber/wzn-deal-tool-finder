import Link from "next/link";

export function AffiliateNotice() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-600">
      <p>
        Sommige links op deze website zijn affiliate links. Als je via zo&apos;n link
        iets koopt of aanvraagt, kan WZN Productions een commissie ontvangen.
        Jij betaalt hierdoor niets extra. Wij proberen alleen tools en diensten
        te tonen die relevant zijn voor ondernemers.
      </p>
      <Link
        href="/affiliate-disclaimer"
        className="mt-3 inline-flex font-semibold text-[#0e7c66] hover:text-[#0b6654]"
      >
        Lees de affiliate disclaimer
      </Link>
    </div>
  );
}
