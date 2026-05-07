import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "smart-soil-monitor",
    title: "Smart Soil Monitor",
    description:
      "IoT-based soil monitoring system with real-time sensor data visualization. Features TFT display UI, RS485 Modbus communication, and cloud data logging.",
    longDescription:
      "A comprehensive IoT solution for precision agriculture that monitors soil moisture, temperature, pH, and NPK nutrients in real-time using ESP32 and industrial-grade RS485 sensors.",
    techStack: ["ESP32", "RS485", "Arduino", "Modbus", "IoT", "TFT Display"],
    image: "/projects/smart-soil.jpg",
    github: "https://github.com/pachara/smart-soil-monitor",
    features: [
      "Real-time sensor data on TFT display",
      "RS485 Modbus sensor integration",
      "WiFi cloud data logging",
      "Historical data graphs",
      "Alert system for threshold values",
    ],
    category: "iot",
  },
  {
    id: "portfolio-2026",
    title: "Portfolio 2026",
    description:
      "Modern developer portfolio built with Next.js 16, featuring glassmorphism design, smooth Framer Motion animations, and premium dark UI.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
    image: "/projects/portfolio.jpg",
    github: "https://github.com/pachara/portfolio",
    demo: "https://pachara.dev",
    features: [
      "Dark glassmorphism UI design",
      "Smooth page animations",
      "Responsive mobile-first layout",
      "SEO optimized with metadata API",
      "Contact form with API route",
    ],
    category: "web",
  },
  {
    id: "ai-vision-inspector",
    title: "AI Vision Inspector",
    description:
      "Computer vision quality inspection system using OpenCV and Python. Detects defects in manufacturing products with 98% accuracy.",
    techStack: ["Python", "OpenCV", "TensorFlow", "Flask", "PostgreSQL"],
    image: "/projects/ai-vision.jpg",
    github: "https://github.com/pachara/ai-vision-inspector",
    features: [
      "Real-time defect detection",
      "Custom CNN model training",
      "Web dashboard for monitoring",
      "Historical inspection data",
      "Batch processing pipeline",
    ],
    category: "ai",
  },
  {
    id: "flutter-expense-tracker",
    title: "Expense Tracker App",
    description:
      "Cross-platform mobile expense tracking app with beautiful charts, budget planning, and cloud sync across devices.",
    techStack: ["Flutter", "Dart", "Firebase", "Riverpod", "Hive"],
    image: "/projects/expense-app.jpg",
    github: "https://github.com/pachara/expense-tracker",
    demo: "https://play.google.com/store/apps/details?id=dev.pachara.expense",
    features: [
      "Beautiful expense charts",
      "Budget goal tracking",
      "Multi-device cloud sync",
      "Category-based insights",
      "Dark/Light theme support",
    ],
    category: "mobile",
  },
];
