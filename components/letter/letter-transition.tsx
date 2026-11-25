"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type AnimationEvent,
  type CSSProperties,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { IconTile } from "@/components/icon-tile";
import { DaisySeal } from "@/components/letter/daisy-seal";
import { NAV, SITE, type NavItem } from "@/config/site";
import { normalizePath } from "@/lib/utils";

/**
 * - `intro`: first visit; the closed letter waits a moment and opens.
 * - `closing`: a link was clicked; the letter covers the page and gets sealed.
 * - `sealed`: waiting for the next page to render.
 * - `opening`: the new page is there; the seal pops and the letter opens.
 * - `idle`: nothing on screen.
 */
type LetterPhase = "intro" | "closing" | "sealed" | "opening" | "idle";

/** Delay of the page enter animations, so they play as the letter leaves. */
const INTRO_ENTER_DELAY = "2.3s";
const ROUTE_ENTER_DELAY = "1.05s";

/** Safety net: a navigation that never finishes still opens the letter. */
const SEALED_TIMEOUT_MS = 6000;

const NOT_FOUND_PAGE: NavItem = {
  href: "/",
  label: "Ops",
  icon: "help",
  summary: "",
};

interface LetterContextValue {
  /** Closes the letter, goes to `href` and opens the letter on the new page. */
  navigate: (href: string) => void;
}

const LetterContext = createContext<LetterContextValue | null>(null);

/**
 * Page of the menu that matches an address.
 *
 * @param path - Pathname or href, with or without trailing slash and hash.
 */
function findPage(path: string): NavItem {
  const normalized = normalizePath(path);
  return NAV.find((item) => normalizePath(item.href) === normalized) ?? NOT_FOUND_PAGE;
}

/** Whether the visitor asked the system for less motion. */
function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Wraps the site with the letter that opens between pages. The phase is
 * derived from the route: when the pathname changes, the letter opens (also
 * for the browser back and forward buttons). Links call `navigate` through
 * `TransitionLink`. Every step advances on `animationend`, so the timing
 * lives in `globals.css` (`.letter`).
 */
export function LetterTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<LetterPhase>("intro");
  const [shownPath, setShownPath] = useState(pathname);
  const [page, setPage] = useState<NavItem>(() => findPage(pathname));
  const [enterDelay, setEnterDelay] = useState(INTRO_ENTER_DELAY);
  const pendingHref = useRef<string | null>(null);

  if (normalizePath(pathname) !== normalizePath(shownPath)) {
    setShownPath(pathname);
    setPage(findPage(pathname));
    setEnterDelay(prefersReducedMotion() ? "0s" : ROUTE_ENTER_DELAY);
    setPhase(prefersReducedMotion() ? "idle" : "opening");
  }

  const navigate = useCallback(
    (href: string) => {
      if (normalizePath(href) === normalizePath(pathname)) {
        if (href.includes("#")) router.push(href);
        else window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
        return;
      }
      if (prefersReducedMotion() || phase !== "idle") {
        router.push(href);
        return;
      }
      pendingHref.current = href;
      setPage(findPage(href));
      setPhase("closing");
    },
    [pathname, phase, router],
  );

  const handleAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (phase === "closing") {
      setPhase("sealed");
      const href = pendingHref.current;
      pendingHref.current = null;
      if (href) router.push(href);
      window.setTimeout(() => {
        setPhase((current) => (current === "sealed" ? "opening" : current));
      }, SEALED_TIMEOUT_MS);
      return;
    }
    if (phase === "opening" || phase === "intro") setPhase("idle");
  };

  const contextValue = useMemo(() => ({ navigate }), [navigate]);
  const isIntro = phase === "intro";

  return (
    <LetterContext.Provider value={contextValue}>
      <div className="contents" style={{ "--enter-delay": enterDelay } as CSSProperties}>
        {children}
      </div>

      <div className="letter" data-phase={phase} aria-hidden onAnimationEnd={handleAnimationEnd}>
        <div className="letter__envelope">
          <div className="letter__back" />
          <div className="letter__flap" />
          <div className="letter__paper paper-ruled">
            <div className="letter__paper-content grid justify-items-center gap-2 px-6">
              <IconTile icon={isIntro ? "local_florist" : page.icon} size={72} iconSize="xl" />
              <p className="mt-2 text-[clamp(1.3rem,3vw,1.9rem)] font-semibold tracking-tight text-stem">
                {isIntro ? "oi, que bom que você veio!" : "abrindo a carta de"}
              </p>
              <p className="text-[clamp(3.4rem,10vw,8.5rem)] font-bold leading-[0.95] tracking-[-0.045em] text-ink">
                {isIntro ? SITE.name : page.label}
              </p>
              <p className="mt-1 text-[clamp(1.1rem,2.4vw,1.5rem)] font-medium text-ink-soft">{SITE.signature}</p>
            </div>
          </div>
          <div className="letter__pocket" />
          <p className="letter__caption text-[clamp(1.2rem,2.6vw,1.7rem)] font-semibold tracking-tight text-seed">
            chegou uma cartinha pra você
          </p>
          <div className="letter__seal">
            <div className="letter__seal-art">
              <DaisySeal photo={SITE.photo} />
            </div>
          </div>
        </div>
      </div>
    </LetterContext.Provider>
  );
}

/**
 * Access to the letter transition.
 *
 * @returns `navigate`, which plays the letter and changes the page.
 */
export function useLetter(): LetterContextValue {
  const value = useContext(LetterContext);
  if (!value) throw new Error("useLetter must be used inside LetterTransitionProvider.");
  return value;
}
