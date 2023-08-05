// Importing models
const selectAllCompanyModel = require('../../models/companies/selectAllCompanyModel');

// Final controller function that returns the list of companies. Allows filtering by word
// Key
const listAllCompaniesController = async (req, res, next) => {
    try {
        const { keyword } = req.query;

        const companies = await selectAllCompanyModel(keyword);

        res.send({
            status: 'ok',
            data: {
                companies,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = listAllCompaniesController;
