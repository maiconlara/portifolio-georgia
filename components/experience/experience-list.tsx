import type { Job } from "@/config/experience";

interface ExperienceListProps {
  title: string;
  jobs: readonly Job[];
}

/**
 * Work history, most recent first. Each job opens with its start year in
 * large type, and the details read in one column beside it.
 */
export function ExperienceList({ title, jobs }: ExperienceListProps) {
  return (
    <section aria-labelledby="onde-trabalhei" className="wrap py-14 md:py-20">
      <h2 id="onde-trabalhei" data-reveal className="mb-8 text-title md:mb-12">
        {title}
      </h2>
      <ol>
        {jobs.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            data-reveal
            className="grid gap-x-10 gap-y-3 border-t border-line py-10 md:grid-cols-12 md:py-14"
          >
            <p
              aria-hidden
              className="text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-stem tabular-nums md:col-span-4"
            >
              {job.startYear}
            </p>
            <div className="md:col-span-8 lg:col-span-7">
              <h3 className="text-subtitle">{job.company}</h3>
              <p className="mt-1 font-medium text-ink">{job.role}</p>
              <p className="mt-1 text-[0.95rem] text-ink-soft">
                {job.period} ({job.duration}). {job.tags.join(", ")}.
              </p>
              <p className="mt-5 max-w-[60ch] text-ink">{job.description}</p>
              <ul className="mt-4 grid gap-1 text-ink-soft">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
