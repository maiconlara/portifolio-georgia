import Image from "next/image";
import { cn } from "@/lib/utils";

const OUTER_PETALS = Array.from({ length: 16 }, (_, index) => index * 22.5);
const INNER_PETALS = Array.from({ length: 16 }, (_, index) => index * 22.5 + 11.25);
const POLLEN_DOTS = Array.from({ length: 20 }, (_, index) => (index * Math.PI * 2) / 20);

interface DaisySealProps {
  /** Round photo in the middle of the flower. */
  photo: string;
  className?: string;
  /** Accessible description of the photo. Decorative when left out. */
  alt?: string;
}

/**
 * Daisy-shaped wax seal: white petals around a yellow center that holds Ge's
 * photo. Seals the letter of the contact page. Petal colors follow the
 * active palette.
 */
export function DaisySeal({ photo, className, alt = "" }: DaisySealProps) {
  return (
    <span className={cn("relative block aspect-square", className)}>
      <svg
        viewBox="0 0 200 200"
        aria-hidden
        className="absolute inset-0 size-full drop-shadow-[0_10px_14px_rgb(30_42_31/0.28)]"
      >
        {OUTER_PETALS.map((angle) => (
          <ellipse
            key={`outer-${angle}`}
            cx={100}
            cy={40}
            rx={15}
            ry={40}
            transform={`rotate(${angle} 100 100)`}
            className="fill-petal stroke-seed-soft"
            strokeWidth={2}
          />
        ))}
        {INNER_PETALS.map((angle) => (
          <ellipse
            key={`inner-${angle}`}
            cx={100}
            cy={48}
            rx={12}
            ry={32}
            transform={`rotate(${angle} 100 100)`}
            className="fill-petal stroke-seed-soft"
            strokeWidth={1.6}
          />
        ))}
        <circle cx={100} cy={100} r={50} className="fill-pollen stroke-pollen-deep" strokeWidth={3} />
        {POLLEN_DOTS.map((angle) => (
          <circle
            key={angle}
            cx={100 + Math.cos(angle) * 46}
            cy={100 + Math.sin(angle) * 46}
            r={1.8}
            className="fill-pollen-deep"
          />
        ))}
      </svg>
      <Image
        src={photo}
        alt={alt}
        width={160}
        height={160}
        priority
        className="absolute left-1/2 top-1/2 aspect-square w-[42%] -translate-1/2 rounded-full object-cover object-[50%_38%] ring-[3px] ring-pollen-deep"
      />
    </span>
  );
}
