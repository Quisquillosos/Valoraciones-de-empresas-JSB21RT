// Importing dependences
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Importing models
const selectUserByEmailModel = require('../../models/users/selectUserByEmailModel');

// Importing errors
const {
    invalidCredentialsError,
    pendingActivationError,
} = require ('../../services/errorService');

//Final controller function that logs in a user by returning a token
const loginUserController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Selecting the user data we need using the e-mail address
        const user = await selectUserByEmailModel(email, password);

        // Variable that will store a boolean value indicating whether the password is correct or not
        let validPass;

        // If there is a user we check if the password matches
        if (user) {
            // Checking if the password is valid
            validPass = await bcrypt.compare(password, user.password);
        }

        // If the password does not match or a user does not exist with the provided email address
        if (!user || !validPass) {
            invalidCredentialsError();
        }

        // If the user is not active we throw an error
        if (!user.active) {
            pendingActivationError();
        }

        // Object with the information we want to store in the token
        const tokenInfo = {
            id: user.id
        };

        // Creating token
        const token = jwt.sign(tokenInfo, process.env.SECRET, {
            expiresIn: '7d',
        });

        res.send({
            status: 'ok',
            data: {
                token,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = loginUserController;