"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ChevronLeft,
  ChevronRight,
  Server, 
  Database, 
  Scale, 
  Activity, 
  Cpu, 
  ShieldCheck, 
  Code,
  Layers,
  MessagesSquare
} from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import type { Project } from "@/types";

type TradeoffItem = {
  choice: string;
  why: string;
  tradeoff: string;
};

type ProjectCopy = {
  title: string;
  description: string;
  challenge: string;
  outcome: string;
  systemArchitecture?: {
    description: string;
    diagram: string;
  };
  databaseSchema?: {
    description: string;
    sql: string;
  };
  tradeoffs?: TradeoffItem[];
  scalingAndResilience?: {
    strategy: string;
    description: string;
  };
};

export function ProjectDetailPage({ project }: { project: Project }) {
  const { t } = useLanguage();
  const projectCopy = t.projects.items[project.id as keyof typeof t.projects.items] as ProjectCopy | undefined;
  const [activeChildIndex, setActiveChildIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeChild = project.children?.[activeChildIndex];
  const galleryImages = activeChild?.images ?? project.images ?? [];
  const activeImage = galleryImages[activeImageIndex];

  const selectChild = (childIndex: number) => {
    setActiveChildIndex(childIndex);
    setActiveImageIndex(0);
  };

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <main className="mx-auto w-full min-w-0 max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
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

      <article className="min-w-0 space-y-8">
        {/* Cover Image Header */}
        <div className="surface-card min-w-0 max-w-full overflow-hidden rounded-2xl">
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

            {project.children ? (
              <section className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Connected product flows
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.children.map((child, index) => (
                    <button
                      key={child.title}
                      type="button"
                      onClick={() => selectChild(index)}
                      aria-pressed={index === activeChildIndex}
                      className={`rounded-xl border p-4 text-left transition ${
                        index === activeChildIndex
                          ? "border-emerald-400/55 bg-emerald-400/10"
                          : "border-border/70 bg-background/45 hover:border-foreground/30 hover:bg-secondary/30"
                      }`}
                    >
                      <span className="text-sm font-bold text-foreground">{child.title}</span>
                      <span className="mt-1.5 block text-xs leading-5 text-muted-foreground">
                        {child.description}
                      </span>
                    </button>
                  ))}
                </div>
              </section>
            ) : null}

            {activeImage ? (
              <section className="space-y-4">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      Project Gallery
                    </p>
                    <h2 className="mt-1 text-xl font-bold tracking-tight text-foreground">
                      {activeImage.title}
                    </h2>
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground">
                    {activeImageIndex + 1} / {galleryImages.length}
                  </p>
                </div>

                <div className="group/gallery relative min-w-0 max-w-full overflow-hidden rounded-xl border border-border/75 bg-background">
                  <div
                    className={`relative ${
                      project.category === "mobile"
                        ? "mx-auto aspect-[9/16] w-full max-w-sm"
                        : "aspect-[16/9]"
                    }`}
                  >
                    <Image
                      src={activeImage.src}
                      alt={activeImage.alt}
                      fill
                      sizes="(min-width: 1280px) 960px, 100vw"
                      className="object-contain"
                    />
                  </div>

                  {galleryImages.length > 1 ? (
                    <>
                      <button
                        type="button"
                        onClick={showPreviousImage}
                        aria-label="Show previous project image"
                        className="absolute left-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-background/85 text-foreground shadow-lg backdrop-blur transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <ChevronLeft className="size-5" />
                      </button>
                      <button
                        type="button"
                        onClick={showNextImage}
                        aria-label="Show next project image"
                        className="absolute right-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-background/85 text-foreground shadow-lg backdrop-blur transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <ChevronRight className="size-5" />
                      </button>
                    </>
                  ) : null}
                </div>

                {galleryImages.length > 1 ? (
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {galleryImages.map((image, index) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setActiveImageIndex(index)}
                        aria-label={`Show ${image.title} screenshot`}
                        aria-current={index === activeImageIndex}
                        className={`relative h-20 w-36 flex-none overflow-hidden rounded-lg border bg-background transition ${
                          index === activeImageIndex
                            ? "border-foreground/70 ring-2 ring-foreground/18"
                            : "border-border/70 opacity-70 hover:border-foreground/35 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={image.src}
                          alt=""
                          fill
                          sizes="144px"
                          className={project.category === "mobile" ? "object-contain" : "object-cover"}
                        />
                      </button>
                    ))}
                  </div>
                ) : null}
              </section>
            ) : null}

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
              {project.demo && !activeChild ? (
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
              {activeChild?.demo ? (
                <a
                  href={activeChild.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-bold text-background transition duration-200 hover:-translate-y-0.5 hover:bg-foreground/90"
                >
                  Open {activeChild.title}
                  <ArrowUpRight className="size-4" />
                </a>
              ) : null}
              {project.actions?.map((action) => (
                <a
                  key={action.href}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-md border border-emerald-400/45 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-300 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-400/18"
                >
                  <MessagesSquare className="size-4" />
                  {action.label}
                  <ArrowUpRight className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SENIOR ENGINEERING DEEP DIVE: SYSTEM DESIGN & ARCHITECTURE               */}
        {/* ========================================================================= */}
        
        {/* 1. System Architecture Section */}
        {projectCopy?.systemArchitecture && (
          <section className="surface-card min-w-0 max-w-full rounded-2xl p-6 sm:p-8 space-y-5 border border-border/70">
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
              <div className="min-w-0 lg:col-span-5">
                <div className="max-w-full overflow-hidden rounded-xl border border-border/80 bg-black/90 shadow-2xl font-mono text-[10px] text-emerald-400/90 leading-normal">
                  <div className="flex h-7 items-center gap-1.5 border-b border-border/20 bg-zinc-900/60 px-3 justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-red-500/50" />
                      <span className="size-2 rounded-full bg-yellow-500/50" />
                      <span className="size-2 rounded-full bg-emerald-500/50" />
                    </div>
                    <span className="text-[9px] text-muted-foreground uppercase tracking-widest">architecture.flow</span>
                  </div>
                  <pre className="max-w-full overflow-x-auto p-4 select-none font-mono leading-[1.3] text-emerald-400/80">
                    {projectCopy.systemArchitecture.diagram}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 2. Core Database Schema & Flow Section */}
        {projectCopy?.databaseSchema && (
          <section className="surface-card min-w-0 max-w-full rounded-2xl p-6 sm:p-8 space-y-5 border border-border/70">
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
              <div className="max-w-full overflow-hidden rounded-xl border border-border/80 bg-[#0d1117] shadow-xl text-xs text-zinc-300">
                <div className="flex h-7 items-center gap-1.5 border-b border-border/20 bg-[#161b22] px-3 justify-between">
                  <div className="flex items-center gap-2">
                    <Code className="size-3.5 text-blue-400" />
                    <span className="font-mono text-[10px] text-zinc-400">schema.sql</span>
                  </div>
                  <span className="text-[9px] text-zinc-500 font-mono">POSTGRESQL</span>
                </div>
                <pre className="max-w-full overflow-x-auto p-4 font-mono text-[11px] leading-6 text-zinc-300">
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
              {projectCopy.tradeoffs.map((item, idx) => (
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
