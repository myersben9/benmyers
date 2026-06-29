import type { SkillGroup } from "./types";

// Grounded in the resume's technical-skills line plus the stacks evident across
// the project work. Keep these honest — these are tools Ben has actually shipped with.
export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "Headless UI", "HTML & CSS"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "PostgreSQL", "REST APIs", "Jinja2", "Stripe API"],
  },
  {
    title: "Machine Learning & Data",
    skills: ["PyTorch", "Federated Learning", "NumPy", "SciPy", "Pandas", "Matplotlib"],
  },
  {
    title: "Cloud & Tooling",
    skills: ["AWS S3", "AWS CloudFront", "Vercel", "Git", "Render"],
  },
];
