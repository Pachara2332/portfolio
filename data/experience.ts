import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Tech Startup",
    role: "Full Stack Developer",
    period: "2024 — Present",
    description:
      "Leading development of web applications and IoT dashboards. Architecting scalable solutions with Next.js, designing real-time data pipelines, and mentoring junior developers.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
    type: "work",
  },
  {
    id: "exp-2",
    company: "Freelance",
    role: "IoT & Web Developer",
    period: "2023 — 2024",
    description:
      "Delivered custom IoT monitoring systems and web applications for agricultural and industrial clients. Specialized in ESP32-based solutions with cloud integration.",
    techStack: ["ESP32", "React", "Python", "MQTT", "Firebase"],
    type: "freelance",
  },
  {
    id: "exp-3",
    company: "University Project Lab",
    role: "Software Engineer Intern",
    period: "2022 — 2023",
    description:
      "Developed computer vision systems for quality inspection. Built full-stack dashboards for data visualization and implemented machine learning pipelines.",
    techStack: ["Python", "OpenCV", "Flask", "TensorFlow", "MySQL"],
    type: "internship",
  },
];
