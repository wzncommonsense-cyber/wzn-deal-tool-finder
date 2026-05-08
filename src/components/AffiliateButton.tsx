"use client";

import { ExternalLink } from "lucide-react";
import { trackCtaClick } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type AffiliateButtonProps = {
  affiliateUrl: string;
  itemName: string;
  label?: string;
  location?: string;
  className?: string;
};

export function AffiliateButton({
  affiliateUrl,
  itemName,
  label = "Bekijk deal",
  location,
  className,
}: AffiliateButtonProps) {
  const isAvailable = affiliateUrl !== "#";
  const buttonText = isAvailable ? label : "Binnenkort beschikbaar";

  function handleClick() {
    if (!isAvailable) {
      return;
    }

    trackCtaClick({
      label: buttonText,
      itemName,
      url: affiliateUrl,
      location,
    });

    window.open(affiliateUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={!isAvailable}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#0e7c66] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b6654] focus:outline-none focus:ring-2 focus:ring-[#0e7c66] focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600 disabled:shadow-none",
        className,
      )}
      aria-label={`${buttonText}: ${itemName}`}
    >
      {buttonText}
      {isAvailable ? <ExternalLink aria-hidden="true" size={16} /> : null}
    </button>
  );
}
