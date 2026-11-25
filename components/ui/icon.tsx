import { cn } from "@/lib/utils";

export type IconSize = "sm" | "md" | "lg" | "xl";

const SIZE_CLASS: Record<IconSize, string> = {
  sm: "text-[16px]",
  md: "",
  lg: "text-[24px]",
  xl: "text-[32px]",
};

interface IconProps {
  /** Material Symbols name in snake_case, e.g. "arrow_outward". */
  name: string;
  /** 16, 20 (default), 24 or 32px. */
  size?: IconSize;
  /** Outlined glyph instead of the default filled one. */
  outline?: boolean;
  className?: string;
}

/**
 * The only icon of the site: Material Symbols, self-hosted from the
 * `material-symbols` package. No other file imports an icon library.
 * Names: https://fonts.google.com/icons
 */
export function Icon({ name, size = "md", outline = false, className }: IconProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "material-symbols-outlined",
        SIZE_CLASS[size],
        outline && "icon-outline",
        className,
      )}
    >
      {name}
    </span>
  );
}
