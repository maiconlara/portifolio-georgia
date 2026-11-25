import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { DAISY_PETAL_ANGLES } from "@/components/daisy";
import { HOME } from "@/config/home";
import { SITE } from "@/config/site";
import { SHARE_IMAGE } from "@/lib/page-metadata";

export const dynamic = "force-static";

const PALETTE_TOKENS = ["cream", "ink", "ink-soft", "petal", "pollen"] as const;

type PaletteToken = (typeof PALETTE_TOKENS)[number];

/**
 * Colors of the active palette, read from `app/globals.css` so the image
 * follows `SITE.palette` without repeating any hex value.
 *
 * @param css - Content of `app/globals.css`.
 * @returns Each token with its color.
 */
function readPaletteColors(css: string): Record<PaletteToken, string> {
  const block = css.match(new RegExp(`\\[data-palette="${SITE.palette}"\\]\\s*\\{([^}]*)\\}`))?.[1];
  if (!block) throw new Error(`Palette "${SITE.palette}" not found in app/globals.css.`);
  const entries = PALETTE_TOKENS.map((token) => {
    const color = block.match(new RegExp(`--${token}:\\s*([^;]+);`))?.[1]?.trim();
    if (!color) throw new Error(`Color --${token} not found in the "${SITE.palette}" palette.`);
    return [token, color];
  });
  return Object.fromEntries(entries) as Record<PaletteToken, string>;
}

/**
 * Downloads Instrument Sans from Google Fonts as TTF, with only the letters
 * the image uses. The image generator does not read the WOFF2 files the
 * site uses.
 *
 * @param weight - Font weight, from 400 to 700.
 * @param text - Every character drawn with this weight.
 * @returns The font file, or `null` when the download fails, so the image
 *          falls back to the default font instead of breaking the build.
 */
async function loadInstrumentSans(weight: number, text: string): Promise<ArrayBuffer | null> {
  try {
    const cssUrl = `https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(cssUrl)).text();
    const fontUrl = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!fontUrl) return null;
    const font = await fetch(fontUrl);
    return font.ok ? await font.arrayBuffer() : null;
  } catch {
    return null;
  }
}

/**
 * Link preview image (WhatsApp, Instagram, LinkedIn...), built once at
 * build time into `out/share-image.png`: the home page sentence with Ge's
 * photo and a daisy between the words, over the palette background.
 */
export async function GET() {
  const [css, photo] = await Promise.all([
    readFile(join(process.cwd(), "app", "globals.css"), "utf8"),
    readFile(join(process.cwd(), "public", SITE.photo)),
  ]);
  const colors = readPaletteColors(css);
  const photoSource = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const words = HOME.headline.split(/\s+/);
  const host = new URL(SITE.url).host;
  const [semiboldFont, mediumFont] = await Promise.all([
    loadInstrumentSans(600, words.join("")),
    loadInstrumentSans(500, `${SITE.role}${host}`),
  ]);
  const fonts = [
    ...(semiboldFont ? [{ name: "Instrument Sans", data: semiboldFont, weight: 600 as const }] : []),
    ...(mediumFont ? [{ name: "Instrument Sans", data: mediumFont, weight: 500 as const }] : []),
  ];

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "84px 88px 72px",
        background: colors.cream,
        color: colors.ink,
        fontFamily: "Instrument Sans",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          columnGap: 24,
          rowGap: 4,
          maxWidth: 980,
          fontSize: 96,
          fontWeight: 600,
          lineHeight: 1.04,
          letterSpacing: -3.8,
        }}
      >
        {words.map((word, index) => {
          if (word === "{foto}") {
            return (
              <img
                key={`${word}-${index}`}
                src={photoSource}
                alt=""
                width={140}
                height={76}
                style={{ borderRadius: 999, objectFit: "cover", objectPosition: "50% 34%" }}
              />
            );
          }
          if (word === "{margarida}") {
            return (
              <svg key={`${word}-${index}`} width={76} height={76} viewBox="0 0 100 100">
                {DAISY_PETAL_ANGLES.map((angle) => (
                  <ellipse
                    key={angle}
                    cx={50}
                    cy={22}
                    rx={8.5}
                    ry={21}
                    transform={`rotate(${angle} 50 50)`}
                    fill={colors.petal}
                    stroke={colors.ink}
                    strokeWidth={2.2}
                  />
                ))}
                <circle cx={50} cy={50} r={15} fill={colors.pollen} stroke={colors.ink} strokeWidth={2.2} />
              </svg>
            );
          }
          return <span key={`${word}-${index}`}>{word}</span>;
        })}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 30,
          fontWeight: 500,
          color: colors["ink-soft"],
        }}
      >
        <span>{SITE.role}</span>
        <span>{host}</span>
      </div>
    </div>,
    { width: SHARE_IMAGE.width, height: SHARE_IMAGE.height, fonts },
  );
}
