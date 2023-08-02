const selectUserByIdModel = require('../../models/users/selectUserByIdModel');
const deletePhotoService = require('../../services/deletePhotoService');

const editUserProfileController = async (req, res, next) => {
    try {
        // Obtain the user's data to check if he/she/it already has a previous photo or bio
        const user = await selectUserByIdModel(req.user.id);

        // si hay foto borrarla
        if (user.photo) {
            await deletePhotoService(user.photo);
        }

        // meter la nueva foto

        res.send({
            status: 'ok',
            message: 'Usuario actualizado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = editUserProfileController;
