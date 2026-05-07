import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "Next.js", icon: "globe", category: "frontend" },
  { name: "React", icon: "atom", category: "frontend" },
  { name: "TypeScript", icon: "file-code-2", category: "frontend" },
  { name: "Tailwind CSS", icon: "paintbrush", category: "frontend" },
  { name: "Framer Motion", icon: "move-3d", category: "frontend" },

  // Mobile
  { name: "Flutter", icon: "smartphone", category: "mobile" },
  { name: "Dart", icon: "code", category: "mobile" },

  // Backend
  { name: "Node.js", icon: "server", category: "backend" },
  { name: "Python", icon: "terminal", category: "backend" },
  { name: "Express", icon: "zap", category: "backend" },

  // Database
  { name: "PostgreSQL", icon: "database", category: "database" },
  { name: "MongoDB", icon: "database", category: "database" },
  { name: "Firebase", icon: "flame", category: "database" },

  // IoT
  { name: "ESP32", icon: "cpu", category: "iot" },
  { name: "Arduino", icon: "circuit-board", category: "iot" },
  { name: "MQTT", icon: "radio", category: "iot" },
  { name: "Modbus", icon: "cable", category: "iot" },

  // Tools
  { name: "Docker", icon: "container", category: "tools" },
  { name: "Git", icon: "git-branch", category: "tools" },
  { name: "OpenCV", icon: "scan-eye", category: "tools" },
  { name: "Figma", icon: "figma", category: "tools" },
  { name: "Linux", icon: "monitor", category: "tools" },
];
