import type { ReactNode } from "react";
import Image from "next/image";
import { Daisy } from "@/components/daisy";
import type { CoverMotif, CoverTone, Work } from "@/config/works";
import { cn } from "@/lib/utils";

const TONE_CLASS: Record<CoverTone, { background: string; accent: string; soft: string }> = {
  pollen: { background: "bg-pollen-soft", accent: "fill-pollen", soft: "fill-petal" },
  blush: { background: "bg-blush-soft", accent: "fill-blush", soft: "fill-petal" },
  leaf: { background: "bg-leaf-soft", accent: "fill-leaf", soft: "fill-petal" },
  seed: { background: "bg-seed-soft", accent: "fill-seed", soft: "fill-cream" },
  stem: { background: "bg-leaf-soft", accent: "fill-stem", soft: "fill-pollen" },
};

interface MotifProps {
  accent: string;
  soft: string;
}

/** Big daisy cropped by the frame, with two small ones. */
function DaisyMotif() {
  return (
    <>
      <span className="absolute -bottom-[18%] -right-[22%] block w-[95%]">
        <Daisy className="w-full" />
      </span>
      <span className="absolute left-[12%] top-[12%] block w-[22%]">
        <Daisy className="w-full" />
      </span>
      <span className="absolute left-[38%] top-[34%] block w-[12%]">
        <Daisy className="w-full" />
      </span>
    </>
  );
}

/** Type specimen: a big "Aa" and lines of text. */
function LettersMotif({ accent, soft }: MotifProps) {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
      <circle cx={300} cy={130} r={90} className={accent} />
      <text
        x={40}
        y={330}
        className="fill-ink font-sans"
        style={{ fontSize: 230, fontWeight: 700, letterSpacing: "-0.06em" }}
      >
        Aa
      </text>
      {[380, 404, 428].map((y, index) => (
        <rect key={y} x={44} y={y} width={index === 2 ? 180 : 300} height={10} rx={5} className="fill-ink" opacity={0.18} />
      ))}
      <rect x={44} y={450} width={120} height={22} rx={11} className={soft} />
    </svg>
  );
}

/** Geometric composition: circles, a half moon and a triangle. */
function ShapesMotif({ accent, soft }: MotifProps) {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
      <rect x={40} y={60} width={150} height={150} rx={75} className={accent} />
      <path d="M210 210 A110 110 0 0 1 430 210 Z" className="fill-ink" />
      <path d="M60 460 L190 260 L320 460 Z" className={soft} />
      <circle cx={300} cy={360} r={46} className={accent} />
      <circle cx={300} cy={360} r={18} className="fill-ink" />
    </svg>
  );
}

/** Grid of squares, like a feed of posts. */
function GridMotif({ accent, soft }: MotifProps) {
  const cells = Array.from({ length: 9 }, (_, index) => index);
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
      {cells.map((index) => {
        const column = index % 3;
        const row = Math.floor(index / 3);
        const tone = index % 4 === 0 ? accent : index % 3 === 1 ? "fill-ink" : soft;
        return (
          <rect
            key={index}
            x={46 + column * 108}
            y={90 + row * 108}
            width={92}
            height={92}
            rx={index === 4 ? 46 : 14}
            className={tone}
          />
        );
      })}
    </svg>
  );
}

interface WorkCoverProps {
  work: Work;
  /** Image index, for the gallery inside the dialog. */
  imageIndex?: number;
  className?: string;
  sizes?: string;
}

/**
 * Picture of a work. Shows the image from `public/trabalhos/` when there is
 * one; otherwise draws a placeholder in the work's color, so the layout
 * stays complete while the real images are not in place. Built from inline
 * elements, so it can sit inside a button.
 */
export function WorkCover({ work, imageIndex = 0, className, sizes = "(min-width: 820px) 33vw, 100vw" }: WorkCoverProps) {
  const image = work.images[imageIndex];
  const tone = TONE_CLASS[work.cover.tone];

  if (image) {
    return (
      <span className={cn("relative block overflow-hidden", className)}>
        <Image src={image} alt={`${work.title}, imagem ${imageIndex + 1}`} fill sizes={sizes} className="object-cover" />
      </span>
    );
  }

  const motifs: Record<CoverMotif, ReactNode> = {
    daisy: <DaisyMotif />,
    letters: <LettersMotif accent={tone.accent} soft={tone.soft} />,
    shapes: <ShapesMotif accent={tone.accent} soft={tone.soft} />,
    grid: <GridMotif accent={tone.accent} soft={tone.soft} />,
  };

  return (
    <span
      role="img"
      aria-label={`${work.title}, ilustração provisória`}
      className={cn("relative block overflow-hidden", tone.background, className)}
    >
      {motifs[work.cover.motif]}
    </span>
  );
}
