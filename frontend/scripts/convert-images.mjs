import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.join(process.cwd(), 'public/assets/products');

try {
  const files = await fs.readdir(dir);
  const pngFiles = files.filter(f => f.toLowerCase().endsWith('.png'));

  console.log(`Found ${pngFiles.length} PNG images to convert in ${dir}...`);

  for (const file of pngFiles) {
    const inputPath = path.join(dir, file);
    const outputFilename = file.replace(/\.png$/i, '.webp');
    const outputPath = path.join(dir, outputFilename);

    await sharp(inputPath)
      .resize(600, 600, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);

    const stat = await fs.stat(outputPath);
    console.log(`Converted ${file} -> ${outputFilename} (${(stat.size / 1024).toFixed(1)} KB)`);

    // Remove the old PNG file after successful conversion
    await fs.unlink(inputPath);
  }
  console.log('Image conversion complete!');
} catch (err) {
  console.error('Image conversion error:', err);
  process.exit(1);
}
