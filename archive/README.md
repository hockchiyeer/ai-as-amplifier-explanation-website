# Archive

Files that are **not used by the website or by `npm run build:standalone`** but are kept for reference. Nothing here is
compiled, tested or served: `tsconfig.json`, `vitest.config.ts` and the Vite configs only look at `client/src`, `client/test`,
`shared` and `server`.

**Naming convention:** single files are `<name>_<YYYY-MM-DD>.<ext>` where the date is the file's last-modified date
(same as `docs/archive/`). Groups of files that must keep their relative paths are kept in one folder named
`<name>_<YYYY-MM-DD>` using the date they were archived.

| Archived to | Original location | Why it was archived |
|---|---|---|
| `scripts/find_casts_2026-06-20.cjs`, `find_t_any_2026-06-20.cjs`, `replace_t_any_2026-06-20.cjs` | `scripts/` | One-off helpers used to find/replace `(t as any)` casts. Their `find:t-any` / `find-casts` npm scripts were removed from `package.json`. |
| `scripts/test_export_2026-06-20.py` | project root | Windows-only PowerPoint COM exporter; superseded by `scripts/build_slide_assets.py`. |
| `config/template_2026-06-20.json` | project root | Scaffold manifest of the original project template; not read by anything. |
| `tests/neural-sections_2026-06-20.spec.tsx` | `client/test/` | Always failed: it imports `src/pages/neuralNetworkLimitations/*`, which are not in the project. |
| `public/neural-assets_2026-06-20/` | `client/public/neural-assets/` | Two SVGs used by those missing pages; not referenced anywhere. |
| `client-src_2026-10-24/` | `client/src/` | 62 modules that the app never imports: 12 template leftovers (`DashboardLayout`, `AIChatBox`, `ManusDialog`, `Map`, `ComponentShowcase`, `NotFound`, `useAuth`, `useComposition`, `useMobile`, `usePersistFn`, `i18n-types`, …) and 50 unused shadcn/ui components. Only `button`, `sonner` and `tooltip` remain in `components/ui/`. |

**Restore** any of it by moving it back to the original location, e.g. all of the source files:
`cp -r archive/client-src_2026-10-24/* client/src/` (then run `npx tsc --noEmit`). Other shadcn/ui components can also be re-added
with `npx shadcn add <name>`.

**Deleted rather than archived** (exact duplicates or generated files): `scripts/find_t_any.js` (identical to the `.cjs` copy
and broken in an ESM package), `resources/data/pptx_images/test/` (35 images, byte-identical to the 35-slide deck folder),
`.manus-logs/` (dev-server log output), and two empty `.gitkeep` files.
