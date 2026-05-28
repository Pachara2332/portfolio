"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FadeUp, Stagger } from "@/components/common/motion-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { useLanguage } from "@/components/i18n/language-provider";
import { SectionShell } from "@/components/layout/section-shell";
import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  const { t } = useLanguage();
  const [showArchived, setShowArchived] = useState(false);

  const featuredProjects = projects.filter((project) => project.isFeatured);
  const archivedProjects = projects.filter((project) => !project.isFeatured);

  // Check language based on footer translation to determine locale
  const isThai = t.footer.builtWith.includes("สร้างด้วย");

  const btnText = showArchived
    ? (isThai ? "ซ่อนโปรเจกต์อื่น ๆ และคลังผลงานเก่า" : "Hide Secondary & Archived Projects")
    : (isThai ? "ดูโปรเจกต์อื่น ๆ และคลังผลงานเก่า" : "View Secondary & Archived Projects");

  return (
    <SectionShell id="projects" className="pt-8 sm:pt-10 lg:pt-14">
      <FadeUp>
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
        />
      </FadeUp>

      {/* Flagship Projects Grid */}
      <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Stagger>

      {/* Secondary & Archived Projects Section */}
      {archivedProjects.length > 0 && (
        <div className="mt-12 flex flex-col items-center">
          <button
            onClick={() => setShowArchived(!showArchived)}
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border bg-secondary/38 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition duration-300 hover:border-foreground/20 hover:bg-secondary hover:text-foreground active:scale-[0.98] cursor-pointer"
          >
            {btnText}
            {showArchived ? (
              <ChevronUp className="size-4" />
            ) : (
              <ChevronDown className="size-4" />
            )}
          </button>

          <AnimatePresence initial={false}>
            {showArchived && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full overflow-hidden"
              >
                <div className="pt-8">
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {archivedProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </SectionShell>
  );
}
