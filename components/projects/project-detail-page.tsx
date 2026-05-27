"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import type { Project } from "@/types";

export function ProjectDetailPage({ project }: { project: Project }) {
  const { t } = useLanguage();
  const projectCopy = t.projects.items[project.id as keyof typeof t.projects.items];

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {t.projects.backToProjects}
        </Link>
      </div>

      <article className="surface-card overflow-hidden rounded-xl">
        {project.coverImage ? (
          <div className="relative aspect-[16/8] border-b border-border/75">
            <Image
              src={project.coverImage}
              alt={`${projectCopy.title} preview`}
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
          </div>
        ) : null}

        <div className="space-y-6 p-5 sm:p-7">
          <header className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {t.projects.categories[project.category]}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {projectCopy.title}
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              {projectCopy.description}
            </p>
          </header>

          <section className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border/70 bg-background/45 p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t.projects.challenge}
              </p>
              <p className="text-sm leading-6 text-foreground/85">{projectCopy.challenge}</p>
            </div>
            <div className="rounded-lg border border-border/70 bg-secondary/28 p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t.projects.outcome}
              </p>
              <p className="text-sm leading-6 text-muted-foreground">{projectCopy.outcome}</p>
            </div>
          </section>

          <section>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border/70 bg-secondary/38 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-md border border-border/80 px-3 py-2 text-sm font-medium text-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-secondary"
              >
                {t.projects.github}
                <ArrowUpRight className="size-4" />
              </a>
            ) : null}
            {project.githubBackend ? (
              <a
                href={project.githubBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-md border border-border/80 px-3 py-2 text-sm font-medium text-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-secondary"
              >
                {t.projects.backend}
                <ArrowUpRight className="size-4" />
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-md bg-foreground px-3 py-2 text-sm font-semibold text-background transition duration-200 hover:-translate-y-0.5 hover:bg-foreground/90"
              >
                {t.projects.liveDemo}
                <ArrowUpRight className="size-4" />
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </main>
  );
}
