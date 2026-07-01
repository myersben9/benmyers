import type { Experience } from "./types";

// Sourced directly from Ben's resume. These are verified, factual bullets.
export const experience: Experience[] = [
  {
    company: "CSUN Cyber-Physical Systems (CPS) Lab",
    url: "https://www.csun.edu",
    role: "Graduate Student Researcher",
    location: "Northridge, CA",
    start: "2025",
    end: "Present",
    current: true,
    summary:
      "Machine-learning research on securing smart-grid infrastructure, alongside an M.S. in Computer Engineering.",
    bullets: [
      "Research federated learning approaches for detecting and localizing false-data-injection attacks against power-grid state estimation.",
      "Train models across distributed nodes without centralizing sensitive measurement data, exploring graph-based and attention-based architectures.",
      "Build Python/PyTorch pipelines for simulating grid measurements, injecting attacks, and evaluating detection performance.",
    ],
    tags: ["Federated Learning", "PyTorch", "Python", "Graph Neural Networks", "Smart Grid"],
  },
  {
    company: "Art Ecommerce, LLC",
    url: "https://artecommercellc.com",
    role: "Founder & CEO",
    location: "Encinitas, CA",
    start: "Apr 2024",
    end: "Present",
    current: true,
    summary:
      "Founded and operate an e-commerce company, building the storefront and the business behind it end to end.",
    bullets: [
      "Built a secure, fully functional e-commerce web app with FastAPI, Python, JavaScript, and PostgreSQL.",
      "Integrated real-time product updates from database records into the site using Jinja2 templating and the Stripe API.",
      "Secured a California seller's permit and business license, and registered a foreign out-of-state LLC.",
    ],
    tags: ["FastAPI", "Python", "PostgreSQL", "Stripe", "Jinja2"],
  },
  {
    company: "Blissmember",
    url: "https://blissmember.com",
    role: "Frontend Software Engineer",
    location: "Encinitas, CA",
    start: "Aug 2024",
    end: "Aug 2024",
    summary:
      "Built a fast, SEO-friendly marketing site and a cost-effective image delivery pipeline.",
    bullets: [
      "Implemented a high-performance static website in Next.js, improving SEO score and user experience.",
      "Launched a CDN with AWS S3 and CloudFront for optimized, cost-effective image hosting and scalability.",
      "Styled the frontend with Headless UI and Tailwind CSS to create responsive, accessible components.",
    ],
    tags: ["Next.js", "Tailwind CSS", "Headless UI", "AWS S3", "CloudFront"],
  },
  {
    company: "Computacenter",
    role: "Backend Software Engineer",
    location: "Remote",
    start: "Dec 2023",
    end: "Apr 2024",
    summary:
      "Built backend integrations and monitoring automation across enterprise infrastructure tooling.",
    bullets: [
      "Engineered a robust API endpoint to sync customer data from ServiceNow to PRTG with FastAPI and JavaScript.",
      "Deployed Python scripts to create custom thresholds for hardware alerts in VMware vCenter.",
      "Compiled device-hardware and update-alert data tables for customer email reports with Python and Jinja2.",
    ],
    tags: ["FastAPI", "Python", "ServiceNow", "PRTG", "VMware"],
  },
];
