"use client";

import { FadeUp } from "@/components/common/motion-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { useLanguage } from "@/components/i18n/language-provider";
import { SectionShell } from "@/components/layout/section-shell";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <SectionShell id="about" className="border-y border-border/60 bg-secondary/16">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start">
        <FadeUp>
          <SectionHeading
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            subtitle={t.about.subtitle}
            className="mb-0"
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="surface-card rounded-xl p-6">
            <div className="space-y-6">
              {t.about.notes.map((note) => (
                <p key={note} className="text-base leading-8 text-foreground/84">
                  {note}
                </p>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </SectionShell>
  );
}
