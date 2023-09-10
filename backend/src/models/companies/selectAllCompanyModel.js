// Importing dB
const getDb = require('../../db/getDb');

// Function that performs a query to the database to obtain the list of companies
const selectAllCompanyModel = async (keyword = '') => {
    let connection;

    try {
        connection = await getDb();

        // Obtaining list (filtering)
        const [companies] = await connection.query(
            `
                SELECT 
                    C.id,
                    C.name,
                    C.country, 
                    C.city,
                    C.bio,
                    C.photo,
                    AVG(RC.salary) AS salaryAvg,
                    AVG(RC.workEnvironment) AS workEnvironmentAvg,
                    AVG(RC.promotionPosibility) AS promotionPosibilityAvg,
                    AVG(RC.accesibility) AS accesibilityAvg,
                    (AVG(RC.salary) + AVG(RC.workEnvironment) + AVG(RC.promotionPosibility) + AVG(RC.accesibility)) / 4 AS totalAvgRatings,
                    RC.review,
                    RC.createdAt
                FROM companies C 
                LEFT JOIN ratingCompanies RC ON C.id = RC.companyId
                WHERE name LIKE ? OR country LIKE ? OR city LIKE ?
                GROUP BY 
                    C.id,
                    C.name,
                    C.country, 
                    C.city,
                    C.bio,
                    C.photo,
                    RC.review,
                    RC.createdAt
                ORDER BY name 
            `,
            [`%${keyword}%`, `%${keyword}%`, `%${keyword}%`]
        );

        return companies;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectAllCompanyModel;
