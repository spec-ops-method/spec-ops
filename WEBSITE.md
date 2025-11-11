# Website Asset Generation

This document explains the tooling and workflow for generating raster image assets for the SpecOps website.

## Overview

The SpecOps website (`docs/index.html`) uses high-quality SVG source files for branding and social media assets. To maximize compatibility across browsers, social platforms, and devices, we generate PNG raster versions using a Node.js build script.

## Source Files

The following SVG files serve as the source of truth for all website graphics:

- `docs/favicon.svg` — Primary favicon with gradient branding
- `docs/safari-pinned-tab.svg` — Monochrome icon for Safari pinned tabs
- `docs/og-image.svg` — Social media share card (1200×630)

## Generated Assets

Running the build script produces the following PNG files:

| File | Dimensions | Purpose |
|------|------------|---------|
| `docs/favicon-16.png` | 16×16 | Browser tab icon (legacy) |
| `docs/favicon-32.png` | 32×32 | Browser tab icon (retina) |
| `docs/icon-180.png` | 180×180 | Apple touch icon (iOS home screen) |
| `docs/og-image.png` | 1200×630 | Open Graph / Twitter Card image |

## Prerequisites

- Node.js 16+ (includes npm)
- The `sharp` library (installed automatically via `npm install`)

## Building Assets

### First-time setup

```bash
npm install
```

This installs the `sharp` image processing library as a dev dependency.

### Generate PNG assets

```bash
npm run build:assets
```

This executes `scripts/gen-assets.js`, which:
1. Reads SVG source files from `docs/`
2. Rasterizes them at high density for crisp output
3. Applies maximum PNG compression (level 9)
4. Writes output files to `docs/`

**When to regenerate:**
- After editing any SVG source file
- When deploying the website to production
- Before committing changes that affect branding

## The Build Script

`scripts/gen-assets.js` uses the [sharp](https://sharp.pixelplumbing.com/) library to convert SVGs to PNGs. Key implementation details:

- **High-density rendering** — Uses 512 DPI for small icons to prevent blurriness
- **Progressive optimization** — Maximum compression for smaller file sizes
- **Automated directory creation** — Creates output directories if missing
- **Error handling** — Exits with code 1 on failure for CI/CD compatibility

## Integration with HTML

The generated PNG assets are referenced in `docs/index.html`:

```html
<!-- Multi-format favicon stack -->
<link rel="icon" type="image/svg+xml" href="./favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="./favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="./favicon-16.png">

<!-- iOS home screen icon -->
<link rel="apple-touch-icon" sizes="180x180" href="./icon-180.png">

<!-- Social media preview -->
<meta property="og:image" content="./og-image.png">
<meta name="twitter:image" content="./og-image.png">
```

This approach provides:
- Modern browsers get crisp SVG favicons
- Legacy browsers fall back to PNG
- Social platforms always receive optimized raster images
- iOS devices get proper home screen icons

## Troubleshooting

**"Cannot find module 'sharp'"**
Run `npm install` to install dependencies.

**"Asset generation failed: ENOENT"**
Ensure all SVG source files exist in `docs/` before running the build script.

**Output images look blurry**
Check that the density parameter in `gen-assets.js` is set sufficiently high (currently 512 for favicons, 144 for OG image).

## Future Enhancements

Potential improvements to the asset pipeline:

- **Dark mode variant** — Generate alternate OG image for `prefers-color-scheme: dark`
- **ICO bundle** — Create multi-resolution `.ico` file for maximum legacy support
- **Automated optimization** — Add `oxipng` or `pngquant` for further size reduction
- **CI integration** — Run asset generation automatically on pre-commit hooks
- **PWA manifest** — Generate `manifest.json` with icon references for installability

## Related Documentation

- [README.md](README.md) — Project overview and philosophy
- [CONTRIBUTING.md](CONTRIBUTING.md) — Contribution guidelines
- [package.json](package.json) — Build scripts and dependencies
