import { IconTile } from "@/components/icon-tile";
import { TransitionLink } from "@/components/letter/transition-link";
import type { NavItem } from "@/config/site";
import { formatCounter } from "@/lib/utils";

interface SummaryListProps {
  title: string;
  pages: NavItem[];
}

/** Numbered index of the inner pages, like the summary of a magazine. */
export function SummaryList({ title, pages }: SummaryListProps) {
  return (
    <section aria-labelledby="sumario" className="wrap py-16 md:py-24">
      <h2 id="sumario" data-reveal className="mb-7 text-title">
        {title}
      </h2>
      <ol data-reveal-group className="border-t border-ink">
        {pages.map((page, index) => (
          <li key={page.href}>
            <TransitionLink
              href={page.href}
              className="group grid grid-cols-[2.4rem_minmax(0,1fr)_auto] items-center gap-5 border-b border-line py-5 transition-[padding,background-color] duration-400 ease-(--ease-glide) hover:bg-petal hover:px-4 md:grid-cols-[3.2rem_minmax(0,1fr)_minmax(0,1.3fr)_auto] md:gap-8"
            >
              <span className="text-lg font-semibold tabular-nums text-ink-soft">{formatCounter(index + 1)}</span>
              <span className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-none tracking-tight text-ink">
                {page.label}
              </span>
              <span className="hidden text-ink-soft md:block">{page.summary}</span>
              <IconTile icon={page.icon} size={50} />
            </TransitionLink>
          </li>
        ))}
      </ol>
    </section>
  );
}
