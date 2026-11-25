import type { CSSProperties } from "react";
import { HeroPortrait } from "@/components/home/hero-portrait";
import { LinkButton } from "@/components/ui/link-button";
import { CONTACT } from "@/config/contact";
import { HOME } from "@/config/home";
import { SITE } from "@/config/site";

/** Home opening: Ge's name in large type, the intro and her photo as a stamp. */
export function HeroSection() {
  return (
    <section className="wrap grid items-center gap-x-16 gap-y-14 pb-16 pt-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:pb-24 md:pt-16">
      <div className="order-2 md:order-1">
        <div className="enter-fade mb-8 flex justify-between gap-4 border-y border-ink py-2 text-sm font-semibold text-ink-soft">
          {HOME.issue.map((item, index) => (
            <span key={item} className={index === 1 ? "hidden sm:inline" : undefined}>
              {item}
            </span>
          ))}
        </div>

        <h1 className="relative text-mast">
          <span className="block overflow-hidden pb-[0.07em]">
            <span className="enter-rise">
              {SITE.name}
              <span className="text-pollen">.</span>
            </span>
          </span>
          <span
            className="enter-pop absolute -bottom-4 right-[2%] block -rotate-6 rounded-full bg-pollen px-4 py-1.5 text-[clamp(1rem,1.8vw,1.35rem)] font-semibold leading-none tracking-normal text-ink shadow-[inset_0_0_0_1.5px_var(--ink),0_10px_18px_-10px_rgb(0_0_0/0.4)] sm:right-[16%] md:right-[0%] lg:right-[14%] xl:right-[22%]"
            style={{ "--enter-step": "0.55s" } as CSSProperties}
          >
            {HOME.greeting}
          </span>
        </h1>

        <p
          className="enter-fade mt-10 max-w-[44ch] text-lead text-ink"
          style={{ "--enter-step": "0.35s" } as CSSProperties}
        >
          {HOME.intro}
        </p>

        <div
          className="enter-fade mt-8 flex flex-wrap gap-3"
          style={{ "--enter-step": "0.5s" } as CSSProperties}
        >
          <LinkButton href={HOME.primaryCta.href} label={HOME.primaryCta.label} arrow />
          <LinkButton href={HOME.secondaryCta.href} label={HOME.secondaryCta.label} variant="ink-outline" />
        </div>
      </div>

      <div className="order-1 md:order-2">
        <HeroPortrait stampLabel={HOME.stampLabel} postmark={CONTACT.postmark} tags={HOME.floatingTags} />
      </div>
    </section>
  );
}
