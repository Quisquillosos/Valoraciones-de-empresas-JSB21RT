// Importing Db
const getDb = require('../../db/getDb');
const { notFoundError } = require('../../services/errorService');

// Function that performs a query to the database to select total ratings from an employee
const selectEmployeeRatingModel = async (userId) => {
    let connection;

    try {
        connection = await getDb();

        // Checking info about a company
        const [ratings] = await connection.query(
            `SELECT RC.id, RC.salary, RC.workEnvironment, RC.promotionPosibility, RC.accesibility, RC.review, RC.companyId, RC.userId, RC.createdAt, C.name, C.city, C.country, C.bio, C.photo 
            FROM ratingCompanies RC
            INNER JOIN companies C ON C.id = RC.companyId
            WHERE RC.userId = ?`,
            [userId]
        );

        if (!ratings[0]) notFoundError('employee');

        return ratings;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectEmployeeRatingModel;
