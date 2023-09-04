// Importing getDb
const getDb = require('../../db/getDb');

// Importing errors
const { notFoundError } = require('../../services/errorService');

//Function that performs a database query to activate a user
const updateRegCodeModel = async (registrationCode) => {
    let connection;

    try {
        connection = await getDb();

        //Checking if there is a user with that registration code
        const [users] = await connection.query(
            `SELECT id FROM users WHERE registrationCode = ?`,
            [registrationCode]
        );

        // If there is no user with that registration code, we throw an error
        if (users.length < 1) {
            notFoundError('users');
        }

        // Updating user
        await connection.query(
            `UPDATE users SET active = true, registrationCode = null WHERE registrationCode = ?`,
            [registrationCode]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = updateRegCodeModel;
