import type { CSSProperties, ReactNode } from "react";
import type { WorkFrame as WorkFrameKind } from "@/config/works";
import { cn } from "@/lib/utils";

interface WorkFrameProps {
  frame: WorkFrameKind;
  children: ReactNode;
  className?: string;
  /** Rotation of the polaroid, so the grid does not look aligned by machine. */
  tilt?: string;
}

/**
 * Paper frame around a work: polaroid, washi tape, passe-partout or postage
 * stamp (`.frame-*` in `globals.css`). The stamp gets its shadow from a
 * wrapper, because the perforated mask would cut a shadow of its own.
 */
export function WorkFrame({ frame, children, className, tilt }: WorkFrameProps) {
  const style = tilt ? ({ "--tilt": tilt } as CSSProperties) : undefined;

  if (frame === "stamp") {
    return (
      <div className={cn("drop-shadow-[0_18px_18px_rgb(30_42_31/0.25)]", className)}>
        <div className="frame-stamp">{children}</div>
      </div>
    );
  }

  if (frame === "mat") {
    return (
      <div className={cn("frame-mat", className)}>
        <div>{children}</div>
      </div>
    );
  }

  return (
    <div className={cn(frame === "polaroid" ? "frame-polaroid" : "frame-tape", className)} style={style}>
      {children}
    </div>
  );
}
