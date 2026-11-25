import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge aware of the custom font sizes from `globals.css`. Without
 * this, `text-display` is read as a color and dropped next to `text-ink`.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["mast", "display", "title", "subtitle", "lead", "kicker"],
    },
  },
});

/**
 * Joins class names and resolves Tailwind conflicts (the last one wins).
 *
 * @param inputs - Class names, conditionals and arrays accepted by `clsx`.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Removes the trailing slash so `/sobre` and `/sobre/` compare as equal.
 *
 * @param path - Pathname, with or without hash.
 * @returns The pathname without hash and without trailing slash (root stays `/`).
 */
export function normalizePath(path: string): string {
  const withoutHash = path.split("#")[0] ?? "";
  if (withoutHash === "" || withoutHash === "/") return "/";
  return withoutHash.replace(/\/+$/, "");
}

/**
 * Two digit counter used in lists and cards ("01", "02"...).
 *
 * @param value - Number to pad.
 */
export function formatCounter(value: number): string {
  return String(value).padStart(2, "0");
}
