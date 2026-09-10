# BuildSpace — German Housing Design Studio v2

Static, mobile-first housing/interior design simulator. No npm or backend required.

## Run
Use GitHub Pages or any HTTP server. Do not open index.html with file://.

Codespaces:
```bash
python3 -m http.server 8080 --bind 0.0.0.0
```

## Deploy
```bash
git add .
git commit -m "BuildSpace German Housing Design Studio v2"
git push origin main
```

## Product scope
- German/European modern housing templates: Stadtwohnung, Einfamilienhaus, Altbauwohnung, Neubau-Penthouse, Kompaktwohnung, Reihenhaus.
- 4 building levels and room templates.
- Large design asset catalog covering seating, tables, beds, storage, kitchen, bathroom, lighting, decor, appliances, architecture, outdoor and office.
- Drag/select, direct position/size/rotation/scale controls, duplicate/delete, material and design variant controls.
- Mobile asset drawer and inspector.
- Local autosave, JSON project export, offline/PWA shell.
- Offline rule-based room concept generator.

This is an interactive design simulator, not a certified architectural CAD/BIM system. Dimensions are design-planning units, not construction documentation.
