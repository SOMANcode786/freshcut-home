import fs from 'node:fs/promises';
import products from '../../backend/src/data/products.js';

const raw = process.env.VITE_SITE_URL || process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:5173');
const site = raw.replace(/\/$/, '');

const activeProducts = products.filter(p => p.active !== false);

const productUrls = activeProducts.map(p => `  <url><loc>${site}/product/${p.slug}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${site}/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
${productUrls}
</urlset>
`;

await fs.writeFile('public/sitemap.xml', xml);
await fs.writeFile('public/robots.txt', `User-agent: *\nAllow: /\nDisallow: /admin\nSitemap: ${site}/sitemap.xml\n`);

console.log(`SEO files generated for ${site} with ${activeProducts.length} product URLs.`);
