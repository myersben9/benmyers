import Link from "next/link";
import { Container, Section, SectionHeading, ButtonLink, Tag } from "@/components/ui";
import ProjectCard from "@/components/ProjectCard";
import { SocialIcon, ArrowRightIcon, DownloadIcon } from "@/components/icons";
import { siteConfig, socials, highlights, projects, skillGroups } from "@/content";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <Container className="pt-20 pb-12 sm:pt-28">
        <div className="max-w-3xl">
          <p className="animate-rise mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-xs text-ink-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to software &amp; ML engineering roles
          </p>
          <h1
            className="animate-rise text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl"
            style={{ animationDelay: "60ms" }}
          >
            Hi, I&apos;m {siteConfig.name} —{" "}
            <span className="text-gradient">{siteConfig.role}</span>
          </h1>
          <p
            className="animate-rise mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted"
            style={{ animationDelay: "120ms" }}
          >
            {siteConfig.tagline}
          </p>

          <div
            className="animate-rise mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "180ms" }}
          >
            <ButtonLink href="/projects">
              View my work
              <ArrowRightIcon
                width={16}
                height={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </ButtonLink>
            <ButtonLink href={siteConfig.resumePath} variant="ghost" external>
              <DownloadIcon width={16} height={16} />
              Résumé
            </ButtonLink>
            <div className="ml-1 flex items-center gap-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-muted transition hover:border-line-strong hover:text-ink"
                >
                  <SocialIcon name={s.icon} width={18} height={18} />
                </a>
              ))}
            </div>
          </div>

          <ul
            className="animate-rise mt-10 flex flex-wrap gap-2"
            style={{ animationDelay: "240ms" }}
          >
            {highlights.map((h) => (
              <li
                key={h}
                className="rounded-xl border border-line bg-white/[0.03] px-3 py-1.5 text-xs text-ink-muted"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Featured work */}
      <Section>
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Things I've built & researched"
          />
          <Link
            href="/projects"
            className="hidden shrink-0 items-center gap-1 text-sm text-brand transition hover:text-violet sm:inline-flex"
          >
            All projects
            <ArrowRightIcon width={15} height={15} />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
        <div className="mt-8 sm:hidden">
          <ButtonLink href="/projects" variant="ghost">
            All projects
            <ArrowRightIcon width={16} height={16} />
          </ButtonLink>
        </div>
      </Section>

      {/* Skills snapshot */}
      <Section className="pt-0">
        <SectionHeading
          eyebrow="Toolkit"
          title="Technologies I work with"
          description="A pragmatic full-stack toolset, plus the data and ML stack behind my research."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* CTA band */}
      <Section className="pt-0">
        <div className="glass relative overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Let&apos;s build something.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-ink-muted">
            I&apos;m open to software and machine-learning roles, freelance
            projects, and research collaborations. The fastest way to reach me is
            email.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact">
              Get in touch
              <ArrowRightIcon width={16} height={16} />
            </ButtonLink>
            <ButtonLink href={siteConfig.resumePath} variant="ghost" external>
              <DownloadIcon width={16} height={16} />
              Download résumé
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
