"use client";

import { useMemo, useState } from "react";
import { CategoryEnvelope } from "@/components/works/category-envelope";
import { WorkCard } from "@/components/works/work-card";
import { WorkDialog } from "@/components/works/work-dialog";
import type { Work, WorkCategory } from "@/config/works";
import { setHash, useHash } from "@/hooks/use-hash";

interface WorkBrowserProps {
  categories: WorkCategory[];
  works: Work[];
}

/**
 * Category envelopes, the grid of the open envelope and the work dialog.
 * The open work lives in the address hash (`/trabalhos/#slug`), so a work
 * can be shared and the home page can link straight to it.
 */
export function WorkBrowser({ categories, works }: WorkBrowserProps) {
  const [categoryKey, setCategoryKey] = useState<WorkCategory["key"]>("todos");
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

  const countOf = (key: WorkCategory["key"]) =>
    key === "todos" ? works.length : works.filter((work) => work.categories.some((item) => item === key)).length;

  return (
    <>
      <div
        role="group"
        aria-label="Envelopes de trabalhos"
        className="-mx-(--pad) flex snap-x snap-mandatory gap-4 overflow-x-auto px-(--pad) pb-4 pt-14 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-5 md:gap-5 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((item, index) => (
          <div key={item.key} className="w-[min(44vw,210px)] shrink-0 snap-start md:w-auto">
            <CategoryEnvelope
              category={item}
              position={index + 1}
              count={countOf(item.key)}
              isOpen={item.key === categoryKey}
              onOpen={() => setCategoryKey(item.key)}
            />
          </div>
        ))}
      </div>

      <div
        aria-live="polite"
        className="mb-10 mt-10 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t border-line pt-6"
      >
        <h2 key={category.key} className="animate-[fade-up_0.5s_var(--ease-pop)_both] text-title">
          {category.name}
        </h2>
        <p className="text-ink-soft">
          {visibleWorks.length} {visibleWorks.length === 1 ? "trabalho neste envelope" : "trabalhos neste envelope"}
        </p>
      </div>

      <div
        key={categoryKey}
        className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-x-8 gap-y-12 pb-20 md:pb-28"
      >
        {visibleWorks.map((work, index) => (
          <WorkCard key={work.slug} work={work} index={index} onOpen={setHash} />
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
