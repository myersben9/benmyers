import { siteConfig, socials } from "@/content";

/**
 * JSON-LD Person + WebSite structured data for richer search results.
 * Rendered once in the root layout.
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        jobTitle: siteConfig.role,
        email: `mailto:${siteConfig.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Encinitas",
          addressRegion: "CA",
          addressCountry: "US",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "University of California, Berkeley",
        },
        knowsAbout: [
          "Full-Stack Web Development",
          "Next.js",
          "FastAPI",
          "Machine Learning",
          "Federated Learning",
        ],
        sameAs: socials
          .filter((s) => s.href.startsWith("http"))
          .map((s) => s.href),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: `${siteConfig.name} — ${siteConfig.role}`,
        description: siteConfig.tagline,
        publisher: { "@id": `${siteConfig.url}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
