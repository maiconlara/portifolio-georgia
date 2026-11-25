import type { Course, Language } from "@/config/experience";

interface EducationSectionProps {
  educationTitle: string;
  education: readonly Course[];
  languagesTitle: string;
  languages: readonly Language[];
}

/** Courses and languages as plain rows, side by side on wide screens. */
export function EducationSection({ educationTitle, education, languagesTitle, languages }: EducationSectionProps) {
  return (
    <section className="wrap grid gap-16 pb-24 pt-14 md:grid-cols-12 md:gap-x-10 md:pb-36 md:pt-20">
      <div className="md:col-span-7">
        <h2 data-reveal className="mb-8 text-title">
          {educationTitle}
        </h2>
        <ol data-reveal-group>
          {education.map((course) => (
            <li
              key={`${course.title}-${course.period}`}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-line py-6"
            >
              <div>
                <h3 className="text-xl tracking-tight">{course.title}</h3>
                <p className="mt-1 text-ink-soft">{course.school}</p>
                {course.note ? <p className="text-sm text-ink-soft">{course.note}</p> : null}
              </div>
              <p className="text-ink-soft tabular-nums">{course.period}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="md:col-span-4 md:col-start-9">
        <h2 data-reveal className="mb-8 text-title">
          {languagesTitle}
        </h2>
        <ul data-reveal-group>
          {languages.map((language) => (
            <li
              key={language.name}
              className="flex items-baseline justify-between gap-4 border-t border-line py-6"
            >
              <span className="text-xl font-semibold tracking-tight text-ink">{language.name}</span>
              <span className="text-ink-soft">{language.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
