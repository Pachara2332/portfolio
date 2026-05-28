import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "trainee-knowledge-assistant",
    title: "Enterprise Knowledge Platform",
    description:
      "Enterprise AI SaaS platform with multi-tenant workspaces, federated OAuth, ChromaDB RAG search, and a resilient multi-provider AI failover chain.",
    challenge:
      "Architected federated OAuth across Google/GitHub/LINE, built a zero-downtime AI failover chain, and implemented ChromaDB vector search.",
    outcome:
      "Delivered a containerized, highly resilient production-style SaaS platform with secure user access and real-time streaming chat.",
    techStack: ["Next.js 16", "PostgreSQL", "ChromaDB", "NextAuth.js v5", "Docker"],
    coverImage: "/assets/projects/knowledge-platform.png",
    github: "https://github.com/Pachara2332/trainee-knowledge-assistant",
    category: "ai",
    isFeatured: true,
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
    isFeatured: true,
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
    isFeatured: true,
  },
  {
    id: "rider-delivery-app",
    title: "Delivery Operations Platform",
    description:
      "Real-time logistics and dispatch platform featuring specialized courier apps, live routing telemetry, and an automated dispatch dashboard.",
    challenge:
      "Engineered live location synchronization, decoupled client/rider web services, handled transition states, and integrated map telemetry.",
    outcome:
      "Ensured consistent operational state sync, reducing delivery coordinate updates to sub-second latency.",
    techStack: ["Flutter", "TypeScript", "Node.js", "PostgreSQL", "Firebase"],
    github: "https://github.com/Pachara2332/rider-delivery-app",
    category: "mobile",
    isFeatured: true,
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
    coverImage: "/assets/projects/movie-management.svg",
    github: "https://github.com/Pachara2332/movie-frontend-management",
    githubBackend: "https://github.com/Pachara2332/movie-backend-management",
    demo: "https://movie-frontend-management.vercel.app",
    category: "web",
    isFeatured: false,
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
    coverImage: "/assets/projects/tawan-chatbot.svg",
    github: "https://github.com/Pachara2332/tawan-chatbot",
    demo: "https://tawan-chatbot.vercel.app/",
    category: "ai",
    isFeatured: false,
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
    coverImage: "/assets/projects/childcare-dashboard.svg",
    github: "https://github.com/Pachara2332/childrencare",
    demo: "https://childcare-dashboard-ten.vercel.app/",
    category: "web",
    isFeatured: false,
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
