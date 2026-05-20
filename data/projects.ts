import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "trainee-knowledge-assistant",
    title: "Trainee Knowledge Assistant",
    description:
      "AI study workspace that helps trainees ask questions against lessons and uploaded files through a secure chat interface.",
    challenge:
      "Kept model credentials server-side, reduced prompt payload size, handled file-aware Q&A states, and added provider fallbacks so the app stays useful during API issues.",
    outcome:
      "Turned training material into a faster self-service support channel with clear loading, error, and recovery states.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Google Gen AI SDK"],
    github: "https://github.com/Pachara2332/trainee-knowledge-assistant",
    category: "ai",
  },
  {
    id: "movie-management",
    title: "Movie Operations Dashboard",
    description:
      "Authenticated movie catalog dashboard for teams managing titles, posters, roles, and review-ready content workflows.",
    challenge:
      "Designed protected dashboard flows, cookie-based auth, role-aware destructive actions, poster uploads, search, sorting, and API integration against a separate backend.",
    outcome:
      "Created an internal tool pattern that makes content operations safer and faster without exposing manager-only actions to staff roles.",
    techStack: ["React 19", "TypeScript", "Vite", "React Router", "Axios", "Tailwind CSS"],
    github: "https://github.com/Pachara2332/movie-frontend-management",
    githubBackend: "https://github.com/Pachara2332/movie-backend-management",
    demo: "https://movie-frontend-management.vercel.app",
    category: "web",
  },
  {
    id: "thai-ai-chatbot",
    title: "Thai AI Chat Assistant",
    description:
      "Thai-language AI assistant for everyday Q&A and recommendations, optimized for a simple browser-based chat experience.",
    challenge:
      "Built the full chat loop with server-side AI routing, guarded API keys, recent-history trimming, error states, and provider fallback behavior.",
    outcome:
      "Delivered a responsive AI product that feels approachable for Thai users while keeping operational concerns out of the client.",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Google Gen AI SDK"],
    github: "https://github.com/Pachara2332/tawan-chatbot",
    demo: "https://tawan-chatbot.vercel.app/",
    category: "ai",
  },
  {
    id: "eleven-lineup",
    title: "Eleven Lineup",
    description:
      "Football lineup builder with drag-and-drop squad creation, social profiles, RBAC, and prediction game mechanics.",
    challenge:
      "Combined interactive pitch state, custom JWT auth in HTTP-only cookies, middleware-based permissions, Prisma models, and streak-based game flows.",
    outcome:
      "Shipped a full-stack SaaS-style product with clear user identity, community behavior, and replayable engagement loops.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Prisma", "JWT"],
    github: "https://github.com/Pachara2332/ElevenLineUp",
    demo: "https://elevenlineup-production.up.railway.app/",
    category: "web",
  },
  {
    id: "patient-operations-system",
    title: "Patient Operations System",
    description:
      "Healthcare operations app for managing patient records, appointment scheduling, and facility-level workflows.",
    challenge:
      "Modeled clinical data carefully, designed role-aware workflows, and built operational screens that prioritize accuracy over decoration.",
    outcome:
      "Improved visibility into patient and appointment status for teams that need dependable, scan-friendly interfaces.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    github: "https://github.com/Pachara2332/patient-system",
    demo: "https://patient-system-production-8241.up.railway.app/",
    category: "web",
  },
  {
    id: "childcare-dashboard",
    title: "Childcare Dashboard",
    description:
      "Management dashboard for childcare teams tracking development, activities, savings, payments, and reports.",
    challenge:
      "Organized multiple operational domains into a dashboard with data visualization, export flows, and responsive information density.",
    outcome:
      "Helped non-technical users understand child progress and payment status quickly, then export reports for offline sharing.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Pachara2332/childrencare",
    demo: "https://childcare-dashboard-ten.vercel.app/",
    category: "web",
  },
  {
    id: "roommate-finder",
    title: "Roommate Finder Platform",
    description:
      "Matching platform with real-time chat, profile reviews, preference filters, and AWS S3 image handling.",
    challenge:
      "Built persisted Socket.io conversations, typing indicators, image upload automation, matching preferences, and peer review flows.",
    outcome:
      "Created a trust-focused marketplace experience where users can compare compatibility before committing to a shared living decision.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "JWT", "AWS S3"],
    github: "https://github.com/Pachara2332/roommate-finder",
    category: "web",
  },
  {
    id: "soil-iot-dashboard",
    title: "Soil Intelligence IoT Dashboard",
    description:
      "Field data system that streams soil minerals, moisture, and GPS readings from ESP32 devices into an Angular dashboard.",
    challenge:
      "Integrated RS485 NPK sensors, GPS, ESP32 firmware, Firebase streaming, role-based access, and crop recommendation logic.",
    outcome:
      "Converted raw sensor readings into practical farming insight for crop selection and fertilizer planning.",
    techStack: ["Angular", "Firebase", "ESP32", "C++", "RS485 NPK", "GPS"],
    github: "https://github.com/Pachara004/soil-sensor-frontend",
    category: "iot",
  },
  {
    id: "lotto-app",
    title: "Lotto App",
    description:
      "Flutter lottery platform for customers and vendors with ticket stock visibility, bundle purchasing, and inventory controls.",
    challenge:
      "Designed mobile purchase flows around real-time stock state, bundle selection, vendor-side inventory management, and Firebase-backed data updates.",
    outcome:
      "Created a clearer buying and stock management experience so vendors can control availability while customers avoid unavailable tickets.",
    techStack: ["Flutter", "Dart", "Node.js", "Firebase"],
    github: "https://github.com/Pachara004/LottoApp",
    category: "mobile",
  },
  {
    id: "rider-delivery-app",
    title: "Rider Delivery App",
    description:
      "Flutter delivery app with customer and rider roles, order status handling, and Firebase-backed live map tracking.",
    challenge:
      "Built role-specific mobile flows, delivery status transitions, map-based tracking, and Firebase synchronization for real-time visibility.",
    outcome:
      "Gave customers and riders a shared delivery state, reducing uncertainty around pickup, transit, and arrival progress.",
    techStack: ["Flutter", "Dart", "Android", "Firebase", "Maps"],
    github: "https://github.com/Pachara004/IshowSpeed",
    category: "mobile",
  },
];
