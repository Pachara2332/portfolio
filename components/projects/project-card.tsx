"use client";

import { ArrowUpRight, Bot, Cpu, Globe2, Smartphone } from "lucide-react";
import { GithubIcon } from "@/components/common/icons";
import { useLanguage } from "@/components/i18n/language-provider";
import { StaggerItem } from "@/components/common/motion-wrapper";
import type { Project } from "@/types";

const categoryIcon = {
  ai: Bot,
  iot: Cpu,
  mobile: Smartphone,
  other: Globe2,
  web: Globe2,
};

const categoryAccent = {
  ai: "from-emerald-400/18 via-foreground/[0.045] to-transparent",
  iot: "from-cyan-400/16 via-foreground/[0.045] to-transparent",
  mobile: "from-rose-400/14 via-foreground/[0.045] to-transparent",
  other: "from-foreground/12 via-foreground/[0.045] to-transparent",
  web: "from-sky-400/14 via-foreground/[0.045] to-transparent",
};

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const Icon = categoryIcon[project.category];
  const projectCopy = t.projects.items[project.id as keyof typeof t.projects.items];

  return (
    <StaggerItem>
      <article className="group surface-card flex h-full flex-col overflow-hidden rounded-xl transition duration-300 hover:-translate-y-0.5 hover:border-foreground/22 hover:bg-card">
        <div className="relative overflow-hidden border-b border-border/75 p-4">
          <div className={`absolute inset-0 bg-gradient-to-br ${categoryAccent[project.category]}`} />
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,oklch(1_0_0_/_0.08)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0_/_0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="relative flex min-h-24 flex-col justify-between gap-5">
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex size-9 items-center justify-center rounded-md border border-border/80 bg-background/70 text-foreground shadow-[0_1px_0_oklch(1_0_0_/_0.04)_inset]">
                <Icon className="size-4" />
              </span>
              <span className="rounded-full border border-border/70 bg-background/60 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {project.category}
              </span>
            </div>
            <div>
              <p className="text-[11px] font-medium text-muted-foreground">
                {t.projects.categories[project.category]}
              </p>
              <h3 className="mt-1.5 text-lg font-semibold leading-6 tracking-tight text-foreground">
                {projectCopy.title}
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <p className="text-sm leading-6 text-muted-foreground">
            {projectCopy.description}
          </p>

          <div className="mt-4 grid gap-2.5">
            <div className="rounded-md border border-border/70 bg-background/42 p-3">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t.projects.challenge}
              </p>
              <p className="text-xs leading-5 text-foreground/84">
                {projectCopy.challenge}
              </p>
            </div>
            <div className="rounded-md border border-border/70 bg-secondary/30 p-3">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t.projects.outcome}
              </p>
              <p className="text-xs leading-5 text-muted-foreground">
                {projectCopy.outcome}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/70 bg-secondary/38 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-8 items-center gap-1.5 rounded-md border border-border/80 px-2.5 py-1 text-xs font-medium text-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-secondary"
              >
                <GithubIcon className="size-3.5" />
                {t.projects.github}
              </a>
            ) : null}
            {project.githubBackend ? (
              <a
                href={project.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-8 items-center gap-1.5 rounded-md border border-border/80 px-2.5 py-1 text-xs font-medium text-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-secondary"
              >
                <GithubIcon className="size-3.5" />
                {t.projects.backend}
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-8 items-center gap-1.5 rounded-md bg-foreground px-2.5 py-1 text-xs font-semibold text-background transition duration-200 hover:-translate-y-0.5 hover:bg-foreground/90"
              >
                {t.projects.liveDemo}
                <ArrowUpRight className="size-3.5" />
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </StaggerItem>
  );
}
