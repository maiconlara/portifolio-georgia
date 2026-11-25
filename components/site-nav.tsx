"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/letter/transition-link";
import { NAV } from "@/config/site";
import { cn, normalizePath } from "@/lib/utils";

/** Menu of the wide screens. The current page is an ink pill. */
export function SiteNav({ className }: { className?: string }) {
  const pathname = normalizePath(usePathname());

  return (
    <nav aria-label="Páginas" className={className}>
      <ul className="flex items-center gap-1">
        {NAV.map((item) => {
          const isCurrent = normalizePath(item.href) === pathname;
          return (
            <li key={item.href}>
              <TransitionLink
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={cn(
                  "block rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors duration-200",
                  isCurrent ? "bg-ink text-cream" : "text-ink-soft hover:text-ink",
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
