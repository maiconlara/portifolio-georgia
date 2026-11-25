import { TransitionLink } from "@/components/letter/transition-link";
import { Icon } from "@/components/ui/icon";
import { WorkTile } from "@/components/works/work-tile";
import type { Work } from "@/config/works";
import { cn } from "@/lib/utils";

interface FeaturedWorksProps {
  title: string;
  /** Text of the link to the full list of works. */
  allWorksLabel: string;
  works: Work[];
}

/**
 * Highlighted works: the first one tall on the left, the next ones stacked
 * on the right. Each opens the "Trabalhos" page with the work already open
 * (`/trabalhos/#slug`).
 */
export function FeaturedWorks({ title, allWorksLabel, works }: FeaturedWorksProps) {
  return (
    <section aria-labelledby="selecionados" className="wrap pb-24 md:pb-36">
      <div data-reveal className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-3 md:mb-10">
        <h2 id="selecionados" className="text-title">
          {title}
        </h2>
        <TransitionLink
          href="/trabalhos/"
          className="group inline-flex items-center gap-1.5 font-semibold text-ink underline decoration-line decoration-2 underline-offset-[6px] transition-[text-decoration-color] hover:decoration-ink"
        >
          {allWorksLabel}
          <Icon
            name="arrow_forward"
            size="sm"
            className="transition-transform duration-300 ease-(--ease-glide) group-hover:translate-x-1"
          />
        </TransitionLink>
      </div>

      <div data-reveal-group className="grid gap-x-6 gap-y-12 md:grid-cols-12 lg:gap-x-8">
        {works.map((work, index) => {
          const isLead = index === 0;
          return (
            <TransitionLink
              key={work.slug}
              href={`/trabalhos/#${work.slug}`}
              className={cn("group flex flex-col", isLead ? "md:col-span-7 md:row-span-2" : "md:col-span-5")}
            >
              <WorkTile
                work={work}
                coverClassName={isLead ? "aspect-4/5 md:aspect-auto md:min-h-0 md:flex-1" : "aspect-4/3"}
                sizes={isLead ? "(min-width: 820px) 58vw, 100vw" : "(min-width: 820px) 40vw, 100vw"}
              />
            </TransitionLink>
          );
        })}
      </div>
    </section>
  );
}
