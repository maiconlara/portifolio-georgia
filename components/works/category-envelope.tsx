import type { CSSProperties } from "react";
import { Daisy } from "@/components/daisy";
import type { WorkCategory } from "@/config/works";
import { formatCounter } from "@/lib/utils";

const TONE_STYLE: Record<WorkCategory["tone"], CSSProperties> = {
  ink: { "--envelope-color": "var(--ink)", "--envelope-ink": "var(--cream)" } as CSSProperties,
  pollen: { "--envelope-color": "var(--pollen-soft)", "--envelope-ink": "var(--ink)" } as CSSProperties,
  blush: { "--envelope-color": "var(--blush-soft)", "--envelope-ink": "var(--ink)" } as CSSProperties,
  leaf: { "--envelope-color": "var(--leaf-soft)", "--envelope-ink": "var(--ink)" } as CSSProperties,
  seed: { "--envelope-color": "var(--seed-soft)", "--envelope-ink": "var(--ink)" } as CSSProperties,
  stem: { "--envelope-color": "var(--leaf)", "--envelope-ink": "var(--ink)" } as CSSProperties,
};

interface CategoryEnvelopeProps {
  category: WorkCategory;
  /** Position in the row, printed as "Carta 01". */
  position: number;
  count: number;
  isOpen: boolean;
  onOpen: () => void;
}

/**
 * Envelope that filters the works of one category. On hover the daisy seal
 * pops, the flap opens and a ruled sheet peeks out (`.envelope` in
 * `globals.css`).
 */
export function CategoryEnvelope({ category, position, count, isOpen, onOpen }: CategoryEnvelopeProps) {
  const plural = count === 1 ? "trabalho" : "trabalhos";
  return (
    <button
      type="button"
      className="envelope cursor-pointer"
      style={TONE_STYLE[category.tone]}
      aria-pressed={isOpen}
      aria-label={`Abrir o envelope ${category.name}, ${count} ${plural}`}
      onClick={onOpen}
    >
      <span className="envelope__paper paper-ruled" />
      <span className="envelope__body">
        <span className="absolute inset-x-[9%] top-[30%] flex justify-between text-[0.72rem] font-bold uppercase tracking-[0.06em] opacity-80">
          <span>Carta {formatCounter(position)}</span>
          <span>{count}</span>
        </span>
        <span className="text-[clamp(1.05rem,1.6vw,1.4rem)] font-bold leading-tight tracking-tight">
          {category.label}
        </span>
        <span className="text-[0.85rem] opacity-80">
          {count} {plural}
        </span>
      </span>
      <span className="envelope__flap" />
      <span className="envelope__seal">
        <Daisy className="w-full" />
      </span>
    </button>
  );
}
