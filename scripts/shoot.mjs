import { chromium } from 'playwright';
import sharp from 'sharp';

const url = process.argv[2] || 'http://localhost:3000/';
const width = Number(process.argv[3] || 1440);
const height = Number(process.argv[4] || 900);
const out = process.argv[5] || 'scratch/shot';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
await page.addStyleTag({ content: 'html { scroll-behavior: auto !important; }' }).catch(() => {});
await page.goto(url, { waitUntil: 'networkidle' });
await page.addStyleTag({ content: 'html { scroll-behavior: auto !important; }' });

// Scroll through to trigger IntersectionObserver reveals, then return to top.
const total = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < total; y += Math.round(height * 0.7)) {
  await page.evaluate((v) => window.scrollTo(0, v), y);
  await page.waitForTimeout(260);
}
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(2200);
const pending = await page.evaluate(() =>
  [...document.querySelectorAll('[data-shown]')].filter((e) => e.dataset.shown !== 'true').length,
);
console.log('not-yet-revealed:', pending);

await page.screenshot({ path: `${out}-full.png`, fullPage: true });
const meta = await sharp(`${out}-full.png`).metadata();
console.log('page', meta.width, 'x', meta.height);

// Slice into readable segments
const SEG = 2400;
const segs = Math.ceil(meta.height / SEG);
for (let i = 0; i < segs; i++) {
  const top = i * SEG;
  const h = Math.min(SEG, meta.height - top);
  await sharp(`${out}-full.png`)
    .extract({ left: 0, top, width: meta.width, height: h })
    .resize({ width: 900 })
    .png()
    .toFile(`${out}-${String(i + 1).padStart(2, '0')}.png`);
}
console.log('segments', segs);
await browser.close();
