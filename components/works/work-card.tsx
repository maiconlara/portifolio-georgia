"use client";

import type { CSSProperties, PointerEvent } from "react";
import { WorkCover } from "@/components/works/work-cover";
import { WorkFrame } from "@/components/works/work-frame";
import type { Work } from "@/config/works";

const TILTS = ["-1.6deg", "1.2deg", "-0.8deg", "1.8deg"];

interface WorkCardProps {
  work: Work;
  /** Position in the grid, used for the entrance delay and the tilt. */
  index: number;
  onOpen: (slug: string) => void;
}

/**
 * Work in the grid: framed picture and label. With a mouse, the frame tilts
 * toward the pointer.
 */
export function WorkCard({ work, index, onOpen }: WorkCardProps) {
  const imageCount = work.images.length;

  const handlePointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== "mouse") return;
    const frame = event.currentTarget.querySelector<HTMLElement>("[data-tilt]");
    if (!frame) return;
    const box = frame.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    frame.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
  };

  const handlePointerLeave = (event: PointerEvent<HTMLButtonElement>) => {
    const frame = event.currentTarget.querySelector<HTMLElement>("[data-tilt]");
    if (frame) frame.style.transform = "";
  };

  return (
    <button
      type="button"
      onClick={() => onOpen(work.slug)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label={`Abrir ${work.title}`}
      className="group block w-full animate-[fade-up_0.6s_var(--ease-glide)_both] cursor-pointer text-left"
      style={{ animationDelay: `${(index % 8) * 70}ms` } as CSSProperties}
    >
      <div data-tilt className="transition-transform duration-300 ease-out">
        <WorkFrame frame={work.frame} tilt={TILTS[index % TILTS.length]}>
          <WorkCover
            work={work}
            className="aspect-4/5 transition-transform duration-900 ease-(--ease-glide) group-hover:scale-[1.04]"
          />
        </WorkFrame>
      </div>
      <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-0.5 border-t border-ink pt-3">
        <span className="text-xl font-bold leading-tight tracking-tight text-ink">{work.title}</span>
        <span className="text-sm text-ink-soft">{work.year}</span>
        <span className="col-span-2 text-sm text-ink-soft">
          {work.subtitle}
          {imageCount > 1 ? ` · ${imageCount} imagens` : null}
        </span>
      </div>
    </button>
  );
}
