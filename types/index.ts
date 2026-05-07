export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  image: string;
  github?: string;
  demo?: string;
  impact?: string[];
  features?: string[];
  category: "web" | "iot" | "mobile" | "ai" | "other";
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
  techStack: string[];
  type: "work" | "freelance" | "internship";
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "mobile" | "iot" | "tools" | "database";
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  resumeUrl: string;
  navItems: NavItem[];
  socialLinks: SocialLink[];
  email: string;
}
