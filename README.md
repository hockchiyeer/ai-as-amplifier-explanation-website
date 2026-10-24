# AI Amplifier — Website

A comprehensive, trilingual (English, Chinese, and Bahasa Melayu — EN / ZH / BM) educational platform demonstrating the concept of "AI as an Amplifier, Multiplier, and Compounder". The project includes 15 step-by-step curriculum modules, real-world domain examples, practical tips, and an authentic slide-deck showcase illustrating how a unified AI application framework transfers across software testing, political strategy, and business strategy.

This repository supports both a full-stack deployment (React, Vite, Express, and Drizzle ORM) and a standalone static bundle for serverless hosting.

> **Live Application**: The website built from this repository can be accessed at [https://ai.studio/apps/f4e1e03a-4a8a-4a8f-a961-cf64f68b4993](https://ai.studio/apps/f4e1e03a-4a8a-4a8f-a961-cf64f68b4993).

## 🌟 Key Features

*   **Trilingual Interface**: Full localization across English (EN), Simplified Chinese (ZH), and Bahasa Melayu (BM) with an instant language switcher across all views.
*   **15 Guided Curriculum Modules**: Step-by-step exploration covering the Three Effects (Amplifier, Multiplier, Compounder), Mirror Principle, AI Paradigms, Case Studies, Prompting Guides, Vibe Coding, AI Moats, and Strategic Insights.
*   **Practical Tips & Real-World Examples**: Concrete enterprise scenarios, operational checklists, and domain transfer patterns.
*   **Interactive Slide Showcase & Evidence**: In-app previews, slide-by-slide evidence viewer, and direct downloads for presentation decks (`.pptx`).
*   **Dynamic Visual Experience**: Domain-specific accent colors, interactive hover state transitions, and responsive mobile-first layout.
*   **Dual Build Modes**: Run as a full-stack Express + Vite application or build a standalone static site (`dist-standalone/`) ready for GitHub Pages or CDN hosting.

## 📂 Repository Structure

The project is structured as a monorepo containing both client and server applications, alongside shared utilities and database definitions.

```text
ai-as-amplifier-explanation-website/
├── client/                 # Frontend React + Vite application
│   ├── public/             # Static assets (fonts, icons, slide copies)
│   ├── src/                # React components, pages, hooks, contexts, and i18n
│   └── test/               # Frontend test suites
├── server/                 # Backend Express server and API routes
│   ├── _core/              # Server configuration and startup
│   └── routers.ts          # API route definitions
├── shared/                 # Shared types, constants, and utilities for client and server
├── drizzle/                # Database schemas and migration files (Drizzle ORM)
├── resources/              # Static presentations and image assets
│   └── data/
│       ├── pptx/           # Original presentation slide decks (.pptx)
│       └── pptx_images/    # Rendered slide preview images for web viewing
├── scripts/                # Build and maintenance utility scripts
├── dist-standalone/        # Generated standalone static distribution (optional build)
└── docs/                   # Project documentation and specifications
    └── archive/            # Archived planning, content specifications, and todo logs
        ├── CONTENT_2026-06-20.md # Detailed curriculum content documentation
        ├── EXPANSION_PLAN_2026-06-19.md # Roadmap and future expansion plans
        └── todo_2026-06-19.md  # Historical task tracking and planning notes
```

## 🛠️ Tech Stack

*   **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, Radix UI primitives, Lucide Icons, Framer Motion
*   **Backend**: Node.js, Express, TypeScript, Drizzle ORM, tRPC
*   **Testing & Quality**: Vitest, TypeScript (`tsc --noEmit`), Prettier
*   **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   [pnpm](https://pnpm.io/) (Recommended package manager)

### Installation

1.  Clone the repository and navigate into it:
    ```bash
    git clone <repository-url>
    cd ai-as-amplifier-explanation-website
    ```

2.  Install all dependencies:
    ```bash
    pnpm install
    ```

### Available Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Start development server with hot-reloading (default port 3000) |
| `pnpm build` | Compile full-stack production build (Vite client + Express server in `dist/`) |
| `pnpm build:standalone` | Generate self-contained static site in `dist-standalone/` for GitHub Pages / CDN |
| `pnpm start` | Run the compiled full-stack server from `dist/` |
| `pnpm test` | Run test suites using Vitest |
| `pnpm check` / `pnpm lint` | Typecheck the entire codebase with `tsc --noEmit` |
| `pnpm format` | Automatically format code with Prettier |
| `pnpm db:push` | Generate and apply Drizzle database migrations |

## 📖 Using the Slide Showcase

The "Slides / 幻灯片 / Slaid" section demonstrates practical applications of AI across multiple domains:

1.  Navigate to the Slides section via the top navigation bar.
2.  Use **Preview** to inspect high-resolution slide images directly in the browser.
3.  Use **Download** to obtain original `.pptx` files for presentation software.
4.  Local slide files can also be accessed directly in `resources/data/pptx/`.

## 🔧 Development Guide

*   **Trilingual Localization**: Text and translations are maintained in `client/src/lib/i18n.ts` supporting `en`, `zh`, and `bm`.
*   **Slide Showcase Component**: Interactive slide viewers and modals are located in `client/src/components/PptShowcase.tsx`.
*   **Visual Themes & Hover Effects**: Accent colors and hover effects are managed through Tailwind utility classes and CSS variables in `client/src/index.css`.
*   **Database Schema**: Define and modify models in `drizzle/schema.ts` and apply updates with `pnpm db:push`.

### Troubleshooting

*   **Port in Use**: The dev script automatically scans ports from 3000 up to 3019. If port 3000 is occupied, it binds to the next open port.
*   **Slide Previewing**: Browsers do not render native `.pptx` binaries directly; use the in-app slide image previews or download the file.

## 🔐 Security & Privacy

This demonstration is intended for local or protected environments. Presentation files under `resources/data/pptx/` are served statically. If deployed to a public environment, ensure proper authentication and authorization mechanisms are implemented before exposing sensitive routes or data.

## 📞 Contact

*   **Author**: Er Hock Chiye — Source author of content; repository maintained for demonstration and experimentation.