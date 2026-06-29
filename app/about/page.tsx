import { Container, Section, SectionHeading, Tag, ButtonLink } from "@/components/ui";
import { DownloadIcon } from "@/components/icons";
import { bio, skillGroups, education, siteConfig } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Ben Myers — software engineer and ML researcher. UC Berkeley physics, founder of Art Ecommerce LLC, and federated-learning research on grid security.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Container className="pt-16 pb-4 sm:pt-20">
        <SectionHeading
          as="h1"
          eyebrow="About"
          title="From physics to full-stack and ML research"
        />
        <div className="mt-8 max-w-2xl space-y-5">
          {bio.map((p) => (
            <p key={p} className="text-pretty text-base leading-relaxed text-ink-muted">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href={siteConfig.resumePath} variant="ghost" external>
            <DownloadIcon width={16} height={16} />
            Download résumé
          </ButtonLink>
        </div>
      </Container>

      {/* Skills */}
      <Section>
        <SectionHeading eyebrow="Skills" title="Tools & technologies" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass rounded-2xl p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section className="pt-0">
        <SectionHeading eyebrow="Education" title="Background" />
        <div className="mt-10 space-y-5">
          {education.map((e) => (
            <div key={e.school} className="glass rounded-2xl p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-ink">{e.school}</h3>
                <span className="font-mono text-xs text-ink-subtle">{e.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-brand">{e.credential}</p>
              <p className="text-sm text-ink-subtle">{e.location}</p>
              {e.details ? (
                <ul className="mt-4 space-y-2">
                  {e.details.map((d) => (
                    <li
                      key={d}
                      className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand"
                        aria-hidden
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
