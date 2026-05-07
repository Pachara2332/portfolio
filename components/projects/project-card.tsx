"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/common/icons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      <Card className="group relative overflow-hidden border-border/30 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-border/60 hover:bg-card/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
        {/* Gradient border on hover */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.65 0.25 285 / 0.15), oklch(0.78 0.15 195 / 0.15))",
          }}
        />

        {/* Image placeholder */}
        <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-white/[0.02] to-white/[0.06]">
          <div
            className="absolute inset-0 bg-gradient-to-br opacity-60 transition-transform duration-500 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, oklch(0.65 0.25 285 / ${project.category === "iot" ? "0.2" : "0.1"}), oklch(0.78 0.15 195 / 0.1))`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl">
              {project.category === "iot"
                ? "📡"
                : project.category === "web"
                  ? "🌐"
                  : project.category === "ai"
                    ? "🤖"
                    : "📱"}
            </span>
          </div>
          {/* Category badge */}
          <div className="absolute top-3 right-3">
            <Badge
              variant="secondary"
              className="border-border/30 bg-background/80 text-xs backdrop-blur-sm uppercase tracking-wider"
            >
              {project.category}
            </Badge>
          </div>
        </div>

        <CardContent className="relative space-y-4 p-5">
          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-gradient">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-border/30 bg-white/[0.03] text-xs text-muted-foreground"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pt-2">
            {project.github && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                asChild
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  Source
                </a>
              </Button>
            )}
            {project.demo && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                asChild
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
