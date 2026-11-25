import { TransitionLink } from "@/components/letter/transition-link";
import { PhotoAvatar } from "@/components/photo-avatar";
import { SiteNav } from "@/components/site-nav";
import { LinkButton } from "@/components/ui/link-button";
import { SITE } from "@/config/site";

/**
 * Fixed top bar: brand with Ge's photo, the menu (centered on wide screens,
 * a second scrolling row on narrow ones) and the contact call.
 */
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-100 border-b border-line bg-cream/88 backdrop-blur-md">
      <div className="relative flex h-[72px] items-center justify-between gap-6 px-(--pad) nav:h-(--header-h)">
        <TransitionLink
          href="/"
          aria-label={`${SITE.name}, início`}
          className="group flex items-center gap-3 rounded-full"
        >
          <PhotoAvatar size={42} />
          <span className="leading-none">
            <span className="block text-xl font-bold tracking-tight text-ink">
              {SITE.name}
            </span>
            <span className="mt-1 hidden text-sm text-ink-soft sm:block">{SITE.role}</span>
          </span>
        </TransitionLink>

        <SiteNav className="hidden nav:absolute nav:left-1/2 nav:block nav:-translate-x-1/2" />

        <LinkButton
          href="/contato/"
          label="Vamos conversar"
          icon="mail"
          size="md"
          className="hidden nav:inline-flex"
        />
      </div>
      <SiteNav className="border-t border-line nav:hidden" />
    </header>
  );
}
