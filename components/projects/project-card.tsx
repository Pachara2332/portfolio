"use client";

import Image from "next/image";
import Link from "next/link";
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

const previewBars = {
  ai: ["w-3/4", "w-11/12", "w-2/3"],
  iot: ["w-1/2", "w-4/5", "w-3/5"],
  mobile: ["w-2/3", "w-1/2", "w-5/6"],
  other: ["w-3/5", "w-4/5", "w-2/3"],
  web: ["w-4/5", "w-2/3", "w-11/12"],
};

function ProjectPreview({ project }: { project: Project }) {
  const Icon = categoryIcon[project.category];

  if (project.coverImage) {
    return (
      <div className="relative overflow-hidden border-b border-border/75 bg-background">
        <div className="relative aspect-[16/9]">
          <Image
            src={project.coverImage}
            alt={`${project.title} interface preview`}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.025]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden border-b border-border/75 bg-background">
      <div className={`absolute inset-0 bg-gradient-to-br ${categoryAccent[project.category]}`} />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,oklch(1_0_0_/_0.08)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0_/_0.06)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative p-3">
        <div className="overflow-hidden rounded-lg border border-border/75 bg-card/80 shadow-[0_1px_0_oklch(1_0_0_/_0.04)_inset]">
          <div className="flex h-7 items-center gap-1.5 border-b border-border/70 bg-secondary/38 px-3">
            <span className="size-2 rounded-full bg-red-400/65" />
            <span className="size-2 rounded-full bg-yellow-400/65" />
            <span className="size-2 rounded-full bg-emerald-400/65" />
            <span className="ml-2 h-2 w-20 rounded-full bg-foreground/10" />
          </div>

          <div className="grid aspect-[16/9] grid-cols-[0.72fr_1fr] gap-3 p-3">
            <div className="rounded-md border border-border/60 bg-background/55 p-2.5">
              <span className="inline-flex size-8 items-center justify-center rounded-md border border-border/70 bg-secondary/48 text-foreground">
                <Icon className="size-4" />
              </span>
              <div className="mt-4 space-y-2">
                {previewBars[project.category].map((width, index) => (
                  <div
                    key={width}
                    className={`${width} h-1.5 rounded-full ${
                      index === 0 ? "bg-foreground/24" : "bg-foreground/12"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-2">
              <div className="rounded-md border border-border/60 bg-background/48 p-2">
                <div className="mb-2 flex items-center justify-between">
                  <span className="h-1.5 w-14 rounded-full bg-foreground/16" />
                  <span className="h-4 w-8 rounded bg-emerald-400/18" />
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <span className="h-10 rounded bg-secondary/55" />
                  <span className="h-10 rounded bg-secondary/35" />
                  <span className="h-10 rounded bg-secondary/45" />
                </div>
              </div>
              <div className="rounded-md border border-border/60 bg-background/48 p-2">
                <span className="block h-1.5 w-20 rounded-full bg-foreground/16" />
                <div className="mt-2 h-12 rounded bg-gradient-to-r from-secondary/70 via-secondary/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const projectCopy = t.projects.items[project.id as keyof typeof t.projects.items];

  return (
    <StaggerItem>
      <article className="group relative surface-card flex h-full flex-col overflow-hidden rounded-xl transition duration-300 hover:-translate-y-0.5 hover:border-foreground/22 hover:bg-card">
        <ProjectPreview project={project} />

        <div className="flex flex-1 flex-col p-4 transition duration-300 group-hover:opacity-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-medium text-muted-foreground">
                {t.projects.categories[project.category]}
              </p>
              <h3 className="mt-1.5 text-lg font-semibold leading-6 tracking-tight text-foreground">
                {projectCopy.title}
              </h3>
            </div>
            <span className="rounded-full border border-border/70 bg-secondary/38 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {project.category}
            </span>
          </div>

          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
            {projectCopy.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 2).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/70 bg-secondary/38 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex min-h-8 items-center gap-1.5 rounded-md border border-border/80 px-2.5 py-1 text-xs font-medium text-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-secondary"
            >
              {t.projects.viewDetails}
              <ArrowUpRight className="size-3.5" />
            </Link>
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

        <div className="pointer-events-none absolute inset-0 z-10 flex translate-y-2 flex-col bg-card/95 p-4 opacity-0 backdrop-blur-[1px] transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 overflow-y-auto scrollbar-thin">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-medium text-muted-foreground">
                {t.projects.categories[project.category]}
              </p>
              <h3 className="mt-1.5 text-base font-semibold leading-6 tracking-tight text-foreground">
                {projectCopy.title}
              </h3>
            </div>
            <span className="rounded-full border border-border/70 bg-secondary/38 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {project.category}
            </span>
          </div>

          <p className="mt-2 text-sm leading-5 text-muted-foreground line-clamp-3">
            {projectCopy.description}
          </p>

          <div className="mt-3 grid gap-2">
            <div className="rounded-md border border-border/70 bg-background/42 p-3">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t.projects.challenge}
              </p>
              <p className="text-xs leading-5 text-foreground/84 line-clamp-3">
                {projectCopy.challenge}
              </p>
            </div>
            <div className="rounded-md border border-border/70 bg-secondary/30 p-3">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t.projects.outcome}
              </p>
              <p className="text-xs leading-5 text-muted-foreground line-clamp-3">
                {projectCopy.outcome}
              </p>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/70 bg-secondary/38 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-4">
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex min-h-8 items-center gap-1.5 rounded-md bg-foreground px-2.5 py-1 text-xs font-semibold text-background transition duration-200 hover:-translate-y-0.5 hover:bg-foreground/90"
            >
              {t.projects.viewDetails}
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </article>
    </StaggerItem>
  );
}
