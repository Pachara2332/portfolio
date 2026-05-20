import { Experience } from "@/types";

export const experiences: Experience[] = [
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
