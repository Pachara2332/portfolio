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

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const Icon = categoryIcon[project.category];
  const projectCopy = t.projects.items[project.id as keyof typeof t.projects.items];

  return (
    <StaggerItem>
      <article className="group flex h-full flex-col rounded-lg border border-border bg-card p-5 transition duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-card/80">
        <div className="flex flex-col gap-4 min-[420px]:flex-row min-[420px]:items-start min-[420px]:justify-between">
          <div className="min-w-0">
            <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium text-muted-foreground">
              <Icon className="size-3.5" />
              {t.projects.categories[project.category]}
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {projectCopy.title}
            </h3>
          </div>
          <span className="w-fit rounded-md border border-border bg-background px-2 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {project.category}
          </span>
        </div>

        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {projectCopy.description}
        </p>

        <div className="mt-4 space-y-2 border-l border-border pl-4">
          <p className="text-sm leading-6 text-foreground/82">
            {projectCopy.challenge}
          </p>
          <p className="text-sm leading-6 text-muted-foreground">
            {projectCopy.outcome}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-secondary/45 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-9 items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <GithubIcon className="size-4" />
              {t.projects.github}
            </a>
          ) : null}
          {project.githubBackend ? (
            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-9 items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <GithubIcon className="size-4" />
              {t.projects.backend}
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-9 items-center gap-2 rounded-md bg-foreground px-3 py-1.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              {t.projects.liveDemo}
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </div>
      </article>
    </StaggerItem>
  );
}
