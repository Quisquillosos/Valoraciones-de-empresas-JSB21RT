// Importing dependences
const uuid = require('uuid');

// Importing dB
const getDb = require('../../db/getDb');

// Importing errors
const { ratingAlreadyExistsError } = require('../../services/errorService');

// Function that performs a database query to rate a company
const insertRatingCompaniesModel = async (
    salary,
    workEnvironment,
    promotionPosibility,
    accesibility,
    review,
    userId,
    companyId
) => {
    let connection;

    try {
        connection = await getDb();
        console.log('HOLAAAA');

        // Checking if there is already a previous rate by the user who is attempting to rate
        const [ratings] = await connection.query(
            `SELECT id FROM ratingCompanies WHERE userId = ? AND companyId = ?`,
            [userId, companyId]
        );

        if (ratings.length > 0) {
            ratingAlreadyExistsError();
        }

        // Inserting rate
        await connection.query(
            `INSERT INTO ratingCompanies(id, salary, workEnvironment, promotionPosibility, accesibility, review, userId, companyId) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                uuid.v4(),
                salary,
                workEnvironment,
                promotionPosibility,
                accesibility,
                review,
                userId,
                companyId,
            ]
        );

        // Obtaining rating
        const [ratingsAvg] = await connection.query(
            `SELECT 
                AVG(salary) AS salaryAvg,
                AVG(workEnvironment) AS workEnvironmentAvg,
                AVG(promotionPosibility) AS promotionPosibilityAvg,
                AVG(accesibility) AS accesibilityAvg,
                review
            FROM ratingCompanies
            WHERE companyId = ?
            GROUP BY companyId, review`,
            [companyId]
        );

        // Returning rate
        return {
            salaryAvg: Number(ratingsAvg[0].salaryAvg),
            workEnvironmentAvg: Number(ratingsAvg[0].workEnvironmentAvg),
            promotionPosibilityAvg: Number(
                ratingsAvg[0].promotionPosibilityAvg
            ),
            accesibilityAvg: Number(ratingsAvg[0].accesibilityAvg),
            review,
        };
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertRatingCompaniesModel;
