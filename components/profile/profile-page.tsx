"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Award,
  BadgeCheck,
  Bot,
  Briefcase,
  Clapperboard,
  FileText,
  Heart,
  Gamepad2,
  Globe2,
  Grid3x3,
  Layers,
  LayoutGrid,
  Mail,
  MapPin,
  MessageCircle,
  Smartphone,
  X,
  type LucideIcon,
} from "lucide-react";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { skills } from "@/data/skills";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/i18n/language-provider";
import { ResumeDialog } from "@/components/common/resume-dialog";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { CertificatesSection } from "@/components/certificates/certificates-section";
import { cn } from "@/lib/utils";
import { PostModal } from "@/components/profile/post-modal";
import type { Project } from "@/types";

type Filter = "all" | "web" | "mobile" | "ai" | "line" | "game";
type Tab = "projects" | "reels" | "experience" | "certificates";

const isLine = (project: Project) => project.techStack.some((tech) => tech.includes("LINE") || tech.includes("LIFF"));

const filters: { key: Filter; icon: LucideIcon; match: (project: Project) => boolean }[] = [
  { key: "all", icon: LayoutGrid, match: () => true },
  { key: "web", icon: Globe2, match: (project) => project.category === "web" },
  { key: "mobile", icon: Smartphone, match: (project) => project.category === "mobile" },
  { key: "ai", icon: Bot, match: (project) => project.category === "ai" },
  { key: "line", icon: MessageCircle, match: isLine },
  { key: "game", icon: Gamepad2, match: (project) => project.id === "koet-isan" },
];

const tabs: { key: Tab; icon: LucideIcon }[] = [
  { key: "projects", icon: Grid3x3 },
  { key: "reels", icon: Clapperboard },
  { key: "experience", icon: Briefcase },
  { key: "certificates", icon: Award },
];

const categoryIcon: Record<Project["category"], LucideIcon> = {
  ai: Bot,
  iot: Globe2,
  mobile: Smartphone,
  other: Gamepad2,
  web: Globe2,
};

function TopBar() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-3 px-4">
        <a href="#top" className="text-lg font-semibold tracking-tight text-foreground">
          pachara<span className="text-primary">.dev</span>
        </a>
        <div className="flex items-center gap-2">
          <div className="flex rounded-full bg-secondary p-0.5 text-xs font-semibold" role="group" aria-label="Language">
            {(["en", "th"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                aria-pressed={language === code}
                className={cn(
                  "rounded-full px-2.5 py-1 uppercase transition-colors",
                  language === code ? "bg-background text-foreground shadow-sm" : "text-muted-foreground",
                )}
              >
                {code}
              </button>
            ))}
          </div>
          <ResumeDialog className="hidden h-9 items-center gap-1.5 rounded-full border border-border px-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:inline-flex">
            <FileText className="size-4" />
            {t.nav.resume}
          </ResumeDialog>
          <a
            href="#contact"
            className="hidden h-9 items-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            {t.profile.hire}
          </a>
        </div>
      </div>
    </header>
  );
}

const storyColors = ["#14213d", "#2457f5", "#962fbf", "#d62976", "#14213d"];

type StorySlide = { title: string; body: string; image?: string };

