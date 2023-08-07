// Importing db
const getDb = require('../db/getDb');

// Importing errors
const {
    invalidCredentialsError,
    isRecoverPassForgottenValidError,
} = require('../services/errorService');

// Intermediate controller function that checks if the recovered passCode is valid
const isRecoverPassForgottenValid = async (req, res, next) => {
    try {
        const { recoverPassCode } = req.params;

        if (!recoverPassCode) {
            invalidCredentialsError();
        }

        // Variable that stores the recovered passCode
        let passCode = recoverPassCode;

        let connection;

        connection = await getDb();

        const [dbPassCode] = await connection.query(
            `SELECT recoverPassCode FROM users WHERE id = ?`,
            [req.user.id]
        );

        // Comparing database recoverPassCode and user's email passCode
        if (dbPassCode[0].recoverPassCode === passCode) {
            next();
        } else {
            isRecoverPassForgottenValidError();
        }
    } catch (err) {
        next(err);
    }
};

module.exports = isRecoverPassForgottenValid;
