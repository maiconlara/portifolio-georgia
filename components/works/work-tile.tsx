import { WorkCover } from "@/components/works/work-cover";
import type { Work } from "@/config/works";
import { cn } from "@/lib/utils";

interface WorkTileProps {
  work: Work;
  /** Classes of the picture box, usually its aspect ratio. */
  coverClassName?: string;
  sizes?: string;
}

/**
 * Picture and caption of a work. It goes inside a link (home) or a button
 * (Trabalhos), so it only uses inline elements. The picture zooms in a
 * little when the closest `group` is hovered.
 */
export function WorkTile({ work, coverClassName, sizes }: WorkTileProps) {
  return (
    <>
      <span className={cn("work-tile__cover block overflow-hidden rounded-2xl bg-cream-deep", coverClassName)}>
        <WorkCover
          work={work}
          sizes={sizes}
          className="size-full transition-transform duration-900 ease-(--ease-glide) group-hover:scale-[1.03]"
        />
      </span>
      <span className="mt-4 flex items-baseline justify-between gap-4">
        <span className="text-xl font-semibold tracking-tight text-ink md:text-2xl">{work.title}</span>
        <span className="shrink-0 text-sm tabular-nums text-ink-soft">{work.year}</span>
      </span>
      <span className="mt-0.5 block text-ink-soft">{work.subtitle}</span>
    </>
  );
}
