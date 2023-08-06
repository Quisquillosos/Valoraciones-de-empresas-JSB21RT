// Import the function that returns a connection to the database
const getDb = require('../../db/getDb');

//Function that performs a query to the database to select ratings of a company
const selectRatingByCompanyIdModel = async (companyId) => {
    let connection;

    try {
        connection = await getDb();

        // Checking info about a company
        const [ratings] = await connection.query(
            `SELECT id, salary, workEnvironment, promotionPosibility, accesibility, companyId, userId, createdAt FROM ratingCompanies WHERE companyId = ?`,
            [companyId]
        );

        return ratings;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectRatingByCompanyIdModel;
