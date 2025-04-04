import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// Get directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create directories if they don't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// List of placeholder images to download
const images = [
  { 
    name: 'hero-image.jpg',
    url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1920',
  },
  { 
    name: 'category-dresses.jpg',
    url: 'https://images.unsplash.com/photo-1626270006250-f5ff5737184b?q=80&w=800',
  },
  { 
    name: 'category-accessories.jpg',
    url: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=800',
  },
  { 
    name: 'category-outerwear.jpg',
    url: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=800',
  },
  { 
    name: 'product-1.jpg',
    url: 'https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=600',
  },
  { 
    name: 'product-2.jpg',
    url: 'https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=600',
  },
  { 
    name: 'product-3.jpg',
    url: 'https://images.unsplash.com/photo-1580331451062-99ff652288d7?q=80&w=600',
  },
  { 
    name: 'product-4.jpg',
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600',
  },
  {
    name: 'brand-story.jpg',
    url: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?q=80&w=1000',
  },
  // Instagram feed images
  {
    name: 'instagram-1.jpg',
    url: 'https://images.unsplash.com/photo-1612023762606-a133070d4fa7?q=80&w=400',
  },
  {
    name: 'instagram-2.jpg',
    url: 'https://images.unsplash.com/photo-1507930286887-c40eb3d66fde?q=80&w=400',
  },
  {
    name: 'instagram-3.jpg',
    url: 'https://images.unsplash.com/photo-1560233026-ad254b45cb0a?q=80&w=400',
  },
  {
    name: 'instagram-4.jpg',
    url: 'https://images.unsplash.com/photo-1585069395830-bcd583829acd?q=80&w=400',
  },
  {
    name: 'instagram-5.jpg',
    url: 'https://images.unsplash.com/photo-1511948374796-0a4c70f6525b?q=80&w=400',
  },
  {
    name: 'instagram-6.jpg',
    url: 'https://images.unsplash.com/photo-1533659124865-d6072dc035e1?q=80&w=400',
  },
];

// Download each image
const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {}); // Delete the file if there's an error
      console.error(`Error downloading ${filename}: ${err.message}`);
      reject(err);
    });
  });
};

// Download all images
async function downloadAllImages() {
  console.log('Starting to download images...');
  
  for (const image of images) {
    const filePath = path.join(imagesDir, image.name);
    await downloadImage(image.url, filePath);
  }
  
  console.log('All images downloaded successfully!');
}

downloadAllImages().catch(console.error); 