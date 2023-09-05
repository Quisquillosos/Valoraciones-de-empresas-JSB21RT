// Importing dependences
const fs = require('fs/promises');
const path = require('path');

// Importing errors
const { deleteFileError } = require('./errorService');

const deletePhotoService = async (imgName) => {
    try {
        // Absolute path to the file we want to delete
        const imgPath = path.join(
            __dirname,
            '..',
            '..',
            process.env.UPLOADS_DIR,
            imgName
        );

        // Checking if the image exists with the help of the "access" method
        try {
            await fs.access(imgPath);
        } catch {
            // If the previous method throws an error it means that the image does not exist (in that case we terminate the function)
            return;
        }

        // Deleting the file from the upload folder
        await fs.unlink(imgPath);
    } catch {
        deleteFileError();
    }
};

module.exports = deletePhotoService;
