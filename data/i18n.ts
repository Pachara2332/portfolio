export type Language = "en" | "th";

export const languageLabels: Record<Language, string> = {
  en: "EN",
  th: "TH",
};

export const dictionaries = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      certificates: "Certificates",
      stack: "Stack",
      experience: "Experience",
      about: "About",
      contact: "Contact",
      resume: "Resume",
      language: "Switch language",
    },
    hero: {
      availability: "Available for high-impact roles",
      headline: "Pachara Wongsasri",
      intro:
        "Full-Stack Developer focused on AI-powered business systems, modern SaaS architecture, and operational platforms.",
      viewWork: "View selected work",
      bookCall: "Book a quick call",
      downloadResume: "Download resume",
      emailMe: "Email me",
      profileTitle: "Quick intro",
      profileAria: "Short introduction",
      stats: [
        { label: "Projects", value: "10+" },
        { label: "Main tools", value: "Next.js / TS" },
        { label: "Project types", value: "Web / AI" },
      ],
      strengths: [
        "Web apps and dashboards",
        "Frontend and backend features",
        "AI, mobile, and IoT projects",
        "Internship experience in bus operation systems",
      ],
    },
    projects: {
      eyebrow: "Selected projects",
      title: "Projects",
      challenge: "Challenge",
      outcome: "Outcome",
      viewDetails: "View details",
      backToProjects: "Back to projects",
      github: "GitHub",
      backend: "Backend",
      liveDemo: "Live demo",
      categories: {
        ai: "AI application",
        iot: "IoT system",
        mobile: "Mobile product",
        other: "Engineering project",
        web: "Full-stack app",
      },
      items: {
        "trainee-knowledge-assistant": {
          title: "Enterprise Knowledge Platform",
          description:
            "Enterprise AI SaaS platform with multi-tenant workspaces, federated OAuth, ChromaDB RAG search, and a resilient multi-provider AI failover chain.",
          challenge:
            "Architected federated OAuth across Google/GitHub/LINE, built a zero-downtime AI failover chain, and implemented ChromaDB vector search.",
          outcome:
            "Delivered a containerized, highly resilient production-style SaaS platform with secure user access and real-time streaming chat.",
          systemArchitecture: {
            description: "Multi-tenant workspaces are partitioned by routing streaming requests through an abstract failover gateway. Each incoming chat request is validated by a Redis Token Bucket rate limiter, enriched with vectorized contextual chunks retrieved from ChromaDB, and dispatched to the active provider in the failover chain.",
            diagram: `  [Client] ──(SSE Stream)──► [Next.js Router]
                                 │ (Rate Limiter Check)
                                 ▼
                          [Failover Engine]
                                 │
        ┌─────────────┬──────────┼──────────┬────────────┐
        ▼             ▼          ▼          ▼            ▼
    [Gemini]     [Together]  [Cerebras]   [Groq]     [OpenAI]
    (Primary)    (Fallback)  (Fallback) (Fallback)  (Fallback)`
          },
          databaseSchema: {
            description: "The normalized PostgreSQL relational layout enforces tenant partitions, user membership roles, and full conversation auditing.",
            sql: `-- Conversations Partitioning
CREATE TABLE conversations (
    id VARCHAR(255) PRIMARY KEY,
    workspace_id VARCHAR(255) REFERENCES workspaces(id) ON DELETE CASCADE,
    user_id VARCHAR(255) REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Messages & Tokens Audit Trail
CREATE TABLE messages (
    id VARCHAR(255) PRIMARY KEY,
    conversation_id VARCHAR(255) REFERENCES conversations(id) ON DELETE CASCADE,
    role VARCHAR(50) NOT NULL, -- 'user' | 'assistant'
    content TEXT NOT NULL,
    provider VARCHAR(100), -- 'Gemini' | 'Together' | 'Cerebras' | 'Groq'
    token_usage JSONB, -- { "promptTokens": X, "completionTokens": Y, "totalTokens": Z }
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
          },
          tradeoffs: [
            {
              choice: "ChromaDB vs pgvector",
              why: "Dedicated vector store provides isolated collection indexing, sub-millisecond distance metrics, and clean out-of-the-box metadata filtering.",
              tradeoff: "Requires maintaining a separate vector store service and syncing state, rather than query joins in a unified relational database."
            },
            {
              choice: "Docker Compose vs Kubernetes",
              why: "Single-command containerization with Docker Compose simulates production services (Web, DB, ChromaDB) perfectly without k8s orchestration overhead.",
              tradeoff: "Manual horizontally scaled nodes and lack of native cluster self-healing features."
            },
            {
              choice: "Resilient Multi-Provider Failover",
              why: "A unified SSE stream interface prevents API service disruptions. If Gemini primary fails, it transparently falls back sequentially, guaranteeing zero-downtime.",
              tradeoff: "Increases code complexity and introduces variance in response latency depending on the fallback provider chosen."
            }
          ],
          scalingAndResilience: {
            strategy: "TOKEN BUCKET RATE LIMITING & BULLMQ ASYNC WORKERS",
            description: "Rate limiting is enforced at the gateway layer using a Redis Token Bucket, letting users make bursty queries while capping sustained consumption. BullMQ async workers process incoming PDF/TXT files in a separate thread pool, preventing CPU choking on the Next.js API server."
          }
        },
        "eleven-lineup": {
          title: "Eleven Lineup",
          description:
            "Football fan platform that combines a drag-and-drop lineup builder, league standings, fixtures, community posts, public profiles, notifications, and replayable mini games in one full-stack product.",
          challenge:
            "Handled interactive pitch state, JWT auth in HTTP-only cookies, middleware RBAC, Prisma relations, external football data fallbacks, community interactions, and game-driven XP loops.",
          outcome:
            "Users can build and save squads, check match context, post to the community, manage a public profile, and return for football quiz activities that improve retention.",
          systemArchitecture: {
            description: "The app is split around user-facing football workflows: authenticated users move between dashboard, lineup builder, community, profile, and mini-game routes while API handlers normalize football data and Prisma persists user-generated activity.",
            diagram: ` [Next.js App Router] -- dashboard / lineup / community / games
             |
             v
 [Middleware RBAC + JWT Cookies]
             |
             v
 [Route Handlers + Service Layer] -- football-data.org / external team API
             |
             v
 [Prisma ORM]
             |
             v
 [PostgreSQL: Users, Lineups, Posts, Fixtures, Standings, Game Attempts]`
          },
          databaseSchema: {
            description: "The relational model keeps football master data separate from user-generated activity, making lineup, community, and mini-game features easier to evolve independently.",
            sql: `model User {
  id        String    @id @default(uuid())
  email     String    @unique
  role      Role      @default(USER)
  lineups   Lineup[]
  posts     Post[]
  attempts  MiniGameAttempt[]
}

model Lineup {
  id        String       @id @default(uuid())
  userId    String
  formation String
  user      User         @relation(fields: [userId], references: [id])
  slots     LineupSlot[]
}

model Post {
  id        String    @id @default(uuid())
  authorId  String
  content   String
  author    User      @relation(fields: [authorId], references: [id])
  comments  Comment[]
  likes     Like[]
}`
          },
          tradeoffs: [
            {
              choice: "JWT in HTTP-only Cookies vs LocalStorage Tokens",
              why: "Guards session authentication state against Cross-Site Scripting (XSS) attacks by keeping JWT tokens completely unreadable by client JavaScript.",
              tradeoff: "Slightly complex setup to share sessions across subdomains and handles CSRF vectors explicitly."
            },
            {
              choice: "Prisma ORM vs Raw SQL",
              why: "Accelerates dashboard features and guarantees compile-time type safety across complex football player and lineup relations.",
              tradeoff: "Abstracts raw SQL query execution, which can lead to inefficient N+1 query patterns if relation fetches aren't explicitly optimized."
            },
            {
              choice: "External Football APIs with Local Fallbacks",
              why: "Standings, fixtures, teams, and player data can stay current while the app still renders a usable dashboard when provider quota or availability fails.",
              tradeoff: "Requires normalization logic and careful stale-data handling so the UI does not mix incompatible provider formats."
            }
          ],
          scalingAndResilience: {
            strategy: "DATA FALLBACKS, MODERATED COMMUNITY FLOWS, AND ROUTE-LEVEL AUTH GUARDS",
            description: "Football data routes degrade to stored fixtures or empty payloads instead of crashing the dashboard. Community writes are protected by authenticated APIs, and role-aware middleware keeps admin-only data management and moderation flows separate from normal user traffic."
          }
        },
        "patient-operations-system": {
          title: "Patient Operations System",
          description:
            "Healthcare app for patient records, appointments, and staff workflows. The screens focus on clear status, structured data, and quick access to patient information.",
          challenge:
            "Modeled patient and appointment data, designed role-aware flows, and built operational pages for daily use.",
          outcome:
            "Staff can check patient and appointment status without searching through scattered information.",
          databaseSchema: {
            description: "A strongly-typed, normalized healthcare relational model mapped using Prisma.",
            sql: `// Relational Clinical Schema
model Patient {
  id          String        @id @default(uuid())
  name        String
  records     Record[]
  appointments Appointment[]
}

model Appointment {
  id          String   @id @default(uuid())
  patientId   String
  patient     Patient  @relation(fields: [patientId], references: [id])
  status      String   -- 'pending' | 'completed' | 'cancelled'
}`
          },
          tradeoffs: [
            {
              choice: "Role-Based Access Control (RBAC) vs Attributes Access (ABAC)",
              why: "Simple role structures (Doctor, Staff, Admin) keep clinical permission checking predictable, robust, and highly auditable.",
              tradeoff: "Less dynamic than attribute-based policies, which makes custom patient-by-patient sharing rules harder to implement."
            }
          ],
          scalingAndResilience: {
            strategy: "QUERY OPTIMIZATION & STATUS ARCHIVING",
            description: "Indexes are applied to patientId and appointment status fields to enable rapid filtering, while resolved cases are regularly archived to minimize production table scanning."
          }
        },
        "rider-delivery-app": {
          title: "Delivery Operations Platform",
          description:
            "Real-time logistics and dispatch platform featuring specialized courier apps, live routing telemetry, and an automated dispatch dashboard.",
          challenge:
            "Engineered live location synchronization, decoupled client/rider web services, handled transition states, and integrated map telemetry.",
          outcome:
            "Ensured consistent operational state sync, reducing delivery coordinate updates to sub-second latency.",
          systemArchitecture: {
            description: "An ultra-low latency logistics hub managing live telemetry coordination and dispatch queues.",
            diagram: ` [Customer Client] ──(WebSockets)──► [Logistics Dispatch Hub]
                                              ▲
                                              │ (Sub-Second Updates)
                                              ▼
    [Rider Mobile App] ──(Firebase Sync)──► [Live Telemetry Maps]`
          },
          tradeoffs: [
            {
              choice: "Firebase Realtime DB vs Custom WebSockets",
              why: "Guarantees sub-second coordinates synchronization between mobile couriers and dispatchers with native offline sync support.",
              tradeoff: "Highly vendor-locked into Google Cloud infrastructure, making potential scaling transitions expensive."
            }
          ],
          scalingAndResilience: {
            strategy: "COURIER LOCATION STREAM THROTTLING",
            description: "Rider GPS signals are throttled on-device using distance-based thresholds before transmission, cutting network overhead by up to 60% without losing route tracking accuracy."
          }
        },
        "movie-management": {
          title: "Movie Operations Dashboard",
          description:
            "React and TypeScript movie management frontend for an exam project, with authenticated catalog operations, poster uploads, list and grid views, and role-aware controls backed by a REST API.",
          challenge:
            "Implemented login, registration, protected dashboard session checks, CRUD flows, rating validation, poster upload, search, sorting, and manager-only delete visibility while keeping backend authorization as the final guard.",
          outcome:
            "Delivered a responsive movie operations tool where MANAGER users can test deletion, TEAMLEADER and FLOORSTAFF users can manage routine catalog work, and session state stays tied to HttpOnly cookies through withCredentials requests.",
          systemArchitecture: {
            description: "The frontend runs as a Vite React app and talks to a Node/Express API through same-origin /api routing in local and Vercel environments. Auth state is loaded through /auth/me, protected routes gate the dashboard, and Axios centralizes credentialed requests and 401 handling.",
            diagram: ` [React Router App]
          |
          v
 [ProtectedRoute + Auth Store] -- /auth/me session check
          |
          v
 [Axios Client withCredentials] -- VITE_API_BASE_URL=/api
          |
          v
 [Express REST API]
          |
          +--> [Auth: login, register, logout, JWT cookie]
          +--> [Movies: CRUD, poster upload, RBAC delete guard]
          |
          v
 [Prisma ORM + PostgreSQL]`
          },
          databaseSchema: {
            description: "The backend keeps users and movies simple for the exam scope while still making role checks explicit. Newly registered users are assigned FLOORSTAFF by the backend, and deletion is restricted to MANAGER users.",
            sql: `model User {
  id        Int      @id @default(autoincrement())
  username  String   @unique
  password  String
  role      Role     @default(FLOORSTAFF)
}

model Movie {
  id           Int      @id @default(autoincrement())
  title        String
  yearReleased Int
  rating       Rating
  imageUrl     String?
}

enum Role {
  MANAGER
  TEAMLEADER
  FLOORSTAFF
}

enum Rating {
  G
  PG
  M
  MA
  R
}`
          },
          tradeoffs: [
            {
              choice: "HttpOnly cookie session vs localStorage token",
              why: "The browser can send the session automatically while JavaScript cannot read the token, reducing exposure if client-side code is compromised.",
              tradeoff: "Local development and deployment need same-origin proxy or rewrite rules plus withCredentials on every API call."
            },
            {
              choice: "Client-side search and sorting",
              why: "The movie list is small and already loaded for the dashboard, so filtering by title and sorting by year, title, or rating stays instant without extra endpoints.",
              tradeoff: "A larger catalog would eventually need API pagination and server-side query parameters."
            },
            {
              choice: "Hide manager-only delete in UI while enforcing RBAC in backend",
              why: "The interface stays clear for TEAMLEADER and FLOORSTAFF users, but the backend remains the source of truth for destructive actions.",
              tradeoff: "Permissions are represented in both UI state and API middleware, so role changes must stay consistent across layers."
            }
          ],
          scalingAndResilience: {
            strategy: "SESSION RECOVERY, API SERVICES, AND MEMOIZED DASHBOARD DATA",
            description: "Auth helpers clear cached user state and redirect to login on 401 responses. Movie API calls are isolated in service classes, while useMemo keeps dashboard summary cards, search results, and sorted views inexpensive to recompute."
          }
        },
        "thai-ai-chatbot": {
          title: "Thai AI Chat Assistant",
          description:
            "Thai AI chatbot for everyday questions, ideas, and simple recommendations. The interface is kept close to a normal chat app so users can start quickly.",
          challenge:
            "Built the chat loop, server-side AI routing, API key protection, recent-history trimming, and error states.",
          outcome:
            "Kept sensitive logic on the server while giving Thai users a clean browser-based chat experience.",
        },
        "childcare-dashboard": {
          title: "Childrencare",
          description:
            "Thai-first childcare center management platform for nurseries and preschool classrooms. It combines PIN login, student enrollment, online admission, attendance, leave, parent announcements, development notes, daily activities, savings, expenses, reports, and settings in one operations dashboard.",
          challenge:
            "Designed one system for two very different flows: fast internal staff work on shared devices and public parent-facing admission forms. The implementation had to keep student status, class placement, attendance, and application review consistent across dashboard pages.",
          outcome:
            "Staff can register children, review online applications, check students in and out, manage leave, publish announcements, record development and activity notes, track savings and payments, and export operational reports from one product.",
          systemArchitecture: {
            description: "Childrencare is organized around center operations. A PIN-gated staff area handles dashboard, child records, applications, check-in, leave, announcements, development, activities, finance, reports, and settings. Public routes accept parent admissions and parent-facing check-in or savings flows, while shared API handlers persist records through Prisma.",
            diagram: ` [Public Parent Routes] -- /apply /parent/checkin /parent/saving
             |
             v
 [Next.js App Router + Route Handlers]
             |
             +--> [PIN Staff Session]
             |        |
             |        v
             |   [Dashboard Modules: Children, Admissions, Check-in, Leave,
             |    Announcements, Development, Activities, Savings, Reports]
             |
             v
 [Prisma ORM]
             |
             v
 [PostgreSQL: AcademicYear, ClassLevel, Child, EnrollmentApplication,
  CheckIn, LeaveRequest, Development, DailyActivity, Announcement, Saving, Payment]`
          },
          databaseSchema: {
            description: "The schema separates long-lived child identity from yearly enrollment, applications, attendance, and classroom records. This keeps academic-year movement explicit and lets reports query operational events without duplicating child profile data.",
            sql: `model Child {
  id           String              @id @default(uuid())
  firstName    String
  lastName     String
  birthDate    DateTime?
  status       ChildStatus         @default(ACTIVE)
  enrollments  ChildEnrollment[]
  checkIns     CheckIn[]
  leaves       LeaveRequest[]
  development  Development[]
  activities   DailyActivity[]
  savings      Saving[]
  payments     Payment[]
}

model ChildEnrollment {
  id             String       @id @default(uuid())
  childId        String
  academicYearId String
  classLevelId   String
  child          Child        @relation(fields: [childId], references: [id])
  academicYear   AcademicYear @relation(fields: [academicYearId], references: [id])
  classLevel     ClassLevel   @relation(fields: [classLevelId], references: [id])
}

model EnrollmentApplication {
  id             String            @id @default(uuid())
  academicYearId String
  classLevelId   String
  status         ApplicationStatus @default(PENDING)
  childName      String
  guardianName   String
  guardianPhone  String
}`
          },
          tradeoffs: [
            {
              choice: "PIN-based staff login vs full role accounts",
              why: "Small childcare centers often use shared front-desk or classroom devices, so a short PIN lets staff enter daily workflows quickly.",
              tradeoff: "It is simpler for operations but less granular than per-user audit trails and role-based permissions."
            },
            {
              choice: "EnrollmentApplication separated from Child",
              why: "Parent submissions can be reviewed, rejected, or approved before becoming real student records.",
              tradeoff: "Approval needs an explicit conversion step that maps application data into child, guardian, and enrollment records."
            },
            {
              choice: "Academic-year enrollment model",
              why: "A child can move across years and class levels without rewriting the base child profile.",
              tradeoff: "Most roster and report queries need to include the active academic year to avoid mixing historical records with current students."
            }
          ],
          scalingAndResilience: {
            strategy: "CENTER-SCOPED WORKFLOWS, EXPORTABLE RECORDS, AND PUBLIC FORM ISOLATION",
            description: "Operational data is organized by academic year, class level, child status, and date so staff screens can filter quickly. Public admission and parent routes are isolated from staff-only screens, while CSV/PDF export paths keep reports usable even outside the live dashboard."
          }
        },
      },
    },
    certificates: {
      eyebrow: "Certificates",
      title: "Recent learning in AI, cloud, SQL, and developer tools.",
      subtitle:
        "A compact record of courses completed alongside project work, with a focus on tools I can apply in web and full-stack development.",
      view: "View certificate",
    },
    stack: {
      eyebrow: "Skills and stack",
      title: "Tools I use",
      subtitle:
        "A short view of the stack behind my web, mobile, and backend projects.",
      groups: {
        frontendMobile: {
          title: "Frontend / Mobile",
          description: "Web and mobile interfaces with React, Next.js, Angular, Flutter, and typed UI code.",
        },
        backend: {
          title: "Backend",
          description: "Server-side APIs, application logic, integrations, and service development.",
        },
        database: {
          title: "Database",
          description: "Relational databases and Firebase-backed data for application workflows.",
        },
        toolsOrm: {
          title: "Tools & ORM",
          description: "Development, API testing, design handoff, containers, and data tooling.",
        },
        aiTools: {
          title: "AI Tools",
          description: "AI coding and assistant tools used to speed up development and exploration.",
        },
      },
    },
    experience: {
      eyebrow: "Experience",
      title: "Internship experience",
      subtitle:
        "I worked on public bus operation systems, including passenger-facing apps, internal dashboards, backend data, and automation scripts.",
      type: "Internship",
      signalTitle: "What this signals",
      achievements: [
        "Built features for both passengers and internal operation staff",
        "Worked with login, payments, maps, camera feeds, Prisma schemas, and Linux scripts",
        "Turned real operation workflows into screens and small backend tools",
      ],
      items: {
        "bussing-fullstack": {
          role: "Full-Stack Developer Intern",
          description:
            "Built features for public bus operations across passenger-facing LINE LIFF/web apps and internal dashboards. The work included ticket purchase flows, account login, payment handling, operation monitoring, and backend data structure.",
          highlights: [
            "Delivered digital bus card flows for ticket purchase, online payment, LINE Login, email login, and secure sessions",
            "Built internal monitoring screens for camera feeds, live maps, passenger activity, and operation status",
            "Designed Prisma-backed schemas and wrote Linux automation scripts for video recording pipelines",
          ],
        },
      },
    },
    about: {
      eyebrow: "About",
      title: "About me",
      subtitle:
        "I like building software that is simple, useful, and maintainable.",
      notes: [
        "I mostly work with full-stack TypeScript, from API and database structure to the screens people use.",
        "My projects include dashboards, AI tools, mobile apps, and IoT systems.",
      ],
      principles: [
        "Clarity before cleverness",
        "Design that supports repeated use",
        "Small interactions with obvious purpose",
        "Code organized for future changes",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Want to talk?",
      subtitle:
        "Send a role, project, or question and I will get back to you.",
      directChannels: "Direct channels",
      linkedinProfile: "LinkedIn profile",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      message: "Message",
      messagePlaceholder: "Tell me about the role, application, or engineering problem.",
      sending: "Sending",
      success: "Message sent",
      send: "Send message",
      error: "Something went wrong. Email me directly and I will still get it.",
    },
    footer: {
      builtWith: "Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    },
  },
  th: {
    nav: {
      home: "หน้าแรก",
      projects: "โปรเจกต์",
      certificates: "ใบรับรอง",
      stack: "สแต็ก",
      experience: "ประสบการณ์",
      about: "เกี่ยวกับ",
      contact: "ติดต่อ",
      resume: "เรซูเม่",
      language: "เปลี่ยนภาษา",
    },
    hero: {
      availability: "พร้อมร่วมงานในบทบาทสำคัญเพื่อสร้างการเติบโต",
      headline: "พชร วงษาศรี",
      intro:
        "นักพัฒนา Full-Stack ที่เชี่ยวชาญการสร้างระบบธุรกิจขับเคลื่อนด้วย AI, สถาปัตยกรรม SaaS สมัยใหม่ และแพลตฟอร์มปฏิบัติการ",
      viewWork: "ดูผลงานที่คัดมา",
      bookCall: "นัดคุยเบื้องต้น",
      downloadResume: "ดาวน์โหลดเรซูเม่",
      emailMe: "ส่งอีเมล",
      profileTitle: "แนะนำตัวสั้น ๆ",
      profileAria: "แนะนำตัวแบบสั้น",
      stats: [
        { label: "โปรเจกต์", value: "10+" },
        { label: "เครื่องมือหลัก", value: "Next.js / TS" },
        { label: "ประเภทงาน", value: "Web / AI" },
      ],
      strengths: [
        "เว็บแอปและ dashboard",
        "ฟีเจอร์ฝั่ง frontend และ backend",
        "โปรเจกต์ AI, mobile และ IoT",
        "ประสบการณ์ฝึกงานระบบเดินรถโดยสาร",
      ],
    },
    projects: {
      eyebrow: "Selected projects",
      title: "โปรเจกต์",
      challenge: "โจทย์",
      outcome: "ผลลัพธ์",
      viewDetails: "ดูรายละเอียด",
      backToProjects: "กลับไปส่วนโปรเจกต์",
      github: "GitHub",
      backend: "Backend",
      liveDemo: "Live demo",
      categories: {
        ai: "AI application",
        iot: "IoT system",
        mobile: "Mobile product",
        other: "Engineering project",
        web: "Full-stack app",
      },
      items: {
        "trainee-knowledge-assistant": {
          title: "Enterprise Knowledge Platform",
          description:
            "แพลตฟอร์ม Enterprise AI SaaS พร้อมระบบจัดการ Workspace, ล็อกอินผ่าน OAuth, ระบบค้นหาข้อมูล RAG ด้วย ChromaDB และระบบสลับผู้ให้บริการ AI อัตโนมัติ",
          challenge:
            "ออกแบบระบบยืนยันตัวตนผ่าน OAuth, สร้างวงจร Failover สลับผู้ให้บริการ AI ป้องกันระบบล่ม และพัฒนาระบบค้นหาแบบ RAG",
          outcome:
            "ได้แพลตฟอร์มระดับโปรดักชันที่มีระบบความปลอดภัยสูง ค้นหาข้อมูลผ่าน Vector Store ได้เรียลไทม์ และรองรับการทำงานผ่าน Docker Compose",
          systemArchitecture: {
            description: "ระบบสิทธิ์การเข้าถึง multi-tenant ถูกแยกพาร์ทิชันโดยการจัดเส้นทางสตรีมมิ่งผ่านเกตเวย์ตัวเลือก Failover ส่วนคำขอแชตที่ส่งเข้ามาจะถูกตรวจสอบปริมาณผ่านอัลกอริทึม Redis Token Bucket, นำไปดึงข้อมูล Context จาก Vector Store (ChromaDB) และส่งคำขอไปยังผู้ให้บริการที่ทำงานอยู่ในห่วงโซ่สลับเปลี่ยนระบบล่ม",
            diagram: ` [ผู้ใช้งาน] ──(สตรีม SSE)──► [Next.js Router]
                                 │ (ตรวจสอบสิทธิ์ & ปริมาณคำขอ)
                                 ▼
                         [เครื่องมือ Failover]
                                 │
        ┌─────────────┬──────────┼──────────┬────────────┐
        ▼             ▼          ▼          ▼            ▼
    [Gemini]     [Together]  [Cerebras]   [Groq]     [OpenAI]
    (หลัก)       (สำรอง)     (สำรอง)     (สำรอง)     (สำรอง)`
          },
          databaseSchema: {
            description: "โครงสร้างข้อมูล PostgreSQL แบบ Normalization เพื่อจำกัดขอบเขตของ Workspace ผู้เช่า, กำหนดบทบาทสมาชิก และบันทึกประวัติการใช้โทเค็นสำหรับการตรวจสอบ",
            sql: `-- โครงสร้างข้อมูลประวัติแชต
CREATE TABLE conversations (
    id VARCHAR(255) PRIMARY KEY,
    workspace_id VARCHAR(255) REFERENCES workspaces(id) ON DELETE CASCADE,
    user_id VARCHAR(255) REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- บันทึกข้อความแชตและการใช้งานโทเค็นของ AI
CREATE TABLE messages (
    id VARCHAR(255) PRIMARY KEY,
    conversation_id VARCHAR(255) REFERENCES conversations(id) ON DELETE CASCADE,
    role VARCHAR(50) NOT NULL, -- 'user' | 'assistant'
    content TEXT NOT NULL,
    provider VARCHAR(100), -- 'Gemini' | 'Together' | 'Cerebras'
    token_usage JSONB, -- { "promptTokens": X, "completionTokens": Y, "totalTokens": Z }
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
          },
          tradeoffs: [
            {
              choice: "ChromaDB เทียบกับ pgvector",
              why: "การเลือกใช้ Vector Store แยกโดยเฉพาะทำให้การทำ Indexing ของข้อมูลและการประมวลผลความใกล้เคียงเวกเตอร์เสร็จสิ้นในระดับมิลลิวินาที รวมถึงมีฟังก์ชันตัวกรองข้อมูลแบบ Metadata สำเร็จรูปที่ดีกว่า",
              tradeoff: "ต้องดูแลและซิงค์ข้อมูลระหว่าง PostgreSQL กับ ChromaDB แยกออกเป็น 2 เซอร์วิส แทนที่จะจบในฐานข้อมูลเดียว"
            },
            {
              choice: "Docker Compose เทียบกับ Kubernetes",
              why: "ช่วยให้สร้างและทดสอบระบบทั้งหมด (Web, DB, ChromaDB) ในรูปแบบคอนเทนเนอร์ระดับโปรดักชันได้ผ่านคำสั่งเดียวโดยไม่ต้องแบกรับภาระการตั้งค่าคลัสเตอร์ที่ซับซ้อนของ Kubernetes",
              tradeoff: "ไม่รองรับการสเกลคลัสเตอร์โหนดแบบอัตโนมัติ (Horizontal Pod Autoscaling) และการซ่อมแซมเซอร์วิสอัตโนมัติ"
            },
            {
              choice: "การทำ Multi-Provider Failover สำรองหลายระบบ",
              why: "สร้างความทนทานให้ธุรกิจ 100% ป้องกันกรณีที่ API หลัก (Gemini) ขัดข้องหรือโควตาหมด โดยระบบจะย้ายไปดึงโมเดลสำรองอย่างราบรื่นโดยผู้ใช้ไม่รู้สึกว่าแอปพลิเคชันค้างหรือล่ม",
              tradeoff: "เพิ่มความซับซ้อนของโค้ดในการจับคู่สตรีมข้อมูล และอาจพบความเร็วในการตอบสนองต่างกันเล็กน้อยตามรุ่นโมเดล"
            }
          ],
          scalingAndResilience: {
            strategy: "ระบบควบคุมปริมาณคำขอด้วย REDIS TOKEN BUCKET & การประมวลผลแบบ BullMQ",
            description: "ป้องกันการเรียกใช้งาน API เกินโควตาด้วย Redis Token Bucket ในระดับเกตเวย์ (20 ครั้ง/นาที) และใช้ BullMQ เพื่อประมวลผลการอ่านไฟล์ PDF/TXT ขนาดใหญ่เป็น Background Job ป้องกันไม่ให้ CPU ของ Next.js API ทำงานหนักเกินไป"
          }
        },
        "eleven-lineup": {
          title: "Eleven Lineup",
          description:
            "แพลตฟอร์มสำหรับแฟนฟุตบอลที่รวม lineup builder แบบ drag-and-drop, ตารางคะแนน, โปรแกรมแข่ง, community posts, public profile, notifications และ mini games ไว้ในผลิตภัณฑ์ full-stack เดียว",
          challenge:
            "จัดการ state ของสนามแบบ interactive, JWT auth ผ่าน HTTP-only cookies, RBAC ด้วย middleware, ความสัมพันธ์ Prisma, fallback ข้อมูลฟุตบอลภายนอก, community interaction และ XP loop จาก mini games",
          outcome:
            "ผู้ใช้สร้างและบันทึกทีมได้, ดูบริบทการแข่งขัน, โพสต์ใน community, จัดการ public profile และกลับมาเล่น quiz ฟุตบอลเพื่อเพิ่ม retention",
          systemArchitecture: {
            description: "ระบบแยกตาม workflow หลักของผู้ใช้ฟุตบอล: dashboard, lineup builder, community, profile และ mini games โดย API handlers ทำหน้าที่ normalize ข้อมูลฟุตบอล และ Prisma บันทึกกิจกรรมที่ผู้ใช้สร้างขึ้น",
            diagram: ` [Next.js App Router] -- dashboard / lineup / community / games
             |
             v
 [Middleware RBAC + JWT Cookies]
             |
             v
 [Route Handlers + Service Layer] -- football-data.org / external team API
             |
             v
 [Prisma ORM]
             |
             v
 [PostgreSQL: Users, Lineups, Posts, Fixtures, Standings, Game Attempts]`
          },
          databaseSchema: {
            description: "โครงสร้างฐานข้อมูลแยก master data ฟุตบอลออกจาก activity ที่ผู้ใช้สร้าง ทำให้ lineup, community และ mini-game ขยายต่อได้โดยไม่ผูกกันแน่นเกินไป",
            sql: `model User {
  id        String    @id @default(uuid())
  email     String    @unique
  role      Role      @default(USER)
  lineups   Lineup[]
  posts     Post[]
  attempts  MiniGameAttempt[]
}

model Lineup {
  id        String       @id @default(uuid())
  userId    String
  formation String
  user      User         @relation(fields: [userId], references: [id])
  slots     LineupSlot[]
}

model Post {
  id        String    @id @default(uuid())
  authorId  String
  content   String
  author    User      @relation(fields: [authorId], references: [id])
  comments  Comment[]
  likes     Like[]
}`
          },
          tradeoffs: [
            {
              choice: "JWT ใน HTTP-only Cookies เทียบกับ LocalStorage",
              why: "ช่วยป้องกันภัยคุกคามประเภท Cross-Site Scripting (XSS) ได้อย่างมีประสิทธิภาพสูงสุด เนื่องจากสคริปต์บนหน้าเว็บจะไม่สามารถเข้าถึงหรือขโมยโทเค็นนี้ได้",
              tradeoff: "การตั้งค่าและการแชร์เซสชันข้าม Subdomain ทำได้ยากขึ้น และต้องจัดการความปลอดภัยด้าน CSRF เพิ่มเติม"
            },
            {
              choice: "Prisma ORM เทียบกับ Raw SQL",
              why: "ช่วยเพิ่มความรวดเร็วในการพัฒนา และมอบความปลอดภัยด้านชนิดข้อมูล (Type Safety) ในการสืบค้นข้อมูลผู้เล่นและตารางจัดทีมที่เชื่อมโยงกันอย่างซับซ้อน",
              tradeoff: "อาจส่งผลกระทบต่อประสิทธิภาพหากเกิด N+1 Query โดยไม่ตั้งใจ ซึ่งจำเป็นต้องทำการจูนนิ่งความสัมพันธ์ผ่าน include หรือ select เสมอ"
            },
            {
              choice: "External Football APIs พร้อม Local Fallback",
              why: "ตารางคะแนน, โปรแกรมแข่ง, ทีม และข้อมูลผู้เล่นอัปเดตได้จากภายนอก แต่ dashboard ยังเปิดใช้งานได้เมื่อ provider โควตาหมดหรือขัดข้อง",
              tradeoff: "ต้องมี logic normalize และจัดการ stale data ให้ดี เพื่อไม่ให้ UI แสดงข้อมูลคนละรูปแบบปะปนกัน"
            }
          ],
          scalingAndResilience: {
            strategy: "DATA FALLBACKS, COMMUNITY MODERATION และ ROUTE-LEVEL AUTH GUARDS",
            description: "เส้นทางข้อมูลฟุตบอล fallback เป็น fixtures ที่เก็บไว้หรือ empty payload แทนการทำให้ dashboard พัง ส่วน community write ถูกป้องกันด้วย authenticated APIs และ middleware แยก admin-only data management/moderation ออกจาก traffic ผู้ใช้ทั่วไป"
          }
        },
        "patient-operations-system": {
          title: "Patient Operations System",
          description:
            "ระบบจัดการข้อมูลผู้ป่วย ตารางนัดหมาย และงานของสถานพยาบาล หน้าจอเน้นสถานะที่อ่านง่าย ข้อมูลเป็นระเบียบ และเข้าถึงข้อมูลผู้ป่วยได้เร็ว",
          challenge:
            "ออกแบบข้อมูลผู้ป่วยและนัดหมาย, flow ตามบทบาทผู้ใช้ และหน้าจอสำหรับงานประจำวัน",
          outcome:
            "staff ตรวจสถานะผู้ป่วยและนัดหมายได้โดยไม่ต้องไล่หาข้อมูลหลายที่",
          databaseSchema: {
            description: "ออกแบบฐานข้อมูลความสัมพันธ์ด้านสุขภาพที่เสถียรและเชื่อมโยงกันชัดเจนตามมาตรฐานข้อมูลคลินิกและโรงพยาบาล",
            sql: `// แบบจำลองฐานข้อมูลเวชระเบียนโรงพยาบาล
model Patient {
  id          String        @id @default(uuid())
  name        String
  records     Record[]
  appointments Appointment[]
}

model Appointment {
  id          String   @id @default(uuid())
  patientId   String
  patient     Patient  @relation(fields: [patientId], references: [id])
  status      String   -- 'pending' | 'completed' | 'cancelled'
}`
          },
          tradeoffs: [
            {
              choice: "การตรวจสอบสิทธิ์แบบ RBAC เทียบกับ ABAC",
              why: "โครงสร้างสิทธิ์ตามบทบาท (แพทย์, พนักงานหน้าเคาน์เตอร์, แอดมิน) ช่วยให้จำแนกความปลอดภัยของข้อมูลคนไข้ได้ชัดเจนและตรวจสอบประวัติการแก้ไขได้ง่ายที่สุด",
              tradeoff: "มีความยืดหยุ่นน้อยกว่าแบบอิงคุณลักษณะส่วนบุคคล ซึ่งยากต่อการกำหนดข้อยกเว้นแบบเคสพิเศษเฉพาะคน"
            }
          ],
          scalingAndResilience: {
            strategy: "ระบบจัดการดัชนีและการย้ายข้อมูลออก (Database Archiving)",
            description: "ใช้ Database Indexing กับฟิลด์ค้นหาหลักเพื่อรักษาระดับความเร็วในการแสดงผล และทำการ Archive นัดหมายที่สิ้นสุดเกิน 1 ปีออกนอกตารางงานหลักเพื่อลดปริมาณการสแกนค้นข้อมูลดิสก์"
          }
        },
        "rider-delivery-app": {
          title: "Delivery Operations Platform",
          description:
            "แพลตฟอร์มบริหารงานโลจิสติกส์และระบบการส่งพัสดุแบบเรียลไทม์ ประกอบด้วยแอปพลิเคชันไรเดอร์ส่งของ, ระบบพิกัดนำทางบนแผนที่ และหน้าจอควบคุมการจ่ายงานอัตโนมัติ",
          challenge:
            "ทำหน้าจอตาม role, จัดการสถานะการส่ง, map tracking และ sync ข้อมูลผ่าน Firebase",
          outcome:
            "ลูกค้าและไรเดอร์เห็น progress เดียวกัน ทำให้ตามงานส่งของได้ง่ายขึ้น",
          systemArchitecture: {
            description: "ระบบควบคุมทิศทางพัสดุและวิเคราะห์งานปฏิบัติการเดินส่งของ รองรับการคำนวณตำแหน่งและการอัปเดตสถานะงานส่งพัสดุอย่างแม่นยำในระดับเสี้ยววินาที",
            diagram: ` [ผู้สั่งซื้อสินค้า] ──(WebSockets)──► [เซ็นเตอร์ควบคุมการเดินรถ]
                                              ▲
                                              │ (อัปเดตสถานะเสี้ยววินาที)
                                              ▼
     [แอปบนมือถือไรเดอร์] ──(Firebase Sync)──► [หน้าจอพิกัดสดนำทาง]`
          },
          tradeoffs: [
            {
              choice: "Firebase Realtime DB เทียบกับ Custom WebSockets",
              why: "ตอบสนองการอัปเดตพิกัด GPS ระหว่างไรเดอร์บนท้องถนนกับพนักงานที่ออฟฟิศได้เรียลไทม์ และช่วยซิงก์ข้อมูลกลับอัตโนมัติเมื่ออุปกรณ์ขาดการเชื่อมต่ออินเทอร์เน็ต",
              tradeoff: "สร้างข้อผูกมัดทางเทคโนโลยีเข้ากับบริการ Google Cloud Platform ซึ่งยากต่อการย้ายระบบในอนาคตและมีค่าบริการตามปริมาณข้อมูลรับส่ง"
            }
          ],
          scalingAndResilience: {
            strategy: "การควบคุมความถี่ข้อมูลด้วย LOCATION THROTTLING บนอุปกรณ์",
            description: "ระบบบนแอปมือถือจะตรวจคัดกรองพิกัด GPS โดยอิงจากระยะทางที่เคลื่อนที่จริงก่อนทำการจัดส่งแพ็กเกจข้อมูลขึ้นระบบหลัก ช่วยลดทราฟฟิกเครือข่ายลงได้กว่า 60% และช่วยยืดอายุแบตเตอรี่บนมือถือของคนขับรถ"
          }
        },
        "movie-management": {
          title: "Movie Operations Dashboard",
          description:
            "Frontend จัดการภาพยนตร์ด้วย React และ TypeScript สำหรับงานสอบ มีระบบยืนยันตัวตน จัดการหนัง อัปโหลดโปสเตอร์ มุมมอง list/grid และควบคุมสิทธิ์ตาม role ผ่าน REST API",
          challenge:
            "ทำ login/register, ตรวจ session ของ dashboard, CRUD หนัง, validate rating, upload poster, search/sort และซ่อนปุ่มลบตามสิทธิ์ โดยให้ backend ตรวจ MANAGER ซ้ำอีกชั้น",
          outcome:
            "ได้ dashboard ที่ responsive สำหรับ MANAGER, TEAMLEADER และ FLOORSTAFF โดย MANAGER ใช้ทดสอบการลบได้ ส่วน session ใช้ HttpOnly cookie และ Axios withCredentials",
          systemArchitecture: {
            description: "Frontend เป็น Vite React app ที่เรียก Node/Express API ผ่าน path /api ทั้งตอนรัน local และ deploy บน Vercel เพื่อให้ cookie ทำงานแบบ same-origin. ProtectedRoute โหลด /auth/me เพื่อตรวจ session และ Axios client รวมการส่ง credential กับการจัดการ 401 ไว้จุดเดียว",
            diagram: ` [React Router App]
          |
          v
 [ProtectedRoute + Auth Store] -- /auth/me session check
          |
          v
 [Axios Client withCredentials] -- VITE_API_BASE_URL=/api
          |
          v
 [Express REST API]
          |
          +--> [Auth: login, register, logout, JWT cookie]
          +--> [Movies: CRUD, poster upload, RBAC delete guard]
          |
          v
 [Prisma ORM + PostgreSQL]`
          },
          databaseSchema: {
            description: "Backend ใช้ model ผู้ใช้และหนังแบบตรงไปตรงมาสำหรับ scope งานสอบ แต่ยังคงแยก role ชัดเจน ผู้ใช้ที่สมัครใหม่ถูกกำหนดเป็น FLOORSTAFF และการลบจำกัดเฉพาะ MANAGER",
            sql: `model User {
  id        Int      @id @default(autoincrement())
  username  String   @unique
  password  String
  role      Role     @default(FLOORSTAFF)
}

model Movie {
  id           Int      @id @default(autoincrement())
  title        String
  yearReleased Int
  rating       Rating
  imageUrl     String?
}

enum Role {
  MANAGER
  TEAMLEADER
  FLOORSTAFF
}

enum Rating {
  G
  PG
  M
  MA
  R
}`
          },
          tradeoffs: [
            {
              choice: "HttpOnly cookie session vs localStorage token",
              why: "ให้ browser ส่ง session อัตโนมัติ โดย JavaScript อ่าน token ไม่ได้ ลดความเสี่ยงเมื่อ client มีปัญหาด้าน XSS",
              tradeoff: "ต้องตั้ง proxy/rewrite ให้เป็น same-origin และส่ง withCredentials ทุกครั้งที่เรียก API"
            },
            {
              choice: "Client-side search and sorting",
              why: "รายการหนังมีขนาดเล็กและโหลดมาแล้ว จึงค้นหาตามชื่อและเรียงตามปี ชื่อ หรือ rating ได้เร็วโดยไม่ต้องเพิ่ม endpoint",
              tradeoff: "ถ้าข้อมูลใหญ่ขึ้นควรย้ายไปใช้ pagination และ query ฝั่ง API"
            },
            {
              choice: "Hide manager-only delete in UI while enforcing RBAC in backend",
              why: "TEAMLEADER และ FLOORSTAFF เห็นหน้าจอที่ไม่รก แต่ backend ยังเป็นด่านสุดท้ายของ action ที่ทำลายข้อมูล",
              tradeoff: "ต้องดูแล permission ทั้งใน UI และ middleware ให้สอดคล้องกัน"
            }
          ],
          scalingAndResilience: {
            strategy: "SESSION RECOVERY, API SERVICES, AND MEMOIZED DASHBOARD DATA",
            description: "Auth helper ล้าง cache ผู้ใช้และ redirect กลับ login เมื่อเจอ 401. การเรียก API ถูกแยกเป็น service classes และใช้ useMemo กับ summary card, search result และ sorted view เพื่อลดงานคำนวณซ้ำ"
          }
        },
        "thai-ai-chatbot": {
          title: "Thai AI Chat Assistant",
          description:
            "แชตบอต AI ภาษาไทยสำหรับถามตอบ ขอไอเดีย และขอคำแนะนำแบบง่าย ๆ หน้าจอออกแบบให้เหมือนแชตทั่วไปเพื่อให้เริ่มใช้งานได้เร็ว",
          challenge:
            "ทำ chat loop, AI routing ฝั่ง server, ซ่อน API key, จำกัดประวัติข้อความ และจัดการ error state",
          outcome:
            "เก็บ logic ที่อ่อนไหวไว้ฝั่ง server และให้ผู้ใช้ไทยคุยกับ AI ผ่าน browser ได้ง่าย",
        },
        "childcare-dashboard": {
          title: "Childcare Dashboard",
          description:
            "Dashboard ติดตามพัฒนาการเด็ก กิจกรรม การชำระเงิน เงินออม และรายงาน รวมงาน admin หลายส่วนไว้ในหน้าจอเดียว",
          challenge:
            "จัดข้อมูลหลายหมวดให้เป็น dashboard เดียว พร้อมกราฟ, export รายงาน และ layout ที่ responsive",
          outcome:
            "ผู้ใช้ดูพัฒนาการและสถานะการชำระเงินได้เร็ว แล้ว export รายงานไปใช้งานต่อได้",
        },
      },
    },
    certificates: {
      eyebrow: "Certificates",
      title: "ใบรับรองด้าน AI, Cloud, SQL และเครื่องมือสำหรับนักพัฒนา",
      subtitle:
        "รวมคอร์สที่เรียนควบคู่กับการทำโปรเจกต์ เน้นหัวข้อที่นำมาใช้กับงานเว็บและ full-stack development ได้",
      view: "ดูใบรับรอง",
    },
    stack: {
      eyebrow: "Skills and stack",
      title: "เครื่องมือที่ใช้",
      subtitle:
        "สรุป stack ที่ใช้ในงานเว็บ มือถือ และ backend",
      groups: {
        frontendMobile: {
          title: "Frontend / Mobile",
          description: "ทำเว็บและแอปด้วย React, Next.js, Angular, Flutter และ TypeScript",
        },
        backend: {
          title: "Backend",
          description: "ทำ API, logic ฝั่ง server, integration และ service development",
        },
        database: {
          title: "Database",
          description: "ใช้ฐานข้อมูล relational และ Firebase สำหรับ flow ของแอป",
        },
        toolsOrm: {
          title: "Tools & ORM",
          description: "เครื่องมือสำหรับพัฒนา ทดสอบ API ออกแบบ ทำ container และจัดการข้อมูล",
        },
        aiTools: {
          title: "AI Tools",
          description: "เครื่องมือ AI ที่ใช้ช่วยเขียนโค้ด สำรวจแนวทาง และทำงานได้เร็วขึ้น",
        },
      },
    },
    experience: {
      eyebrow: "Experience",
      title: "ประสบการณ์ฝึกงาน",
      subtitle:
        "ได้ทำระบบงานเดินรถโดยสาร ทั้งแอปฝั่งผู้โดยสาร dashboard ภายใน ข้อมูลฝั่ง backend และ script สำหรับงาน automation",
      type: "Internship",
      signalTitle: "ประสบการณ์นี้บอกอะไร",
      achievements: [
        "ทำฟีเจอร์ทั้งฝั่งผู้โดยสารและทีม operation ภายใน",
        "ทำงานกับ login, payment, map, camera feed, Prisma schema และ Linux script",
        "แปลง workflow งานจริงให้เป็นหน้าจอและเครื่องมือฝั่ง backend",
      ],
      items: {
        "bussing-fullstack": {
          role: "Full-Stack Developer Intern",
          description:
            "พัฒนาฟีเจอร์สำหรับงานเดินรถโดยสาร ทั้ง LINE LIFF/web app ฝั่งผู้โดยสารและ dashboard ภายในบริษัท งานที่ทำมี flow ซื้อตั๋ว login ชำระเงิน หน้าจอติดตาม operation และโครงสร้างข้อมูลฝั่ง backend",
          highlights: [
            "ทำ flow digital bus card สำหรับซื้อตั๋ว, online payment, LINE Login, email login และ secure session",
            "สร้างหน้าจอ monitoring ภายในสำหรับ camera feed, live map, passenger activity และสถานะงานเดินรถ",
            "ออกแบบ schema ด้วย Prisma และเขียน Linux automation script สำหรับ video recording pipeline",
          ],
        },
      },
    },
    about: {
      eyebrow: "About",
      title: "เกี่ยวกับผม",
      subtitle:
        "ผมชอบทำ software ที่เรียบง่าย ใช้งานได้จริง และดูแลต่อได้",
      notes: [
        "งานหลักของผมอยู่ที่ full-stack TypeScript ตั้งแต่ API และฐานข้อมูล ไปจนถึงหน้าจอที่ผู้ใช้เห็น",
        "โปรเจกต์ที่เคยทำมีทั้ง dashboard, AI tools, mobile app และ IoT",
      ],
      principles: [
        "ชัดเจนก่อนสวยซับซ้อน",
        "ดีไซน์เพื่อการใช้งานซ้ำทุกวัน",
        "interaction เล็ก ๆ ต้องมีเหตุผล",
        "โค้ดควรแก้ต่อได้โดยไม่เจ็บปวด",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "คุยกันได้ครับ",
      subtitle:
        "ส่งตำแหน่งงาน โปรเจกต์ หรือคำถามมาได้เลยครับ",
      directChannels: "ช่องทางติดต่อ",
      linkedinProfile: "LinkedIn profile",
      name: "ชื่อ",
      namePlaceholder: "ชื่อของคุณ",
      email: "อีเมล",
      emailPlaceholder: "you@company.com",
      message: "ข้อความ",
      messagePlaceholder: "เล่าเรื่องตำแหน่งงาน แอป หรือโจทย์ทาง engineering ได้เลย",
      sending: "กำลังส่ง",
      success: "ส่งข้อความแล้ว",
      send: "ส่งข้อความ",
      error: "มีบางอย่างผิดพลาด ส่งอีเมลหาผมโดยตรงได้เลยครับ",
    },
    footer: {
      builtWith: "สร้างด้วย Next.js, TypeScript, Tailwind CSS และ Framer Motion",
    },
  },
} as const;
