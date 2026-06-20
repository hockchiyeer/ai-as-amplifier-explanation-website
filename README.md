# AI Amplifier — Zero-Build Standalone Edition

A comprehensive, bilingual (English/Chinese) educational platform demonstrating the concept of "AI as an Amplifier, Multiplier, and Compounder".

This project has been architected to run as a **100% self-sustaining standalone application**. It requires **no build step, no npm install, and no backend server**. It leverages vanilla HTML, JavaScript, and CSS bundled into a single file while maintaining a premium, pixel-perfect layout and animations.

## 🌟 Key Features

*   **Zero-Build Architecture**: Launch the application instantly by opening `index.html` in any web browser. No `node_modules` or dependencies required.
*   **Decoupled Content (content.js)**: All text and translations live in an external `content.js` file, allowing non-developers to edit the website content without touching the core UI engine.
*   **In-Browser CMS**: A built-in "✏️ Edit Content" feature allows users to visually edit, import, and download updated `content.js` files directly from the browser.
*   **Bilingual Interface**: Seamless switching between English and Chinese content.
*   **Educational Slide Showcase**: Explore how AI amplifies outcomes across different domains with interactive slide previews and downloads.

## 📂 Standalone Application Structure

To deploy or share this application, you only need the following files:

```text
/ (Root Directory)
├── index.html          # The complete core application (UI, styles, and logic)
├── content.js          # The externalized content dictionary (English/Chinese)
└── resources/          # Static assets (images, pptx downloads)

AI_Amplifier_Standalone/
├── index.html          # Identical to the root version
├── content.js          # Identical to the root version
└── resources/          # Identical to the root version
```

Both the root directory and the `AI_Amplifier_Standalone/` folder are valid standalone distributions. We provide the `AI_Amplifier_Standalone/` folder so you can simply zip it and send it to users without including repository configuration files like `package.json` or `README.md`.

## 🚀 Getting Started

1. Navigate to the `AI_Amplifier_Standalone` directory (or the root directory where `index.html` resides).
2. Double-click **`index.html`** to open it in your web browser (Chrome, Edge, Safari, Firefox).
3. The application is now running locally.

## ✏️ Editing Content (No Coding Required)

You do not need a development environment to change the text on the website.

1. Open `index.html` in your browser.
2. Click **✏️ Edit Content** in the top right navigation menu.
3. Use the form to change any English or Chinese text.
4. Click **Apply Changes** to preview your edits immediately.
5. Click **Download content.js** to save your new content dictionary.
6. Replace the old `content.js` file in your directory with the newly downloaded one. 

When you refresh `index.html`, your new content will be loaded automatically!

## 📖 Using the Slide Showcase

The "Slides / 幻灯片" section demonstrates practical applications of AI:

*   **Preview**: Opens a full-screen, interactive gallery of the slides. This feature pulls images directly from the local `resources/data/pptx_images/` directory without needing a backend server.
*   **Download**: Prompts a direct download of the `.pptx` file from the local `resources/data/pptx/` directory.

## 🔐 Security & Privacy

Since this is a client-side only application, all data, content edits, and file interactions happen entirely within your local browser. No data is sent to external servers.

## 🛠️ Development

If you'd like to modify the source code (the React components or the styling), you can use the built-in standalone generation script to rebuild the application:

1. Make your changes in `client/src/`.
2. Run the build script:
   ```bash
   npm run build:standalone
   ```
3. This command will:
   - Build a fresh zero-build React bundle via Vite.
   - Extract the latest dictionary from `client/src/lib/i18n.ts` into `content.js`.
   - Copy the newly built `index.html`, `content.js`, and `resources/` into BOTH the root directory and the `AI_Amplifier_Standalone/` distribution folder.