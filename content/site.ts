import type { SocialLink } from "./types";

export const siteConfig = {
  name: "Ben Myers",
  /** Short role used in the hero and metadata. */
  role: "Software Engineer",
  /** Longer positioning line. */
  title: "Software Engineer — Full-Stack & ML Research",
  tagline:
    "I build full-stack web applications and research federated machine learning for securing critical infrastructure.",
  location: "Encinitas, CA",
  email: "myersben9@outlook.com",
  phone: "(858) 519-2727",
  phoneHref: "tel:+18585192727",
  domain: "benmyers.org",
  url: "https://www.benmyers.org",
  resumePath: "/resume_BenMyers.pdf",
  githubUser: "myersben9",
  linkedinUser: "myersbenj",
} as const;

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/myersben9",
    icon: "github",
    handle: "@myersben9",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/myersbenj",
    icon: "linkedin",
    handle: "in/myersbenj",
  },
  {
    label: "Email",
    href: "mailto:myersben9@outlook.com",
    icon: "mail",
    handle: "myersben9@outlook.com",
  },
];

// Short bio used on the home + about pages. First paragraph is the elevator pitch.
export const bio: string[] = [
  "I'm a software engineer who moves comfortably across the stack — from React/Next.js front ends and FastAPI back ends to the data and machine-learning work underneath. I started in physics at UC Berkeley, where I learned to turn messy experimental data into clear answers, and carried that habit into building software that ships.",
  "Today I split my time between shipping production web apps and machine-learning research. I founded Art Ecommerce, LLC, where I built and run a Stripe-integrated storefront end to end, and I've worked as both a frontend and a backend engineer on real, customer-facing systems.",
  "I'm also pursuing an M.S. in Computer Engineering at CSUN, where I'm a graduate student researcher in the Cyber-Physical Systems (CPS) Lab. My research focuses on federated learning for detecting and localizing false-data-injection attacks against power-grid state estimation — training models across distributed nodes without centralizing sensitive data. It's where my physics background, data skills, and engineering meet.",
];

// One-liners describing what Ben is looking for / strengths — used near the hero.
export const highlights: string[] = [
  "Full-stack: Next.js, TypeScript, FastAPI, PostgreSQL",
  "ML research: federated learning, anomaly detection",
  "Founder who has shipped and operated a real product",
];
