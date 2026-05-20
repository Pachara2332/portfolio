import type React from "react";
import { cn } from "@/lib/utils";

interface SectionShellProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionShell({ id, children, className }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-16 sm:py-20 lg:py-24", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
