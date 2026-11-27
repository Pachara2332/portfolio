import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "fin-fullstack",
    company: "Fin Insurance Broker Co., Ltd.",
    role: "Full-Stack Developer",
    period: "Jun 2026 - Present",
    description:
      "Build and maintain insurance sales systems across a React Native agent app, a Node.js insurance API, customer web/LINE LIFF flows, and a LINE OA backend.",
    highlights: [
      "Shipped Thai ID card OCR to auto-fill non-motor application forms",
      "Built iOS/Android home widgets and Live Activity for agent sales updates",
      "Onboarded new insurance products end to end: form config, validation, API mapping, and documents",
    ],
    techStack: ["React Native", "Next.js", "Node.js", "MySQL", "Knex", "LINE LIFF"],
    type: "work",
  },
  {
    id: "bussing-fullstack",
    company: "Bussing Transit Co., Ltd.",
    role: "Full-Stack Developer Intern",
    period: "Dec 2025 - May 2026",
    description:
      "Built production systems for public bus operations across passenger-facing LINE LIFF/web apps and internal dashboards.",
    highlights: [
      "Delivered digital bus card flows for ticket purchase, online payment, LINE Login, email login, and secure sessions",
      "Built real-time operations screens for camera feeds, live maps, and activity monitoring",
      "Designed Prisma-backed schemas and Linux automation scripts for video recording pipelines",
    ],
    techStack: ["React", "Node.js", "Prisma ORM", "LINE LIFF", "Linux", "Bash"],
    type: "internship",
  },
];
