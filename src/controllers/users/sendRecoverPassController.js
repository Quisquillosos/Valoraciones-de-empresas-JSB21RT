// Importing dependences
const randomstring = require('randomstring');

// Importing models
const updateRecoverUserPassModel = require('../../models/users/updateRecoverUserPassModel');

const sendRecoverPassController = async (req, res, next) => {
    try {
        const { email } = req.body;

        // Creating the registration code
        const recoverPassCode = randomstring.generate(10);

        await updateRecoverUserPassModel(email, recoverPassCode);

        res.send({
            status: 'ok',
            message: 'Recover your password please',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = sendRecoverPassController;
