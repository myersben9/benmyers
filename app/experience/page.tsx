import { Container, SectionHeading, ButtonLink } from "@/components/ui";
import { DownloadIcon } from "@/components/icons";
import ExperienceItem from "@/components/ExperienceItem";
import { experience, siteConfig } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Experience",
  description:
    "Professional experience of Ben Myers: graduate student researcher at CSUN's CPS Lab, Founder & CEO of Art Ecommerce LLC, and backend engineer at Computacenter.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <Container className="pt-16 pb-20 sm:pt-20">
      <SectionHeading
        as="h1"
        eyebrow="Experience"
        title="Where I've worked"
        description="Founder, frontend, and backend roles — shipping real, customer-facing software."
      />

      <div className="mt-12">
        {experience.map((item, i) => (
          <ExperienceItem
            key={item.company}
            item={item}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>

      <div className="mt-14 border-t border-line pt-10">
        <p className="text-ink-muted">
          Want the one-page version?
        </p>
        <div className="mt-4">
          <ButtonLink href={siteConfig.resumePath} variant="ghost" external>
            <DownloadIcon width={16} height={16} />
            Download résumé (PDF)
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
}
