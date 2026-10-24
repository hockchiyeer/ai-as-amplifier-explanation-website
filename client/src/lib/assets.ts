/**
 * Where static files live.
 *
 * - Normal app (`npm run dev` / `npm run build`): slides come from `client/public/slides` and PPTX files from the
 *   Express route `/pptx/<file>` — unchanged.
 * - Standalone build (`npm run build:standalone`, `VITE_STANDALONE=true`): the page must work from a double-click
 *   (file://), from a GitHub Pages sub-path, or from any static host, so everything is resolved *relative to
 *   index.html* under `./resources/`.
 *
 * The flag is read lazily (not at import time) so tests can toggle it with `vi.stubEnv`.
 */
export function isStandalone(): boolean {
  return String(import.meta.env?.VITE_STANDALONE ?? '') === 'true';
}

function base(): string {
  return String(import.meta.env?.BASE_URL ?? '/').replace(/\/?$/, '/');
}

/** Folder (with trailing slash) that holds `<deck>/slide-NN.png`. */
export function slidesBase(): string {
  return isStandalone() ? `${base()}resources/slides/` : `${base()}slides/`;
}

/** URL of a PPTX deck for downloading. */
export function pptxUrl(filename: string): string {
  return isStandalone() ? `${base()}resources/data/pptx/${encodeURIComponent(filename)}` : `/pptx/${filename}`;
}
