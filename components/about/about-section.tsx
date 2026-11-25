import Image from "next/image";
import { Chip } from "@heroui/react";
import { Daisy } from "@/components/daisy";
import { ABOUT } from "@/config/about";
import { SITE } from "@/config/site";

/**
 * "Sobre" content: Ge's photo as a taped polaroid, her text, numbers,
 * and interests.
 */
export function AboutSection() {
  return (
    <section className="wrap grid items-start gap-x-20 gap-y-14 py-14 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:py-20">
      <figure className="relative mx-auto w-[min(380px,82%)] md:sticky md:top-[calc(var(--header-h)+2rem)]">
        <div className="frame-tape rotate-[1.6deg] pb-14">
          <Image
            src={SITE.photo}
            alt={`Foto da ${SITE.name}`}
            width={640}
            height={640}
            sizes="(min-width: 820px) 380px, 82vw"
            className="aspect-4/5 w-full object-cover object-[50%_30%]"
          />
          <figcaption className="absolute inset-x-0 bottom-4 text-center text-lg font-semibold text-ink">
            {ABOUT.photoCaption}
          </figcaption>
        </div>
        <Daisy className="absolute -bottom-7 -left-8 w-24 -rotate-12" />
        <Daisy className="absolute -right-6 top-10 w-14 rotate-12" />
      </figure>

      <div>
        <p data-reveal className="text-[clamp(1.6rem,3vw,2.4rem)] font-bold leading-tight tracking-[-0.03em] text-ink">
          “{ABOUT.quote}”
        </p>
        <div data-reveal-group className="mt-7 grid max-w-[60ch] gap-4 text-ink">
          {ABOUT.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ul data-reveal-group className="mt-10 grid gap-4 sm:grid-cols-3">
          {ABOUT.stats.map((stat) => (
            <li key={stat.label} className="rounded-2xl border border-line bg-petal p-5">
              <p className="text-3xl font-bold tracking-tight text-ink">{stat.value}</p>
              <p className="mt-1 text-sm text-ink-soft">{stat.label}</p>
            </li>
          ))}
        </ul>

        <div data-reveal className="mt-10 border-t border-ink pt-6">
          <h2 className="text-subtitle">{ABOUT.hobbiesTitle}</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {ABOUT.hobbies.map((hobby) => (
              <li key={hobby}>
                <Chip size="lg" className="cursor-default border-[1.5px] border-ink [--chip-bg:transparent] [--chip-fg:var(--ink)]">
                  {hobby}
                </Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
