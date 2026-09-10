# BuildSpace Housing Simulation Studio

A production-style, dependency-free 2.5D residential planning front end designed for GitHub Pages and mobile-first editing.

## What is included

- Multi-file modular architecture: HTML + CSS + ES modules.
- 2.5D room/floor scene with levels Ground/1/2/3.
- Room templates for living, bedroom, kitchen, bathroom, office and dining.
- 22-item furniture catalog with categories, prices and style variants.
- Click-to-add and drag-from-catalog placement.
- Object selection, precise X/Y/width/height, rotation, scale, layer, duplicate and delete.
- Undo/redo history and keyboard shortcuts.
- Local autosave with JSON project export/import.
- SVG floor-plan export.
- Budget and project notes.
- Offline-ready service worker and installable web-app manifest.
- Responsive phone UI with bottom navigation, overlay catalog and inspector.
- Built-in offline concept generator. A secure server endpoint can replace this later for a real LLM.

## Run in Codespaces

No npm install is required.

```bash
python3 -m http.server 8080 --bind 0.0.0.0
```

Then open the forwarded port in the Codespaces browser.

Do not use `file://` because ES modules and the service worker need HTTP(S).

## Deploy to GitHub Pages

Push all files to the repository's main branch:

```bash
git add .
git commit -m "BuildSpace Housing Simulation Studio"
git push origin main
```

In GitHub: Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

## Project structure

- `index.html` — application shell.
- `app.js` — UI state, rendering, interaction and export logic.
- `catalog.js` — furniture, room and building data.
- `sim.js` — simulation/domain operations.
- `storage.js` — local persistence and project files.
- `styles.css` — responsive product UI.
- `sw.js` — offline cache.
- `manifest.webmanifest` — installable PWA metadata.

## Important production boundary

This is a production-style front end, not a complete SaaS backend. For real customers, add authentication, cloud projects, database/storage, collaboration, server-side AI, permissions, audit logging, billing, analytics, and real 3D/asset pipelines. Never put a private AI API key in `app.js`.
