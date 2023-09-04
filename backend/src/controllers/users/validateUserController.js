// Importing models
const updateRegCodeModel = require('../../models/users/updateUserRegCodeModel');

// Final controller function validating a newly registered user
const validateUserController = async (req, res, next) => {
    try {
        // Obtaining the registration code of the path params
        const { registrationCode } = req.params;

        // Activating user
        await updateRegCodeModel(registrationCode);

        res.send({
            status: 'ok',
            message: 'User activated',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = validateUserController;
