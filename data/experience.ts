import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "bussing-fullstack",
    company: "Bussing Transit Co., Ltd.",
    role: "Full-Stack Developer Intern",
    period: "Dec 2025 - May 2026",
    description:
      "Built production systems for public bus operations across passenger-facing LINE LIFF/web apps and internal operation dashboards.",
    highlights: [
      "Digital bus card system for ticket purchase, online payment, LINE Login, Email Login, and secure session management",
      "Realtime operations dashboard for camera feeds, live maps, and activity monitoring",
      "Backend schema design with Node.js and Prisma ORM plus Linux automation scripts for video recording pipelines",
    ],
    techStack: ["React", "Node.js", "Prisma ORM", "LINE LIFF", "Linux", "Bash"],
    type: "internship",
  },
];
