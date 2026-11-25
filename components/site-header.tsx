import { Daisy } from "@/components/daisy";
import { TransitionLink } from "@/components/letter/transition-link";
import { MobileMenu } from "@/components/mobile-menu";
import { SiteNav } from "@/components/site-nav";
import { SITE } from "@/config/site";

/**
 * Fixed top bar: Ge's name with a daisy on the left and the menu on the
 * right. On narrow screens the menu folds into a drawer (`MobileMenu`).
 */
export function SiteHeader() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-100 bg-background">
      <div className="wrap flex h-(--header-h) items-center justify-between gap-6">
        <TransitionLink
          href="/"
          aria-label={`${SITE.name}, início`}
          className="group flex items-center gap-2.5 rounded-full"
        >
          <Daisy className="size-8 transition-transform duration-700 ease-(--ease-glide) group-hover:rotate-90" />
          <span className="text-xl font-semibold tracking-tight text-ink">{SITE.name}</span>
        </TransitionLink>

        <SiteNav className="hidden md:block" />
        <MobileMenu className="md:hidden" />
      </div>
    </header>
  );
}
