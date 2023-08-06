// Import the function that returns a connection to the database
const getDb = require('../../db/getDb');

//Function that performs a query to the database to select total ratings from an employee
const selectEmployeeRatingModel = async (userId) => {
    let connection;

    try {
        connection = await getDb();

        console.log(userId);
        // Checking info about a company
        const [ratings] = await connection.query(
            `SELECT id, salary, workEnvironment, promotionPosibility, accesibility, companyId, userId, createdAt FROM ratingCompanies WHERE userId = ?`,
            [userId]
        );

        console.log('HOLAAA', ratings);
        return ratings;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectEmployeeRatingModel;
