import type { CSSProperties } from "react";
import Image from "next/image";
import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";

interface PhotoAvatarProps {
  /** Diameter in pixels. */
  size?: number;
  className?: string;
  /** Accessible description. Decorative when left out. */
  alt?: string;
}

/**
 * Ge's photo in a round frame with an ink ring. Tilts when the closest
 * `group` element is hovered.
 */
export function PhotoAvatar({ size = 48, className, alt = "" }: PhotoAvatarProps) {
  return (
    <span className={cn("photo-avatar", className)} style={{ "--avatar-size": `${size}px` } as CSSProperties}>
      <Image
        src={SITE.photo}
        alt={alt}
        width={size * 2}
        height={size * 2}
        className="size-full object-cover object-[50%_32%]"
      />
    </span>
  );
}
