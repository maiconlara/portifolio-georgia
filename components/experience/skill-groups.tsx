import { Chip } from "@heroui/react";
import type { SkillGroup } from "@/config/experience";

interface SkillGroupsProps {
  title: string;
  groups: readonly SkillGroup[];
}

/** Tools and skills grouped in cards, each item as a chip. */
export function SkillGroups({ title, groups }: SkillGroupsProps) {
  return (
    <section aria-labelledby="habilidades" className="bg-cream-deep">
      <div className="wrap py-14 md:py-20">
        <h2 id="habilidades" data-reveal className="mb-8 text-title">
          {title}
        </h2>
        <div data-reveal-group className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-line bg-petal p-6">
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-stem">
                <span aria-hidden className="size-2 rounded-full bg-pollen shadow-[0_0_0_1.5px_var(--ink)]" />
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Chip size="lg" className="cursor-default [--chip-bg:var(--leaf-soft)] [--chip-fg:var(--stem-deep)]">
                      {item}
                    </Chip>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
