"use client";

import {
  Atom,
  Code,
  Container,
  Database,
  FileCode2,
  Flame,
  GitBranch,
  Globe,
  Monitor,
  Paintbrush,
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
  code: Code,
  container: Container,
  database: Database,
  figma: FigmaIcon,
  "file-code-2": FileCode2,
  flame: Flame,
  "git-branch": GitBranch,
  globe: Globe,
  monitor: Monitor,
  paintbrush: Paintbrush,
  server: Server,
  smartphone: Smartphone,
  zap: Zap,
};

const groups: Skill["category"][] = [
  "frontendMobile",
  "backend",
  "database",
  "toolsOrm",
  "aiTools",
];

export function TechStack() {
  const { t } = useLanguage();

  return (
    <SectionShell id="stack" className="border-y border-border/60 bg-secondary/16">
      <FadeUp>
        <SectionHeading
          eyebrow={t.stack.eyebrow}
          title={t.stack.title}
          subtitle={t.stack.subtitle}
        />
      </FadeUp>

      <Stagger className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {groups.map((group) => {
          const groupCopy = t.stack.groups[group];
          const groupSkills = skills.filter((skill) => skill.category === group);

          return (
            <StaggerItem key={group}>
              <div className="surface-card h-full rounded-xl p-5 transition duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {groupCopy.title}
                  </h3>
                  <span className="rounded-full border border-border/70 bg-secondary/42 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {groupSkills.length}
                  </span>
                </div>
                <p className="min-h-16 text-sm leading-6 text-muted-foreground">
                  {groupCopy.description}
                </p>
                <div className="mt-6 grid gap-2">
                  {groupSkills.map((skill) => {
                    const Icon = iconMap[skill.icon] ?? Code;

                    return (
                      <span
                        key={skill.name}
                        className="inline-flex min-h-9 items-center gap-2 rounded-md border border-border/65 bg-background/38 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/18 hover:bg-secondary/45 hover:text-foreground"
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
