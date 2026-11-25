import type { CSSProperties } from "react";
import { ContactStamps } from "@/components/contact/contact-stamps";
import { CopyEmailButton } from "@/components/contact/copy-email-button";
import { SealRing } from "@/components/contact/seal-ring";
import { ServicesList } from "@/components/contact/services-list";
import { IconTile } from "@/components/icon-tile";
import { CONTACT } from "@/config/contact";
import { SITE } from "@/config/site";

/**
 * Contact page on the dark green band: title, e-mail with copy button, the
 * seal ring, the channel stamps and the kinds of project.
 */
export function ContactSection() {
  return (
    <section className="bg-stem-deep text-cream">
      <div className="wrap pb-20 pt-14 md:pb-28 md:pt-20">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
          <div>
            <p className="group enter-fade mb-4 flex w-fit cursor-default items-center gap-3 font-semibold text-cream/80">
              <IconTile icon="mail" size={42} iconSize="md" />
              {CONTACT.kicker}
            </p>
            <h1 className="text-display text-cream">
              <span className="block overflow-hidden pb-[0.06em]">
                <span className="enter-rise" style={{ "--enter-step": "0.08s" } as CSSProperties}>
                  {CONTACT.title}
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <em
                  className="enter-rise not-italic text-gradient-light"
                  style={{ "--enter-step": "0.2s" } as CSSProperties}
                >
                  {CONTACT.titleAccent}
                </em>
              </span>
            </h1>
            <p className="enter-fade mt-6 max-w-[46ch] text-lead text-cream/85" style={{ "--enter-step": "0.35s" } as CSSProperties}>
              {CONTACT.lead}
            </p>
            <div className="enter-fade mt-8 flex flex-wrap items-center gap-4" style={{ "--enter-step": "0.45s" } as CSSProperties}>
              <a
                href={`mailto:${CONTACT.email}`}
                className="break-all bg-[linear-gradient(var(--pollen),var(--pollen))] bg-[length:0_0.08em] bg-[position:0_100%] bg-no-repeat text-[clamp(1.6rem,4vw,3rem)] font-bold tracking-tight transition-[background-size] duration-500 ease-(--ease-glide) hover:bg-[length:100%_0.08em]"
              >
                {CONTACT.email}
              </a>
              <CopyEmailButton
                email={CONTACT.email}
                label={CONTACT.copyLabel}
                copied={CONTACT.copied}
                failed={CONTACT.copyFailed}
              />
            </div>
          </div>
          <SealRing
            photo={SITE.photo}
            text={CONTACT.ringText}
            href={`mailto:${CONTACT.email}`}
            label={`Mandar um e-mail para a ${SITE.name}`}
          />
        </div>

        <div className="mt-16 md:mt-20">
          <ContactStamps channels={CONTACT.channels} postmark={CONTACT.postmark} />
        </div>

        <ServicesList title={CONTACT.servicesTitle} services={CONTACT.services} email={CONTACT.email} />
      </div>
    </section>
  );
}
