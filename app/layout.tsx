import type { Metadata } from "next";
import type React from "react";
import localFont from "next/font/local";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import "./globals.css";

const plexThai = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = localFont({
  src: "../node_modules/next/dist/next-devtools/server/font/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Full-stack developer",
    "Software developer",
    "Frontend developer",
    "Backend developer",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "AI applications",
    "SaaS dashboards",
    "Real-time systems",
    "PostgreSQL",
    "Prisma",
    "Pachara Wongsasri",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full scroll-smooth antialiased", plexThai.variable, geistMono.variable)}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
