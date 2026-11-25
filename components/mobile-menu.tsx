"use client";

import { useState } from "react";
import { Drawer } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Daisy } from "@/components/daisy";
import { Icon } from "@/components/ui/icon";
import { NAV, SITE } from "@/config/site";
import { cn, normalizePath } from "@/lib/utils";

/**
 * Menu of the narrow screens: a "Menu" button that drops a HeroUI `Drawer`
 * from the top with the pages in large type. Choosing a page closes the
 * drawer at once, without its exit animation: react-aria ends that
 * animation with a `flushSync`, which would cancel the page transition
 * that is starting at the same moment.
 */
export function MobileMenu({ className }: { className?: string }) {
  const pathname = normalizePath(usePathname());
  const [isLeavingPage, setIsLeavingPage] = useState(false);

  const handleOpenChange = (isOpen: boolean) => {
    if (isOpen) setIsLeavingPage(false);
  };

  return (
    <Drawer onOpenChange={handleOpenChange}>
      <Drawer.Trigger
        className={cn(
          "flex h-10 items-center gap-2 rounded-full px-4 font-semibold text-ink shadow-[inset_0_0_0_1px_var(--line)] transition-colors hover:bg-cream-deep",
          className,
        )}
      >
        <Icon name="menu" size="sm" />
        Menu
      </Drawer.Trigger>
      <Drawer.Backdrop className={cn(isLeavingPage && "transition-none")}>
        <Drawer.Content placement="top">
          <Drawer.Dialog aria-label="Menu" className="rounded-b-3xl bg-background px-(--pad) pb-10 pt-0">
            {({ close }) => (
              <>
                <div className="flex h-(--header-h) items-center gap-2.5">
                  <Daisy className="size-8" />
                  <span className="text-xl font-semibold tracking-tight text-ink">{SITE.name}</span>
                </div>
                <Drawer.CloseTrigger aria-label="Fechar o menu" className="end-(--pad) top-3" />
                <nav aria-label="Páginas" className="mt-4">
                  <ul className="grid gap-1">
                    {NAV.map((item) => {
                      const isCurrent = normalizePath(item.href) === pathname;
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => {
                              setIsLeavingPage(true);
                              close();
                            }}
                            aria-current={isCurrent ? "page" : undefined}
                            className={cn(
                              "flex items-center justify-between py-1.5 text-[2.6rem] font-semibold leading-tight tracking-[-0.035em]",
                              isCurrent ? "text-ink" : "text-ink-soft",
                            )}
                          >
                            {item.label}
                            {isCurrent ? <Icon name="local_florist" className="text-pollen-deep" size="lg" /> : null}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </>
            )}
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}
