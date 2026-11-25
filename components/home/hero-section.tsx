import { Fragment, type CSSProperties } from "react";
import Image from "next/image";
import { Daisy } from "@/components/daisy";
import { LinkButton } from "@/components/ui/link-button";
import { HOME } from "@/config/home";
import { SITE } from "@/config/site";

const WORD_STEP_SECONDS = 0.05;

/**
 * One word of the headline. `{foto}` and `{margarida}` turn into pictures
 * that sit on the line like words; every other word rises into place.
 *
 * @param word - Word of `HOME.headline`.
 * @param step - Enter delay of this word, so the sentence reads in order.
 */
function HeadlineWord({ word, step }: { word: string; step: string }) {
  const style = { "--enter-step": step } as CSSProperties;

  if (word === "{foto}") {
    return (
      <span
        aria-hidden
        className="enter-pop relative mx-[0.04em] inline-block h-[0.78em] w-[1.45em] overflow-hidden rounded-full align-[-0.06em]"
        style={style}
      >
        <Image
          src={SITE.photo}
          alt=""
          fill
          priority
          sizes="(min-width: 820px) 150px, 90px"
          className="object-cover object-[50%_34%]"
        />
      </span>
    );
  }

  if (word === "{margarida}") {
    return (
      <span aria-hidden className="enter-pop inline-block size-[0.78em] align-[-0.08em]" style={style}>
        <Daisy className="size-full" />
      </span>
    );
  }

  return (
    <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
      <span className="enter-rise" style={style}>
        {word}
      </span>
    </span>
  );
}

/**
 * Home opening: one sentence in large type with Ge's photo and a daisy in
 * the middle of the words, then a short intro and the call to the works,
 * pushed to the right so the page does not sit on a centered axis.
 */
export function HeroSection() {
  const words = HOME.headline.split(/\s+/);
  const restStep = `${words.length * WORD_STEP_SECONDS + 0.1}s`;

  return (
    <section className="wrap pb-20 pt-10 md:pb-28 md:pt-16">
      <h1 className="max-w-[16ch] text-hero">
        {words.map((word, index) => (
          <Fragment key={`${word}-${index}`}>
            {index > 0 ? " " : null}
            <HeadlineWord word={word} step={`${index * WORD_STEP_SECONDS}s`} />
          </Fragment>
        ))}
      </h1>

      <div
        className="enter-fade mt-10 grid gap-7 md:ml-auto md:mt-14 md:max-w-[34rem]"
        style={{ "--enter-step": restStep } as CSSProperties}
      >
        <p className="text-lead text-ink-soft">{HOME.intro}</p>
        <div>
          <LinkButton href={HOME.cta.href} label={HOME.cta.label} arrow />
        </div>
      </div>
    </section>
  );
}
