// Importing models
const updateUserPassModel = require('../../models/users/updateUserPassModel');

// Importing Services
const validateSchemaService = require('../../services/validateSchemaService');

// Importing Schemas
const editUserPassSchema = require('../../schemas/users/editUserPassSchema');

const editUserPassController = async (req, res, next) => {
    try {
        const { oldPass, newPass } = req.body;

        await validateSchemaService(editUserPassSchema, req.body);

        await updateUserPassModel(oldPass, newPass, req.user.id);

        res.send({
            status: 'ok',
            message: 'Password updated',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = editUserPassController;
