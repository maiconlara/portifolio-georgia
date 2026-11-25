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
 * (Trabalhos), so it only uses inline elements. Hovering the closest
 * `group` underlines the title, which costs a repaint of one line instead
 * of scaling a large picture.
 */
export function WorkTile({ work, coverClassName, sizes }: WorkTileProps) {
  return (
    <>
      <span className={cn("work-tile__cover block overflow-hidden rounded-2xl bg-cream-deep", coverClassName)}>
        <WorkCover work={work} sizes={sizes} className="size-full" />
      </span>
      <span className="mt-4 flex items-baseline justify-between gap-4">
        <span className="text-xl font-semibold tracking-tight text-ink underline decoration-transparent decoration-2 underline-offset-[5px] transition-[text-decoration-color] duration-200 group-hover:decoration-ink md:text-2xl">
          {work.title}
        </span>
        <span className="shrink-0 text-sm tabular-nums text-ink-soft">{work.year}</span>
      </span>
      <span className="mt-0.5 block text-ink-soft">{work.subtitle}</span>
    </>
  );
}
