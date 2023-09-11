// Import Db
const getDb = require('../../db/getDb');

// Function that performs a query to the database to select a user with a given user id
const selectUserByIdModel = async (userId) => {
    let connection;

    try {
        connection = await getDb();

        // Checking info about a unique user
        const [users] = await connection.query(
            `SELECT U.id, U.firstName, U.lastName, U.email, U.photo, U.bio, U.active, U.createdAt , C.name, C.country, C.photo, C.city, C.id AS companyId, C.bio
            FROM users U
            RIGHT JOIN companies C ON C.userId = U.id 
            WHERE C.userId = ?`,
            [userId]
        );

        return users;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectUserByIdModel;
