# AI Amplifier — Website

A comprehensive, tri-lingual (English / 中文 / Bahasa Melayu) educational platform demonstrating the concept of "AI as an Amplifier, Multiplier, and Compounder". The project includes a slide-deck showcase with local presentation files that illustrate how a unified AI application framework can be successfully transferred and applied across diverse domains such as software testing, political strategy, and business strategy.

This repository contains a full-stack application built with React, Vite, Express, and Drizzle ORM.

## 🌟 Key Features

*   **Tri-lingual Interface**: Switch instantly between English, 中文 and Bahasa Melayu. Your choice is remembered, can be forced with `?lang=en|zh|ms`, and defaults to your browser language.
*   **Step-by-step Tutorial Layer**: 16 numbered steps with Previous / Next buttons, a full Contents panel, "mark as done" progress saved on the device, and a reading-progress bar.
*   **Reliable Screenshots**: slide images for every step ship with the site (no server-side conversion needed), open in an accessible viewer, and each has a text version.
*   **Original Tips, Examples & Links**: the Vibe Coding "Useful Tip", the real-world tool/app examples (with their GitHub and demo links), the full tool rankings and every tool link from the original EN / 中文 pages are available in all three languages — details in [CONTENT_2026-06-20.md](docs/archive/CONTENT_2026-06-20.md).
*   **Standalone Version**: a double-click-to-open `index.html` (no server needed), generated with `npm run build:standalone` — see the **Development** section below.
*   **Educational Slide Showcase**: Explore how AI amplifies outcomes across different domains. The application provides interactive previews and downloads for multiple demonstration slide decks.
*   **Modern Full-Stack Architecture**: A robust React frontend backed by a fast Express API and type-safe database access using Drizzle ORM.
*   **Responsive Design**: A user interface that works beautifully across all devices.

## 📂 Repository Structure

The project is structured as a monorepo containing both client and server applications, alongside shared utilities and database definitions.

```text
ai-as-amplifier-explanation-website/
├── client/                 # Frontend React + Vite application
│   ├── public/             # Static assets
│   ├── src/                # React components, pages, hooks, and utilities
│   └── test/               # Frontend test suites
├── server/                 # Backend Express server and API routes
│   ├── _core/              # Server configuration and startup
│   └── routers.ts          # API route definitions
├── shared/                 # Shared types, constants, and utilities for both client and server
├── drizzle/                # Database schemas and migration files (Drizzle ORM)
├── resources/              # Static resources and data
│   ├── data/pptx/          # The example slide decks showcasing AI amplification
│   └── slides/             # Slide screenshots for the standalone build (synced from client/public/slides)
├── scripts/                # Development and build utility scripts (incl. build-standalone.mjs)
├── vite.standalone.config.ts # Vite config used only by the standalone build
├── index.html, content.js  # Generated standalone page + editable content (npm run build:standalone)
├── AI_Amplifier_Standalone/ # Generated distribution copy: index.html + content.js + resources/
├── patches/                # Dependency patches
├── archive/                # Unused scripts, tests, assets and source files kept for reference (see archive/README.md)
└── docs/
    └── archive/            # Archived documentation (date-stamped)
        ├── CONTENT_2026-06-20.md         # Detailed content documentation
        ├── EXPANSION_PLAN_2026-06-19.md  # Roadmap and future expansion plans
        └── todo_2026-06-19.md            # Past to-do list
```

## 🛠️ Tech Stack

