"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Heart, X } from "lucide-react";
import { GithubIcon } from "@/components/common/icons";
import { useLanguage } from "@/components/i18n/language-provider";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

function slidesOf(project: Project) {
  const all = [
    ...(project.coverImage ? [{ src: project.coverImage, alt: project.title }] : []),
    ...(project.images ?? []),
    ...(project.children ?? []).flatMap((child) => child.images),
  ];
  return all.filter((slide, index) => all.findIndex((other) => other.src === slide.src) === index);
}

export function PostModal({
  project,
  liked,
  onToggleLike,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project;
  liked: boolean;
  onToggleLike: () => void;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.id as keyof typeof t.projects.items];
  const title = copy?.title ?? project.title;
  const slides = slidesOf(project);
  const [slide, setSlide] = useState(0);
  const [burst, setBurst] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const demo = project.demo ?? project.children?.[0]?.demo;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && onNext) onNext();
      if (event.key === "ArrowLeft" && onPrev) onPrev();
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose, onNext, onPrev]);

  const goTo = (index: number) => {
    const element = track.current;
    if (element) element.scrollTo({ left: index * element.clientWidth, behavior: "smooth" });
  };

  const likeFromImage = () => {
    if (!liked) onToggleLike();
    setBurst((value) => value + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 sm:p-6" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <button type="button" onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-10 hidden rounded-full p-1.5 text-white hover:bg-white/15 sm:block">
        <X className="size-7" />
      </button>
      {onPrev ? (
        <button type="button" onClick={(event) => { event.stopPropagation(); onPrev(); }} aria-label="Previous project" className="absolute left-3 z-10 hidden rounded-full bg-white p-1.5 text-foreground lg:block">
          <ChevronLeft className="size-5" />
        </button>
      ) : null}
      {onNext ? (
        <button type="button" onClick={(event) => { event.stopPropagation(); onNext(); }} aria-label="Next project" className="absolute right-3 z-10 hidden rounded-full bg-white p-1.5 text-foreground lg:block">
          <ChevronRight className="size-5" />
        </button>
      ) : null}

      <div
        className="flex h-full w-full flex-col overflow-y-auto bg-background sm:h-auto sm:max-h-[90vh] sm:max-w-5xl sm:overflow-hidden sm:rounded-lg md:flex-row"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:hidden">
          <span className="text-sm font-semibold">{title}</span>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-full p-1">
            <X className="size-6" />
          </button>
        </div>

        <div className="relative shrink-0 bg-black md:w-[58%]">
          {slides.length > 0 ? (
            <div
              ref={track}
              onScroll={(event) => setSlide(Math.round(event.currentTarget.scrollLeft / event.currentTarget.clientWidth))}
              onDoubleClick={likeFromImage}
              className="flex aspect-[4/5] snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] md:aspect-auto md:h-[min(90vh,720px)]"
            >
              {slides.map((item) => (
                <div key={item.src} className="relative h-full w-full shrink-0 snap-center">
                  <Image src={item.src} alt={item.alt} fill sizes="(min-width: 768px) 580px, 100vw" className="object-contain" />
                </div>
              ))}
            </div>
          ) : (
            <div onDoubleClick={likeFromImage} className="flex aspect-[4/5] items-end bg-accent p-8 md:aspect-auto md:h-[min(90vh,720px)]">
              <p className="text-3xl font-semibold text-foreground">{title}</p>
            </div>
          )}

          {burst > 0 ? (
            <Heart key={burst} className="heart-pop pointer-events-none absolute left-1/2 top-1/2 size-24 fill-white text-white drop-shadow-lg" aria-hidden />
          ) : null}

          {slides.length > 1 ? (
            <>
              {slide > 0 ? (
                <button type="button" onClick={() => goTo(slide - 1)} aria-label="Previous image" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-1 text-foreground">
                  <ChevronLeft className="size-4" />
                </button>
              ) : null}
              {slide < slides.length - 1 ? (
                <button type="button" onClick={() => goTo(slide + 1)} aria-label="Next image" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-1 text-foreground">
                  <ChevronRight className="size-4" />
                </button>
              ) : null}
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1">
                {slides.map((item, index) => (
                  <span key={item.src} className={cn("size-1.5 rounded-full", index === slide ? "bg-white" : "bg-white/45")} />
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="hidden items-center gap-3 border-b border-border px-4 py-3 sm:flex">
            <span className="story-ring rounded-full p-[2px]">
              <Image src="/assets/profile/pachara-avatar.jpg" alt="" width={32} height={32} unoptimized className="size-8 rounded-full border-2 border-background object-cover" />
            </span>
            <span className="text-sm font-semibold">pachara.dev</span>
            <span className="text-sm text-muted-foreground">{t.projects.categories[project.category]}</span>
          </div>

          <div className="flex-1 space-y-4 px-4 py-4 text-sm leading-relaxed md:overflow-y-auto">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
            <p className="text-foreground/85">{copy?.description ?? project.description}</p>
            <div>
              <p className="font-semibold text-foreground">{t.projects.challenge}</p>
              <p className="mt-1 text-muted-foreground">{copy?.challenge ?? project.challenge}</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">{t.projects.outcome}</p>
              <p className="mt-1 text-muted-foreground">{copy?.outcome ?? project.outcome}</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <button type="button" onClick={onToggleLike} aria-pressed={liked} aria-label="Like" className="rounded-full p-1.5 transition-transform active:scale-90">
                <Heart className={cn("size-6", liked ? "fill-[#ff3040] text-[#ff3040]" : "text-foreground")} />
              </button>
              <div className="ml-auto flex flex-wrap justify-end gap-2">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-secondary px-3 text-sm font-semibold text-foreground hover:bg-border">
                    <GithubIcon className="size-4" />
                    {t.projects.github}
                  </a>
                ) : null}
                {demo ? (
                  <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                    {t.projects.liveDemo}
                    <ArrowUpRight className="size-4" />
                  </a>
                ) : null}
              </div>
            </div>
            <Link href={`/projects/${project.id}`} className="mt-2 inline-block text-sm font-medium text-muted-foreground hover:text-foreground">
              {t.projects.viewDetails}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
