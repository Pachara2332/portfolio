"use client";

import { FadeUp, Stagger } from "@/components/common/motion-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { useLanguage } from "@/components/i18n/language-provider";
import { SectionShell } from "@/components/layout/section-shell";
import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <SectionShell id="projects">
      <FadeUp>
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
        />
      </FadeUp>

      <Stagger className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Stagger>
    </SectionShell>
  );
}
