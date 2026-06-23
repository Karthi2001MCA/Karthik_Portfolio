// Local static assets need the basePath prefix when the site is served from a
// project subpath (GitHub Pages serves this repo at /Karthik_Portfolio).
// next/image with `unoptimized: true` (required for static export) does NOT
// prepend basePath, and plain <img> never does — so we add it explicitly.
const BASE_PATH = process.env.NODE_ENV === "production" ? "/Karthik_Portfolio" : "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
