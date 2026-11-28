import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow: _eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  void _eyebrow;
  return (
    <div
      className={cn(
        "mb-8 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-pretty text-base leading-7 text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
