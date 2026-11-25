import type { NextConfig } from "next";

/**
 * Static site: `pnpm build` writes plain HTML, CSS and JS to `out/`, ready
 * for any static host. `trailingSlash` makes every page an `index.html`
 * inside its own folder, which simple hosts serve without rewrites.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
