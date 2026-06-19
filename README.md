# AI Amplifier — Website

A comprehensive, bilingual (English/Chinese) educational platform demonstrating the concept of "AI as an Amplifier, Multiplier, and Compounder." The project includes a slide-deck showcase with local presentation files that illustrate how a unified AI application framework can be successfully transferred and applied across diverse domains such as software testing, political strategy, and business strategy.

This repository contains a full-stack application built with React, Vite, Express, and Drizzle ORM.

## 🌟 Key Features

*   **Bilingual Interface**: Seamless switching between English and Chinese content.
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
│   └── data/pptx/          # The example slide decks showcasing AI amplification
├── scripts/                # Development and build utility scripts
├── patches/                # Dependency patches
├── CONTENT.md              # Detailed content documentation
└── EXPANSION_PLAN.md       # Roadmap and future expansion plans
```

## 🛠️ Tech Stack

*   **Frontend**: React, TypeScript, Vite
*   **Backend**: Node.js, Express, TypeScript
*   **Database**: Drizzle ORM
*   **Testing**: Vitest
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

### Running the Application

To start the development server for both the frontend and backend:

```bash
pnpm dev
```

*   The local development server will start (typically bound to `http://localhost:3000`, or the next available port).
*   Open your browser and navigate to the provided URL to view the application.

## 📖 Using the Slide Showcase

The "Slides / 幻灯片" section is a core feature of the platform, demonstrating practical applications of AI:

1.  Navigate to the Slides section via the top navigation bar.
2.  You can **Preview** the slides (which opens them in a new tab) or **Download** them directly to your machine.
3.  Alternatively, to view the slides without running the application, navigate to `resources/data/pptx/` and open the `.pptx` files using your preferred presentation software.

## 🔧 Development Guide

*   **Bilingual Content**: Text and translations are managed within the `client/src/lib/i18n.ts` file.
*   **Slide Showcase Component**: Modifications to the presentation viewer can be made in `client/src/components/PptShowcase.tsx`.
*   **Database Schema**: Update your Drizzle schema in the `drizzle/` directory and use the provided pnpm scripts to generate and run migrations.

### Troubleshooting

*   **Port in Use**: The dev script automatically attempts to find an available port starting from 3000 up to 3019. Check if any background services are blocking these ports.
*   **TypeScript Errors**: Ensure you have run `pnpm install` so that all necessary `@types/*` packages are available to your IDE.
*   **Slide Previewing**: Browsers generally do not render `.pptx` files natively. Use the "Download" option or upload the file to a cloud viewer (like Google Drive) for an optimal experience.

## 🔐 Security & Privacy

This demonstration is intended for local or protected environments. The slide decks under `resources/data/pptx/` are served statically. If deployed to a public environment, ensure proper authentication and authorization mechanisms are implemented before exposing sensitive routes or files.

## 📞 Contact

*   **Author**: Er Hock Chiye — Source author of content; repository maintained for demonstration and experimentation.