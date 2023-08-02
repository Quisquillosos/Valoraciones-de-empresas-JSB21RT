// Importing dependences
const bcrypt = require('bcrypt');

// Importing Db
const getDb = require('../../db/getDb');

// Function that performs a database query to reset a user's password
const updateForgottenPassModel = async (newPass, userId) => {
    let connection;

    try {
        connection = await getDb();

        // Encrypting the new password
        const hashedPass = await bcrypt.hash(newPass, 10);

        // Updating password
        await connection.query(
            `UPDATE users SET password = ?, recoverPassCode = null WHERE id = ?`,
            [hashedPass, userId]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = updateForgottenPassModel;
