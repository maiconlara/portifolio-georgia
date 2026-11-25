import type { CSSProperties } from "react";
import Image from "next/image";
import { Daisy } from "@/components/daisy";
import { Postmark } from "@/components/postmark";
import { Icon } from "@/components/ui/icon";
import type { FloatingTag } from "@/config/home";
import { SITE } from "@/config/site";

interface HeroPortraitProps {
  stampLabel: string;
  postmark: string;
  tags: readonly FloatingTag[];
}

/**
 * Ge's photo as a postage stamp: perforated edge, postmark over the corner,
 * a daisy and small tags floating around. The stamp straightens on hover.
 */
export function HeroPortrait({ stampLabel, postmark, tags }: HeroPortraitProps) {
  return (
    <div className="group relative mx-auto w-[min(340px,74%)] md:w-[min(390px,100%)]">
      <div
        className="enter-pop drop-shadow-[0_26px_26px_rgb(30_42_31/0.28)]"
        style={{ "--enter-step": "0.15s" } as CSSProperties}
      >
        <div
          className="frame-stamp rotate-[3deg] transition-[rotate] duration-500 ease-(--ease-pop) group-hover:rotate-0"
          style={{ "--hole": "11px", padding: "20px" } as CSSProperties}
        >
          <Image
            src={SITE.photo}
            alt={`Foto da ${SITE.name}`}
            width={640}
            height={640}
            priority
            sizes="(min-width: 820px) 390px, 74vw"
            className="aspect-4/5 w-full object-cover object-[50%_30%]"
          />
          <div className="mt-3 flex items-baseline justify-between gap-3 text-ink">
            <span className="text-xs font-bold uppercase tracking-[0.16em]">{stampLabel}</span>
            <span className="text-2xl font-bold tracking-tight">{SITE.year}</span>
          </div>
        </div>
      </div>

      <div
        className="enter-fade absolute -right-10 top-8 w-40 -rotate-12 opacity-75 md:-right-14"
        style={{ "--enter-step": "0.45s" } as CSSProperties}
      >
        <Postmark text={postmark} pathId="hero-postmark" className="w-full" />
      </div>

      <div
        className="enter-pop absolute -bottom-12 -right-9 w-20 md:-right-11 md:w-24"
        style={{ "--enter-step": "0.55s" } as CSSProperties}
      >
        <Daisy spinning className="w-full" />
      </div>

      {tags.map((tag, index) => (
        <span
          key={tag.label}
          className="enter-pop absolute z-10 hidden sm:block"
          style={{ ...tag.position, "--enter-step": `${0.6 + index * 0.12}s` } as CSSProperties}
        >
          <span className="block animate-[float_4s_ease-in-out_infinite]" style={{ animationDelay: tag.floatDelay }}>
            <span
              className="flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-petal py-1.5 pl-1.5 pr-4 text-sm font-semibold text-ink shadow-[0_12px_20px_-12px_rgb(0_0_0/0.45)]"
              style={{ rotate: tag.tilt }}
            >
              <span className="grid size-7 place-items-center rounded-full bg-pollen-soft">
                <Icon name={tag.icon} size="sm" />
              </span>
              {tag.label}
            </span>
          </span>
        </span>
      ))}
    </div>
  );
}
