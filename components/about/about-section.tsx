"use client";

import { MapPin } from "lucide-react";
import { FadeUp } from "@/components/common/motion-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { useLanguage } from "@/components/i18n/language-provider";
import { SectionShell } from "@/components/layout/section-shell";
import { siteConfig } from "@/data/site";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <SectionShell id="about" className="border-y border-border/60 bg-secondary/20">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start">
        <FadeUp>
          <SectionHeading
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            subtitle={t.about.subtitle}
            className="mb-0"
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              {siteConfig.location}
            </div>
            <div className="mt-6 space-y-5">
              {t.about.notes.map((note) => (
                <p key={note} className="text-sm leading-7 text-foreground/82">
                  {note}
                </p>
              ))}
            </div>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {t.about.principles.map((principle) => (
                <div
                  key={principle}
                  className="rounded-md border border-border bg-background/40 px-3 py-2 text-sm text-muted-foreground"
                >
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </SectionShell>
  );
}
