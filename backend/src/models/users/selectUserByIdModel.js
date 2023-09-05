// Import Db
const getDb = require('../../db/getDb');

// Function that performs a query to the database to select a user with a given user id
const selectUserByIdModel = async (userId) => {
    let connection;

    try {
        connection = await getDb();

        // Checking info about a unique user
        const [users] = await connection.query(
            `SELECT id, firstName, lastName, email, photo, bio, active, createdAt FROM users WHERE id = ?`,
            [userId]
        );

        return users[0];
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectUserByIdModel;
