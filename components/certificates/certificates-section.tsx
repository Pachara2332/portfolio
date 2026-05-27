"use client";

import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import { FadeUp, Stagger, StaggerItem } from "@/components/common/motion-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { useLanguage } from "@/components/i18n/language-provider";
import { SectionShell } from "@/components/layout/section-shell";
import { certificates } from "@/data/certificates";

export function CertificatesSection() {
  const { t } = useLanguage();

  return (
    <SectionShell id="certificates" className="border-y border-border/60 bg-secondary/16">
      <FadeUp>
        <SectionHeading
          eyebrow={t.certificates.eyebrow}
          title={t.certificates.title}
          subtitle={t.certificates.subtitle}
        />
      </FadeUp>

      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <StaggerItem key={certificate.id}>
            <article className="group surface-card flex h-full flex-col overflow-hidden rounded-xl transition duration-300 hover:-translate-y-1 hover:border-foreground/22 hover:bg-card">
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/10] overflow-hidden border-b border-border/75 bg-background"
                aria-label={`${t.certificates.view}: ${certificate.title}`}
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </a>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-secondary/45 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  <Award className="size-3.5" />
                  {certificate.issuer}
                </div>

                <h3 className="text-base font-semibold leading-6 tracking-tight text-foreground">
                  {certificate.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{certificate.date}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {certificate.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/70 bg-secondary/36 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-semibold text-foreground transition-colors hover:text-muted-foreground"
                >
                  {t.certificates.view}
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}
