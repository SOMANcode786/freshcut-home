import fs from 'node:fs/promises';
import products from '../../backend/src/data/products.js';

let raw = process.env.VITE_SITE_URL || process.env.SITE_URL || 'https://www.freshcuthome.store';
if (!raw || raw.includes('vercel.app') || raw.includes('localhost')) {
  raw = 'https://www.freshcuthome.store';
}
const site = raw.replace(/\/$/, '');

const activeProducts = products.filter(p => p.active !== false);

const productUrls = activeProducts
  .map(p => `  <url><loc>${site}/products/${p.id}/${p.slug}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>\n  <url><loc>${site}/product/${p.slug}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`)
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${site}/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>${site}/products</loc><changefreq>daily</changefreq><priority>0.9</priority></url>
${productUrls}
</urlset>
`;

await fs.writeFile('public/sitemap.xml', xml);
await fs.writeFile('public/robots.txt', `User-agent: *\nAllow: /\nDisallow: /admin\nSitemap: ${site}/sitemap.xml\n`);

console.log(`SEO files generated for ${site} with ${activeProducts.length} active products.`);
