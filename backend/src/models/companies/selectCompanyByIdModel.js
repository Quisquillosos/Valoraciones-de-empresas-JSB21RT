// Importing Db
const getDb = require('../../db/getDb');
const { notFoundError } = require('../../services/errorService');

// Function that performs a query to the database to select company with a given company id
const selectCompanyByIdModel = async (companyId) => {
    let connection;

    try {
        connection = await getDb();

        // Checking info about a company
        const [companies] = await connection.query(
            `SELECT C.id, C.name, C.country, C.city, C.bio, C.photo, C.userId, C.createdAt, ((avg(RC.salary) + avg(RC.workEnvironment) + avg(RC.promotionPosibility) + avg(RC.accesibility)) / 4) AS totalAvgRatings, RC.review, E.userId AS employeeId FROM companies C 
            LEFT JOIN ratingCompanies RC ON RC.companyID = C.id 
            LEFT JOIN employees E ON C.id = E.companyId
            WHERE C.id = ?
            GROUP BY 
                RC.review, 
                E.userId`,
            [companyId]
        );

        return companies;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectCompanyByIdModel;
