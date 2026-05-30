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
    images: [
      {
        src: "/assets/projects/knowledge-platform-gallery/home.png",
        alt: "Knowledge platform landing screen with centered search prompt",
        title: "Landing",
      },
      {
        src: "/assets/projects/knowledge-platform-gallery/sign-up.png",
        alt: "Knowledge platform create account screen",
        title: "Sign up",
      },
      {
        src: "/assets/projects/knowledge-platform-gallery/sign-in.png",
        alt: "Knowledge platform login screen",
        title: "Sign in",
      },
      {
        src: "/assets/projects/knowledge-platform-gallery/chat.png",
        alt: "Knowledge platform chat workspace with sidebar and conversation",
        title: "Chat workspace",
      },
      {
        src: "/assets/projects/knowledge-platform-gallery/settings.png",
        alt: "Knowledge platform settings modal over the chat workspace",
        title: "Settings",
      },
    ],
    github: "https://github.com/Pachara2332/trainee-knowledge-assistant",
    category: "ai",
    isFeatured: true,
  },
  {
    id: "eleven-lineup",
    title: "Eleven Lineup",
    description:
      "Football fan platform combining a drag-and-drop lineup builder, league standings, fixtures, community posts, public profiles, and replayable mini games.",
    challenge:
      "Combined interactive pitch state, custom JWT auth in HTTP-only cookies, middleware-based permissions, Prisma relations, external football data, and social engagement flows.",
    outcome:
      "Shipped a full-stack football product where users can build squads, follow match context, share content, manage profiles, and return for game-driven XP loops.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Prisma", "JWT"],
    coverImage: "/assets/projects/eleven-lineup-gallery/landing.png",
    images: [
      {
        src: "/assets/projects/eleven-lineup-gallery/landing.png",
        alt: "Eleven Lineup landing page with stadium background and start building call to action",
        title: "Landing",
      },
      {
        src: "/assets/projects/eleven-lineup-gallery/sign-in.png",
        alt: "Eleven Lineup sign in screen over the stadium background",
        title: "Sign in",
      },
      {
        src: "/assets/projects/eleven-lineup-gallery/sign-up.png",
        alt: "Eleven Lineup create account screen over the stadium background",
        title: "Sign up",
      },
      {
        src: "/assets/projects/eleven-lineup-gallery/main-dashboard.png",
        alt: "Eleven Lineup dashboard with manager center, league standings, stats, and upcoming matches",
        title: "Main dashboard",
      },
      {
        src: "/assets/projects/eleven-lineup-gallery/profile-drawer.png",
        alt: "Eleven Lineup profile drawer showing profile information, posts, and stats",
        title: "Profile",
      },
      {
        src: "/assets/projects/eleven-lineup-gallery/club-selector.png",
        alt: "Eleven Lineup club selector with league filters and search input",
        title: "Club selector",
      },
      {
        src: "/assets/projects/eleven-lineup-gallery/community-feed.png",
        alt: "Eleven Lineup community feed with post composer and football discussion posts",
        title: "Community",
      },
      {
        src: "/assets/projects/eleven-lineup-gallery/notifications.png",
        alt: "Eleven Lineup notification dropdown over the community feed",
        title: "Notifications",
      },
      {
        src: "/assets/projects/eleven-lineup-gallery/community-post.png",
        alt: "Eleven Lineup community post with football highlight image and reactions",
        title: "Community post",
      },
      {
        src: "/assets/projects/eleven-lineup-gallery/mini-games-hub.png",
        alt: "Eleven Lineup mini games hub with football quiz difficulty cards",
        title: "Mini games hub",
      },
      {
        src: "/assets/projects/eleven-lineup-gallery/who-am-i-game.png",
        alt: "Eleven Lineup Who Am I mini game with timed football player hint",
        title: "Who Am I game",
      },
      {
        src: "/assets/projects/eleven-lineup-gallery/guess-player-game.png",
        alt: "Eleven Lineup Guess Player mini game with blurred player image and guess input",
        title: "Guess Player game",
      },
    ],
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
    id: "movie-management",
    title: "Movie Operations Dashboard",
    description:
      "Authenticated movie catalog dashboard for teams managing titles, posters, roles, and review-ready content workflows.",
    challenge:
      "Designed protected dashboard flows, cookie-based auth, role-aware destructive actions, poster uploads, search, sorting, and API integration against a separate backend.",
    outcome:
      "Created an internal tool pattern that makes content operations safer and faster without exposing manager-only actions to staff roles.",
    techStack: ["React 19", "TypeScript", "Vite", "React Router", "Axios", "Tailwind CSS"],
    coverImage: "/assets/projects/movie-management-gallery/dashboard-grid.png",
    images: [
      {
        src: "/assets/projects/movie-management-gallery/login.png",
        alt: "Movie Management login screen with a split catalog hero and sign in form",
        title: "Sign in",
      },
      {
        src: "/assets/projects/movie-management-gallery/register.png",
        alt: "Movie Management registration screen showing default floor staff account creation",
        title: "Register",
      },
      {
        src: "/assets/projects/movie-management-gallery/dashboard-list.png",
        alt: "Movie Management protected dashboard in list view with role badge and movie actions",
        title: "Dashboard list",
      },
      {
        src: "/assets/projects/movie-management-gallery/dashboard-grid.png",
        alt: "Movie Management protected dashboard in poster grid view with search and sorting controls",
        title: "Dashboard grid",
      },
      {
        src: "/assets/projects/movie-management-gallery/create-movie.png",
        alt: "Movie Management create movie form with title, year, rating, and poster upload controls",
        title: "Create movie",
      },
      {
        src: "/assets/projects/movie-management-gallery/edit-movie.png",
        alt: "Movie Management edit movie form with existing poster preview and update action",
        title: "Edit movie",
      },
    ],
    github: "https://github.com/Pachara2332/movie-frontend-management",
    githubBackend: "https://github.com/Pachara2332/movie-backend-management",
    demo: "https://movie-frontend-management.vercel.app",
    category: "web",
    isFeatured: true,
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
    title: "Childrencare",
    description:
      "Thai-first childcare center management platform with PIN login, student enrollment, online admissions, attendance, leave, announcements, development records, savings, expenses, and reports.",
    challenge:
      "Unified staff-only operations and public parent-facing admissions while keeping daily classroom workflows fast enough for shared-device use.",
    outcome:
      "Delivered a working center operations system where staff can register children, review applications, record attendance, track progress, publish updates, and export records.",
    techStack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS 4"],
    coverImage: "/assets/projects/childrencare-gallery/dashboard.png",
    images: [
      {
        src: "/assets/projects/childrencare-gallery/pin-login.png",
        alt: "Childrencare PIN login screen for childcare center staff",
        title: "PIN login",
      },
      {
        src: "/assets/projects/childrencare-gallery/dashboard.png",
        alt: "Childrencare dashboard showing daily attendance and center summaries",
        title: "Dashboard",
      },
      {
        src: "/assets/projects/childrencare-gallery/children.png",
        alt: "Childrencare children management screen with class cards and student records",
        title: "Children",
      },
      {
        src: "/assets/projects/childrencare-gallery/applications.png",
        alt: "Childrencare online admissions review screen with status summaries",
        title: "Admissions review",
      },
      {
        src: "/assets/projects/childrencare-gallery/public-admission.png",
        alt: "Childrencare public admission landing page for parents",
        title: "Public admission",
      },
      {
        src: "/assets/projects/childrencare-gallery/admission-form.png",
        alt: "Childrencare admission form collecting child and guardian details",
        title: "Admission form",
      },
      {
        src: "/assets/projects/childrencare-gallery/checkin.png",
        alt: "Childrencare check-in and check-out screen with date and class filters",
        title: "Check-in",
      },
      {
        src: "/assets/projects/childrencare-gallery/leave.png",
        alt: "Childrencare leave management screen for reviewing student leave records",
        title: "Leave management",
      },
      {
        src: "/assets/projects/childrencare-gallery/announcements.png",
        alt: "Childrencare parent announcements screen with category filters",
        title: "Announcements",
      },
      {
        src: "/assets/projects/childrencare-gallery/development.png",
        alt: "Childrencare development tracking screen for individual child progress notes",
        title: "Development",
      },
      {
        src: "/assets/projects/childrencare-gallery/activities.png",
        alt: "Childrencare daily activities screen with classroom notes per child",
        title: "Daily activities",
      },
      {
        src: "/assets/projects/childrencare-gallery/settings.png",
        alt: "Childrencare settings screen for academic years, GPS, and PIN configuration",
        title: "Settings",
      },
    ],
    github: "https://github.com/Pachara2332/childrencare",
    demo: "https://childcare-dashboard-ten.vercel.app/",
    category: "web",
    isFeatured: true,
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
