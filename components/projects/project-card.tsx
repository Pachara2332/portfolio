"use client";

import { motion } from "framer-motion";
import { Bot, CheckCircle2, Cpu, ExternalLink, Globe2, Smartphone } from "lucide-react";
import { GithubIcon } from "@/components/common/icons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projectVisuals = {
  ai: {
    Icon: Bot,
    accent: "0.6 0.22 330",
    label: "AI",
  },
  iot: {
    Icon: Cpu,
    accent: "0.7 0.18 145",
    label: "IoT",
  },
  mobile: {
    Icon: Smartphone,
    accent: "0.75 0.12 55",
    label: "Mobile",
  },
  other: {
    Icon: Globe2,
    accent: "0.78 0.15 195",
    label: "Project",
  },
  web: {
    Icon: Globe2,
    accent: "0.78 0.15 195",
    label: "Web",
  },
} satisfies Record<Project["category"], { Icon: typeof Globe2; accent: string; label: string }>;

export function ProjectCard({ project, index }: ProjectCardProps) {
  const visual = projectVisuals[project.category];
  const VisualIcon = visual.Icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1] as const,
      }}
    >
      <Card className="group relative overflow-hidden border-border/30 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-border/60 hover:bg-card/80 hover:shadow-lg hover:shadow-black/20">
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.65 0.25 285 / 0.12), oklch(0.78 0.15 195 / 0.1))",
          }}
        />

        <div className="relative h-24 w-full overflow-hidden bg-gradient-to-br from-white/[0.02] to-white/[0.06] sm:h-28">
          <div
            className="absolute inset-0 opacity-70 transition-transform duration-500 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, oklch(${visual.accent} / 0.2), oklch(1 0 0 / 0.04))`,
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(1_0_0/0.05)_1px,transparent_1px),linear-gradient(0deg,oklch(1_0_0/0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
          <div
            className="absolute -left-10 -top-14 h-32 w-32 rounded-full blur-3xl"
            style={{ background: `oklch(${visual.accent} / 0.25)` }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-background/45 text-foreground/85 shadow-lg shadow-black/20 backdrop-blur-sm">
              <VisualIcon className="h-6 w-6" />
            </div>
          </div>
          <div className="absolute bottom-3 left-3">
            <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {visual.label} Project
            </span>
          </div>
          <div className="absolute right-3 top-3">
            <Badge
              variant="secondary"
              className="border-border/30 bg-background/80 text-xs uppercase tracking-wider backdrop-blur-sm"
            >
              {project.category}
            </Badge>
          </div>
        </div>

        <CardContent className="relative space-y-3 p-4">
          <h3 className="text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-gradient">
            {project.title}
          </h3>

          <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {project.impact && (
            <ul className="space-y-1.5">
              {project.impact.slice(0, 2).map((item) => (
                <li key={item} className="flex gap-2 text-[11px] leading-relaxed text-muted-foreground">
                  <CheckCircle2
                    className="mt-0.5 h-3 w-3 shrink-0"
                    style={{ color: `oklch(${visual.accent})` }}
                  />
                  <span className="line-clamp-2">{item}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-border/30 bg-white/[0.03] px-1.5 py-0 text-[10px] text-muted-foreground"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-7 items-center gap-1.5 rounded-md px-2 text-xs text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                Source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-7 items-center gap-1.5 rounded-md px-2 text-xs text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
