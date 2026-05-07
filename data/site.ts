import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Pachara",
  title: "Pachara | Full Stack Developer",
  description:
    "Full Stack Developer specializing in modern web applications, IoT systems, and creative engineering solutions. Building premium digital experiences with Next.js, React, and cutting-edge technologies.",
  url: "https://pachara.dev",
  ogImage: "/og-image.png",
  navItems: [
    { label: "Home", href: "#home" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/pachara",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/pachara",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:contact@pachara.dev",
      icon: "mail",
    },
  ],
  email: "contact@pachara.dev",
};
