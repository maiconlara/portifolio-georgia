"use client";

import { useMemo, useState, type CSSProperties, type Key } from "react";
import { ToggleButton, ToggleButtonGroup } from "@heroui/react";
import { WorkDialog } from "@/components/works/work-dialog";
import { WorkTile } from "@/components/works/work-tile";
import type { Work, WorkCategory } from "@/config/works";
import { setHash, useHash } from "@/hooks/use-hash";

type CategoryKey = WorkCategory["key"];

interface WorkBrowserProps {
  categories: WorkCategory[];
  works: Work[];
}

/**
 * Category filter, the grid of works and the work dialog. The open work
 * lives in the address hash (`/trabalhos/#slug`), so a work can be shared
 * and the home page can link straight to it.
 */
export function WorkBrowser({ categories, works }: WorkBrowserProps) {
  const [categoryKey, setCategoryKey] = useState<CategoryKey>("todos");
  const hash = useHash();

  const visibleWorks = useMemo(
    () => (categoryKey === "todos" ? works : works.filter((work) => work.categories.some((key) => key === categoryKey))),
    [categoryKey, works],
  );
  const openWork = works.find((work) => work.slug === hash) ?? null;
  const [lastWork, setLastWork] = useState<Work | null>(openWork);
  if (openWork && openWork !== lastWork) setLastWork(openWork);
  const dialogWork = openWork ?? lastWork;
  const category = categories.find((item) => item.key === categoryKey) ?? categories[0];
  const siblings = dialogWork && visibleWorks.some((work) => work.slug === dialogWork.slug) ? visibleWorks : works;

  const countOf = (key: CategoryKey) =>
    key === "todos" ? works.length : works.filter((work) => work.categories.some((item) => item === key)).length;

  const handleFilterChange = (keys: Set<Key>) => {
    const [selectedKey] = keys;
    const nextCategory = categories.find((item) => item.key === selectedKey);
    if (nextCategory) setCategoryKey(nextCategory.key);
  };

  return (
    <>
      <ToggleButtonGroup
        aria-label="Filtrar trabalhos por tipo"
        selectionMode="single"
        disallowEmptySelection
        isDetached
        selectedKeys={[categoryKey]}
        onSelectionChange={handleFilterChange}
        className="flex-wrap justify-start gap-2"
      >
        {categories.map((item) => (
          <ToggleButton key={item.key} id={item.key} className="filter-chip">
            {item.label}
            <span className="filter-chip__count">{countOf(item.key)}</span>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <p aria-live="polite" className="sr-only">
        {category.name}: {visibleWorks.length} {visibleWorks.length === 1 ? "trabalho" : "trabalhos"}
      </p>

      <div
        key={categoryKey}
        className="work-grid mt-10 grid gap-x-6 gap-y-14 pb-24 md:mt-14 md:grid-cols-2 md:pb-36 lg:gap-x-8 lg:gap-y-20"
      >
        {visibleWorks.map((work, index) => (
          <button
            key={work.slug}
            type="button"
            onClick={() => setHash(work.slug)}
            aria-label={`Abrir ${work.title}`}
            className="group block w-full animate-[fade-up_0.6s_var(--ease-glide)_both] cursor-pointer text-left"
            style={{ animationDelay: `${(index % 6) * 60}ms` } as CSSProperties}
          >
            <WorkTile work={work} coverClassName="aspect-4/3" sizes="(min-width: 820px) 50vw, 100vw" />
          </button>
        ))}
      </div>

      {dialogWork ? (
        <WorkDialog
          work={dialogWork}
          isOpen={openWork !== null}
          siblings={siblings}
          onNavigate={setHash}
          onClose={() => setHash("")}
        />
      ) : null}
    </>
  );
}
