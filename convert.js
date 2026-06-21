const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function convertDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            await convertDir(fullPath);
        } else if (file.endsWith('.png')) {
            const webpPath = fullPath.replace(/\.png$/, '.webp');
            try {
                await sharp(fullPath).webp().toFile(webpPath);
                console.log(`Converted ${fullPath} to ${webpPath}`);
                // Delete the original png
                fs.unlinkSync(fullPath);
                console.log(`Deleted original ${fullPath}`);
            } catch (err) {
                console.error(`Failed to convert ${fullPath}:`, err);
            }
        }
    }
}

async function run() {
    await convertDir(path.join(__dirname, 'public'));
}

run();
