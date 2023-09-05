// Importing Db
const getDb = require('../../db/getDb');

// Function that performs a query to the database to select ratings of a company
const selectRatingByCompanyIdModel = async (companyId) => {
    let connection;

    try {
        connection = await getDb();

        // ((avg(RC.salary) + avg(RC.workEnvironment) + avg(RC.promotionPosibility) + avg(RC.accesibility)) / 4) AS totalAvgRatings

        // Checking ratingInfo about a company
        const [ratings] = await connection.query(
            `SELECT
            RC.id,
            AVG(RC.salary) AS avgSalary,
            AVG(RC.workEnvironment) AS avgWorkEnvironment,
            AVG(RC.promotionPosibility) AS avgPromotionPosibility,
            AVG(RC.accesibility) AS avgAccesibility,
            (AVG(RC.salary) + AVG(RC.workEnvironment) + AVG(RC.promotionPosibility) + AVG(RC.accesibility)) / 4 AS totalAvgRatings,
            RC.companyId,
            RC.userId,
            RC.createdAt,
            U.firstName,
            U.lastName,
            U.photo 
        FROM
            ratingCompanies RC
        INNER JOIN
            users U ON RC.userId = U.id
        WHERE
            RC.companyId = ?
        GROUP BY
            RC.id,
            RC.companyId,
            RC.userId,
            RC.createdAt,
            U.firstName,
            U.lastName,
            U.photo
        `,
            [companyId]
        );

        return ratings;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectRatingByCompanyIdModel;
