export type CtaClickPayload = {
  label: string;
  itemName?: string;
  url: string;
  location?: string;
};

export function trackCtaClick(payload: CtaClickPayload) {
  // Later kan hier Google Analytics, Plausible of server-side event tracking worden toegevoegd.
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent("wzn:cta-click", {
      detail: payload,
    }),
  );
}
