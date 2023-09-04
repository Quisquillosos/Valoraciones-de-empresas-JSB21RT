// Importing getDb
const getDb = require('../db/getDb');

// Importing errors
const { notFoundError } = require('../services/errorService');

// Intermediate controller function that throws an error if a user with a given id does not exist
const userExists = async (req, res, next) => {
    let connection;

    try {
        connection = await getDb();

        // Try to obtain the user id from the "user" property. If this property
        // Does not exist, we get the id from the path params
        const userId = req.user?.id || req.params.userId;

        const [users] = await connection.query(
            `SELECT id FROM users WHERE id = ?`,
            [userId]
        );

        // Throwing an error if the user does not exist
        if (users.length < 1) {
            notFoundError('user');
        }

        // Passing control to the next controlling function
        next();
    } catch (err) {
        next(err);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = userExists;
