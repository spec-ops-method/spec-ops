/* Generate raster PNGs from SVG sources for maximum compatibility */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function ensureDir(p) {
  await fs.promises.mkdir(path.dirname(p), { recursive: true });
}

async function genFavicons() {
  const src = path.resolve(__dirname, '..', 'docs', 'favicon.svg');
  const out16 = path.resolve(__dirname, '..', 'docs', 'favicon-16.png');
  const out32 = path.resolve(__dirname, '..', 'docs', 'favicon-32.png');
  const out180 = path.resolve(__dirname, '..', 'docs', 'icon-180.png');

  await ensureDir(out16);
  const density = 512; // high density for crisp small icons
  await sharp(src, { density }).resize(16, 16).png({ compressionLevel: 9 }).toFile(out16);
  await sharp(src, { density }).resize(32, 32).png({ compressionLevel: 9 }).toFile(out32);
  await sharp(src, { density }).resize(180, 180).png({ compressionLevel: 9 }).toFile(out180);
}

async function genOgImage() {
  const src = path.resolve(__dirname, '..', 'docs', 'og-image.svg');
  const out = path.resolve(__dirname, '..', 'docs', 'og-image.png');
  await ensureDir(out);
  await sharp(src, { density: 144 }).resize(1200, 630).png({ compressionLevel: 9 }).toFile(out);
}

(async function main(){
  try {
    await genFavicons();
    await genOgImage();
    console.log('Generated: docs/favicon-16.png, docs/favicon-32.png, docs/icon-180.png, docs/og-image.png');
  } catch (err) {
    console.error('Asset generation failed:', err);
    process.exit(1);
  }
})();
