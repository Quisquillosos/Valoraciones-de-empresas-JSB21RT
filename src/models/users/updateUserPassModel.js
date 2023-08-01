// Importing dependences
const bcrypt = require('bcrypt');

// Importing the function that returns a connection to the database
const getDb = require('../../db/getDb');

// Importing services
const { invalidCredentialsError } = require('../../services/errorService');

// Function that performs a database query to update a user's password
const updateUserPassModel = async (oldPass, newPass, userId) => {
    let connection;

    try {
        connection = await getDb();

        // Obtaining the user's current password
        const [users] = await connection.query(
            `SELECT password FROM users WHERE id = ?`,
            [userId]
        );

        // Checking if the old password matches the current one
        const validPass = await bcrypt.compare(oldPass, users[0].password);    

        // If the passwords don't match we throw an error
        if (!validPass) {
            invalidCredentialsError();
        }

        // Encrypting the new password
        const hashedPass = await bcrypt.hash(newPass, 10);

        // Updating user
        await connection.query(`UPDATE users SET password = ? WHERE id = ?`, [
            hashedPass,
            userId,
        ]);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = updateUserPassModel;
