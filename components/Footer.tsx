import Link from "next/link";
import { siteConfig, socials } from "@/content";
import { SocialIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <Link href="/" className="text-sm font-semibold text-ink">
            {siteConfig.name}
            <span className="text-brand">.</span>
          </Link>
          <p className="mt-1 text-sm text-ink-subtle">
            {siteConfig.role} · {siteConfig.location}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition hover:border-line-strong hover:text-ink"
            >
              <SocialIcon name={s.icon} width={18} height={18} />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto w-full max-w-5xl px-5 py-5 text-xs text-ink-subtle sm:px-8">
          © {year} {siteConfig.name}. Built with Next.js &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
