// Importing dependences
const randomstring = require('randomstring');

// Importing models
const updateUserEmailModel = require('../../models/users/uptadeUserEmailModel');

// Importing Services
const validateSchemaService = require('../../services/validateSchemaService');

// Importing Schemas
const editUserEmailSchema = require('../../schemas/users/editUserEmailSchema');

const editUserEmailController = async (req, res, next) => {
    try {
        const { oldPass, newEmail } = req.body;

        // Creating the registration code
        const registrationCode = randomstring.generate(30);

        await validateSchemaService(editUserEmailSchema, req.body);

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
