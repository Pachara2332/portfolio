"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/icons";
import { useLanguage } from "@/components/i18n/language-provider";
import { siteConfig } from "@/data/site";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-medium text-foreground">Pachara Wongsasri</p>
          <p className="mt-1">{t.footer.builtWith}</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex size-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="https://github.com/Pachara2332"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="GitHub"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/pachara-wongsasri-9256103bb/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
