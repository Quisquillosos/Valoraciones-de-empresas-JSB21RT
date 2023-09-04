// Importing dependences
const jwt = require('jsonwebtoken');

// Importing errors
const {
    notAuthenticatedError,
    invalidCredentialsError,
} = require('../services/errorService');

// Intermediate controller function that decrypts the token and creates the property "req.user"
const authUser = async (req, res, next) => {
    try {

        const { authorization } = req.headers;

        if (!authorization) {
            notAuthenticatedError();
        }

        // Variable that stores the token information
        let tokenInfo;

        try {
            tokenInfo = jwt.verify(authorization, process.env.SECRET);
        } catch (err) {
            console.error(err);
            invalidCredentialsError();
        }

        // If we have reached this point, it means that the token has already been decrypted
        // Creating the property "user" in the object "request" (it is an invented property)
        req.user = tokenInfo;

        // Passing control to the next controlling function
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = authUser;