*   **Frontend**: React, TypeScript, Vite
*   **Backend**: Node.js, Express, TypeScript
*   **Database**: Drizzle ORM
*   **Standalone build**: Vite (single-file output) + esbuild (content extraction)
*   **Testing**: Vitest + jsdom
*   **Package Manager**: pnpm (npm works too — see Installation)

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v20.19 or higher — required by Vite 7, the test suite and the standalone build script)
*   [pnpm](https://pnpm.io/) (recommended) — or npm, which comes with Node.js

### Installation

1.  Clone the repository and navigate into it:
    ```bash
    git clone <repository-url>
    cd ai-as-amplifier-explanation-website
    ```

2.  Install all dependencies:
    ```bash
    pnpm install
    # or, with npm (the flag is required — see Troubleshooting):
    npm install --legacy-peer-deps
    ```

### Running the Application

To start the development server for both the frontend and backend:

```bash
pnpm dev        # or: npm run dev
```

*   The local development server will start (typically bound to `http://localhost:3000`, or the next available port).
*   Open your browser and navigate to the provided URL to view the application.

## 🛠️ Development

If you'd like to modify the source code (the React components or the styling), you can use the built-in standalone generation script to rebuild the application:

1. Make your changes in `client/src/`.
2. Run the build script:
   ```bash
   npm run build:standalone      # `pnpm build:standalone` works too
   ```
3. This command will:
   - Build a fresh zero-build React bundle via Vite (`vite.standalone.config.ts` → one self-contained `index.html`, no server needed).
   - Extract the latest dictionary (EN / 中文 / BM) from `client/src/lib/i18n.ts` into `content.js`.
   - Copy the newly built `index.html`, `content.js`, and `resources/` into BOTH the root directory and the `AI_Amplifier_Standalone/` distribution folder.

Then simply double-click `index.html` (in the root or in `AI_Amplifier_Standalone/`) — it works straight from disk (`file://`), on GitHub Pages, or on any static host.

Notes:
- **Editing wording without rebuilding**: `index.html` loads `content.js` first, and anything defined in `window.AI_AMPLIFIER_CONTENT` overrides the built-in text. Edit the text values in `content.js` and refresh. Re-running the build regenerates `content.js` from `i18n.ts` (overwriting manual edits), so make lasting wording changes in `i18n.ts` / `i18n.ms.ts`.
- **Slides and downloads**: the standalone page reads slide screenshots from `resources/slides/` (synced from `client/public/slides/` by the build) and PPTX downloads from `resources/data/pptx/`.
- **Folder size**: `resources/data/pptx_images/` (generated images used only by the Express server) is skipped in `AI_Amplifier_Standalone/`; pass `--full` (`npm run build:standalone -- --full`) to include it.
- The normal full-stack app (`npm run dev` / `npm run build`, or the `pnpm` equivalents) is unchanged.

## 📖 Using the Slide Showcase

The "Slides / 幻灯片" section is a core feature of the platform, demonstrating practical applications of AI:

1.  Navigate to the Slides section via the top navigation bar.
2.  You can **Preview** the slides (which opens them in a new tab) or **Download** them directly to your machine.
3.  Alternatively, to view the slides without running the application, navigate to `resources/data/pptx/` and open the `.pptx` files using your preferred presentation software.

## 🌏 Adding or Editing a Language

1.  Add the code to `Language` / `LANGUAGES` in `client/src/lib/i18n.ts`.
2.  Create `i18n.<code>.ts` copying `i18n.ms.ts` and translate every value (keep keys, icons, ranks, scores, filenames and link URLs as they are; only link labels are translated).
3.  Add the interface strings for the new language to `i18n.ui.ts` and a short label in `Navigation.tsx` (`SHORT_LABEL`, `HTML_LANG`).
4.  Run `npx vitest run client/test/i18n-parity.spec.tsx` — it fails if any key, list length or `{placeholder}` differs from English. Also run `client/test/original-content.spec.tsx`, which fails if a link URL or an original tip/example is missing in any language.

Note: the `.pptx` decks and their slide images are in their original languages (Chinese / English). The site says so next to the slides; translated decks would need new decks and a rerun of the slide-asset script.

## ♿ Accessibility Features

Skip link and `<main>` landmark · labelled sections and a single `h1` · `<html lang>` follows the chosen language (slide titles carry their own `lang`) · keyboard-operable navigation, language switcher, contents drawer and slide viewer (focus trap, Esc, ← → Home End, swipe) · `aria-expanded` / `aria-pressed` / `aria-current` states · alt text and a text version for every slide · external links announce "opens in a new tab" · visible focus rings · pinch-zoom enabled · `prefers-reduced-motion` respected · anchors clear the fixed header.

## 🧪 Tests

Install the dependencies first (see Installation — `jsdom` is listed in `devDependencies`), then:

```bash
npx vitest run       # or: npm test
```

*   `i18n-parity.spec.tsx` — translation completeness (keys, list lengths, placeholders).
*   `tutorial-interactions.spec.tsx` — language switching, steps, progress, viewer and a11y smoke tests in all three languages.
*   `original-content.spec.tsx` — the original page's tips, real-world examples, tool links, full ranking names, original hover/background styling and `RichText` safety, in every language.
*   `nav-language-switcher.spec.tsx` — the EN / 中文 / BM switcher always renders all three buttons unclipped.
*   `standalone.spec.tsx` and `standalone-build.spec.tsx` — standalone asset URLs, the `content.js` override and the generated `content.js`.
*   `pptshowcase.spec.tsx` — the slide deck cards.

The suite is expected to pass in full; the stale `neural-sections` test that imported missing pages is kept in `archive/tests/`.

## 🔧 Development Guide

*   **Tri-lingual Content**: `client/src/lib/i18n.ts` holds the original English and Chinese content; `i18n.ms.ts` holds Bahasa Melayu (same keys as English); `i18n.ui.ts` holds the interface strings (step labels, viewer controls, ARIA text) for all three languages.
*   **Slide Showcase Component**: the deck cards live in `client/src/components/PptShowcase.tsx`; the shared viewer is `SlideViewer.tsx`; step controls and the "See it in the slides" strips are in `StepKit.tsx`.
*   **Slide screenshots**: `client/public/slides/<deck>/slide-NN.png` plus `client/src/lib/slides-data.json` (slide titles/text). Regenerate both with `python3 scripts/build_slide_assets.py` (needs `pip install python-pptx`) after changing a deck. Which slides illustrate which step is set in `SLIDE_REFS` in `client/src/lib/slides.ts`.
*   **Missing translation keys**: in development, open `http://localhost:3000/?i18nDebug=1` to show a small "i18n (N)" panel that lists any i18n paths that fell back to English (it is hidden by default and never included in production or standalone builds).
*   **Links & formatting inside content**: any string in the content files can use `[label](https://…)` and `**bold**`, rendered safely by `client/src/components/RichText.tsx`. Translate the label, keep the URL identical in every language — see "Inline links in content strings" in [CONTENT_2026-06-20.md](docs/archive/CONTENT_2026-06-20.md).
*   **Static file URLs**: `client/src/lib/assets.ts` decides where slides and PPTX files are loaded from (server routes in the normal app, `./resources/…` in the standalone build).
*   **Database Schema**: Update your Drizzle schema in the `drizzle/` directory and use the provided `db:push` script (`pnpm db:push` / `npm run db:push`) to generate and run migrations.

### Troubleshooting

*   **Port in Use**: The dev script automatically attempts to find an available port starting from 3000 up to 3019. Check if any background services are blocking these ports.
*   **TypeScript Errors**: Ensure the dependencies are installed (see Installation) so that all necessary `@types/*` packages are available to your IDE.
*   **npm reports `ERESOLVE` (peer dependency conflict)**: the project uses Vite 7 and React 19, while `@builder.io/vite-plugin-jsx-loc` expects Vite 4/5 and `@testing-library/react@14` expects React 18. Install with `npm install --legacy-peer-deps`; the same flag is needed for `npm audit fix --legacy-peer-deps`. pnpm does not need it.
*   **`npm audit` lists vulnerabilities**: they are mainly in development tooling (Vite, esbuild, drizzle-kit) and the project is meant for local or protected environments (see Security & Privacy), so no action is required to run it. If you want the safe updates, run `npm audit fix --legacy-peer-deps`.
*   **Do not run `npm audit fix --force`**: it applies breaking major-version changes and removes packages (in one reported run: vitest, drizzle-orm, drizzle-kit, streamdown and `@tailwindcss/typography` were changed and 160 packages removed), which can break the dev server, the tests and the standalone build. If you already ran it, restore `package.json` and `package-lock.json` from git or a fresh copy of the download, delete `node_modules`, and run the install again.
*   **`npm warn allow-scripts … esbuild`** after installing: informational — npm skipped the install scripts of a few packages and this is usually harmless. Only if the dev server or a build then fails with an esbuild error, run `npm approve-scripts` as the message suggests and reinstall.
*   **Fonts look different offline**: the page loads Inter / Playfair Display from Google Fonts; opened offline (e.g. the standalone `index.html`) it falls back to system fonts. Content is unaffected.
*   **Slide Previewing**: Browsers generally do not render `.pptx` files natively. Use the "Download" option or upload the file to a cloud viewer (like Google Drive) for an optimal experience.

## 🔐 Security & Privacy

This demonstration is intended for local or protected environments. The slide decks under `resources/data/pptx/` are served statically. If deployed to a public environment, ensure proper authentication and authorization mechanisms are implemented before exposing sensitive routes or files.

## 📞 Contact

*   **Author**: Er Hock Chiye — Source author of content; repository maintained for demonstration and experimentation.