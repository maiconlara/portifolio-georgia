import Link from "next/link";
import { Daisy } from "@/components/daisy";
import { MobileMenu } from "@/components/mobile-menu";
import { SiteNav } from "@/components/site-nav";
import { SITE } from "@/config/site";

/**
 * Fixed top bar: Ge's name with a daisy on the left and the menu on the
 * right. On narrow screens the menu folds into a drawer (`MobileMenu`).
 * During a page change the bar stays still and the daisy turns
 * (`.site-header` and `.brand-daisy` in `globals.css`).
 */
export function SiteHeader() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-100 bg-background">
      <div className="wrap flex h-(--header-h) items-center justify-between gap-6">
        <Link
          href="/"
          aria-label={`${SITE.name}, início`}
          className="group flex items-center gap-2.5 rounded-full"
        >
          <Daisy className="brand-daisy size-8 transition-transform duration-700 ease-(--ease-glide) group-hover:rotate-90" />
          <span className="text-xl font-semibold tracking-tight text-ink">{SITE.name}</span>
        </Link>

        <SiteNav className="hidden md:block" />
        <MobileMenu className="md:hidden" />
      </div>
    </header>
  );
}
