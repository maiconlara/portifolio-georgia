import { Icon } from "@/components/ui/icon";
import type { ContactSubject } from "@/config/contact";

interface ContactSubjectsProps {
  title: string;
  /** Line under the title explaining what the pills do. */
  hint: string;
  subjects: readonly ContactSubject[];
  email: string;
  className?: string;
}

/** Kinds of project as pills; each opens an e-mail with the subject filled. */
export function ContactSubjects({ title, hint, subjects, email, className }: ContactSubjectsProps) {
  return (
    <div className={className}>
      <h2 data-reveal className="text-title">
        {title}
      </h2>
      <p className="mt-3 text-ink-soft">{hint}</p>
      <ul data-reveal-group className="mt-6 flex flex-wrap gap-2">
        {subjects.map((subject) => (
          <li key={subject.title}>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(subject.subject)}`}
              className="inline-flex h-11 items-center gap-2 rounded-full px-4 font-semibold text-ink shadow-[inset_0_0_0_1px_var(--line)] transition-colors duration-200 hover:bg-ink hover:text-cream"
            >
              {subject.title}
              <Icon name="mail" size="sm" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
