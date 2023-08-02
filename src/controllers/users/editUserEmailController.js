const randomstring = require('randomstring');

// Importing models
const updateUserEmailModel = require('../../models/users/uptadeUserEmailModel');

const editUserEmailController = async (req, res, next) => {
    try {
        const { oldPass, newEmail } = req.body;

        // Creating the registration code
        const registrationCode = randomstring.generate(30);

        await updateUserEmailModel(
            oldPass,
            newEmail,
            req.user.id,
            registrationCode
        );

        res.send({
            status: 'ok',
            message: 'Validate your new email',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = editUserEmailController;
