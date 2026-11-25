import { TransitionLink } from "@/components/letter/transition-link";
import { Daisy } from "@/components/daisy";
import { NAV, SITE } from "@/config/site";

/** Footer of every page: signature, menu and year. */
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-cream">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-7">
        <p className="flex cursor-default items-center gap-3 text-lg font-semibold tracking-tight text-ink">
          <Daisy className="size-8" />
          {SITE.signature}
        </p>
        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold text-ink-soft">
            {NAV.map((item) => (
              <li key={item.href}>
                <TransitionLink href={item.href} className="hover:text-ink">
                  {item.label}
                </TransitionLink>
              </li>
            ))}
          </ul>
        </nav>
        <p className="cursor-default text-sm text-ink-soft">
          {SITE.name} · {SITE.year}
        </p>
      </div>
    </footer>
  );
}
