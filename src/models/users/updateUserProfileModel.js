// Importing Db
const getDb = require('../../db/getDb');

const selectUserByIdModel = require('./selectUserByIdModel');

// Function that performs a database query to update a user's profile (photo + bio)
const updateUserProfileModel = async (photoName, bio, userId) => {
    let connection;

    try {
        connection = await getDb();

        const user = selectUserByIdModel(userId);

        if (!photoName) photoName = user.photo;

        if (!bio) bio = user.bio;

        await connection.query(
            `UPDATE users SET photo = ?, bio = ? WHERE id = ?`,
            [photoName, bio, userId]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = updateUserProfileModel;
