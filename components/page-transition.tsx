import { ViewTransition, type ReactNode } from "react";

/**
 * Wraps the content of a page so a route change fades the old page out
 * and the new one in, through React's `ViewTransition` and the browser View
 * Transitions API. Each `page.tsx` uses it, because a layout persists across
 * navigations and never enters or exits. Timing lives in `.page-exit` and
 * `.page-enter` in `globals.css`; browsers without support just swap pages.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
