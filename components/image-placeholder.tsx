import Image from "next/image";
import { cn } from "@/lib/utils";

type SitePhotoProps = {
  src: string;
  alt: string;
  label: string;
  caption?: string;
  className?: string;
  featured?: boolean | undefined;
  sizes?: string;
  priority?: boolean;
};

export function SitePhoto({
  src,
  alt,
  label,
  caption,
  className,
  featured = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: SitePhotoProps) {
  return (
    <div
      className={cn(
        "group relative flex h-full min-h-[220px] flex-col justify-end overflow-hidden rounded-xl border border-border",
        featured && "border-accent/40",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
      <div className="relative space-y-1.5 p-5">
        <p className="text-lg font-medium tracking-tight text-white">{label}</p>
        {caption ? <p className="max-w-sm text-sm text-zinc-300">{caption}</p> : null}
      </div>
    </div>
  );
}
