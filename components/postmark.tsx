import { cn } from "@/lib/utils";

interface PostmarkProps {
  text: string;
  /** Unique id of the circle path the text follows. */
  pathId: string;
  className?: string;
}

/** Post office cancel mark: a circle with text and wavy lines. */
export function Postmark({ text, pathId, className }: PostmarkProps) {
  return (
    <svg viewBox="0 0 120 70" aria-hidden className={cn("pointer-events-none text-stem", className)}>
      <circle cx={36} cy={35} r={27} className="fill-none stroke-current" strokeWidth={2} />
      <circle cx={36} cy={35} r={20} className="fill-none stroke-current" strokeWidth={1} />
      <defs>
        <path id={pathId} d="M36 35m-23 0a23 23 0 1 1 46 0a23 23 0 1 1-46 0" />
      </defs>
      <text className="fill-current font-sans text-[6.4px] font-bold uppercase tracking-[0.12em]">
        <textPath href={`#${pathId}`}>{text}</textPath>
      </text>
      {[22, 32, 42].map((y) => (
        <path
          key={y}
          d={`M66 ${y} q6 -5 12 0 t12 0 t12 0 t12 0`}
          className="fill-none stroke-current"
          strokeWidth={2}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
