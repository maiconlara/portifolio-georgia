import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  /** Short line under the title. */
  lead?: string;
  className?: string;
}

/**
 * Opening of the inner pages: the large title rising into place and, under
 * it, a short lead.
 */
export function PageHeader({ title, lead, className }: PageHeaderProps) {
  return (
    <div className={cn("wrap pb-12 pt-12 md:pb-16 md:pt-20", className)}>
      <h1 className="-mb-[0.1em] overflow-hidden pb-[0.1em] text-display">
        <span className="enter-rise">{title}</span>
      </h1>
      {lead ? (
        <p
          className="enter-fade mt-6 max-w-[46ch] text-lead text-ink-soft md:mt-8"
          style={{ "--enter-step": "0.2s" } as CSSProperties}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
