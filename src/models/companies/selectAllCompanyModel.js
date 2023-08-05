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
                    id,
                    name,
                    country, 
                    city,
                    photo                   
                FROM companies 
                WHERE name LIKE ? OR country LIKE ? OR city LIKE ?
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
