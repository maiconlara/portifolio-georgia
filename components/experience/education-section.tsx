import { Chip } from "@heroui/react";
import type { Course, Language } from "@/config/experience";

interface EducationSectionProps {
  educationTitle: string;
  education: readonly Course[];
  languagesTitle: string;
  languages: readonly Language[];
}

/** Courses as a vertical timeline, next to the list of languages. */
export function EducationSection({ educationTitle, education, languagesTitle, languages }: EducationSectionProps) {
  return (
    <section className="wrap grid gap-14 py-14 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:py-20">
      <div>
        <h2 data-reveal className="mb-8 text-title">
          {educationTitle}
        </h2>
        <ol data-reveal-group className="relative grid gap-5 border-l-2 border-dashed border-line pl-7">
          {education.map((course) => (
            <li key={`${course.title}-${course.period}`} className="relative rounded-2xl border border-line bg-petal p-5">
              <span
                aria-hidden
                className="absolute -left-[2.3rem] top-6 size-4 rounded-full border-2 border-ink bg-pollen"
              />
              <p className="text-sm font-semibold text-stem">{course.period}</p>
              <h3 className="mt-1 text-lg tracking-tight">{course.title}</h3>
              <p className="text-ink-soft">
                {course.school}
                {course.note ? ` · ${course.note}` : null}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h2 data-reveal className="mb-8 text-title">
          {languagesTitle}
        </h2>
        <ul data-reveal-group className="grid gap-4">
          {languages.map((language) => (
            <li
              key={language.name}
              className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-petal p-5"
            >
              <span className="font-bold text-ink">{language.name}</span>
              <Chip size="md" className="cursor-default [--chip-bg:var(--pollen-soft)] [--chip-fg:var(--ink)]">
                {language.level}
              </Chip>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
