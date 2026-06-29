import type { Project } from "@/content";
import { Card, Tag, ExternalLink } from "./ui";

const categoryStyles: Record<Project["category"], string> = {
  Research: "text-violet border-violet/30 bg-violet/10",
  Product: "text-brand border-brand/30 bg-brand/10",
  Client: "text-cyan border-cyan/30 bg-cyan/10",
  Quant: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
  Academic: "text-amber-200 border-amber-300/30 bg-amber-300/10",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryStyles[project.category]}`}
        >
          {project.category}
        </span>
        <span className="font-mono text-xs text-ink-subtle">
          {project.period}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">
        {project.name}
      </h3>
      <p className="mt-2 text-sm font-medium text-ink-muted">{project.blurb}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-subtle">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      {project.links.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4">
          {project.links.map((l) => (
            <ExternalLink key={l.href} href={l.href} className="text-sm">
              {l.label}
            </ExternalLink>
          ))}
        </div>
      ) : null}
    </Card>
  );
}
