// Importing models
const selectUserByIdModel = require('../../models/users/selectUserByIdModel');
const updateUserProfileModel = require('../../models/users/updateUserProfileModel');

// Importing services
const deletePhotoService = require('../../services/deletePhotoService');
const savePhotoService = require('../../services/savePhotoService');
const validateSchemaService = require('../../services/validateSchemaService');

// Importing schemas
const editUserProfileSchema = require('../../schemas/users/editUserProfileSchema');

const editUserProfileController = async (req, res, next) => {
    try {
        const { bio } = req.body || '';
        const { photo } = req.files || {};

        const data = { bio, photo };
        console.log(data);

        await validateSchemaService(editUserProfileSchema, data);

        // Obtaining the user's data to check if he/she/it already has a previous photo or bio
        const user = await selectUserByIdModel(req.user.id);

        let photoName;

        // Checking wether the user has passed us a photo or not
        if (req.files?.photo) {
            // If the user has passed us a photo, we delete the previous photo and insert the new one
            if (user.photo) {
                await deletePhotoService(user.photo);
            }
            // Inserting a new photo
            photoName = await savePhotoService(req.files.photo, 100);
        }

        await updateUserProfileModel(photoName || '', bio, req.user.id);

        res.send({
            status: 'ok',
            message: 'User updated',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = editUserProfileController;
