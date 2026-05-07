"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { FadeUp } from "@/components/common/motion-wrapper";
import { SectionHeading } from "@/components/common/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of projects that showcase my skills across web development, IoT, and mobile applications"
          />
        </FadeUp>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
