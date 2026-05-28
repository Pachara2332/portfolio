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
      availability: "Portfolio and selected work",
      headline: "Pachara Wongsasri",
      intro:
        "I'm a developer. This site collects projects I have built across web apps, dashboards, AI tools, mobile apps, and IoT.",
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
            "Enterprise AI SaaS built on Next.js 16, Postgres, and ChromaDB. Supports multi-tenant federated OAuth (Credentials, Google, GitHub, LINE), streaming chat, and a resilient multi-provider AI failover chain.",
          challenge:
            "Architected federated OAuth pathways, engineered a token-bucket rate limiter, built a dynamic HSL CSS variables theme system, and created a zero-downtime AI failover sequence (Gemini primary with Together, Cerebras, Groq, OpenAI fallbacks).",
          outcome:
            "Shipped a highly responsive and stunning production-style AI platform with robust vector RAG retrieval, real-time telemetry, and containerized Docker Compose architecture.",
        },
        "movie-management": {
          title: "Movie Operations Dashboard",
          description:
            "Movie catalog dashboard for managing titles, posters, users, and staff roles. The app separates frontend and backend work, with protected pages for content operations.",
          challenge:
            "Implemented login, cookie-based auth, role checks, poster upload, search, sorting, and API integration.",
          outcome:
            "Manager-only actions stay protected while staff can still manage daily movie content.",
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
        "eleven-lineup": {
          title: "Eleven Lineup",
          description:
            "Football lineup builder with drag-and-drop team setup, user profiles, permissions, and prediction games. It combines an interactive pitch UI with full-stack account features.",
          challenge:
            "Handled pitch state, JWT auth in HTTP-only cookies, middleware permissions, Prisma models, and streak logic.",
          outcome:
            "Users can create lineups, manage profiles, and return for prediction-game activity.",
        },
        "patient-operations-system": {
          title: "Patient Operations System",
          description:
            "Healthcare app for patient records, appointments, and staff workflows. The screens focus on clear status, structured data, and quick access to patient information.",
          challenge:
            "Modeled patient and appointment data, designed role-aware flows, and built operational pages for daily use.",
          outcome:
            "Staff can check patient and appointment status without searching through scattered information.",
        },
        "childcare-dashboard": {
          title: "Childcare Dashboard",
          description:
            "Childcare dashboard for development records, activities, payments, savings, and reports. It brings several admin tasks into one place for teachers or staff.",
          challenge:
            "Organized many data sections into one dashboard with charts, report export, and responsive layouts.",
          outcome:
            "Users can review child progress and payment status quickly, then export reports when needed.",
        },
        "roommate-finder": {
          title: "Roommate Finder Platform",
          description:
            "Roommate matching platform with profiles, preference filters, real-time chat, reviews, and image uploads. It is built around helping users compare compatibility before contacting each other.",
          challenge:
            "Built Socket.io conversations, typing indicators, image handling with AWS S3, matching preferences, and review flows.",
          outcome:
            "Users can filter, chat, and review profiles before making a shared-living decision.",
        },
        "soil-iot-dashboard": {
          title: "Soil Intelligence IoT Dashboard",
          description:
            "IoT dashboard for soil readings, moisture, GPS data, and crop suggestions. Sensor data from ESP32 devices is sent into a dashboard for easier field monitoring.",
          challenge:
            "Connected RS485 NPK sensors, GPS, ESP32 firmware, Firebase streaming, role access, and crop recommendation logic.",
          outcome:
            "Raw field readings become easier to understand for crop selection and fertilizer planning.",
        },
        "lotto-app": {
          title: "Lotto App",
          description:
            "Flutter lottery app for buying tickets and managing vendor stock. Customers can browse available tickets while vendors update inventory from their side.",
          challenge:
            "Designed purchase flows, real-time stock state, bundle selection, vendor inventory screens, and Firebase updates.",
          outcome:
            "The app reduces cases where customers choose tickets that are already unavailable.",
        },
        "rider-delivery-app": {
          title: "Rider Delivery App",
          description:
            "Flutter delivery app with separate customer and rider flows, order status, and live maps. Both sides can follow the delivery state from pickup to completion.",
          challenge:
            "Built role-specific mobile screens, delivery status transitions, map tracking, and Firebase synchronization.",
          outcome:
            "Customers and riders see the same delivery progress, which makes the flow easier to follow.",
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
      availability: "Portfolio and selected work",
      headline: "พชร วงษาศรี",
      intro:
        "ผมเป็น developer เว็บนี้รวมโปรเจกต์ที่เคยทำ ทั้งเว็บแอป dashboard, AI tools, mobile app และ IoT",
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
            "แพลตฟอร์ม AI SaaS ระดับองค์กรที่พัฒนาด้วย Next.js 16, PostgreSQL และ ChromaDB รองรับระบบสิทธิ์การเข้าถึงแบบ multi-tenant, การล็อกอินผ่าน OAuth (Google, GitHub, LINE), การแชตแบบสตรีมมิ่งเรียลไทม์ และระบบสลับผู้ให้บริการ AI อัตโนมัติ (Failover)",
          challenge:
            "ออกแบบระบบยืนยันตัวตนกับผู้ให้บริการภายนอก 4 ราย, ทำระบบจำกัดคำขอ (Rate Limiter), พัฒนาระบบธีม HSL พร้อมการซิงก์ระดับ root ทันที และสร้างวงจร failover สำหรับ AI ที่ทนทานเพื่อป้องกันระบบล่ม",
          outcome:
            "ส่งมอบแพลตฟอร์มระดับโปรดักชันจำลองที่มีระบบความปลอดภัยสูง ค้นหาข้อมูลแบบ RAG ผ่าน ChromaDB และ UI ที่สวยงามลื่นไหล พร้อมระบบจำลอง Telemetry และสามารถดีพลอยได้ทันทีผ่าน Docker Compose",
        },
        "movie-management": {
          title: "Movie Operations Dashboard",
          description:
            "Dashboard จัดการหนังสำหรับดูแล title, poster, user และ role ของทีมงาน แยก frontend/backend และมีหน้าที่ต้อง login ก่อนใช้งาน",
          challenge:
            "ทำ login, cookie-based auth, role check, อัปโหลดโปสเตอร์, ค้นหา, sort และเชื่อม API",
          outcome:
            "action สำคัญถูกจำกัดตามสิทธิ์ แต่ staff ยังจัดการข้อมูลประจำวันได้สะดวก",
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
        "eleven-lineup": {
          title: "Eleven Lineup",
          description:
            "เว็บจัดทีมฟุตบอลแบบ drag-and-drop พร้อม profile, permission และเกมทายผล รวมหน้าจอสนามที่ interactive กับระบบ account แบบ full-stack",
          challenge:
            "จัดการ state ของสนาม, JWT auth ผ่าน HTTP-only cookies, middleware permission, Prisma models และระบบ streak",
          outcome:
            "ผู้ใช้สร้าง lineup, จัดการ profile และกลับมาเล่นกิจกรรมทายผลได้",
        },
        "patient-operations-system": {
          title: "Patient Operations System",
          description:
            "ระบบจัดการข้อมูลผู้ป่วย ตารางนัดหมาย และงานของสถานพยาบาล หน้าจอเน้นสถานะที่อ่านง่าย ข้อมูลเป็นระเบียบ และเข้าถึงข้อมูลผู้ป่วยได้เร็ว",
          challenge:
            "ออกแบบข้อมูลผู้ป่วยและนัดหมาย, flow ตามบทบาทผู้ใช้ และหน้าจอสำหรับงานประจำวัน",
          outcome:
            "staff ตรวจสถานะผู้ป่วยและนัดหมายได้โดยไม่ต้องไล่หาข้อมูลหลายที่",
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
        "roommate-finder": {
          title: "Roommate Finder Platform",
          description:
            "แพลตฟอร์มหา roommate มี profile, preference filter, real-time chat, review และอัปโหลดรูป ช่วยให้ผู้ใช้เทียบความเข้ากันได้ก่อนเริ่มคุย",
          challenge:
            "ทำ Socket.io chat, typing indicator, จัดการรูปผ่าน AWS S3, matching preference และ review flow",
          outcome:
            "ผู้ใช้กรองข้อมูล แชต และดูรีวิวก่อนตัดสินใจเรื่องการอยู่ร่วมกันได้",
        },
        "soil-iot-dashboard": {
          title: "Soil Intelligence IoT Dashboard",
          description:
            "IoT dashboard สำหรับค่าดิน ความชื้น GPS และคำแนะนำเรื่องพืช ข้อมูลจาก ESP32 ถูกส่งเข้า dashboard เพื่อดูสถานะพื้นที่ได้ง่ายขึ้น",
          challenge:
            "เชื่อม RS485 NPK sensors, GPS, firmware บน ESP32, Firebase streaming, role access และ logic แนะนำพืช",
          outcome:
            "ค่าจาก sensor ถูกแปลงเป็นข้อมูลที่อ่านง่าย สำหรับเลือกพืชและวางแผนการใช้ปุ๋ย",
        },
        "lotto-app": {
          title: "Lotto App",
          description:
            "แอป Flutter สำหรับซื้อหวยและจัดการสต็อกของ vendor ลูกค้าดูเลขที่เปิดขายได้ ส่วน vendor จัดการ inventory จากฝั่งของตัวเอง",
          challenge:
            "ทำ flow การซื้อ, stock แบบ real-time, การเลือกซื้อเป็นชุด, หน้าจอ inventory และ sync ข้อมูลด้วย Firebase",
          outcome:
            "ช่วยลดกรณีลูกค้าเลือกใบที่หมดแล้ว และทำให้ vendor คุมเลขที่เปิดขายได้ชัดขึ้น",
        },
        "rider-delivery-app": {
          title: "Rider Delivery App",
          description:
            "แอปส่งของด้วย Flutter มี flow แยกสำหรับลูกค้าและไรเดอร์ พร้อมสถานะออเดอร์และแผนที่ ทั้งสองฝั่งดูสถานะการส่งได้ตั้งแต่รับงานจนเสร็จ",
          challenge:
            "ทำหน้าจอตาม role, จัดการสถานะการส่ง, map tracking และ sync ข้อมูลผ่าน Firebase",
          outcome:
            "ลูกค้าและไรเดอร์เห็น progress เดียวกัน ทำให้ตามงานส่งของได้ง่ายขึ้น",
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
