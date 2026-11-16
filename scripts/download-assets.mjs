import fs from "node:fs/promises";
import path from "node:path";

const BASE = "https://maggieappleton.com";

const ASSETS = [
  // Fonts
  { url: `${BASE}/fonts/Lato-Light.woff2`, dest: "public/fonts/Lato-Light.woff2" },
  { url: `${BASE}/fonts/Lato-Regular.woff2`, dest: "public/fonts/Lato-Regular.woff2" },
  { url: `${BASE}/fonts/Lato-Bold.woff2`, dest: "public/fonts/Lato-Bold.woff2" },
  { url: `${BASE}/fonts/CanelaDeck-Regular.woff2`, dest: "public/fonts/CanelaDeck-Regular.woff2" },
  { url: `${BASE}/fonts/CanelaDeck-Bold.woff2`, dest: "public/fonts/CanelaDeck-Bold.woff2" },
  { url: `${BASE}/fonts/CanelaDeck-Light.woff2`, dest: "public/fonts/CanelaDeck-Light.woff2" },
  { url: `${BASE}/fonts/CanelaText-Medium.woff2`, dest: "public/fonts/CanelaText-Medium.woff2" },
  { url: `${BASE}/fonts/CanelaText-Light.woff2`, dest: "public/fonts/CanelaText-Light.woff2" },
  { url: `${BASE}/fonts/CanelaText-LightItalic.woff2`, dest: "public/fonts/CanelaText-LightItalic.woff2" },

  // Favicons
  { url: `${BASE}/images/favicon/apple-touch-icon.png`, dest: "public/seo/apple-touch-icon.png" },
  { url: `${BASE}/images/favicon/favicon-32x32.png`, dest: "public/seo/favicon-32x32.png" },
  { url: `${BASE}/images/favicon/favicon-16x16.png`, dest: "public/seo/favicon-16x16.png" },

  // Essay covers
  { url: `${BASE}/_astro/ai-enlightenment@2x.D05Dfut-_dKh50.webp`, dest: "public/images/essays/ai-enlightenment.webp" },
  { url: `${BASE}/_astro/growing@2x.BVm-B_ci_1n10d3.webp`, dest: "public/images/essays/growing.webp" },
  { url: `${BASE}/_astro/ai-forest@2x.Dgu2JZ9k_fcimu.webp`, dest: "public/images/essays/ai-forest.webp" },
  { url: `${BASE}/_astro/tft@2x.DrGoTO0K_ZMfpYr.webp`, dest: "public/images/essays/tft.webp" },

  // Book covers
  { url: `${BASE}/_astro/eve.DyGkTsK3_Z2m3Pjl.webp`, dest: "public/images/books/eve.webp" },
  { url: `${BASE}/_astro/annals.-7W5WAti_Z12fb95.webp`, dest: "public/images/books/annals.webp" },
  { url: `${BASE}/_astro/newmedia.DjL3o6JX_19jUjA.webp`, dest: "public/images/books/newmedia.webp" },
  { url: `${BASE}/_astro/dawn.C8rykuLR_14e3cI.webp`, dest: "public/images/books/dawn.webp" },
  { url: `${BASE}/_astro/smallprog.DUFNZDJR_Z1NSWTO.webp`, dest: "public/images/books/smallprog.webp" },
  { url: `${BASE}/_astro/dancing-skeletons.D14Ljcx9_Z1deRV4.webp`, dest: "public/images/books/dancing-skeletons.webp" },
  { url: `${BASE}/_astro/ethnography9.B7qkg_sF_1uO0fg.webp`, dest: "public/images/books/ethnography9.webp" },
  { url: `${BASE}/_astro/blockchainchicken.CGPp_6nX_Z2vAQCV.webp`, dest: "public/images/books/blockchainchicken.webp" },
];

async function downloadOne(item) {
  await fs.mkdir(path.dirname(item.dest), { recursive: true });
  const res = await fetch(item.url);
  if (!res.ok) throw new Error(`Failed ${item.url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(item.dest, buf);
  return `${item.dest} (${buf.length} bytes)`;
}

async function run() {
  const batchSize = 4;
  for (let i = 0; i < ASSETS.length; i += batchSize) {
    const batch = ASSETS.slice(i, i + batchSize);
    const results = await Promise.allSettled(batch.map(downloadOne));
    for (const r of results) {
      if (r.status === "fulfilled") console.log("OK:", r.value);
      else console.error("ERR:", r.reason.message);
    }
  }
}

run();
