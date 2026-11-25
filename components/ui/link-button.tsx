import Link from "next/link";
import { ButtonChip } from "@/components/ui/button-chip";
import { buttonClassName, type ButtonStyleOptions } from "@/components/ui/button-styles";
import { Icon } from "@/components/ui/icon";

export interface LinkButtonProps extends ButtonStyleOptions {
  href: string;
  label: string;
  /** Material Symbols name before the label. */
  icon?: string;
  /** Adds the round arrow chip after the label. */
  arrow?: boolean;
  /** Opens the page in a new tab. External URLs always do. */
  newTab?: boolean;
}

/**
 * A link drawn exactly like `Button`. Site pages go through Next's `Link`;
 * external URLs, `mailto:` and anchors use a plain `<a>`.
 * With `iconOnly`, the label becomes the accessible name.
 */
export function LinkButton({ href, label, icon, arrow = false, newTab = false, ...style }: LinkButtonProps) {
  const className = buttonClassName({
    ...style,
    className: [arrow ? "justify-between" : "", style.className ?? ""].join(" "),
  });
  const content = style.iconOnly ? (
    <Icon name={icon ?? "arrow_forward"} />
  ) : (
    <>
      {icon ? <Icon name={icon} /> : null}
      {label}
      {arrow ? <ButtonChip /> : null}
    </>
  );
  const ariaLabel = style.iconOnly ? label : undefined;
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal || href.startsWith("#") || newTab) {
    const opensTab = newTab || href.startsWith("http");
    return (
      <a
        href={href}
        className={className}
        aria-label={ariaLabel}
        {...(opensTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
