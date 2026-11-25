import Image from "next/image";
import { Daisy } from "@/components/daisy";
import { ABOUT } from "@/config/about";
import { SITE } from "@/config/site";
import { formatList } from "@/lib/utils";

/**
 * "Sobre" content: Ge's text on the left and her photo on the right, which
 * stays in view while the text scrolls on wide screens.
 */
export function AboutSection() {
  return (
    <section className="wrap grid gap-14 pb-24 md:grid-cols-12 md:gap-x-10 md:pb-36">
      <figure className="relative mr-4 md:sticky md:top-[calc(var(--header-h)+2rem)] md:order-2 md:col-span-5 md:col-start-8 md:mr-0 md:self-start">
        <Image
          src={SITE.photo}
          alt={`Foto da ${SITE.name}`}
          width={800}
          height={1000}
          sizes="(min-width: 820px) 40vw, 100vw"
          className="aspect-4/5 w-full rounded-2xl object-cover object-[50%_30%]"
        />
        <Daisy className="absolute -bottom-7 -left-5 w-20 -rotate-12 md:-left-10 md:w-28" />
      </figure>

      <div className="md:order-1 md:col-span-7 lg:col-span-6">
        <p data-reveal className="max-w-[22ch] text-title font-medium">
          {ABOUT.statement}
        </p>
        <div data-reveal-group className="mt-8 grid max-w-[60ch] gap-4 text-ink">
          {ABOUT.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <dl data-reveal-group className="mt-14 grid grid-cols-3 gap-4 border-t border-line pt-8 md:gap-8">
          {ABOUT.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end">
              <dt className="mt-1 text-sm text-ink-soft">{stat.label}</dt>
              <dd className="text-[clamp(1.6rem,3.2vw,2.8rem)] font-semibold leading-none tracking-[-0.03em] text-ink">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div data-reveal className="mt-14">
          <h2 className="text-subtitle">{ABOUT.hobbiesTitle}</h2>
          <p className="mt-3 max-w-[48ch] text-lead text-ink-soft">{formatList(ABOUT.hobbies)}.</p>
        </div>
      </div>
    </section>
  );
}
