import type { EducationEntry } from "./types";

export const education: EducationEntry[] = [
  {
    school: "University of California, Berkeley",
    credential: "B.A., Physics",
    location: "Berkeley, CA",
    period: "May 2023",
    details: [
      "Coursework: Quantum Mechanics, Analytic Mechanics, Statistical & Thermal Physics, Linear Algebra, Differential Equations, Discrete Math, Electromagnetism & Optics, Advanced Electrical Laboratory.",
      "Q&A speaker on contract software development at the UC Berkeley Career Center.",
    ],
  },
  {
    // If Ben is formally enrolled (e.g. CSUN), swap the school/credential back in.
    school: "Independent Research",
    credential: "Machine Learning — Federated Learning",
    location: "Remote",
    period: "2025 – Present",
    details: [
      "Self-directed research on federated learning for detecting and localizing false-data-injection attacks against power-grid state estimation.",
    ],
  },
];
