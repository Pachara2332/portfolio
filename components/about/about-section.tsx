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
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.about.principles.map((principle, index) => (
                <div
                  key={principle}
                  className="group rounded-lg border border-border/70 bg-background/38 p-4 transition-colors hover:border-foreground/18 hover:bg-secondary/34"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    0{index + 1}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6 text-foreground/84">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </SectionShell>
  );
}
