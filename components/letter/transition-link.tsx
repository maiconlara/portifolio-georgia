"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { useLetter } from "@/components/letter/letter-transition";

type TransitionLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

/**
 * Internal link that plays the letter before changing the page. Clicks with
 * a modifier key (new tab, new window) keep the browser behavior.
 */
export function TransitionLink({ href, onClick, children, ...props }: TransitionLinkProps) {
  const { navigate } = useLetter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      props.target === "_blank"
    ) {
      return;
    }
    event.preventDefault();
    navigate(href);
  };

  return (
    <Link href={href} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
