// Importing models
const insertCompanyModel = require('../../models/companies/insertCompanyModel');
const newCompanySchema = require('../../schemas/companies/newCompanySchema');
const validateSchemaService = require('../../services/validateSchemaService');

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

        res.send({
            status: 'ok',
            message: 'Company created. Cheers mate',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newCompanyController;
