"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Copy, Share2 } from "lucide-react";
import { skills } from "@/data/skills";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/i18n/language-provider";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { Skill } from "@/types";

const groupOrder: Skill["category"][] = ["frontendMobile", "backend", "database", "toolsOrm", "aiTools"];

export function ToolsSheet({ className, children }: { className?: string; children: React.ReactNode }) {
  const { t } = useLanguage();

  return (
    <Dialog>
      <DialogTrigger className={className}>{children}</DialogTrigger>
      <DialogContent className="max-h-[80vh] gap-4 overflow-y-auto">
        <DialogTitle>{t.stack.title}</DialogTitle>
        {groupOrder.map((group) => (
          <div key={group}>
            <p className="text-sm font-semibold text-foreground">{t.stack.groups[group].title}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {skills
                .filter((skill) => skill.category === group)
                .map((skill) => (
                  <span key={skill.name} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-foreground">
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
}

export function ShareSheet({ className, children }: { className?: string; children: React.ReactNode }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const url = siteConfig.url;

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nativeShare = () => {
    if (typeof navigator.share === "function") {
      navigator.share({ title: siteConfig.title, url }).catch(() => undefined);
    } else {
      void copy();
    }
  };

  return (
    <Dialog>
      <DialogTrigger className={className} aria-label={t.profile.share}>{children}</DialogTrigger>
      <DialogContent className="justify-items-center gap-4 text-center">
        <DialogTitle>{t.profile.shareTitle}</DialogTitle>
        <div className="rounded-2xl border border-border bg-white p-4">
          <Image src="/assets/profile/portfolio-qr.png" alt={t.profile.scanQr} width={200} height={200} unoptimized className="size-48" />
        </div>
        <p className="text-sm text-muted-foreground">{t.profile.scanQr}</p>
        <div className="grid w-full grid-cols-2 gap-2">
          <button type="button" onClick={copy} className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-secondary text-sm font-semibold text-foreground hover:bg-border">
            {copied ? <Check className="size-4 text-emerald-600" /> : <Copy className="size-4" />}
            {copied ? t.profile.copied : t.profile.copyLink}
          </button>
          <button type="button" onClick={nativeShare} className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            <Share2 className="size-4" />
            {t.profile.share}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
