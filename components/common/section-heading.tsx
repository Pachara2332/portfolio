import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  gradient = true,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
          gradient ? "text-gradient" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
