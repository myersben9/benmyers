import type { Metadata } from "next";
import { siteConfig } from "@/content";

/**
 * Builds per-page metadata with a correct canonical URL and page-specific
 * Open Graph / Twitter text. Without this, subpages inherit the layout's
 * canonical ("/") and homepage social text.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogTitle = `${title} — ${siteConfig.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title: ogTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}
