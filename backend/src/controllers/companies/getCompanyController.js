// Importing models
const selectCompanyByIdModel = require('../../models/companies/selectCompanyByIdModel');
const { notFoundError } = require('../../services/errorService');

const getCompanyController = async (req, res, next) => {
    try {
        // Obtaining the company id from the path params
        const { companyId } = req.params;

        // Obtaining the company's data
        const companies = await selectCompanyByIdModel(companyId);

        if (!companies) notFoundError('company');

        // Deleting the company's private data
        delete companies.id;

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

module.exports = getCompanyController;
