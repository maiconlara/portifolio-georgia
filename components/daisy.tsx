import { cn } from "@/lib/utils";

const PETALS = Array.from({ length: 12 }, (_, index) => index * 30);

interface DaisyProps {
  className?: string;
  /** Slow rotation, for large decorative daisies. */
  spinning?: boolean;
}

/** Decorative daisy in the palette colors. */
export function Daisy({ className, spinning = false }: DaisyProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden
      className={cn("shrink-0", spinning && "animate-[spin-slow_60s_linear_infinite]", className)}
    >
      {PETALS.map((angle) => (
        <ellipse
          key={angle}
          cx={50}
          cy={22}
          rx={8.5}
          ry={21}
          transform={`rotate(${angle} 50 50)`}
          className="fill-petal stroke-ink"
          strokeWidth={2.2}
        />
      ))}
      <circle cx={50} cy={50} r={15} className="fill-pollen stroke-ink" strokeWidth={2.2} />
    </svg>
  );
}
