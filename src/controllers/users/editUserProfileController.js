const selectUserByIdModel = require('../../models/users/selectUserByIdModel');
const updateUserProfileModel = require('../../models/users/updateUserProfileModel');
const deletePhotoService = require('../../services/deletePhotoService');
const savePhotoService = require('../../services/savePhotoService');

const editUserProfileController = async (req, res, next) => {
    try {
        const { bio } = req.body || '';

        // Obtain the user's data to check if he/she/it already has a previous photo or bio
        const user = await selectUserByIdModel(req.user.id);

        let photoName;

        // Comprobamos si el usuario nos ha pasado una foto o no
        if (req.files?.photo) {
            // El usuario si nos ha pasado photo, entonces borramos la foto anterior y metemos la nueva
            // si hay foto borrarla
            if (user.photo) {
                await deletePhotoService(user.photo);
            }
            // meter la nueva foto
            photoName = await savePhotoService(req.files.photo, 100);
        }

        updateUserProfileModel(photoName || '', bio, req.user.id);

        res.send({
            status: 'ok',
            message: 'Usuario actualizado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = editUserProfileController;
