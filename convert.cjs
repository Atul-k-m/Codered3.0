const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// CHANGE THIS to your folder path
const directoryPath = path.join(__dirname, 'src/pages/assets/team');

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const ext = path.extname(file).toLowerCase();

        // Only convert jpg, jpeg, and png
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
            const newFilePath = filePath.replace(ext, '.webp');

            sharp(filePath)
                .webp({ quality: 80 }) // Adjust quality (0-100)
                .toFile(newFilePath)
                .then(() => {
                    console.log(`Converted: ${file} -> .webp`);
                    // Optional: Delete original file
                    // fs.unlinkSync(filePath); 
                })
                .catch(err => console.error("Error converting " + file, err));
        }
    });
});