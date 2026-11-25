import { Chip } from "@heroui/react";
import type { Job } from "@/config/experience";
import { formatCounter } from "@/lib/utils";

interface ExperienceListProps {
  title: string;
  jobs: readonly Job[];
}

/**
 * Work history as cards with a large faded number, the most recent first
 * (the highest number).
 */
export function ExperienceList({ title, jobs }: ExperienceListProps) {
  return (
    <section aria-labelledby="experiencias" className="wrap py-14 md:py-20">
      <h2 id="experiencias" data-reveal className="mb-8 text-title">
        {title}
      </h2>
      <ol data-reveal-group className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {jobs.map((job, index) => (
          <li
            key={`${job.company}-${job.period}`}
            className="relative flex flex-col overflow-hidden rounded-2xl border border-line bg-petal p-6 transition-[translate,box-shadow] duration-400 ease-(--ease-pop) hover:-translate-y-1 hover:shadow-[0_24px_40px_-28px_rgb(30_42_31/0.6)] sm:p-7"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 -top-5 text-[6.5rem] font-bold leading-none tracking-[-0.06em] text-pollen-soft"
            >
              {formatCounter(jobs.length - index)}
            </span>
            <p className="relative text-sm font-semibold text-stem">
              {job.period} · {job.duration}
            </p>
            <h3 className="relative mt-3 text-subtitle">{job.company}</h3>
            <p className="relative mt-1 font-semibold text-ink-soft">{job.role}</p>
            <ul className="relative mt-4 flex flex-wrap gap-2" aria-label="Formato e local">
              {job.tags.map((tag) => (
                <li key={tag}>
                  <Chip size="md" className="cursor-default [--chip-bg:var(--cream-deep)] [--chip-fg:var(--ink)]">
                    {tag}
                  </Chip>
                </li>
              ))}
            </ul>
            <p className="relative mt-4 text-ink">{job.description}</p>
            <ul className="relative mt-4 grid gap-1.5 text-ink-soft">
              {job.highlights.map((highlight) => (
                <li key={highlight} className="relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:size-2 before:rounded-full before:bg-pollen before:shadow-[0_0_0_1.5px_var(--ink)]">
                  {highlight}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
