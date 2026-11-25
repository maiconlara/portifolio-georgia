import { buttonVariants } from "@heroui/styles";
import { cn } from "@/lib/utils";

type HeroVariant = "primary" | "secondary" | "tertiary" | "outline" | "ghost" | "danger";

/**
 * HeroUI variants plus the site's own `ink-outline`: ink outline that fills
 * on hover.
 */
export type ButtonVariant = HeroVariant | "ink-outline";

export type ButtonSize = "sm" | "md" | "lg";

const EXTRA_VARIANTS: Partial<Record<ButtonVariant, { base: HeroVariant; modifier: string }>> = {
  "ink-outline": { base: "ghost", modifier: "button--ink-outline" },
};

export interface ButtonStyleOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  /** Round button with only an icon. */
  iconOnly?: boolean;
  className?: string;
}

/**
 * Class list shared by `Button` and `LinkButton`, so a link and a button look
 * exactly the same. Server-safe: it only builds strings.
 */
export function buttonClassName({
  variant = "primary",
  size = "lg",
  fullWidth = false,
  iconOnly = false,
  className,
}: ButtonStyleOptions = {}): string {
  const extra = EXTRA_VARIANTS[variant];
  const base = extra ? extra.base : (variant as HeroVariant);
  return cn(
    buttonVariants({ variant: base, size, fullWidth, isIconOnly: iconOnly || undefined }),
    extra?.modifier,
    className,
  );
}

/**
 * Maps a site variant to the HeroUI one plus the extra modifier class.
 *
 * @param variant - Variant chosen by the caller.
 */
export function resolveButtonVariant(variant: ButtonVariant = "primary") {
  const extra = EXTRA_VARIANTS[variant];
  return {
    heroVariant: extra ? extra.base : (variant as HeroVariant),
    modifier: extra?.modifier,
  };
}
