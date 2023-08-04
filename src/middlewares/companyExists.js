// Importing getDb
const getDb = require('../db/getDb');

// Importing errors
const { notFoundError } = require('../services/errorService');

// Intermediate controller function that throws an error if a user with a given id does not exist
const companyExists = async (req, res, next) => {
    let connection;

    try {
        connection = await getDb();

        // Try to obtain the company id from the "user" property. If this property
        // Does not exist, we get the id from the path params
        const companyId = req.params.companyId;

        const [companies] = await connection.query(
            `SELECT id FROM companies WHERE id = ?`,
            [companyId]
        );

        // Throwing an error if the user does not exist
        if (companies.length < 1) {
            notFoundError('company');
        }

        // Passing control to the next controlling function
        next();
    } catch (err) {
        next(err);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = companyExists;
