"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/letter/transition-link";
import { NAV } from "@/config/site";
import { cn, normalizePath } from "@/lib/utils";

/**
 * Main menu. The current page gets a yellow pill. On narrow screens the list
 * scrolls sideways under the brand.
 */
export function SiteNav({ className }: { className?: string }) {
  const pathname = normalizePath(usePathname());

  return (
    <nav aria-label="Páginas" className={className}>
      <ul className="flex gap-1 overflow-x-auto px-(--pad) py-2 [scrollbar-width:none] nav:overflow-visible nav:p-0 [&::-webkit-scrollbar]:hidden">
        {NAV.map((item) => {
          const isCurrent = normalizePath(item.href) === pathname;
          return (
            <li key={item.href} className="shrink-0">
              <TransitionLink
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={cn(
                  "block rounded-full px-3.5 py-1.5 text-[0.98rem] font-semibold transition-colors duration-200",
                  isCurrent
                    ? "bg-pollen text-ink shadow-[inset_0_0_0_1.5px_var(--ink)]"
                    : "text-ink-soft hover:bg-cream-deep hover:text-ink",
                )}
              >
                {item.label}
              </TransitionLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
