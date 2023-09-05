// Importing Db
const getDb = require('../../db/getDb');
const { notFoundError } = require('../../services/errorService');

// Function that performs a query to the database to select company with a given company id
const selectCompanyByIdModel = async (companyId) => {
    let connection;

    try {
        connection = await getDb();
        // Select (avg(salary) + avg(workEnvironment) + avg(promotionPosibility) + avg(accesibility)) / 4 from ratingcompanies

        // Checking info about a company
        const [companies] = await connection.query(
            `SELECT C.id, C.name, C.country, C.city, C.photo, C.userId, C.createdAt, ((avg(RC.salary) + avg(RC.workEnvironment) + avg(RC.promotionPosibility) + avg(RC.accesibility)) / 4) AS totalAvgRatings FROM companies C 
            INNER JOIN ratingCompanies RC ON RC.companyID = C.id 
            WHERE C.id = ?`,
            [companyId]
        );

        if (!companies[0].id) {
            const [companies] = await connection.query(
                `SELECT id, name, country, city, photo, userId, createdAt FROM companies WHERE id = ?`,
                [companyId]
            );
            return companies[0];
        }

        return companies[0];
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectCompanyByIdModel;
