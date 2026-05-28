"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Server, 
  Database, 
  Scale, 
  Activity, 
  Cpu, 
  ShieldCheck, 
  Code,
  Layers
} from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import type { Project } from "@/types";

export function ProjectDetailPage({ project }: { project: Project }) {
  const { t } = useLanguage();
  const projectCopy = t.projects.items[project.id as keyof typeof t.projects.items] as any;

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {t.projects.backToProjects}
        </Link>
      </div>

      <article className="space-y-8">
        {/* Cover Image Header */}
        <div className="surface-card overflow-hidden rounded-2xl">
          {project.coverImage ? (
            <div className="relative aspect-[16/8] border-b border-border/75">
              <Image
                src={project.coverImage}
                alt={`${projectCopy?.title || project.title} preview`}
                fill
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}

          {/* Standard Project Overview Info */}
          <div className="space-y-6 p-6 sm:p-8">
            <header className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t.projects.categories[project.category]}
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {projectCopy?.title || project.title}
              </h1>
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                {projectCopy?.description || project.description}
              </p>
            </header>

            {/* Challenge & Outcome Overview Grid */}
            <section className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/70 bg-background/45 p-5">
                <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  {t.projects.challenge}
                </p>
                <p className="text-sm leading-6 text-foreground/85">{projectCopy?.challenge || project.challenge}</p>
              </div>
              <div className="rounded-xl border border-border/70 bg-secondary/28 p-5">
                <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  {t.projects.outcome}
                </p>
                <p className="text-sm leading-6 text-muted-foreground">{projectCopy?.outcome || project.outcome}</p>
              </div>
            </section>

            {/* Standard Tech Stack */}
            <section>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground flex items-center gap-1.5">
                <Layers className="size-4" /> Tech Stack
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

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-border/60">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-md border border-border/80 px-4 py-2 text-sm font-medium text-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-secondary"
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
                  className="inline-flex min-h-10 items-center gap-2 rounded-md border border-border/80 px-4 py-2 text-sm font-medium text-foreground transition duration-200 hover:-translate-y-0.5 hover:bg-secondary"
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
                  className="inline-flex min-h-10 items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-bold text-background transition duration-200 hover:-translate-y-0.5 hover:bg-foreground/90"
                >
                  {t.projects.liveDemo}
                  <ArrowUpRight className="size-4" />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SENIOR ENGINEERING DEEP DIVE: SYSTEM DESIGN & ARCHITECTURE               */}
        {/* ========================================================================= */}
        
        {/* 1. System Architecture Section */}
        {projectCopy?.systemArchitecture && (
          <section className="surface-card rounded-2xl p-6 sm:p-8 space-y-5 border border-border/70">
            <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-emerald-400/12 text-emerald-400">
                <Server className="size-5" />
              </span>
              System Design & Architecture
            </h2>
            
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
                <p className="text-sm leading-7 text-muted-foreground">
                  {projectCopy.systemArchitecture.description}
                </p>
              </div>

              {/* ASCII/Text-based Architecture Flow Chart Console Terminal */}
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-xl border border-border/80 bg-black/90 shadow-2xl font-mono text-[10px] text-emerald-400/90 leading-normal">
                  <div className="flex h-7 items-center gap-1.5 border-b border-border/20 bg-zinc-900/60 px-3 justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-red-500/50" />
                      <span className="size-2 rounded-full bg-yellow-500/50" />
                      <span className="size-2 rounded-full bg-emerald-500/50" />
                    </div>
                    <span className="text-[9px] text-muted-foreground uppercase tracking-widest">architecture.flow</span>
                  </div>
                  <pre className="p-4 overflow-x-auto select-none font-mono leading-[1.3] text-emerald-400/80">
                    {projectCopy.systemArchitecture.diagram}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 2. Core Database Schema & Flow Section */}
        {projectCopy?.databaseSchema && (
          <section className="surface-card rounded-2xl p-6 sm:p-8 space-y-5 border border-border/70">
            <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-cyan-400/12 text-cyan-400">
                <Database className="size-5" />
              </span>
              Database Schema & Flow
            </h2>

            <div className="space-y-4">
              <p className="text-sm leading-7 text-muted-foreground">
                {projectCopy.databaseSchema.description}
              </p>

              {/* SQL Database Schema Console */}
              <div className="overflow-hidden rounded-xl border border-border/80 bg-[#0d1117] shadow-xl text-xs text-zinc-300">
                <div className="flex h-7 items-center gap-1.5 border-b border-border/20 bg-[#161b22] px-3 justify-between">
                  <div className="flex items-center gap-2">
                    <Code className="size-3.5 text-blue-400" />
                    <span className="font-mono text-[10px] text-zinc-400">schema.sql</span>
                  </div>
                  <span className="text-[9px] text-zinc-500 font-mono">POSTGRESQL</span>
                </div>
                <pre className="p-4 overflow-x-auto font-mono text-[11px] leading-6 text-zinc-300">
                  <code>{projectCopy.databaseSchema.sql}</code>
                </pre>
              </div>
            </div>
          </section>
        )}

        {/* 3. Tradeoffs & Architectural Decisions Section */}
        {projectCopy?.tradeoffs && (
          <section className="space-y-5">
            <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-amber-400/12 text-amber-400">
                <Scale className="size-5" />
              </span>
              Engineering Tradeoffs & Architectural Decisions
            </h2>
            
            <div className="grid gap-4 md:grid-cols-2">
              {projectCopy.tradeoffs.map((item: any, idx: number) => (
                <div key={idx} className="surface-card rounded-2xl p-5 border border-border/70 space-y-4 flex flex-col justify-between transition duration-300 hover:border-foreground/15 hover:bg-card">
                  <div className="space-y-2">
                    <span className="rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">
                      Decision {idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-foreground mt-2">{item.choice}</h3>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-border/40 mt-auto">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-400 flex items-center gap-1">
                        <ShieldCheck className="size-3" /> Rationale (Why)
                      </p>
                      <p className="text-xs text-muted-foreground leading-5 mt-1">{item.why}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-rose-400 flex items-center gap-1">
                        <Activity className="size-3" /> Tradeoff (Consequences)
                      </p>
                      <p className="text-xs text-muted-foreground leading-5 mt-1">{item.tradeoff}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Scaling, Caching & Resilience Section */}
        {projectCopy?.scalingAndResilience && (
          <section className="surface-card rounded-2xl p-6 sm:p-8 space-y-5 border border-border/70 bg-gradient-to-br from-card to-background">
            <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-purple-400/12 text-purple-400">
                <Cpu className="size-5" />
              </span>
              Telemetry, Caching & Scaling Strategy
            </h2>
            
            <div className="rounded-xl border border-purple-500/10 bg-purple-500/[0.02] p-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-400">
                {projectCopy.scalingAndResilience.strategy}
              </p>
              <p className="text-sm leading-7 text-muted-foreground">
                {projectCopy.scalingAndResilience.description}
              </p>
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
