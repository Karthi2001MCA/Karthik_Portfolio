import type { NextConfig } from "next";

/**
 * Static-export config for GitHub Pages.
 * The site is served from a project subpath: https://<user>.github.io/Karthik_Portfolio/
 * so basePath/assetPrefix must point at that subdirectory.
 */
const repo = "Karthik_Portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // emit a fully static site into ./out
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true, // /projects/x/ -> projects/x/index.html (Pages-friendly)
  images: { unoptimized: true }, // next/image has no optimizer on static hosting
};

export default nextConfig;