function StoryViewer({ slides, label, onClose }: { slides: readonly StorySlide[]; label: string; onClose: () => void }) {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const isLast = index === slides.length - 1;

  const next = () => (isLast ? onClose() : setIndex(index + 1));
  const prev = () => setIndex(Math.max(0, index - 1));

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") setIndex((value) => Math.min(slides.length - 1, value + 1));
      if (event.key === "ArrowLeft") setIndex((value) => Math.max(0, value - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, slides.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 sm:p-6" role="dialog" aria-modal="true" aria-label={label}>
      <div
        className="relative flex h-full w-full flex-col overflow-hidden text-white transition-colors duration-500 sm:h-[min(760px,90vh)] sm:max-w-[430px] sm:rounded-2xl"
        style={{ backgroundColor: storyColors[index % storyColors.length] }}
      >
        {slides[index].image ? (
          <>
            <Image src={slides[index].image} alt={siteConfig.name} fill sizes="430px" className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/80" />
          </>
        ) : null}
        <div className="relative flex gap-1 px-3 pt-3">
          {slides.map((slide, slideIndex) => (
            <div key={slide.title} className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/30">
              {slideIndex < index ? <div className="h-full bg-white" /> : null}
              {slideIndex === index ? (
                <div key={index} className="story-progress h-full bg-white motion-reduce:animate-none" onAnimationEnd={next} />
              ) : null}
            </div>
          ))}
        </div>
        <div className="relative flex items-center justify-between px-3 py-3">
          <div className="flex items-center gap-2">
            <span className="story-ring rounded-full p-[2px]">
              <Image src="/assets/profile/pachara-avatar.jpg" alt="" width={32} height={32} unoptimized className="size-8 rounded-full border-2 border-white object-cover" />
            </span>
            <span className="text-sm font-semibold">pachara.dev</span>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-full p-1.5 hover:bg-white/15">
            <X className="size-6" />
          </button>
        </div>

        <div className={cn("relative flex flex-1 flex-col px-8", slides[index].image ? "justify-end pb-12" : "justify-center")}>
          <button type="button" aria-label="Previous" onClick={prev} className="absolute inset-y-0 left-0 z-10 w-1/3" />
          <button type="button" aria-label="Next" onClick={next} className="absolute inset-y-0 right-0 z-10 w-2/3" />
          <p className="text-4xl font-semibold leading-tight tracking-tight">{slides[index].title}</p>
          <p className="mt-4 text-lg leading-relaxed text-white/85">{slides[index].body}</p>
          {isLast ? (
            <a
              href="#contact"
              onClick={onClose}
              className="relative z-20 mt-8 inline-flex h-11 w-fit items-center rounded-full bg-white px-6 text-sm font-semibold text-[#14213d]"
            >
              {t.profile.hire}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ProfileHeader() {
  const { t } = useLanguage();
  const [storyOpen, setStoryOpen] = useState(false);
  const stats = [
    { value: projects.length, label: t.profile.stats.projects },
    { value: experiences.length, label: t.profile.stats.roles },
    { value: skills.length, label: t.profile.stats.tools },
  ];

  return (
    <section id="top" className="grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-4 sm:gap-x-12 md:grid-cols-[auto_1fr]">
      <button
        type="button"
        onClick={() => setStoryOpen(true)}
        aria-label={t.profile.watchStory}
        className="story-ring group relative row-span-1 rounded-full p-[3px] transition-transform active:scale-95 md:row-span-2"
      >
        <span className="block overflow-hidden rounded-full bg-background p-[3px]">
          <Image
            src="/assets/profile/pachara-avatar.jpg"
            alt={siteConfig.name}
            width={144}
            height={144}
            priority
            className="size-20 rounded-full object-cover transition-transform group-hover:scale-[1.03] sm:size-36"
          />
        </span>
        <span className="absolute bottom-full left-0 mb-1 w-max max-w-[10rem] rounded-2xl bg-background px-3 py-1.5 text-[11px] font-medium leading-tight text-foreground shadow-[0_2px_12px_rgba(20,33,61,0.15)] sm:max-w-[14rem] sm:text-xs">
          {t.profile.note}
          <span className="absolute -bottom-1 left-8 size-2 rotate-45 bg-background sm:left-16" />
        </span>
      </button>
      {storyOpen ? (
        <StoryViewer
          label={t.profile.watchStory}
          slides={t.profile.stories.map((slide, index) => (index === 0 ? { ...slide, image: "/assets/profile/pachara-story.jpg" } : slide))}
          onClose={() => setStoryOpen(false)}
        />
      ) : null}

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h1 className="flex items-center gap-1.5 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {siteConfig.name}
            <BadgeCheck className="size-5 fill-primary text-white" aria-label="Verified" />
          </h1>
          <div className="hidden gap-2 md:flex">
            <a
              href="#contact"
              className="inline-flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              {t.profile.hire}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-secondary px-4 text-sm font-semibold text-foreground hover:bg-border"
            >
              <Mail className="size-4" />
              {t.profile.email}
            </a>
          </div>
        </div>
        <ul className="mt-3 flex gap-6 text-sm sm:gap-10 sm:text-base">
          {stats.map((stat) => (
            <li key={stat.label} className="flex flex-col sm:flex-row sm:gap-1.5">
              <span className="font-semibold text-foreground">{stat.value}</span>
              <span className="text-muted-foreground">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-2 md:col-span-1 md:col-start-2">
        <p className="font-semibold text-foreground">{siteConfig.role}</p>
        <p className="mt-1 max-w-xl text-pretty leading-relaxed text-foreground/85">{t.profile.bio}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5 font-medium text-emerald-700">
            <span className="size-2 rounded-full bg-emerald-500" />
            {t.profile.available}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3.5" />
            {siteConfig.location}
          </span>
          <a href="https://github.com/Pachara2332" target="_blank" rel="noopener noreferrer" className="font-medium text-accent-foreground hover:underline">
            github.com/Pachara2332
          </a>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <span className="text-muted-foreground">{t.profile.workedAt}</span>
          {experiences.map((experience) => (
            <span key={experience.id} className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 font-medium text-foreground">
              <Briefcase className="size-3.5 text-primary" />
              {experience.company.replace(" Co., Ltd.", "")}
            </span>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 md:hidden">
          <a href="#contact" className="inline-flex h-9 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
            {t.profile.hire}
          </a>
          <ResumeDialog className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-secondary text-sm font-semibold text-foreground">
            <FileText className="size-4" />
            {t.nav.resume}
          </ResumeDialog>
        </div>
      </div>
    </section>
  );
}

function Highlights({ active, onSelect }: { active: Filter; onSelect: (filter: Filter) => void }) {
  const { t } = useLanguage();
  const [workOpen, setWorkOpen] = useState(false);

  return (
    <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none]">
      {workOpen ? <StoryViewer label={t.profile.highlights.work} slides={t.profile.workStories} onClose={() => setWorkOpen(false)} /> : null}
      <ul className="flex gap-4 sm:gap-8">
        <li>
          <button type="button" onClick={() => setWorkOpen(true)} className="group flex w-16 flex-col items-center gap-1.5 sm:w-20">
            <span className="story-ring rounded-full p-[2px]">
              <span className="flex size-14 items-center justify-center rounded-full border-2 border-background bg-[#14213d] text-white sm:size-[72px]">
                <Briefcase className="size-6 sm:size-7" />
              </span>
            </span>
            <span className="text-xs font-semibold text-foreground">{t.profile.highlights.work}</span>
          </button>
        </li>
        {filters.map(({ key, icon: Icon, match }) => {
          const group = projects.filter(match);
          if (group.length === 0) return null;
          const isActive = active === key;
          const cover = key === "all" ? undefined : group.find((project) => project.coverImage)?.coverImage;

          return (
            <li key={key}>
              <button
                type="button"
                onClick={() => onSelect(key)}
                aria-pressed={isActive}
                className="group flex w-16 flex-col items-center gap-1.5 sm:w-20"
              >
                <span className={cn("rounded-full p-[2px]", isActive ? "bg-primary" : "bg-border")}>
                  <span className="relative flex size-14 items-center justify-center overflow-hidden rounded-full border-2 border-background bg-secondary text-foreground transition-colors group-hover:bg-accent sm:size-[72px]">
                    {cover ? <Image src={cover} alt="" fill sizes="72px" className="object-cover" /> : <Icon className="size-6 sm:size-7" />}
                  </span>
                </span>
                <span className={cn("text-xs", isActive ? "font-semibold text-foreground" : "text-muted-foreground")}>
                  {t.profile.highlights[key]}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ProjectTile({ project, liked, onOpen }: { project: Project; liked: boolean; onOpen: () => void }) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.id as keyof typeof t.projects.items];
  const title = copy?.title ?? project.title;
  const Icon = categoryIcon[project.category];
  const isGallery = (project.images?.length ?? 0) > 1 || (project.children?.length ?? 0) > 0;

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={title}
      className="group relative block aspect-[3/4] w-full text-left overflow-hidden rounded-[4px] bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {project.coverImage ? (
        <Image
          src={project.coverImage}
          alt={title}
          fill
          sizes="(min-width: 1024px) 330px, 33vw"
          className="object-cover"
        />
      ) : (
        <div className="flex h-full flex-col justify-between bg-accent p-3 text-foreground sm:p-5">
          <span className="story-ring flex size-9 items-center justify-center rounded-full p-[2px] sm:size-12">
            <span className="flex size-full items-center justify-center rounded-full bg-background">
              <Icon className="size-4 text-primary sm:size-5" />
            </span>
          </span>
          <div>
            <p className="text-sm font-semibold leading-snug sm:text-2xl">{title}</p>
            <p className="mt-1 hidden text-sm text-muted-foreground sm:block">{project.techStack.slice(0, 2).join(", ")}</p>
          </div>
        </div>
      )}
      {isGallery ? <Layers className="absolute right-2 top-2 size-5 text-white drop-shadow" aria-hidden /> : null}
      <div className="absolute inset-0 flex flex-col justify-end bg-[#14213d]/75 p-3 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-4">
        <p className="text-sm font-semibold sm:text-base">{title}</p>
        <p className="mt-1 hidden text-xs text-white/80 sm:block">{project.techStack.slice(0, 3).join(", ")}</p>
      </div>
      {liked ? <Heart className="absolute bottom-2 right-2 size-5 fill-[#ff3040] text-[#ff3040] drop-shadow" aria-hidden /> : null}
    </button>
  );
}

function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="scroll-mt-20 py-16">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">{t.profile.servicesTitle}</h2>
      <p className="mt-2 max-w-xl text-muted-foreground">{t.profile.servicesIntro}</p>
      <div className="mt-6 divide-y divide-border rounded-2xl border border-border">
        {t.profile.services.map((service) => {
          const match = filters.find((filter) => filter.key === service.key)?.match ?? (() => false);
          const count = projects.filter(match).length;

          return (
            <article key={service.key} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="max-w-xl">
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground/80">
                      {tag}
                    </span>
                  ))}
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                    {count} {t.profile.related}
                  </span>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex h-10 shrink-0 items-center justify-center rounded-lg border border-primary px-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {t.profile.discuss}
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

const tiktokUrl = "https://www.tiktok.com/@donnartech";

function Reels() {
  const { t } = useLanguage();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <div className="py-8">
      <p className="mx-auto max-w-md text-center text-sm text-muted-foreground">{t.profile.reelsIntro}</p>
      <blockquote className="tiktok-embed mx-auto mt-4" cite={tiktokUrl} data-unique-id="donnartech" data-embed-type="creator" style={{ maxWidth: 780, minWidth: 288 }}>
        <section>
          <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm font-semibold text-background">
            {t.profile.watchTikTok}
          </a>
        </section>
      </blockquote>
    </div>
  );
}

export function ProfilePage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const [tab, setTab] = useState<Tab>("projects");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [liked, setLiked] = useState<string[]>([]);
  const activeMatch = filters.find((item) => item.key === filter)?.match ?? (() => true);
  const visibleProjects = projects.filter(activeMatch);
  const openProject = openIndex === null ? null : visibleProjects[openIndex];
  const toggleLike = (id: string) =>
    setLiked((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));

  return (
    <>
      <TopBar />
      <main className="flex-1 pb-20 sm:pb-0">
        <div className="mx-auto max-w-5xl px-4 pt-12 sm:pt-16">
          <ProfileHeader />
          <div className="mt-8 sm:mt-12">
            <Highlights
              active={filter}
              onSelect={(next) => {
                setFilter(next);
                setTab("projects");
              }}
            />
          </div>

          <div className="mt-8 border-t border-border" role="tablist">
            <div className="flex justify-center gap-10 sm:gap-14">
              {tabs.map(({ key, icon: Icon }) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={tab === key}
                  onClick={() => setTab(key)}
                  className={cn(
                    "-mt-px flex items-center gap-1.5 border-t py-3.5 text-sm font-semibold transition-colors",
                    tab === key ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon className="size-4" />
                  <span className="hidden sm:inline">{t.profile.tabs[key]}</span>
                </button>
              ))}
            </div>
          </div>

          {tab === "projects" ? (
            visibleProjects.length > 0 ? (
              <div className="grid grid-cols-3 gap-1">
                {visibleProjects.map((project, index) => (
                  <ProjectTile key={project.id} project={project} liked={liked.includes(project.id)} onOpen={() => setOpenIndex(index)} />
                ))}
              </div>
            ) : (
              <p className="py-16 text-center text-muted-foreground">{t.profile.empty}</p>
            )
          ) : null}
          {tab === "reels" ? <Reels /> : null}
        </div>

        {openProject && openIndex !== null ? (
          <PostModal
            project={openProject}
            liked={liked.includes(openProject.id)}
            onToggleLike={() => toggleLike(openProject.id)}
            onClose={() => setOpenIndex(null)}
            onPrev={openIndex > 0 ? () => setOpenIndex(openIndex - 1) : undefined}
            onNext={openIndex < visibleProjects.length - 1 ? () => setOpenIndex(openIndex + 1) : undefined}
          />
        ) : null}

        {tab === "experience" ? <ExperienceTimeline /> : null}
        {tab === "certificates" ? <CertificatesSection /> : null}

        <div className="mx-auto max-w-5xl px-4">
          <Services />
        </div>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background p-3 sm:hidden">
        <ResumeDialog className="inline-flex h-11 items-center justify-center gap-1.5 rounded-lg bg-secondary text-sm font-semibold text-foreground">
          <FileText className="size-4" />
          {t.nav.resume}
        </ResumeDialog>
        <a href="#contact" className="inline-flex h-11 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
          {t.profile.hire}
        </a>
      </div>
    </>
  );
}
