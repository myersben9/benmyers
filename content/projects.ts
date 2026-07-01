import type { Project } from "./types";

// Curated from Ben's resume + GitHub. Descriptions are written to be honest and
// defensible. Live links point only to destinations known to be public/live;
// private research and product repos are described without a code link.
export const projects: Project[] = [
  {
    name: "Federated FDIA Detection & Localization",
    category: "Research",
    blurb:
      "Federated learning models that detect and localize false-data-injection attacks on power-grid state estimation.",
    description:
      "Graduate research in CSUN's Cyber-Physical Systems (CPS) Lab, training models across distributed nodes to flag — and pinpoint — false-data-injection (FDIA) attacks against smart-grid state estimation, without centralizing sensitive measurement data. Explores graph-based and attention-based architectures for spotting anomalous sensor readings across a network.",
    period: "2025 – Present",
    tags: ["Federated Learning", "PyTorch", "Anomaly Detection", "Graph Neural Networks", "Python"],
    links: [],
    featured: true,
  },
  {
    name: "Brig Light Art",
    category: "Product",
    blurb:
      "Full-stack, Stripe-integrated e-commerce storefront for fine-art photography.",
    description:
      "A storefront built with FastAPI, Python, and PostgreSQL that syncs product prices, images, and titles directly from database records via the Stripe API. Includes image-resolution downscaling on display to protect original artwork from unauthorized downloads. Operated under Art Ecommerce, LLC.",
    period: "2024 – Present",
    tags: ["FastAPI", "PostgreSQL", "Stripe", "Python", "Jinja2"],
    links: [
      { label: "Live site", href: "https://briglightart.com" },
      { label: "Art Ecommerce LLC", href: "https://artecommercellc.com" },
    ],
    featured: true,
  },
  {
    name: "Blissmember",
    category: "Client",
    blurb:
      "High-performance Next.js marketing site with an AWS-backed image CDN.",
    description:
      "A fast, SEO-optimized static site built in Next.js with Headless UI and Tailwind CSS, backed by a cost-effective image-delivery pipeline on AWS S3 and CloudFront. Focused on accessibility, performance, and clean responsive UI.",
    period: "2024",
    tags: ["Next.js", "Tailwind CSS", "AWS S3", "CloudFront", "SEO"],
    links: [{ label: "Live site", href: "https://blissmember.com" }],
    featured: true,
  },
  {
    name: "CogentLeadGen",
    category: "Product",
    blurb: "A TypeScript project for sourcing and qualifying B2B leads.",
    description:
      "A TypeScript project for sourcing, enriching, and qualifying sales leads — automating the repetitive top-of-funnel work of finding and scoring prospects.",
    period: "2026",
    tags: ["TypeScript", "Next.js", "Automation"],
    links: [],
  },
  {
    name: "Kalshi Trading Bot",
    category: "Quant",
    blurb: "Experimental Python bot for Kalshi event-contract markets.",
    description:
      "An experimental Python bot that connects to the Kalshi prediction-market API to evaluate event contracts and place trades via the API — part of a broader interest in market data, signals, and algorithmic execution.",
    period: "2026",
    tags: ["Python", "Algorithmic Trading", "REST APIs"],
    links: [],
  },
  {
    name: "pystock",
    category: "Quant",
    blurb: "Open-source websocket streamer for free real-time market data.",
    description:
      "An open-source project that streams market data over websockets, providing a free, low-latency feed for building trading tools and dashboards.",
    period: "2025",
    tags: ["Python", "WebSockets", "Market Data", "Open Source"],
    links: [{ label: "GitHub", href: "https://github.com/myersben9/pystock" }],
  },
  {
    name: "Muon Lifetime Detection",
    category: "Academic",
    blurb: "Measuring the mean lifetime of cosmic-ray muons from detector data.",
    description:
      "UC Berkeley physics lab project: developed Python pipelines to calculate the mean muon lifetime from large detector datasets, applying noise reduction and statistical methods with NumPy, SciPy, and Pandas, and visualizing results with Matplotlib.",
    period: "2023",
    tags: ["Python", "NumPy", "SciPy", "Pandas", "Matplotlib"],
    links: [],
  },
  {
    name: "Carbon Dioxide Laser Spectroscopy",
    category: "Academic",
    blurb: "Calibration and analysis of CO₂ laser energy-level transitions.",
    description:
      "UC Berkeley physics lab project: evaluated specific atomic energy-level transitions of carbon dioxide to develop precise calibration techniques, visualizing voltage and current data from laser experiments with Matplotlib and tuning laser wavelengths to optimize performance.",
    period: "2023",
    tags: ["Python", "Matplotlib", "Data Analysis", "Optics"],
    links: [],
  },
];
