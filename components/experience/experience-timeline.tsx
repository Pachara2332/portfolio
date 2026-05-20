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

      <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
        <Stagger className="space-y-4">
          {experiences.map((experience) => (
            <StaggerItem key={experience.id}>
              {(() => {
                const experienceCopy =
                  t.experience.items[experience.id as keyof typeof t.experience.items];

                return (
              <article className="rounded-lg border border-border bg-card p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{experience.period}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                      {experienceCopy.role}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{experience.company}</p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-md border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    <BriefcaseBusiness className="size-3.5" />
                    {t.experience.type}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  {experienceCopy.description}
                </p>

                <div className="mt-5 space-y-3">
                  {experienceCopy.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3">
                      <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full border border-border bg-secondary text-foreground">
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
                      className="rounded-md border border-border bg-secondary/45 px-2.5 py-1 text-xs text-muted-foreground"
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
          <aside className="rounded-lg border border-border bg-card p-5 lg:sticky lg:top-24">
            <p className="text-sm font-semibold text-foreground">{t.experience.signalTitle}</p>
            <div className="mt-5 space-y-4">
              {t.experience.achievements.map((achievement) => (
                <div key={achievement} className="border-l border-border pl-4">
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
