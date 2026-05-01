/**
 * Prepends the GitHub Pages basePath to image src strings.
 * In development (basePath=""), returns the path unchanged.
 * In GitHub Pages build (GITHUB_PAGES=true, basePath="/clarence-website"),
 * Next.js static export does NOT auto-prefix unoptimized image src values,
 * so we handle it manually here.
 */
export function img(src: string): string {
  const base =
    process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!src.startsWith("/")) return src; // already relative or absolute URL
  return `${base}${src}`;
}
