"use client";

import { BriefcaseBusiness, Check } from "lucide-react";
import { FadeUp, Stagger, StaggerItem } from "@/components/common/motion-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { useLanguage } from "@/components/i18n/language-provider";
import { SectionShell } from "@/components/layout/section-shell";
import { experiences } from "@/data/experience";

export function ExperienceTimeline() {
  const { t } = useLanguage();

  return (
    <SectionShell id="experience">
      <FadeUp>
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />
      </FadeUp>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.62fr]">
        <Stagger className="space-y-4">
          {experiences.map((experience) => (
            <StaggerItem key={experience.id}>
              {(() => {
                const experienceCopy =
                  t.experience.items[experience.id as keyof typeof t.experience.items];

                return (
                  <article className="surface-card relative overflow-hidden rounded-xl p-6">
                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-foreground/40 via-border to-transparent" />
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{experience.period}</p>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                          {experienceCopy.role}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">{experience.company}</p>
                      </div>
                      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-secondary/45 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                        <BriefcaseBusiness className="size-3.5" />
                        {t.experience.type}
                      </span>
                    </div>

                    <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
                      {experienceCopy.description}
                    </p>

                    <div className="mt-6 grid gap-3">
                      {experienceCopy.highlights.map((highlight) => (
                        <div key={highlight} className="flex gap-3 rounded-lg border border-border/65 bg-background/36 p-3.5">
                          <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-border/80 bg-secondary text-foreground">
                            <Check className="size-3" />
                          </span>
                          <p className="text-sm leading-6 text-foreground/82">{highlight}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border/70 bg-secondary/38 px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })()}
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp delay={0.1}>
          <aside className="surface-card rounded-xl p-5 lg:sticky lg:top-24">
            <p className="text-sm font-semibold tracking-tight text-foreground">{t.experience.signalTitle}</p>
            <div className="mt-5 space-y-4">
              {t.experience.achievements.map((achievement, index) => (
                <div key={achievement} className="relative border-l border-border/80 pl-5">
                  <span className="absolute -left-[9px] top-0 flex size-4 items-center justify-center rounded-full border border-border bg-card text-[9px] font-semibold text-muted-foreground">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </aside>
        </FadeUp>
      </div>
    </SectionShell>
  );
}
