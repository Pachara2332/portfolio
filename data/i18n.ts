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
      availability: "Available for full-stack, software, frontend, and backend roles",
      headline: "I build clear web applications with practical full-stack foundations.",
      intro:
        "I am Pachara Wongsasri, a full-stack developer comfortable across frontend and backend work. I build web applications, dashboards, AI interfaces, and real-time features with a focus on clear UI, maintainable code, and reliable system behavior.",
      viewWork: "View selected work",
      downloadResume: "Download resume",
      emailMe: "Email me",
      profileTitle: "Engineering profile",
      profileAria: "Professional summary",
      stats: [
        { label: "Project work", value: "10+" },
        { label: "Core stack", value: "Next.js / TS" },
        { label: "Focus", value: "Full-stack apps" },
      ],
      strengths: [
        "Frontend and backend implementation from data model to user workflow",
        "Dashboards and admin tools that are easy to scan and use",
        "Auth, roles, payments, uploads, real-time state, and deployment details",
        "AI-assisted interfaces with server-side routing and practical failure states",
      ],
    },
    projects: {
      eyebrow: "Selected projects",
      title: "Projects",
      challenge: "Challenge",
      outcome: "Outcome",
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
          title: "Trainee Knowledge Assistant",
          description:
            "AI study workspace that helps trainees ask questions against lessons and uploaded files through a secure chat interface.",
          challenge:
            "Kept model credentials server-side, reduced prompt payload size, handled file-aware Q&A states, and added provider fallbacks so the app stays useful during API issues.",
          outcome:
            "Turned training material into a faster self-service support channel with clear loading, error, and recovery states.",
        },
        "movie-management": {
          title: "Movie Operations Dashboard",
          description:
            "Authenticated movie catalog dashboard for teams managing titles, posters, roles, and review-ready content workflows.",
          challenge:
            "Designed protected dashboard flows, cookie-based auth, role-aware destructive actions, poster uploads, search, sorting, and API integration against a separate backend.",
          outcome:
            "Created an internal tool pattern that makes content operations safer and faster without exposing manager-only actions to staff roles.",
        },
        "thai-ai-chatbot": {
          title: "Thai AI Chat Assistant",
          description:
            "Thai-language AI assistant for everyday Q&A and recommendations, optimized for a simple browser-based chat experience.",
          challenge:
            "Built the full chat loop with server-side AI routing, guarded API keys, recent-history trimming, error states, and provider fallback behavior.",
          outcome:
            "Delivered a responsive AI product that feels approachable for Thai users while keeping operational concerns out of the client.",
        },
        "eleven-lineup": {
          title: "Eleven Lineup",
          description:
            "Football lineup builder with drag-and-drop squad creation, social profiles, RBAC, and prediction game mechanics.",
          challenge:
            "Combined interactive pitch state, custom JWT auth in HTTP-only cookies, middleware-based permissions, Prisma models, and streak-based game flows.",
          outcome:
            "Shipped a full-stack SaaS-style product with clear user identity, community behavior, and replayable engagement loops.",
        },
        "patient-operations-system": {
          title: "Patient Operations System",
          description:
            "Healthcare operations app for managing patient records, appointment scheduling, and facility-level workflows.",
          challenge:
            "Modeled clinical data carefully, designed role-aware workflows, and built operational screens that prioritize accuracy over decoration.",
          outcome:
            "Improved visibility into patient and appointment status for teams that need dependable, scan-friendly interfaces.",
        },
        "childcare-dashboard": {
          title: "Childcare Dashboard",
          description:
            "Management dashboard for childcare teams tracking development, activities, savings, payments, and reports.",
          challenge:
            "Organized multiple operational domains into a dashboard with data visualization, export flows, and responsive information density.",
          outcome:
            "Helped non-technical users understand child progress and payment status quickly, then export reports for offline sharing.",
        },
        "roommate-finder": {
          title: "Roommate Finder Platform",
          description:
            "Matching platform with real-time chat, profile reviews, preference filters, and AWS S3 image handling.",
          challenge:
            "Built persisted Socket.io conversations, typing indicators, image upload automation, matching preferences, and peer review flows.",
          outcome:
            "Created a trust-focused marketplace experience where users can compare compatibility before committing to a shared living decision.",
        },
        "soil-iot-dashboard": {
          title: "Soil Intelligence IoT Dashboard",
          description:
            "Field data system that streams soil minerals, moisture, and GPS readings from ESP32 devices into an Angular dashboard.",
          challenge:
            "Integrated RS485 NPK sensors, GPS, ESP32 firmware, Firebase streaming, role-based access, and crop recommendation logic.",
          outcome:
            "Converted raw sensor readings into practical farming insight for crop selection and fertilizer planning.",
        },
        "lotto-app": {
          title: "Lotto App",
          description:
            "Flutter lottery platform for customers and vendors with ticket stock visibility, bundle purchasing, and inventory controls.",
          challenge:
            "Designed mobile purchase flows around real-time stock state, bundle selection, vendor-side inventory management, and Firebase-backed data updates.",
          outcome:
            "Created a clearer buying and stock management experience so vendors can control availability while customers avoid unavailable tickets.",
        },
        "rider-delivery-app": {
          title: "Rider Delivery App",
          description:
            "Flutter delivery app with customer and rider roles, order status handling, and Firebase-backed live map tracking.",
          challenge:
            "Built role-specific mobile flows, delivery status transitions, map-based tracking, and Firebase synchronization for real-time visibility.",
          outcome:
            "Gave customers and riders a shared delivery state, reducing uncertainty around pickup, transit, and arrival progress.",
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
      title: "A practical full-stack toolkit for web application work.",
      subtitle:
        "Tools I use for building interfaces, APIs, data flows, integrations, and deployment workflows.",
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
      title: "Experience across operations, data, and user-facing flows.",
      subtitle:
        "The work spans customer access, internal monitoring, backend data modeling, and the unglamorous details that make software dependable.",
      type: "Internship",
      signalTitle: "What this signals",
      achievements: [
        "Built passenger-facing and internal systems in the same operational domain",
        "Worked across auth, payments, maps, camera feeds, Prisma schemas, and Linux scripts",
        "Translated real business workflows into screens that operators can scan quickly",
      ],
      items: {
        "bussing-fullstack": {
          role: "Full-Stack Developer Intern",
          description:
            "Built features for public bus operations across passenger-facing LINE LIFF/web apps and internal dashboards.",
          highlights: [
            "Delivered digital bus card flows for ticket purchase, online payment, LINE Login, email login, and secure sessions",
            "Built real-time operations screens for camera feeds, live maps, and activity monitoring",
            "Designed Prisma-backed schemas and Linux automation scripts for video recording pipelines",
          ],
        },
      },
    },
    about: {
      eyebrow: "About",
      title: "Detail-oriented, adaptable, and comfortable across the stack.",
      subtitle:
        "I like building software that is clear for users and maintainable for developers.",
      notes: [
        "I care about interfaces that help people make decisions quickly. My best work is practical developer work: dashboards, workflow tools, AI assistants, and systems that turn messy real-world processes into clear screens.",
        "I have built across web, mobile, IoT, and AI projects, but my center of gravity is full-stack TypeScript. I enjoy working from schema design and API behavior through to the UI details that users actually touch.",
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
      title: "Have a developer role or system that needs a careful builder?",
      subtitle:
        "Send the context, constraints, and timeline. I respond best when the problem is concrete.",
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
      availability: "เปิดรับโอกาสงาน Full-stack, Software, Frontend และ Backend Developer",
      headline: "ผมพัฒนาเว็บแอปที่หน้าตาชัดเจน ใช้งานง่าย และดูแลต่อได้",
      intro:
        "ผม พชร วงษาศรี, Full-stack Developer ที่ทำได้ทั้ง frontend และ backend ผมพัฒนาเว็บแอป dashboard ฟีเจอร์ AI และงาน real-time โดยโฟกัสที่ UI ที่เข้าใจง่าย โค้ดที่ดูแลต่อได้ และ flow ที่ผู้ใช้ใช้งานได้สะดวก",
      viewWork: "ดูผลงานที่คัดมา",
      downloadResume: "ดาวน์โหลดเรซูเม่",
      emailMe: "ส่งอีเมล",
      profileTitle: "สรุปภาพรวม",
      profileAria: "สรุปประสบการณ์และจุดแข็ง",
      stats: [
        { label: "โปรเจกต์", value: "10+" },
        { label: "สแต็กหลัก", value: "Next.js / TS" },
        { label: "โฟกัส", value: "Full-stack apps" },
      ],
      strengths: [
        "ทำงานได้ตั้งแต่ data model, API ไปจนถึง flow ที่ผู้ใช้ต้องเจอ",
        "ทำ dashboard และ admin tools ให้ข้อมูลอ่านง่ายและใช้งานสะดวก",
        "จัดการ auth, roles, payments, uploads, real-time state และรายละเอียดตอน deploy",
        "สร้าง AI interface ที่แยกงานฝั่ง server ชัดเจน และมี state รองรับเวลาระบบผิดพลาด",
      ],
    },
    projects: {
      eyebrow: "Selected projects",
      title: "โปรเจกต์",
      challenge: "โจทย์",
      outcome: "ผลลัพธ์",
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
          title: "Trainee Knowledge Assistant",
          description:
            "เว็บแอปผู้ช่วยเรียนรู้ด้วย AI ให้ trainee ถามคำถามจากบทเรียนและไฟล์ที่อัปโหลดได้ผ่านหน้าจอแชตที่ปลอดภัย",
          challenge:
            "ย้าย credential ของโมเดลไปไว้ฝั่ง server, คุมขนาด prompt, รองรับการถามตอบจากไฟล์ และวาง fallback provider เผื่อกรณี API หลักมีปัญหา",
          outcome:
            "ทำให้เอกสาร training กลายเป็นช่องทาง self-service ที่ตอบคำถามได้เร็วขึ้น พร้อมสถานะ loading, error และ recovery ที่เข้าใจง่าย",
        },
        "movie-management": {
          title: "Movie Operations Dashboard",
          description:
            "Dashboard สำหรับทีม content ในการจัดการ movie catalog, poster, role และ workflow หลังบ้าน",
          challenge:
            "ออกแบบ dashboard ที่ต้อง login, ใช้ cookie-based auth, จำกัด action ตาม role, ทำ poster upload, search, sorting และเชื่อมต่อ backend ที่แยกออกมา",
          outcome:
            "ช่วยให้ทีมจัดการ content ได้ปลอดภัยขึ้น และลดความเสี่ยงจากการเปิด action สำคัญให้คนที่ไม่มีสิทธิ์",
        },
        "thai-ai-chatbot": {
          title: "Thai AI Chat Assistant",
          description:
            "AI assistant ภาษาไทยสำหรับถามตอบและขอคำแนะนำ ผ่านหน้าจอแชตที่ใช้งานง่ายบน browser",
          challenge:
            "สร้าง chat flow ครบชุด ตั้งแต่ routing ฝั่ง server, การซ่อน API key, การจำกัดประวัติข้อความ, error state และ fallback provider",
          outcome:
            "ได้ AI product ที่ผู้ใช้ไทยเข้าถึงง่าย โดยแยกงานที่อ่อนไหวและงาน operation ออกจาก client",
        },
        "eleven-lineup": {
          title: "Eleven Lineup",
          description:
            "เว็บแอปจัดทีมฟุตบอลแบบ drag-and-drop พร้อม profile, RBAC และระบบเกมทายผล",
          challenge:
            "รวม state ของสนามแบบ interactive, JWT auth ผ่าน HTTP-only cookies, permission ใน middleware, Prisma models และ flow เกมแบบนับ streak",
          outcome:
            "กลายเป็น full-stack product ที่มีระบบตัวตนผู้ใช้ พฤติกรรมแบบ community และเหตุผลให้กลับมาใช้งานซ้ำ",
        },
        "patient-operations-system": {
          title: "Patient Operations System",
          description:
            "ระบบสำหรับจัดการข้อมูลผู้ป่วย ตารางนัดหมาย และงานหลังบ้านของสถานพยาบาล",
          challenge:
            "ออกแบบ data model สำหรับข้อมูลทางคลินิก, workflow ตามบทบาทผู้ใช้ และหน้าจอที่เน้นความถูกต้องมากกว่าความหวือหวา",
          outcome:
            "ช่วยให้ทีมเห็นสถานะผู้ป่วยและนัดหมายได้ชัดขึ้น ผ่าน interface ที่อ่านง่ายและไว้ใจได้",
        },
        "childcare-dashboard": {
          title: "Childcare Dashboard",
          description:
            "Dashboard สำหรับติดตามพัฒนาการเด็ก กิจกรรม เงินออม การชำระเงิน และรายงานต่าง ๆ",
          challenge:
            "จัดข้อมูลหลายส่วนให้อยู่ใน dashboard เดียว พร้อม visualization, export flow และ layout ที่ดูได้ดีทุกขนาดหน้าจอ",
          outcome:
            "ช่วยให้ผู้ใช้ที่ไม่ใช่สายเทคนิคเข้าใจพัฒนาการและสถานะการชำระเงินได้เร็ว พร้อม export รายงานไปใช้งานต่อ",
        },
        "roommate-finder": {
          title: "Roommate Finder Platform",
          description:
            "แพลตฟอร์มหา roommate พร้อมแชตแบบ real-time, review profile, preference filter และระบบจัดการรูปผ่าน AWS S3",
          challenge:
            "สร้างแชต Socket.io ที่เก็บประวัติได้, typing indicator, ระบบอัปโหลดรูป, preference matching และ peer review flow",
          outcome:
            "สร้าง marketplace ที่เน้นความน่าเชื่อถือ ให้ผู้ใช้เปรียบเทียบความเข้ากันได้ก่อนตัดสินใจอยู่ร่วมกัน",
        },
        "soil-iot-dashboard": {
          title: "Soil Intelligence IoT Dashboard",
          description:
            "ระบบ IoT ที่ส่งค่าดิน ความชื้น และพิกัด GPS จาก ESP32 เข้าสู่ Angular dashboard",
          challenge:
            "เชื่อม RS485 NPK sensors, GPS, firmware บน ESP32, Firebase streaming, role-based access และ logic แนะนำพืช",
          outcome:
            "เปลี่ยนค่าจาก sensor ให้กลายเป็นข้อมูลที่ช่วยเลือกพืชและวางแผนการใช้ปุ๋ยได้ง่ายขึ้น",
        },
        "lotto-app": {
          title: "Lotto App",
          description:
            "แอป Flutter สำหรับซื้อหวยและจัดการสต็อก ระหว่างลูกค้าและ vendor",
          challenge:
            "ออกแบบ flow การซื้อบนมือถือให้สัมพันธ์กับ stock แบบ real-time, การเลือกซื้อเป็นชุด, หน้าจอจัดการ inventory ของ vendor และข้อมูลจาก Firebase",
          outcome:
            "ทำให้การซื้อและการจัดการ stock ชัดเจนขึ้น vendor คุมของที่เปิดขายได้ และลูกค้าลดโอกาสเลือกใบที่หมดแล้ว",
        },
        "rider-delivery-app": {
          title: "Rider Delivery App",
          description:
            "แอปส่งของด้วย Flutter แยก flow ลูกค้าและไรเดอร์ พร้อมสถานะออเดอร์และ live map tracking",
          challenge:
            "สร้าง mobile flow แยกตาม role, จัดการสถานะการส่ง, map tracking และ sync ข้อมูลผ่าน Firebase เพื่อให้เห็นสถานะใกล้ real-time",
          outcome:
            "ทำให้ลูกค้าและไรเดอร์เห็นสถานะเดียวกัน ลดความไม่แน่นอนตั้งแต่รับงาน ระหว่างทาง จนถึงส่งสำเร็จ",
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
      title: "สแต็กที่ใช้กับงานเว็บแอปและ full-stack",
      subtitle:
        "เป็นชุดเครื่องมือที่ใช้ทำ interface, API, data flow, integration และ workflow ตอน deploy",
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
      title: "ประสบการณ์ทำงานฝั่งผู้ใช้และงาน operation",
      subtitle:
        "งานครอบคลุมระบบสำหรับผู้โดยสาร dashboard ภายใน การออกแบบข้อมูลฝั่ง backend และรายละเอียดเล็ก ๆ ที่ทำให้ software ใช้งานสะดวกขึ้น",
      type: "Internship",
      signalTitle: "ประสบการณ์นี้บอกอะไร",
      achievements: [
        "ทำทั้งระบบที่ผู้ใช้ภายนอกเห็น และระบบภายในสำหรับทีม operation ใน domain เดียวกัน",
        "ทำงานกับ auth, payment, map, camera feed, Prisma schema และ Linux script",
        "แปลง workflow ธุรกิจให้เป็นหน้าจอที่ operator อ่านง่ายและใช้งานเร็ว",
      ],
      items: {
        "bussing-fullstack": {
          role: "Full-Stack Developer Intern",
          description:
            "พัฒนาฟีเจอร์สำหรับงานเดินรถโดยสาร ทั้ง LINE LIFF/web app ฝั่งผู้โดยสารและ dashboard ภายในบริษัท",
          highlights: [
            "ทำ flow digital bus card สำหรับซื้อตั๋ว, online payment, LINE Login, email login และ secure session",
            "สร้างหน้าจอ operation แบบ real-time สำหรับ camera feed, live map และ activity monitoring",
            "ออกแบบ schema ด้วย Prisma และเขียน Linux automation script สำหรับ video recording pipeline",
          ],
        },
      },
    },
    about: {
      eyebrow: "About",
      title: "ใส่ใจรายละเอียด ปรับตัวไว และทำงานได้ทั้งหน้าบ้านหลังบ้าน",
      subtitle:
        "ผมชอบสร้าง software ที่ผู้ใช้เข้าใจง่าย และ developer คนอื่นดูแลต่อได้",
      notes: [
        "ผมให้ความสำคัญกับ interface ที่ช่วยให้คนใช้งานได้เร็ว งานที่ถนัดคือการเอาโจทย์มาจัดให้เป็น flow ที่ชัดเจน เช่น dashboard, workflow tool, AI assistant และงานหลังบ้าน",
        "ผมเคยทำทั้ง web, mobile, IoT และ AI แต่จุดแข็งหลักอยู่ที่ full-stack TypeScript ผมชอบทำงานตั้งแต่ schema design, API behavior ไปจนถึงรายละเอียดบนหน้าจอที่ผู้ใช้ต้องใช้งาน",
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
      title: "มีตำแหน่งงานหรือระบบที่อยากให้ช่วยพัฒนาไหม",
      subtitle:
        "ส่ง context, ข้อจำกัด และ timeline มาได้เลยครับ ถ้าเห็นโจทย์ชัด ผมจะคุยต่อได้ตรงจุดมากขึ้น",
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
