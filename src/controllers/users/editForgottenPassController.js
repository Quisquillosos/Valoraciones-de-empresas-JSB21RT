// Importing models
const updateForgottenPassModel = require('../../models/users/updateForgottenPassModel');

const editForgottenPassController = async (req, res, next) => {
    try {
        const { newPass } = req.body;

        await updateForgottenPassModel(newPass, req.user.id);

        res.send({
            status: 'ok',
            message: 'Password reset',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = editForgottenPassController;
