// Importing Db
const getDb = require('../../db/getDb');

// Function that performs a query to the database to select ratings of a company
const selectRatingByCompanyIdModel = async (companyId) => {
    let connection;

    try {
        connection = await getDb();

        // Checking ratingInfo about a company
        const [ratings] = await connection.query(
            `SELECT
            RC.id,
            ROUND(AVG(RC.salary),1) AS avgSalary,
            ROUND(AVG(RC.workEnvironment),1) AS avgWorkEnvironment,
            ROUND(AVG(RC.promotionPosibility),1) AS avgPromotionPosibility,
            ROUND(AVG(RC.accesibility),1) AS avgAccesibility,
            ROUND((AVG(RC.salary) + AVG(RC.workEnvironment) + AVG(RC.promotionPosibility) + AVG(RC.accesibility)) / 4,1) AS totalAvgRatings,
            RC.review,
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
            U.photo,
            RC.review
        `,
            [companyId]
        );

        return ratings;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectRatingByCompanyIdModel;
