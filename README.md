AI Amplifier — Website
======================

A small educational website demonstrating "AI as an Amplifier, Multiplier, and Compounder." The project also includes a bilingual (English/Chinese) slide-deck showcase with three local PPTX files that illustrate how one AI application framework can transfer across software testing, political strategy, and business strategy.

This README is written for both non-technical readers (quick overview and what you can do) and technical users (how to run, develop, and extend).

---

Table of contents
- Quick overview (for laymen)
- What you'll find in the repo (brief)
- How to browse the slide decks (simple)
- Developer guide (run, build, test)
- Implementation notes (where things live)
- Security & privacy
- Next steps / suggestions

---

Quick overview (Laymen)

- Purpose: Explore how AI amplifies or multiplies outcomes across domains. The site explains the core strategic ideas and provides three example slide decks showing the same AI application pattern applied in different areas.
- Main interactive feature: "Slides / 幻灯片" section on the homepage — provides Preview and Download for three PPTX files included in the repository.
- No complex setup needed to view the slides if you just want to open them locally — you can open the files in the `resources/data/pptx` folder using PowerPoint or another presentation app.

What you'll find in the repo (short)

- `client/` — React + Vite UI source code. The UI is bilingual (English/Chinese) via an `i18n` file.
- `server/` — small Express-powered dev server and helpers. The dev server also proxies storage and OAuth helpers used by the app.
- `resources/data/pptx/` — the 3 PPTX example slides included for the showcase.
- `README.md` — this document.

How to quickly view the slides (simplest)

1. Open the local folder `resources/data/pptx` in Windows Explorer.
2. Double-click the PPTX you want to view; it will open in PowerPoint (or any app registered to open .pptx).

How to run the website (technical)

Prerequisites
- Node.js (v18+ recommended)
- pnpm (recommended as package manager, but npm or yarn can also work)

Install and run (development)

Open PowerShell in the repository root and run:

```powershell
pnpm install
pnpm dev
```

- `pnpm dev` starts the server in development mode (Vite + Express middleware). The server will print the URL it binds to (default http://localhost:3000 or an alternate port if 3000 is busy).
- Open the URL in your browser. Use the top navigation to switch language and click "Slides" / "幻灯片" to find the slide deck showcase.

How the Slides section works
- The three PPTX files stored under `resources/data/pptx` are served by the server at `/pptx/<filename>` (e.g. `/pptx/AI_As_Amplifier_...35_slides.pptx`).
- The site displays a small bilingual card for each deck with Preview (opens the file in a new tab) and Download (triggers a browser download).
- Note: browsers will typically download `.pptx` files; preview behavior depends on browser plugins or online viewers.

Developer reference (files & locations)
- client/src/lib/i18n.ts — bilingual text for the site, includes `pptShowcase` entries.
- client/src/components/PptShowcase.tsx — the new component that lists and links to the PPTX files.
- client/src/pages/Home.tsx — the main home page which now includes the PptShowcase section.
- client/src/components/Navigation.tsx — navigation entries; includes the Slides menu item.
- server/_core/index.ts — dev server startup file. Static route added: `app.use('/pptx', express.static(...resources/data/pptx...))`.
- resources/data/pptx — the three PPTX files included in the project.

Common troubleshooting
- "Server won't start / port is busy": The dev script attempts to use port 3000 and will pick next available port in range 3000..3019. Check existing services on those ports.
- "TypeScript errors in IDE": This repo uses TypeScript and expects node/react type definitions; run `pnpm install` to ensure devDependencies like `@types/node` and `@types/react` are present for your editor.
- "Preview doesn't display in browser": Browsers generally don't render .pptx. Use the Download button and open the file locally or upload it to a drive/viewer (Google Drive or OneDrive) to see an in-browser viewer.

Security & privacy
- The `/pptx` route serves local files from `resources/data/pptx` to anyone who can access the server—this demo is intended for local or protected environments. If you need access control, the server should be updated to require authentication or to issue signed URLs.

Next steps / optional improvements
- Convert PPTX to image thumbnails at build-time and display slides inline (fast, offline-friendly preview).
- Upload PPTX to a cloud drive and embed Office/Drive viewers for inline embed.
- Add per-file thumbnails and short speaker notes metadata.

Contact / author
- Er Hock Chiye — source author of content; repository maintained for demonstration and experimentation.

---

If you'd like, I can now:
- Add in-browser thumbnails by converting each PPTX to images and embedding them (recommended where you want an immediate preview), or
- Add an authenticated route before exposing `/pptx` publicly.

Tell me which improvement you'd like me to do next and I'll proceed. If you prefer to test locally first, start the dev server per the commands above and open the Slides section in your browser.