import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge aware of the custom font sizes from `globals.css`. Without
 * this, `text-display` is read as a color and dropped next to `text-ink`.
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["hero", "display", "title", "subtitle", "lead"],
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

const PORTUGUESE_LIST = new Intl.ListFormat("pt-BR", { style: "long", type: "conjunction" });

/**
 * Joins words the way they are written in Portuguese: "Figma, Illustrator e Photoshop".
 *
 * @param items - Words to join, in order.
 */
export function formatList(items: readonly string[]): string {
  return PORTUGUESE_LIST.format(items);
}
