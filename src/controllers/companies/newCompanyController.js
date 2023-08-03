// Importing models
const insertCompanyModel = require('../../models/companies/insertCompanyModel');

// Final controller function to create a new user
const newCompanyController = async (req, res, next) => {
    try {
        // Obtaining data from body
        const { name, country, city } = req.body;

        // Obtaining photo from req.files
        const photo = req.files.photo;

        // Obtaining userId from req.user
        const userId = req.user.id;

        // Inserting user
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
