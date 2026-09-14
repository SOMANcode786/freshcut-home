import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const assetsDir = path.join(process.cwd(), 'public/assets');
const productsDir = path.join(assetsDir, 'products');

async function processDirectory(dir, isProducts = false) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const pngFiles = entries.filter(e => e.isFile() && e.name.toLowerCase().endsWith('.png'));

    if (pngFiles.length === 0) {
      console.log(`No PNG files to convert in ${dir}`);
      return;
    }

    console.log(`Found ${pngFiles.length} PNG image(s) to convert in ${dir}...`);

    for (const entry of pngFiles) {
      const file = entry.name;
      const inputPath = path.join(dir, file);
      const outputFilename = file.replace(/\.png$/i, '.webp');
      const outputPath = path.join(dir, outputFilename);

      let pipeline = sharp(inputPath);

      if (file.toLowerCase() === 'hero.png') {
        pipeline = pipeline
          .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 82 });
      } else if (file.toLowerCase() === 'freshcut-logo.png') {
        pipeline = pipeline
          .resize(300, 300, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 90, alphaQuality: 90 });
      } else if (isProducts) {
        pipeline = pipeline
          .resize(600, 600, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 80 });
      } else {
        pipeline = pipeline.webp({ quality: 85 });
      }

      await pipeline.toFile(outputPath);
      const stat = await fs.stat(outputPath);
      console.log(`Converted ${file} -> ${outputFilename} (${(stat.size / 1024).toFixed(1)} KB)`);

      // Safely remove old PNG after conversion
      await fs.unlink(inputPath);
    }
  } catch (err) {
    console.error(`Error processing directory ${dir}:`, err);
  }
}

try {
  await processDirectory(assetsDir, false);
  await processDirectory(productsDir, true);
  console.log('Image conversion complete!');
} catch (err) {
  console.error('Image conversion failed:', err);
  process.exit(1);
}

