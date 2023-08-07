// Importing Db
const getDb = require('../../db/getDb');
const selectCompanyByIdModel = require('./selectCompanyByIdModel');

// Importing models
const selectCompanyByNameModel = require('./selectCompanyByIdModel');

// Function that performs a database query to update a company's profile info
const updateCompanyProfileModel = async (
    name,
    country,
    city,
    photoName,
    companyId
) => {
    let connection;
    try {
        connection = await getDb();

        const company = await selectCompanyByIdModel(companyId);

        if (!name) name = company.name;
        if (!country) country = company.country;
        if (!city) city = company.city;
        if (!photoName) photoName = company.photo;

        await connection.query(
            `UPDATE companies SET name = ?, country = ?, city = ?, photo = ? WHERE id = ?`,
            [name, country, city, photoName, companyId]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = updateCompanyProfileModel;
