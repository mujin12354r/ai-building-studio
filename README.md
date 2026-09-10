# BuildSpace — German Housing Design Studio

BuildSpace is a mobile-friendly housing/interior simulator based on modern German residential planning conventions. It supports rooms, levels, furniture placement, measurements, materials, budgets and **real user-imported furniture assets**.

## Real furniture assets

The built-in geometric catalog is only a fallback. For a Sims-like visual result, import real assets as **GLB/GLTF 3D models** or transparent PNG/WebP furniture renders.

### Recommended free CC0 source
Kenney Furniture Kit: https://kenney.nl/assets/furniture-kit

It contains 140 furniture models and is CC0. An optional convenience GLB package is also available from Eclair Assets on itch.io.

### Add models
1. Download the Furniture Kit / GLB package.
2. Unzip it on your phone or computer.
3. Open BuildSpace.
4. Open **Assets → Real Assets**.
5. Tap **Echte Möbel importieren**.
6. Select multiple `.glb` files.
7. The files are stored locally in the browser's IndexedDB.
8. Tap any model in **Meine echten Assets** to place it in the room.

GLB is preferred because textures can be packaged into one file. A `.gltf` that depends on separate texture files may not load correctly in a browser file picker.

### PNG/WebP assets
Transparent furniture renders can also be imported. These are often faster on mobile than 3D models. Use top/angled/isometric renders with transparent backgrounds.

## Project structure

- `index.html` — application shell and model-viewer loader
- `styles.css` — interface and responsive/mobile styling
- `app.js` — editor, asset library and controls
- `catalog.js` — German housing/design catalog
- `sim.js` — simulation/project logic
- `storage.js` — project save/export
- `asset-store.js` — persistent real asset library using IndexedDB
- `sw.js` — offline cache
- `manifest.webmanifest` — PWA metadata
- `favicon.svg` — icon

## GitHub Pages

```bash
git add .
git commit -m "BuildSpace real furniture asset system"
git push origin main
```

The app uses the Google `<model-viewer>` web component from a CDN for GLB rendering. Therefore the first load needs internet access. Imported models themselves remain in the browser's local IndexedDB.
