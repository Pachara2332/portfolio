import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "bussing-fullstack",
    company: "Bussing Transit Co., Ltd.",
    role: "Full-Stack Developer Intern",
    period: "Dec 2025 — May 2026",
    description:
      "Built production digital bus card system for ticket purchase & online payment, live with real public bus passengers across LINE LIFF and web. Implemented LINE Login & Email Login with secure session management; designed full backend schema with Node.js and Prisma ORM.",
    techStack: ["React", "Node.js", "Prisma ORM", "LINE LIFF"],
    type: "internship",
  },
  {
    id: "bussing-frontend",
    company: "Bussing Transit Co., Ltd.",
    role: "Frontend Developer Intern",
    period: "Dec 2025 — May 2026",
    description:
      "Built real-time dashboard for camera feeds, live maps, and operational activity monitoring. Automated bash scripts for video recording pipelines on Linux servers.",
    techStack: ["React", "Linux", "Bash"],
    type: "internship",
  },
];
