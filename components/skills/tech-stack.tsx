"use client";

import { skills } from "@/data/skills";
import { FadeUp } from "@/components/common/motion-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import {
  Globe,
  Atom,
  FileCode2,
  Paintbrush,
  Move3D,
  Smartphone,
  Code,
  Server,
  Terminal,
  Zap,
  Database,
  Flame,
  Cpu,
  CircuitBoard,
  Radio,
  Cable,
  Container,
  GitBranch,
  ScanEye,
  Monitor,
  type LucideIcon,
} from "lucide-react";
import { FigmaIcon } from "@/components/common/icons";

const iconMap: Record<string, LucideIcon | typeof FigmaIcon> = {
  globe: Globe,
  atom: Atom,
  "file-code-2": FileCode2,
  paintbrush: Paintbrush,
  "move-3d": Move3D,
  smartphone: Smartphone,
  code: Code,
  server: Server,
  terminal: Terminal,
  zap: Zap,
  database: Database,
  flame: Flame,
  cpu: Cpu,
  "circuit-board": CircuitBoard,
  radio: Radio,
  cable: Cable,
  container: Container,
  "git-branch": GitBranch,
  "scan-eye": ScanEye,
  figma: FigmaIcon,
  monitor: Monitor,
};

function SkillPill({ name, icon }: { name: string; icon: string }) {
  const Icon = iconMap[icon] || Code;
  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-border/30 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-white/[0.06] hover:text-foreground hover:border-border/50">
      <Icon className="h-4 w-4 shrink-0" style={{ color: "oklch(0.65 0.25 285)" }} />
      <span className="whitespace-nowrap">{name}</span>
    </div>
  );
}

export function TechStack() {
  // Split skills into two rows
  const row1 = skills.slice(0, Math.ceil(skills.length / 2));
  const row2 = skills.slice(Math.ceil(skills.length / 2));

  return (
    <section id="tech-stack" className="relative py-20 md:py-28 overflow-hidden">
      <FadeUp>
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies and tools I use to bring ideas to life"
        />
      </FadeUp>

      <div className="relative mt-8 space-y-4">
        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        {/* Row 1 — left to right */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex gap-4 pr-4">
            {[...row1, ...row1].map((skill, i) => (
              <SkillPill key={`r1-${i}`} name={skill.name} icon={skill.icon} />
            ))}
          </div>
          <div className="animate-marquee flex gap-4 pr-4" aria-hidden="true">
            {[...row1, ...row1].map((skill, i) => (
              <SkillPill key={`r1d-${i}`} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-reverse flex gap-4 pr-4">
            {[...row2, ...row2].map((skill, i) => (
              <SkillPill key={`r2-${i}`} name={skill.name} icon={skill.icon} />
            ))}
          </div>
          <div className="animate-marquee-reverse flex gap-4 pr-4" aria-hidden="true">
            {[...row2, ...row2].map((skill, i) => (
              <SkillPill key={`r2d-${i}`} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
