// Importing Db
const getDb = require('../../db/getDb');

// Importing models
const selectCompanyByNameModel = require('./selectCompanyByNameModel');

// Function that performs a database query to update a company's profile info
const updateCompanyProfileModel = async (
    name,
    country,
    city,
    bio,
    photoName,
    companyId
) => {
    let connection;

    try {
        connection = await getDb();

        const company = await selectCompanyByNameModel(name);

        if (!name) name = company.name;

        await connection.query(
            `UPDATE companies SET name = ?, country = ?, city = ?, bio = ?, photo = ? WHERE id = ?`,
            [name, country, city, bio, photoName, companyId]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = updateCompanyProfileModel;
