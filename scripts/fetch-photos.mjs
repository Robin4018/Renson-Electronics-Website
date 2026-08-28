/**
 * Downloads the site photography from Pexels (Pexels License: free for
 * commercial use, no attribution required, modification allowed) and writes
 * cropped, optimised JPEGs into public/images.
 *
 * Run: node scripts/fetch-photos.mjs
 */
import sharp from "sharp";
import fs from "node:fs";

const OUT = "public/images";
fs.mkdirSync(OUT, { recursive: true });

/** name, pexels photo id, output width, output height, crop gravity */
const PHOTOS = [
  ["hero-coating", 36184235, 2400, 1000, "centre", "Technician powder coating a metal frame in a spray booth"],
  ["spray-gun", 31759140, 900, 1350, "centre", "Operator applying coating with an electrostatic spray gun"],
  ["powder-coating", 14615263, 1400, 1050, "centre", "Spray gun coating black metal panels in a booth"],
  ["voltage-stabilizers", 34526423, 1400, 1050, "centre", "Engineer wiring an industrial control cabinet"],
  ["battery-chargers", 9242887, 1400, 1050, "centre", "Electrical testing of a circuit assembly with probes"],
  ["facility", 36423820, 2400, 1000, "centre", "Production hall with press machinery and overhead gantry"],
  ["workshop", 29988964, 1400, 1050, "centre", "Sunlit factory floor with cutting machinery"],
  ["finishes", 10275089, 1600, 1200, "centre", "Fan of colour swatches"],
  ["sparks", 17245900, 2400, 1000, "centre", "Sparks from a grinding machine in a workshop"],
  ["swatch-fan", 6474474, 1400, 1050, "centre", "Hand holding a fan of neutral colour swatches"],
  ["machined-parts", 11157438, 1400, 1050, "centre", "Precision machined metal components"],
  ["coil-rings", 8113565, 1400, 1050, "centre", "Stacked stainless steel coiled rings"],
  ["plant-exterior", 6537735, 2400, 1000, "centre", "Industrial plant exterior"],
  ["band-factory", 29988964, 2400, 1000, "centre", "Sunlit factory floor with cutting machinery"],
  ["band-parts", 8113565, 2400, 1000, "centre", "Stacked stainless steel coiled components"],
  ["band-panels", 28265032, 2400, 1000, "centre", "Industrial electrical wiring and control panels"],
];

const credits = [];

for (const [name, id, w, h, position, alt] of PHOTOS) {
  const src = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2600`;
  const res = await fetch(src, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) {
    console.log(`SKIP ${name} (${id}) -> HTTP ${res.status}`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await sharp(buf)
    .resize(w, h, { fit: "cover", position })
    .jpeg({ quality: 82, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(`${OUT}/${name}.jpg`);
  const stat = fs.statSync(`${OUT}/${name}.jpg`);
  console.log(`${name}.jpg  ${w}x${h}  ${(stat.size / 1024).toFixed(0)} KB`);
  credits.push(`| ${name}.jpg | ${alt} | https://www.pexels.com/photo/${id}/ |`);
}

fs.writeFileSync(
  "public/images/CREDITS.md",
  [
    "# Photography credits",
    "",
    "All photographs sourced from Pexels under the [Pexels License](https://www.pexels.com/license/)",
    "— free for commercial use, no attribution required, modification permitted.",
    "Regenerate with `node scripts/fetch-photos.mjs`.",
    "",
    "| File | Subject | Source |",
    "| --- | --- | --- |",
    ...credits,
    "",
  ].join("\n"),
);
console.log("\nwrote public/images/CREDITS.md");
