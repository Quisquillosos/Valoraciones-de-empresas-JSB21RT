// Importing Db
const getDb = require('../../db/getDb');

// Importing models
const selectCompanyByIdModel = require('./selectCompanyByIdModel');

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

        const company = await selectCompanyByIdModel(companyId);

        if (!name) name = company.name;
        if (!country) country = company.country;
        if (!city) city = company.city;
        if (!bio) bio = company.bio;
        if (!photoName) photoName = company.photo;

        await connection.query(
            `UPDATE companies SET name = ?, country = ?, city = ?, bio = ?, photo = ? WHERE id = ?`,
            [name, country, city, bio, photoName, companyId]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = updateCompanyProfileModel;
