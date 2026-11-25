import type { CSSProperties } from "react";
import { Icon, type IconSize } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export type IconTileTone = "pollen" | "leaf" | "blush" | "cream" | "dark";

const TONE_STYLE: Record<IconTileTone, CSSProperties> = {
  pollen: { "--tile-bg": "var(--pollen-soft)", "--tile-bg-hover": "var(--pollen)" } as CSSProperties,
  leaf: { "--tile-bg": "var(--leaf-soft)", "--tile-bg-hover": "var(--leaf)" } as CSSProperties,
  blush: { "--tile-bg": "var(--blush-soft)", "--tile-bg-hover": "var(--blush)" } as CSSProperties,
  cream: { "--tile-bg": "var(--cream)", "--tile-bg-hover": "var(--pollen)" } as CSSProperties,
  dark: {
    "--tile-bg": "var(--stem-deep)",
    "--tile-fg": "var(--cream)",
    "--tile-bg-hover": "var(--stem)",
  } as CSSProperties,
};

interface IconTileProps {
  /** Material Symbols name. */
  icon: string;
  /** Diameter in pixels. */
  size?: number;
  iconSize?: IconSize;
  tone?: IconTileTone;
  className?: string;
}

/**
 * Round tile with an icon and an ink ring. Tilts and fills when the closest
 * `group` element is hovered (`.icon-tile` in `globals.css`).
 */
export function IconTile({ icon, size = 48, iconSize = "lg", tone = "pollen", className }: IconTileProps) {
  return (
    <span
      aria-hidden
      className={cn("icon-tile", className)}
      style={{ ...TONE_STYLE[tone], "--tile-size": `${size}px` } as CSSProperties}
    >
      <Icon name={icon} size={iconSize} />
    </span>
  );
}
