// Importing Db
const getDb = require('../../db/getDb');

// Function that performs a query to the database to select company with a given company id
const selectCompanyByIdModel = async (companyId) => {
    let connection;

    try {
        connection = await getDb();

        // Checking info about a company
        const [companies] = await connection.query(
            `SELECT id, name, country, city, photo, userId, createdAt FROM companies WHERE id = ?`,
            [companyId]
        );

        return companies[0];
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selectCompanyByIdModel;
