import { Bike, Coffee, Heart, LucideIcon, Sprout } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  Coffee,
  Bike,
  Sprout,
  Heart,
} as const;

type IconName = keyof typeof icons;

type ImagePlaceholderProps = {
  label: string;
  caption?: string;
  icon: IconName;
  className?: string;
  featured?: boolean | undefined;
};

export function ImagePlaceholder({
  label,
  caption,
  icon,
  className,
  featured = false,
}: ImagePlaceholderProps) {
  const Icon: LucideIcon = icons[icon];

  return (
    <div
      className={cn(
        "group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden border border-border bg-surface p-5",
        featured && "border-accent/40 bg-gradient-to-br from-surface via-surface to-accent-dim",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 grain" />
      <div className="relative flex items-start justify-between gap-3">
        <div
          className={cn(
            "flex size-11 items-center justify-center rounded-md border border-border bg-background/60",
            featured && "border-accent/50 text-accent",
          )}
        >
          <Icon className="size-5" aria-hidden />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Upload pending
        </span>
      </div>
      <div className="relative space-y-1.5">
        <p className="text-lg font-medium tracking-tight text-foreground">{label}</p>
        {caption ? <p className="max-w-sm text-sm text-muted">{caption}</p> : null}
      </div>
    </div>
  );
}
