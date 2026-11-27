"use client";

import type React from "react";
import { FileText } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/i18n/language-provider";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const options = [
  { label: "English", sub: "EN", href: siteConfig.resume.en },
  { label: "ภาษาไทย", sub: "TH", href: siteConfig.resume.th },
];

export function ResumeDialog({ className, children }: { className?: string; children: React.ReactNode }) {
  const { t } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger className={className}>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{t.nav.resume}</DialogTitle>
        <div className="grid grid-cols-2 gap-3">
          {options.map((option) => (
            <a
              key={option.sub}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 rounded-lg border border-border p-5 text-foreground transition hover:border-primary/40 hover:bg-accent"
            >
              <FileText className="size-6 text-primary" />
              <span className="text-sm font-semibold">{option.label}</span>
              <span className="text-xs text-muted-foreground">{option.sub}</span>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
