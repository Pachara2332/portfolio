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
      className={cn("relative scroll-mt-28 py-20 sm:py-24 lg:py-32", className)}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
