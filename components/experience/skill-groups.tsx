import type { SkillGroup } from "@/config/experience";
import { formatList } from "@/lib/utils";

interface SkillGroupsProps {
  title: string;
  groups: readonly SkillGroup[];
}

/** Tools and skills on a soft green panel, one column of text per group. */
export function SkillGroups({ title, groups }: SkillGroupsProps) {
  return (
    <section aria-labelledby="ferramentas" className="wrap py-6 md:py-10">
      <div className="rounded-3xl bg-leaf-soft px-6 py-12 md:px-12 md:py-16">
        <h2 id="ferramentas" data-reveal className="mb-10 text-title text-stem-deep md:mb-14">
          {title}
        </h2>
        <dl data-reveal-group className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <dt className="text-lg font-semibold text-stem-deep">{group.title}</dt>
              <dd className="mt-1.5 text-stem-deep/80">{formatList(group.items)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
