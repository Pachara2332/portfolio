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
    coverImage: "/assets/projects/knowledge-assistant.png",
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
    coverImage: "/assets/projects/movie-management.svg",
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
    coverImage: "/assets/projects/tawan-chatbot.svg",
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
    coverImage: "/assets/projects/childcare-dashboard.svg",
    github: "https://github.com/Pachara2332/childrencare",
    demo: "https://childcare-dashboard-ten.vercel.app/",
    category: "web",
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
