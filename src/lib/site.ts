import type { Metadata } from "next";

export const siteConfig = {
  name: "WZN Deal & Tool Finder",
  description:
    "Vind praktische tools, diensten en deals voor kleine ondernemers, starters, zzp'ers en lokale bedrijven.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  wznUrl: "https://www.wznproduction.nl",
  email: "info@wznproduction.nl",
};

export function absoluteUrl(path = "/") {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "nl_NL",
      type: "website",
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}

export function withWznUtm(
  url = siteConfig.wznUrl,
  campaign = "wzn_deal_tool_finder",
) {
  const target = new URL(url);
  target.searchParams.set("utm_source", "wzn-deal-tool-finder");
  target.searchParams.set("utm_medium", "referral");
  target.searchParams.set("utm_campaign", campaign);
  return target.toString();
}
