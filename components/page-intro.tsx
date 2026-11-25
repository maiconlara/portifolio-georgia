import type { CSSProperties, ReactNode } from "react";
import { IconTile } from "@/components/icon-tile";
import { cn } from "@/lib/utils";

interface PageIntroProps {
  kicker: string;
  /** Page title. An `<em>` inside gets the gradient accent. */
  title: ReactNode;
  lead: string;
  /** Material Symbols name next to the kicker. */
  icon: string;
  className?: string;
}

/**
 * Opening block of the inner pages: small label with an icon, the large
 * title rising into place and a short lead.
 */
export function PageIntro({ kicker, title, lead, icon, className }: PageIntroProps) {
  return (
    <div
      className={cn(
        "wrap grid items-end gap-x-12 gap-y-6 border-b border-line pb-10 pt-14 md:grid-cols-[minmax(0,1fr)_auto] md:pb-12 md:pt-20",
        className,
      )}
    >
      <div>
        <p
          className="group enter-fade mb-4 flex w-fit cursor-default items-center gap-3 font-semibold text-ink-soft"
        >
          <IconTile icon={icon} size={42} iconSize="md" />
          {kicker}
        </p>
        <h1 className="overflow-hidden pb-[0.08em] text-display [&_em]:not-italic [&_em]:text-gradient">
          <span className="enter-rise" style={{ "--enter-step": "0.08s" } as CSSProperties}>
            {title}
          </span>
        </h1>
      </div>
      <p
        className="enter-fade max-w-[40ch] text-lead text-ink-soft"
        style={{ "--enter-step": "0.25s" } as CSSProperties}
      >
        {lead}
      </p>
    </div>
  );
}
