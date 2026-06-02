export interface ProjectImage {
  src: string;
  alt: string;
  title: string;
}

export interface ProjectAction {
  label: string;
  href: string;
}

export interface ProjectChild {
  title: string;
  description: string;
  demo?: string;
  images: ProjectImage[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  outcome: string;
  techStack: string[];
  coverImage?: string;
  images?: ProjectImage[];
  children?: ProjectChild[];
  actions?: ProjectAction[];
  github?: string;
  githubBackend?: string;
  demo?: string;
  category: "web" | "iot" | "mobile" | "ai" | "other";
  isFeatured?: boolean;
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
  category: "frontendMobile" | "backend" | "database" | "toolsOrm" | "aiTools";
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  tags: string[];
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
  role: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  resumeUrl: string;
  navItems: NavItem[];
  socialLinks: SocialLink[];
  email: string;
  phone: string;
  location: string;
}
