import type { Metadata } from "next";
import { SITE } from "@/config/site";

/** Title of the home page, also used when a page has no title of its own. */
export const HOME_TITLE = `${SITE.name}: ${SITE.role.toLowerCase()}`;

/**
 * Link preview image, generated at build time by `app/share-image.png/route.tsx`.
 * The `.png` in the address makes any static host serve it as an image.
 */
export const SHARE_IMAGE = { url: "/share-image.png", width: 1200, height: 630, alt: HOME_TITLE } as const;

interface PageMetadataOptions {
  /** Page name, shown as "Trabalhos, Georgia". Left out on the home page. */
  title?: string;
  description: string;
  /** Address of the page, with the trailing slash: "/trabalhos/". */
  path: string;
}

/**
 * Metadata of one page: title, description, canonical address and the
 * fields read by link previews (WhatsApp, Instagram, LinkedIn...), with the
 * preview image shared by every page (`SHARE_IMAGE`).
 *
 * @param options - Title, description and address of the page.
 * @returns Metadata to export from the page.
 */
export function buildPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const previewTitle = title ? `${title}, ${SITE.name}` : HOME_TITLE;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: SITE.name,
      url: path,
      title: previewTitle,
      description,
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: previewTitle,
      description,
      images: [SHARE_IMAGE],
    },
  };
}
