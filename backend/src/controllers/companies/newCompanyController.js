// Importing models
const insertCompanyModel = require('../../models/companies/insertCompanyModel');

// Importing services
const validateSchemaService = require('../../services/validateSchemaService');

// Importing Schemas
const newCompanySchema = require('../../schemas/companies/newCompanySchema');
const selectCompanyByNameModel = require('../../models/companies/selectCompanyByNameModel');

// Final controller function to create a new company
const newCompanyController = async (req, res, next) => {
    try {
        // Obtaining data from body
        const { name, country, city } = req.body;

        // Obtaining photo from req.files
        const { photo } = req.files;

        const data = { name, country, city, photo };

        await validateSchemaService(newCompanySchema, data);

        // Obtaining userId from req.user
        const userId = req.user.id;

        // Inserting company
        await insertCompanyModel({
            name,
            country,
            city,
            photo,
            userId,
        });

        const company = await selectCompanyByNameModel(name);

        res.send({
            status: 'ok',
            data: { id: company.id },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newCompanyController;
