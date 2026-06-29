import { Container, SectionHeading, ButtonLink } from "@/components/ui";
import { SocialIcon, DownloadIcon, MailIcon, PhoneIcon, GlobeIcon } from "@/components/icons";
import { siteConfig, socials } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Ben Myers — software & ML engineer based in Encinitas, CA. Open to roles, freelance, and research collaborations.",
  path: "/contact",
});

const directRows = [
  {
    icon: <MailIcon width={18} height={18} />,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: <PhoneIcon width={18} height={18} />,
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
  },
  {
    icon: <GlobeIcon width={18} height={18} />,
    label: "Location",
    value: siteConfig.location,
    href: undefined as string | undefined,
  },
];

export default function ContactPage() {
  return (
    <Container className="pt-16 pb-20 sm:pt-20">
      <SectionHeading
        as="h1"
        eyebrow="Contact"
        title="Let's talk"
        description="I'm open to software and machine-learning roles, freelance projects, and research collaborations. Email is the fastest way to reach me — I read every message."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {/* Direct details */}
        <div className="glass rounded-2xl p-6 sm:p-7">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
            Direct
          </h2>
          <ul className="mt-5 space-y-4">
            {directRows.map((row) => (
              <li key={row.label} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink-muted">
                  {row.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-ink-subtle">{row.label}</span>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="break-words text-sm text-ink transition hover:text-brand"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-sm text-ink">{row.value}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Around the web */}
        <div className="glass rounded-2xl p-6 sm:p-7">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-brand">
            Around the web
          </h2>
          <ul className="mt-5 space-y-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-transparent px-2 py-2 transition hover:border-line hover:bg-white/[0.03]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink-muted transition group-hover:text-ink">
                    <SocialIcon name={s.icon} width={18} height={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-ink-subtle">{s.label}</span>
                    <span className="break-words text-sm text-ink">{s.handle}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href={`mailto:${siteConfig.email}`} external>
          <MailIcon width={16} height={16} />
          Email me
        </ButtonLink>
        <ButtonLink href={siteConfig.resumePath} variant="ghost" external>
          <DownloadIcon width={16} height={16} />
          Download résumé
        </ButtonLink>
      </div>
    </Container>
  );
}
