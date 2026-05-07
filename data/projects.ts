import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "eleven-lineup",
    title: "Eleven Lineup — Premier League Lineup Builder",
    description:
      "Interactive drag-and-drop pitch UI with custom JWT auth in HTTP-only cookies via Next.js Edge Middleware. Features RBAC, social community, streak-based prediction mini-games, and PostgreSQL/Prisma schema for user profiles.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Prisma", "JWT"],
    image: "/projects/eleven-lineup.jpg",
    github: "https://github.com/Pachara2332/ElevenLineUp",
    demo: "https://elevenlineup-production.up.railway.app/",
    features: [
      "Interactive drag-and-drop pitch UI with @dnd-kit",
      "Custom JWT auth with HTTP-only cookies",
      "RBAC via Next.js Edge Middleware",
      "Social community features & user profiles",
      "Streak-based daily prediction mini-games",
    ],
    category: "web",
  },
  {
    id: "patient-system",
    title: "Patient Management System",
    description:
      "Full-stack patient management system for healthcare facilities. Features appointment scheduling, patient records management, and real-time data synchronization.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    image: "/projects/patient-system.jpg",
    github: "https://github.com/Pachara2332/patient-system",
    demo: "https://patient-system-production-8241.up.railway.app/",
    features: [
      "Patient records management",
      "Appointment scheduling system",
      "Real-time data sync",
      "Role-based access control",
    ],
    category: "web",
  },
  {
    id: "childcare-dashboard",
    title: "Childcare Dashboard",
    description:
      "Comprehensive childcare management dashboard for tracking child development, activities, savings, and payments. Features data visualization and CSV/PDF export functionality.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/projects/childcare.jpg",
    github: "https://github.com/Pachara2332/childrencare",
    demo: "https://childcare-dashboard-ten.vercel.app/",
    features: [
      "Child development tracking",
      "Activity & payment management",
      "Data visualization dashboards",
      "CSV & PDF export functionality",
    ],
    category: "web",
  },
  {
    id: "roommate-finder",
    title: "Roommate Finder Platform",
    description:
      "Real-time chat platform with Socket.io featuring typing indicators, persisted chat history, and automated image uploads to AWS S3. Advanced preference-based matching with peer-to-peer review & rating system.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "JWT", "AWS S3"],
    image: "/projects/roommate.jpg",
    github: "https://github.com/Pachara004/IshowSpeed",
    features: [
      "Real-time chat with typing indicators",
      "Persisted chat history via Socket.io",
      "Automated image uploads to AWS S3",
      "Preference-based matching (cleanliness, noise, schedule)",
      "Peer-to-peer review & rating system",
    ],
    category: "web",
  },
  {
    id: "soil-iot-dashboard",
    title: "Soil Mineral & Moisture IoT Dashboard",
    description:
      "Engineered ESP32 firmware integrating RS485 NPK sensors and GPS to collect real-time soil mineral and moisture data to Firebase. Built Angular dashboard with role-based access and recommendation engine for crops.",
    techStack: ["Angular", "Firebase", "ESP32", "C++", "RS485 NPK", "GPS"],
    image: "/projects/soil-iot.jpg",
    github: "https://github.com/Pachara004/soil-sensor-frontend",
    features: [
      "ESP32 firmware with RS485 NPK sensor integration",
      "GPS-based location tracking",
      "Real-time data streaming to Firebase",
      "Role-based access dashboard",
      "Crop & fertilizer recommendation engine",
    ],
    category: "iot",
  },
  {
    id: "lotto-rider",
    title: "Lotto & Rider Applications",
    description:
      "Two Flutter mobile apps: a lottery platform with real-time stock management and 1–5 ticket bundle purchases, and a delivery app with dual-role system (customer/rider) featuring live map tracking via Firebase.",
    techStack: ["Flutter", "Node.js", "Firebase"],
    image: "/projects/lotto-rider.jpg",
    github: "https://github.com/Pachara004/LottoApp",
    features: [
      "Real-time lottery stock management",
      "1–5 ticket bundle purchase flow",
      "Vendor admin panel for inventory",
      "Dual-role delivery system (customer/rider)",
      "Live map tracking with Firebase",
    ],
    category: "mobile",
  },
];
