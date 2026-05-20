"use client";

import { useState } from "react";
import type React from "react";
import { CheckCircle2, Loader2, Mail, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/icons";
import { FadeUp } from "@/components/common/motion-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { useLanguage } from "@/components/i18n/language-provider";
import { SectionShell } from "@/components/layout/section-shell";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormState("idle"), 4500);
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3500);
    }
  };

  return (
    <SectionShell id="contact">
      <FadeUp>
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />
      </FadeUp>

      <div className="grid gap-6 lg:grid-cols-[0.78fr_1fr]">
        <FadeUp delay={0.05}>
          <div className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-semibold text-foreground">{t.contact.directChannels}</p>
            <div className="mt-5 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex min-w-0 items-center gap-3 rounded-md border border-border bg-secondary/35 p-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4 shrink-0" />
                <span className="min-w-0 break-all">{siteConfig.email}</span>
              </a>
              <a
                href="tel:+66990094187"
                className="flex min-w-0 items-center gap-3 rounded-md border border-border bg-secondary/35 p-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="size-4 shrink-0" />
                <span className="min-w-0 break-all">{siteConfig.phone}</span>
              </a>
              <a
                href="https://github.com/Pachara2332"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center gap-3 rounded-md border border-border bg-secondary/35 p-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <GithubIcon className="size-4 shrink-0" />
                <span className="min-w-0 break-all">github.com/Pachara2332</span>
              </a>
              <a
                href="https://www.linkedin.com/in/pachara-wongsasri-9256103bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center gap-3 rounded-md border border-border bg-secondary/35 p-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <LinkedinIcon className="size-4 shrink-0" />
                <span className="min-w-0 break-words">{t.contact.linkedinProfile}</span>
              </a>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-card p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                  {t.contact.name}
                </label>
                <input
                  id="contact-name"
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  required
                  autoComplete="name"
                  className="mt-2 h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-foreground/40 focus:ring-2 focus:ring-foreground/10"
                  placeholder={t.contact.namePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                  {t.contact.email}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  required
                  autoComplete="email"
                  className="mt-2 h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-foreground/40 focus:ring-2 focus:ring-foreground/10"
                  placeholder={t.contact.emailPlaceholder}
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                {t.contact.message}
              </label>
              <textarea
                id="contact-message"
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                required
                rows={6}
                className="mt-2 w-full resize-none rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground outline-none transition focus:border-foreground/40 focus:ring-2 focus:ring-foreground/10"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              disabled={formState === "loading" || formState === "success"}
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-foreground px-5 py-2 text-center text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {formState === "loading" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  {t.contact.sending}
                </>
              ) : formState === "success" ? (
                <>
                  <CheckCircle2 className="size-4" />
                  {t.contact.success}
                </>
              ) : (
                <>
                  <Send className="size-4" />
                  {t.contact.send}
                </>
              )}
            </button>
            {formState === "error" ? (
              <p className="mt-3 text-center text-sm text-destructive">
                {t.contact.error}
              </p>
            ) : null}
          </form>
        </FadeUp>
      </div>
    </SectionShell>
  );
}
