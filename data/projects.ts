import { Project } from "@/types";

export const projects: Project[] = [
  {
  id: "trainee-knowledge-assistant",
  title: "Trainee Knowledge Assistant",
  description:
    "Next.js 15 web app using Gemini 2.5 Flash to provide real-time Q&A and study assistance for trainees. Features a chat interface with server-side AI routing and fallback providers for reliable responses.",
  techStack: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "Google Gen AI SDK",
  ],
  image: "/projects/trainee-knowledge-assistant.jpg",
  github: "https://github.com/Pachara2332/trainee-knowledge-assistant",
  impact: [
    "Built a real-time chat experience backed by Gemini 2.5 Flash",
    "Added server-side AI routing with fallback providers to keep responses available",
    "Can upload files and ask questions about the file",
  ],
  features: [
    "Real-time chat interface with loading and error states",
    "Server API route at /api/chat to keep API keys hidden from the client",
    "Uses gemini-2.5-flash through @google/genai",
    "Limits recent message history to 20 items before sending to the model",
    "Fallback support for Gemini, Groq, and OpenRouter providers",
  ],
  category: "ai",
},
  {
    id: "movie-management",
    title: "Movie Management Frontend",
    description:
      "React + TypeScript movie management system with authenticated dashboard, role-based delete permissions, poster uploads, and CRUD workflows powered by a REST API.",
    techStack: ["React 19", "TypeScript", "Vite", "React Router", "Axios", "Tailwind CSS"],
    image: "/projects/movie-management.jpg",
    github: "https://github.com/Pachara2332/movie-frontend-management",
    githubBackend: "https://github.com/Pachara2332/movie-backend-management",
    demo: "https://movie-frontend-management.vercel.app",
    impact: [
      "Built protected login, registration, and dashboard flows using cookie-based authentication",
      "Added MANAGER-only delete controls with backend permission validation for safer movie management",
    ],
    features: [
      "Movie CRUD with title, release year, rating, and poster image upload",
      "List and grid views with title search plus year, title, and rating sorting",
      "Dashboard summary cards and responsive desktop/mobile UI",
      "Role support for MANAGER, TEAMLEADER, and FLOORSTAFF",
      "Same-origin /api rewrite to Render backend for HttpOnly cookie sessions",
    ],
    category: "web",
  },
  {
    id: "tawan-chatbot",
    title: "Tawan Chatbot",
    description:
      "Thai-language chatbot web app built with Next.js and Gemini 2.5 Flash for friendly conversations, Q&A, and helpful recommendations through a simple browser-based chat UI.",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Google Gen AI SDK"],
    image: "/projects/tawan-chatbot.jpg",
    github: "https://github.com/Pachara2332/tawan-chatbot",
    demo: "https://tawan-chatbot.vercel.app/",
    impact: [
      "Built a real-time Thai chat experience backed by Gemini 2.5 Flash",
      "Added server-side AI routing with fallback providers to keep responses available",
    ],
    features: [
      "Real-time chat interface with loading and error states",
      "Server API route at /api/chat to keep API keys hidden from the client",
      "Uses gemini-2.5-flash through @google/genai",
      "Limits recent message history to 20 items before sending to the model",
      "Fallback support for Gemini, Groq, and OpenRouter providers",
    ],
    category: "ai",
  },
  {
    id: "eleven-lineup",
    title: "Eleven Lineup - Premier League Lineup Builder",
    description:
      "Interactive drag-and-drop pitch UI with custom JWT auth in HTTP-only cookies via Next.js Edge Middleware. Features RBAC, social community, streak-based prediction mini-games, and PostgreSQL/Prisma schema for user profiles.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Prisma", "JWT"],
    image: "/projects/eleven-lineup.jpg",
    github: "https://github.com/Pachara2332/ElevenLineUp",
    demo: "https://elevenlineup-production.up.railway.app/",
    impact: [
      "Built a full football lineup builder with drag-and-drop squad management",
      "Implemented secure JWT auth, RBAC, profiles, and daily prediction game flows",
    ],
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
    impact: [
      "Built patient records and appointment workflows for healthcare operations",
      "Designed a full-stack PostgreSQL/Prisma data layer for reliable clinical data handling",
    ],
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
    impact: [
      "Created dashboards for tracking child development, activities, savings, and payments",
      "Added CSV/PDF export flows so reports can be shared outside the system",
    ],
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
    github: "https://github.com/Pachara2332/roommate-finder",
    impact: [
      "Built real-time chat with Socket.io, typing status, persisted history, and AWS S3 uploads",
      "Created preference-based matching plus peer review and rating flows",
    ],
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
    impact: [
      "Connected ESP32, RS485 NPK sensors, and GPS to stream field data into Firebase",
      "Built an Angular dashboard with role access and crop/fertilizer recommendations",
    ],
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
    id: "lotto-app",
    title: "Lotto App",
    description:
      "Flutter lottery platform with real-time stock management, bundle ticket purchasing, and vendor inventory controls.",
    techStack: ["Flutter", "Node.js", "Firebase"],
    image: "/projects/lotto-app.jpg",
    github: "https://github.com/Pachara004/LottoApp",
    impact: [
      "Built lottery purchase flows with stock management and bundle ticket buying",
      "Created vendor inventory controls for managing available lottery stock",
    ],
    features: [
      "Real-time lottery stock management",
      "1-5 ticket bundle purchase flow",
      "Vendor admin panel for inventory",
    ],
    category: "mobile",
  },
  {
    id: "rider-app",
    title: "Rider Delivery App",
    description:
      "Flutter delivery application with customer/rider roles, order handling, and Firebase-backed live map tracking.",
    techStack: ["Flutter", "Dart", "Android", "Firebase", "Maps"],
    image: "/projects/rider-app.jpg",
    github: "https://github.com/Pachara004/IshowSpeed",
    impact: [
      "Built dual-role delivery flows for customer and rider use cases",
      "Integrated Firebase-backed live map tracking for delivery status visibility",
    ],
    features: [
      "Dual-role delivery system (customer/rider)",
      "Live map tracking with Firebase",
      "Delivery order status flow",
    ],
    category: "mobile",
  },
];
