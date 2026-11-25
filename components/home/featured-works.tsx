import { TransitionLink } from "@/components/letter/transition-link";
import { WorkCover } from "@/components/works/work-cover";
import type { Work } from "@/config/works";
import { cn } from "@/lib/utils";

interface FeaturedWorksProps {
  title: string;
  works: Work[];
}

/**
 * Three highlighted works. Each card opens the "Trabalhos" page with the
 * work already open (`/trabalhos/#slug`).
 */
export function FeaturedWorks({ title, works }: FeaturedWorksProps) {
  return (
    <section aria-labelledby="destaques" className="wrap pb-20 md:pb-28">
      <h2 id="destaques" data-reveal className="mb-7 text-title">
        {title}
      </h2>
      <div data-reveal-group className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-8">
        {works.map((work, index) => (
          <TransitionLink
            key={work.slug}
            href={`/trabalhos/#${work.slug}`}
            className={cn("group flex flex-col", index === 0 && "md:col-span-2 lg:col-span-1")}
          >
            <WorkCover
              work={work}
              className={cn(
                "aspect-4/5 transition-transform duration-700 ease-(--ease-glide) group-hover:scale-[1.02]",
                index === 0 && "md:aspect-16/10 lg:aspect-auto lg:flex-1",
              )}
            />
            <span className="mt-4 flex items-baseline justify-between gap-4 border-t border-ink pt-3">
              <span className="text-2xl font-bold tracking-tight text-ink">{work.title}</span>
              <span className="shrink-0 text-sm text-ink-soft">{work.subtitle}</span>
            </span>
          </TransitionLink>
        ))}
      </div>
    </section>
  );
}
