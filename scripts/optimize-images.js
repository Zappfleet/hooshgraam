// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images';
const outputDir = './public/images/optimized';

// ایجاد فولدر output
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// خواندن تمام فایل‌های تصویری
function optimizeImages(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // اگر فولدر بود، recursive بررسی کن
      const subOutputDir = path.join(outputDir, path.relative(inputDir, dir), file);
      if (!fs.existsSync(subOutputDir)) {
        fs.mkdirSync(subOutputDir, { recursive: true });
      }
      optimizeImages(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      // بهینه‌سازی تصویر
      const outputPath = path.join(
        outputDir,
        path.relative(inputDir, dir),
        file.replace(/\.(jpg|jpeg|png)$/i, '.webp')
      );

      sharp(filePath)
        .webp({ quality: 85 })
        .toFile(outputPath)
        .then(() => {
          console.log(`✓ Optimized: ${file} -> ${path.basename(outputPath)}`);
        })
        .catch(err => {
          console.error(`✗ Error optimizing ${file}:`, err);
        });
    }
  });
}

console.log('🖼️  Starting image optimization...\n');
optimizeImages(inputDir);
console.log('\n✅ Image optimization complete!');