"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, Languages, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/i18n/language-provider";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const sectionIds = siteConfig.navItems.map((item) => item.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navigate = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border/70 bg-background/86 shadow-sm shadow-black/20 backdrop-blur-xl"
          : "border-transparent bg-background/35 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate("#home")}
          className="group inline-flex items-center gap-2 text-left"
          aria-label="Go to home"
        >
          <span className="flex size-7 items-center justify-center rounded-md border border-border bg-secondary text-xs font-semibold text-foreground transition-colors group-hover:border-foreground/30">
            PW
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-foreground sm:block">
            Pachara
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.navItems.map((item) => {
            const id = item.href.replace("#", "");
            const active = activeSection === id;

            return (
              <button
                key={item.href}
                onClick={() => navigate(item.href)}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-0 rounded-md bg-secondary"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span className="relative">
                  {t.nav[item.href.replace("#", "") as keyof typeof t.nav]}
                </span>
              </button>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-secondary/60 px-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <FileText className="size-4" />
            {t.nav.resume}
          </a>
          <div
            role="group"
            className="inline-flex h-9 items-center gap-1 rounded-md border border-border bg-secondary/60 px-1 text-sm font-medium text-foreground"
            aria-label={t.nav.language}
          >
            <Languages className="size-4" />
            {(["en", "th"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLanguage(option)}
                className={cn(
                  "rounded px-2 py-1 text-xs transition-colors",
                  language === option
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-pressed={language === option}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            onClick={() => navigate("#contact")}
            className="inline-flex h-9 items-center rounded-md bg-foreground px-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            {t.nav.contact}
          </button>
        </div>

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-secondary/60 text-foreground lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-border bg-background/96 p-4 shadow-xl shadow-black/30 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {siteConfig.navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => navigate(item.href)}
                  className={cn(
                    "rounded-md px-3 py-3 text-left text-sm font-medium",
                    activeSection === item.href.replace("#", "")
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {t.nav[item.href.replace("#", "") as keyof typeof t.nav]}
                </button>
              ))}
              <div
                role="group"
                className="mt-2 flex items-center justify-between rounded-md border border-border bg-secondary/45 px-3 py-2 text-sm font-medium text-muted-foreground"
                aria-label={t.nav.language}
              >
                <span className="inline-flex items-center gap-2">
                  <Languages className="size-4" />
                  {t.nav.language}
                </span>
                <span className="inline-flex rounded-md border border-border bg-background p-0.5">
                  {(["en", "th"] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setLanguage(option)}
                      className={cn(
                        "rounded px-2 py-1 text-xs transition-colors",
                        language === option
                          ? "bg-foreground text-background"
                          : "text-muted-foreground"
                      )}
                      aria-pressed={language === option}
                    >
                      {option.toUpperCase()}
                    </button>
                  ))}
                </span>
              </div>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-secondary text-sm font-medium text-foreground"
              >
                <FileText className="size-4" />
                {t.nav.resume}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
