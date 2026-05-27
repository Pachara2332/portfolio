"use client";

import { ArrowRight, FileText, Mail, Sparkles } from "lucide-react";
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
    <section id="home" className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="absolute inset-x-6 top-20 -z-10 mx-auto h-72 max-w-5xl rounded-full bg-foreground/[0.035] blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-4xl"
        >
          <motion.div
            variants={item}
            className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-border/80 bg-secondary/55 px-3.5 py-1.5 text-xs font-medium leading-5 text-muted-foreground shadow-[0_1px_0_oklch(1_0_0_/_0.04)_inset]"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full rounded-full bg-emerald-400/35" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            <span>{t.hero.availability}</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg lg:text-xl lg:leading-9"
          >
            {t.hero.intro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-center text-sm font-semibold text-background shadow-[0_12px_36px_oklch(0_0_0_/_0.26)] transition duration-200 hover:-translate-y-0.5 hover:bg-foreground/92 focus-visible:ring-2 focus-visible:ring-foreground/30"
            >
              {t.hero.viewWork}
              <ArrowRight className="size-4" />
            </button>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border/80 bg-secondary/55 px-5 py-2.5 text-center text-sm font-medium text-foreground shadow-[0_1px_0_oklch(1_0_0_/_0.035)_inset] transition duration-200 hover:-translate-y-0.5 hover:bg-secondary focus-visible:ring-2 focus-visible:ring-foreground/20"
            >
              <FileText className="size-4" />
              {t.hero.downloadResume}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-center text-sm font-medium text-muted-foreground transition duration-200 hover:bg-secondary/60 hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground/20"
            >
              <Mail className="size-4" />
              {t.hero.emailMe}
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-11 flex max-w-3xl flex-wrap gap-2">
            {coreStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/70 bg-card/80 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-[0_1px_0_oklch(1_0_0_/_0.025)_inset]"
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
          className="surface-card relative overflow-hidden rounded-xl p-5"
          aria-label={t.hero.profileAria}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/22 to-transparent" />
          <div className="flex items-center justify-between border-b border-border/75 pb-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {t.hero.profileTitle}
              </p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                {siteConfig.role}
              </p>
            </div>
            <a
              href="https://github.com/Pachara2332"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-md border border-border/80 bg-secondary/45 text-muted-foreground transition duration-200 hover:-translate-y-0.5 hover:text-foreground"
              aria-label="GitHub profile"
            >
              <GithubIcon className="size-4" />
            </a>
          </div>

          <div className="grid gap-3 py-5 min-[420px]:grid-cols-3">
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="surface-muted rounded-lg p-3.5">
                <p className="text-xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[11px] leading-4 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {t.hero.strengths.map((strength) => (
              <div key={strength} className="flex gap-3 rounded-lg border border-border/70 bg-background/45 p-3.5 transition-colors hover:border-foreground/18 hover:bg-background/65">
                <span className="mt-1.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-border/80 bg-secondary/50">
                  <Sparkles className="size-3 text-foreground/70" />
                </span>
                <p className="text-sm leading-6 text-muted-foreground">{strength}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
