/**
 * Builds site logo assets from the official white-on-transparent master.
 *  - public/logo-white.png : as supplied (for dark backgrounds)
 *  - public/logo-dark.png  : blue horse badge kept, wordmark recoloured to ink
 * Run: node scripts/build-logo.mjs
 */
import sharp from 'sharp';

const SRC = 'brand/renson-electronics-logo-white.avif';
const INK = { r: 0x13, g: 0x15, b: 0x19 };

const master = sharp(SRC).png();
const { width, height } = await master.metadata();
const { data, info } = await master.raw().toBuffer({ resolveWithObject: true });

// Find the horizontal extent of the blue badge (blue channel clearly above red).
let badgeEnd = 0;
for (let x = 0; x < info.width; x++) {
  let blue = 0;
  for (let y = 0; y < info.height; y += 4) {
    const i = (y * info.width + x) * info.channels;
    const [r, b, a] = [data[i], data[i + 2], data[i + 3] ?? 255];
    if (a > 120 && b > r + 40 && b > 90) blue++;
  }
  if (blue > 6) badgeEnd = x;
}
const split = Math.min(info.width, badgeEnd + 24);
console.log(`image ${width}x${height} — badge ends at x=${badgeEnd}, split at ${split}`);

// Trim transparent margins consistently, then export the white master.
await sharp(SRC).png().trim({ threshold: 8 }).resize({ width: 1400 })
  .png({ compressionLevel: 9 }).toFile('public/logo-white.png');

// Dark variant: badge untouched, wordmark alpha re-tinted to ink.
const badge = await sharp(SRC).png()
  .extract({ left: 0, top: 0, width: split, height: info.height }).toBuffer();

const wordAlpha = await sharp(SRC).png()
  .extract({ left: split, top: 0, width: info.width - split, height: info.height })
  .extractChannel('alpha').png().toBuffer();

const wordInk = await sharp({
  create: { width: info.width - split, height: info.height, channels: 3, background: INK },
})
  .png().toBuffer()
  .then((rgb) => sharp(rgb).joinChannel(wordAlpha).png().toBuffer());

// composite first, then trim/resize in a separate pipeline — sharp runs trim
// before composite when they share one pipeline.
const merged = await sharp({
  create: { width: info.width, height: info.height, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
})
  .composite([
    { input: badge, left: 0, top: 0 },
    { input: wordInk, left: split, top: 0 },
  ])
  .png()
  .toBuffer();

await sharp(merged)
  .trim({ threshold: 8 })
  .resize({ width: 1400 })
  .png({ compressionLevel: 9 })
  .toFile('public/logo-dark.png');

for (const f of ['public/logo-white.png', 'public/logo-dark.png']) {
  const m = await sharp(f).metadata();
  console.log(f, m.width + 'x' + m.height);
}
