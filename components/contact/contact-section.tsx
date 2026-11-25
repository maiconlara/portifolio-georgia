import type { CSSProperties } from "react";
import { ContactChannels } from "@/components/contact/contact-channels";
import { ContactSubjects } from "@/components/contact/contact-subjects";
import { CopyEmailButton } from "@/components/contact/copy-email-button";
import { DaisySeal } from "@/components/daisy-seal";
import { CONTACT } from "@/config/contact";
import { SITE } from "@/config/site";

/**
 * Contact page written as a letter: a sheet of paper with the title, the
 * e-mail and Ge's signature, sealed with the daisy at the corner. Under it,
 * the other channels and the subjects that open a ready e-mail.
 */
export function ContactSection() {
  return (
    <section className="wrap pb-24 pt-14 md:pb-36 md:pt-24">
      <div className="relative rounded-3xl bg-paper px-6 pb-10 pt-16 shadow-[0_0_0_1px_var(--line),var(--tile-shadow)] sm:px-10 md:px-16 md:pb-14 md:pt-20 lg:px-20">
        <span
          className="enter-stamp absolute -top-12 right-4 block w-28 sm:right-8 sm:w-32 md:-top-16 md:right-14 md:w-44"
          style={{ "--enter-step": "0.45s" } as CSSProperties}
        >
          <DaisySeal photo={SITE.photo} className="w-full rotate-[8deg]" />
        </span>

        <h1 className="max-w-[13ch] text-hero">
          <span className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
            <span className="enter-rise">{CONTACT.title}</span>
          </span>
        </h1>
        <p
          className="enter-fade mt-6 max-w-[44ch] text-lead text-ink-soft"
          style={{ "--enter-step": "0.2s" } as CSSProperties}
        >
          {CONTACT.lead}
        </p>

        <div
          className="enter-fade mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
          style={{ "--enter-step": "0.3s" } as CSSProperties}
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className="break-all text-[clamp(1.5rem,3.6vw,2.8rem)] font-semibold tracking-tight text-ink underline decoration-pollen decoration-[0.08em] underline-offset-[0.2em] transition-colors duration-200 hover:text-stem"
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

        <p className="mt-14 text-right text-subtitle font-medium text-stem md:mt-20">{SITE.signature}</p>
      </div>

      <div className="mt-20 grid gap-16 md:mt-28 md:grid-cols-12 md:gap-x-10">
        <ContactChannels title={CONTACT.channelsTitle} channels={CONTACT.channels} className="md:col-span-7" />
        <ContactSubjects
          title={CONTACT.subjectsTitle}
          hint={CONTACT.subjectsHint}
          subjects={CONTACT.subjects}
          email={CONTACT.email}
          className="md:col-span-4 md:col-start-9"
        />
      </div>
    </section>
  );
}
