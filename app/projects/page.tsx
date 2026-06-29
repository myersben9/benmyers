import { Container, SectionHeading } from "@/components/ui";
import ProjectCard from "@/components/ProjectCard";
import { projects, type ProjectCategory } from "@/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Projects by Ben Myers — federated-learning research, full-stack e-commerce, Next.js client sites, quant/trading tools, and physics data analysis.",
  path: "/projects",
});

// Display order for category groupings.
const order: ProjectCategory[] = [
  "Research",
  "Product",
  "Client",
  "Quant",
  "Academic",
];

const labels: Record<ProjectCategory, string> = {
  Research: "Research",
  Product: "Products",
  Client: "Client Work",
  Quant: "Quant & Trading",
  Academic: "Academic & Physics",
};

export default function ProjectsPage() {
  const groups = order
    .map((cat) => ({
      cat,
      items: projects.filter((p) => p.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <Container className="pt-16 pb-20 sm:pt-20">
      <SectionHeading
        as="h1"
        eyebrow="Projects"
        title="Selected work & research"
        description="A mix of production software, founder projects, machine-learning research, and physics lab work."
      />

      <div className="mt-12 space-y-14">
        {groups.map((group) => (
          <div key={group.cat}>
            <h2 className="mb-6 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-ink-subtle">
              {labels[group.cat]}
              <span className="h-px flex-1 bg-line" aria-hidden />
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {group.items.map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
