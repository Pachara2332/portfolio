import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend / Mobile
  { name: "React", icon: "atom", category: "frontend" },
  { name: "Next.js", icon: "globe", category: "frontend" },
  { name: "Angular", icon: "code", category: "frontend" },
  { name: "TypeScript", icon: "file-code-2", category: "frontend" },
  { name: "Tailwind CSS", icon: "paintbrush", category: "frontend" },
  { name: "Flutter", icon: "smartphone", category: "mobile" },

  // Backend
  { name: "Node.js", icon: "server", category: "backend" },
  { name: "Express.js", icon: "zap", category: "backend" },
  { name: ".NET", icon: "terminal", category: "backend" },
  { name: "Go", icon: "terminal", category: "backend" },
  { name: "PHP", icon: "code", category: "backend" },

  // Database
  { name: "PostgreSQL", icon: "database", category: "database" },
  { name: "MySQL", icon: "database", category: "database" },
  { name: "Firebase", icon: "flame", category: "database" },

  // Tools & ORM
  { name: "Prisma", icon: "database", category: "tools" },
  { name: "Git", icon: "git-branch", category: "tools" },
  { name: "Postman", icon: "send", category: "tools" },
  { name: "Figma", icon: "figma", category: "tools" },
  { name: "AWS S3", icon: "cloud", category: "tools" },
  { name: "Socket.io", icon: "radio", category: "tools" },
  { name: "Docker", icon: "container", category: "tools" },

  // IoT
  { name: "ESP32", icon: "cpu", category: "iot" },
  { name: "C++", icon: "code", category: "iot" },
  { name: "RS485", icon: "cable", category: "iot" },

  // AI Tools
  { name: "Cursor", icon: "monitor", category: "tools" },
  { name: "Claude Code", icon: "terminal", category: "tools" },
  { name: "GitHub Copilot", icon: "zap", category: "tools" },
];
