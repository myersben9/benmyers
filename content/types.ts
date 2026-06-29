// Shared content types for the site's data layer.
// Editing the data in content/* is the supported way to update the site.

export type SocialLink = {
  label: string;
  href: string;
  /** Material symbol / lucide-style key, resolved in the UI. */
  icon: "github" | "linkedin" | "mail" | "phone" | "globe";
  /** Short value shown when the link is rendered inline (e.g. the handle). */
  handle?: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Experience = {
  company: string;
  url?: string;
  role: string;
  location: string;
  /** Display string, e.g. "Apr 2024". */
  start: string;
  /** Display string, or "Present". */
  end: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  tags: string[];
};

export type ProjectCategory = "Research" | "Product" | "Client" | "Quant" | "Academic";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  category: ProjectCategory;
  /** One-line hook. */
  blurb: string;
  description: string;
  /** Display string, e.g. "2026" or "2023". */
  period: string;
  tags: string[];
  links: ProjectLink[];
  /** Surface on the homepage / top of the projects page. */
  featured?: boolean;
};

export type EducationEntry = {
  school: string;
  credential: string;
  location: string;
  period: string;
  details?: string[];
};
