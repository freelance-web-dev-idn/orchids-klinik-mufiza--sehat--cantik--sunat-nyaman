import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ title, subtitle, align = "center", className }: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12 space-y-4",
      align === "center" ? "text-center mx-auto max-w-2xl" : "text-left",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1.5 w-20 bg-primary/20 rounded-full",
        align === "center" ? "mx-auto" : "ml-0"
      )}>
        <div className="h-full w-8 bg-primary rounded-full" />
      </div>
    </div>
  );
}
