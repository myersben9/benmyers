import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRightIcon } from "./icons";

/** Centered max-width container. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/** A vertical page section with consistent rhythm. */
export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** Eyebrow + heading pair used at the top of sections. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Use "h1" when this is the page's primary heading. */
  as?: "h1" | "h2";
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-ink-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}

/** Small pill used for skills/tags. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs font-medium text-ink-muted">
      {children}
    </span>
  );
}

/** Glass card surface. */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass rounded-2xl p-6 transition duration-300 hover:border-line-strong sm:p-7 ${className}`}
    >
      {children}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
};

/** Primary / ghost call-to-action link. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-brand text-[#0b0712] hover:bg-brand-strong shadow-[0_8px_30px_-12px_rgba(124,108,240,0.7)]"
      : "border border-line-strong text-ink hover:bg-white/[0.04]";
  const cls = `group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 ${styles} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Inline text link that opens in a new tab with a small arrow. */
export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-1 text-brand transition hover:text-violet ${className}`}
    >
      {children}
      <ArrowUpRightIcon
        width={14}
        height={14}
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}
