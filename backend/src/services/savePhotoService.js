// Importing dependences
const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');
const uuid = require('uuid');

// Importing errors
const { saveFileError } = require('./errorService');

const savePhotoService = async (img, width) => {
    try {
        // Absolute path to the file we want to save
        const uploadsDir = path.join(
            __dirname,
            '..',
            '..',
            process.env.UPLOADS_DIR
        );

        // Creating the uploads folder if it does not exist with the help of the "access" method
        try {
            await fs.access(uploadsDir);
        } catch {
            await fs.mkdir(uploadsDir);
        }

        // Creating a Sharp object with the received image
        const sharpImg = sharp(img.data);

        sharpImg.resize(width);

        // Generating a unique name for the image to avoid 2 images with the same name
        const imgName = `${uuid.v4()}.jpg`;

        // Absolute path to the image
        const imgPath = path.join(uploadsDir, imgName);

        // Saving the image in the file upload folder
        await sharpImg.toFile(imgPath);

        // Returning the name with wich we saved the image
        return imgName;
    } catch {
        saveFileError();
    }
};

module.exports = savePhotoService;
