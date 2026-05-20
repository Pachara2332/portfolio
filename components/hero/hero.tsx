"use client";

import { ArrowRight, FileText, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon } from "@/components/common/icons";
import { useLanguage } from "@/components/i18n/language-provider";
import { coreStack } from "@/data/profile";
import { siteConfig } from "@/data/site";

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-3xl"
        >
          <motion.div
            variants={item}
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-md border border-border bg-secondary/60 px-3 py-1 text-xs font-medium leading-5 text-muted-foreground sm:rounded-full"
          >
            <span className="size-1.5 rounded-full bg-emerald-400" />
            <span>{t.hero.availability}</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-7xl"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg"
          >
            {t.hero.intro}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 md:flex-row">
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-foreground px-5 py-2 text-center text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              {t.hero.viewWork}
              <ArrowRight className="size-4" />
            </button>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-border bg-secondary/50 px-5 py-2 text-center text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <FileText className="size-4" />
              {t.hero.downloadResume}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2 text-center text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground"
            >
              <Mail className="size-4" />
              {t.hero.emailMe}
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-2">
            {coreStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-lg border border-border bg-card p-5 shadow-2xl shadow-black/20"
          aria-label={t.hero.profileAria}
        >
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div>
              <p className="text-sm font-medium text-foreground">{t.hero.profileTitle}</p>
              <p className="mt-1 text-xs text-muted-foreground">{siteConfig.location}</p>
            </div>
            <a
              href="https://github.com/Pachara2332"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub profile"
            >
              <GithubIcon className="size-4" />
            </a>
          </div>

          <div className="grid gap-3 py-5 min-[420px]:grid-cols-3">
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-md border border-border bg-secondary/40 p-3">
                <p className="text-lg font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] leading-4 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {t.hero.strengths.map((strength) => (
              <div key={strength} className="flex gap-3 rounded-md border border-border bg-background/40 p-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/70" />
                <p className="text-sm leading-6 text-muted-foreground">{strength}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
