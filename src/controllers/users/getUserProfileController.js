// Importing models
const selectUserByIdModel = require('../../models/users/selectUserByIdModel');

const getUserProfileController = async (req, res, next) => {
    try {
        // Obtaining the user id from the path params
        const { userId } = req.params;

        // Obtaining the user's data
        const user = await selectUserByIdModel(userId);

        // Deleting the user's private data
        delete user.email;

        res.send({
            status: 'ok',
            data: {
                user,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = getUserProfileController;
