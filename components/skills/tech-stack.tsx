"use client";

import {
  Atom,
  Cloud,
  Code,
  Container,
  Cpu,
  Database,
  FileCode2,
  Flame,
  GitBranch,
  Globe,
  Monitor,
  Paintbrush,
  Radio,
  Server,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { FadeUp, Stagger, StaggerItem } from "@/components/common/motion-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { useLanguage } from "@/components/i18n/language-provider";
import { SectionShell } from "@/components/layout/section-shell";
import { FigmaIcon } from "@/components/common/icons";
import { skills } from "@/data/skills";
import type { Skill } from "@/types";

const iconMap: Record<string, LucideIcon | typeof FigmaIcon> = {
  atom: Atom,
  cloud: Cloud,
  code: Code,
  container: Container,
  cpu: Cpu,
  database: Database,
  figma: FigmaIcon,
  "file-code-2": FileCode2,
  flame: Flame,
  "git-branch": GitBranch,
  globe: Globe,
  monitor: Monitor,
  paintbrush: Paintbrush,
  radio: Radio,
  server: Server,
  smartphone: Smartphone,
  zap: Zap,
};

const groups: Skill["category"][] = [
  "frontend",
  "backend",
  "database",
  "tools",
  "mobile",
  "iot",
];

export function TechStack() {
  const { t } = useLanguage();

  return (
    <SectionShell id="stack" className="border-y border-border/60 bg-secondary/20">
      <FadeUp>
        <SectionHeading
          eyebrow={t.stack.eyebrow}
          title={t.stack.title}
          subtitle={t.stack.subtitle}
        />
      </FadeUp>

      <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => {
          const groupCopy = t.stack.groups[group];
          const groupSkills = skills.filter((skill) => skill.category === group);

          return (
            <StaggerItem key={group}>
              <div className="h-full rounded-lg border border-border bg-card p-5">
                <h3 className="text-base font-semibold text-foreground">{groupCopy.title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                  {groupCopy.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {groupSkills.map((skill) => {
                    const Icon = iconMap[skill.icon] ?? Code;

                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/45 px-2.5 py-1.5 text-xs font-medium text-muted-foreground"
                      >
                        <Icon className="size-3.5" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </SectionShell>
  );
}
