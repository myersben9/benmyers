import type { Experience } from "@/content";
import { Tag, ExternalLink } from "./ui";

export default function ExperienceItem({
  item,
  isLast = false,
}: {
  item: Experience;
  isLast?: boolean;
}) {
  return (
    <div className={`relative pl-8 ${isLast ? "" : "pb-12"}`}>
      {/* Continuous timeline rail (bridges into the next item's node). */}
      {!isLast ? (
        <span
          className="absolute left-0 top-2 h-[calc(100%+0.5rem)] w-px bg-line"
          aria-hidden
        />
      ) : null}
      {/* Node */}
      <span
        className="absolute left-0 top-2 h-3 w-3 -translate-x-[5px] rounded-full border-2 border-brand bg-canvas"
        aria-hidden
      />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold text-ink">
          {item.role}
          <span className="text-ink-muted"> · </span>
          {item.url ? (
            <ExternalLink href={item.url} className="align-baseline">
              {item.company}
            </ExternalLink>
          ) : (
            <span className="text-ink">{item.company}</span>
          )}
        </h3>
        <span className="font-mono text-xs text-ink-subtle">
          {item.start} – {item.end}
        </span>
      </div>

      <p className="mt-0.5 text-sm text-ink-subtle">{item.location}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {item.summary}
      </p>

      <ul className="mt-3 space-y-2">
        {item.bullets.map((b) => (
          <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  );
}
