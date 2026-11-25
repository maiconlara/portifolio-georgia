import { DaisySeal } from "@/components/letter/daisy-seal";

interface SealRingProps {
  photo: string;
  text: string;
  href: string;
  label: string;
}

/**
 * The daisy seal with Ge's photo inside a ring of text that turns slowly
 * (faster on hover). Links to the e-mail.
 */
export function SealRing({ photo, text, href, label }: SealRingProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="group relative grid aspect-square w-[clamp(220px,24vw,300px)] place-items-center justify-self-center rounded-full"
    >
      <svg
        viewBox="0 0 140 140"
        aria-hidden
        className="absolute inset-0 animate-[spin-slow_22s_linear_infinite] group-hover:[animation-duration:6s]"
      >
        <defs>
          <path id="seal-ring-path" d="M70 70m-61 0a61 61 0 1 1 122 0a61 61 0 1 1-122 0" />
        </defs>
        <text className="fill-cream font-sans text-[10.5px] font-bold uppercase tracking-[0.14em]">
          <textPath href="#seal-ring-path">{text}</textPath>
        </text>
      </svg>
      <DaisySeal photo={photo} className="w-[66%] transition-transform duration-500 ease-(--ease-pop) group-hover:rotate-12 group-hover:scale-105" />
    </a>
  );
}
