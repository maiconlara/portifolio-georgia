/**
 * Color palettes defined in `app/globals.css` (`[data-palette="..."]`).
 * To add one, copy a palette block there and add its name here.
 */
export type Palette = "margarida" | "chiclete";

/** Identity of the site. Everything here is edited by hand. */
export const SITE = {
  name: "Georgia",
  nickname: "Ge",
  role: "Design e ilustração",
  description:
    "Portfólio da Georgia (Ge): identidade visual, ilustração e design editorial feitos com o carinho de uma carta escrita à mão.",
  year: 2026,
  /** Final address of the site, used in links shared on social networks. */
  url: "https://example.com",
  /** Active palette. Switch to "chiclete" to see the alternative one. */
  palette: "margarida" as Palette,
  /** Photo used in the seal of the letter, the home page, "Sobre" and "Contato". */
  photo: "/ge/foto.jpg",
  /** Signature at the end of the letter of the page transition. */
  signature: "com carinho, Ge",
} as const;

export interface NavItem {
  href: string;
  label: string;
}

/** Pages of the site, in menu order. */
export const NAV: NavItem[] = [
  { href: "/", label: "Início" },
  { href: "/trabalhos/", label: "Trabalhos" },
  { href: "/experiencia/", label: "Experiência" },
  { href: "/sobre/", label: "Sobre" },
  { href: "/contato/", label: "Contato" },
];
