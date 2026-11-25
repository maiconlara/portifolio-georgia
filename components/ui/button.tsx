"use client";

import type { ReactNode } from "react";
import { Button as HeroButton, type ButtonProps as HeroButtonProps } from "@heroui/react";
import { ButtonChip } from "@/components/ui/button-chip";
import { resolveButtonVariant, type ButtonSize, type ButtonVariant } from "@/components/ui/button-styles";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends Omit<HeroButtonProps, "variant" | "size" | "children" | "className"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Adds the round arrow chip after the label. */
  arrow?: boolean;
  className?: string;
  children?: ReactNode;
}

/**
 * The single clickable action of the site: HeroUI `Button` with the site
 * variants. Navigation that looks like a button is `LinkButton`.
 */
export function Button({
  variant = "primary",
  size = "lg",
  arrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const { heroVariant, modifier } = resolveButtonVariant(variant);
  return (
    <HeroButton
      variant={heroVariant}
      size={size}
      className={cn(modifier, arrow && "justify-between", className)}
      {...props}
    >
      {children}
      {arrow ? <ButtonChip /> : null}
    </HeroButton>
  );
}
