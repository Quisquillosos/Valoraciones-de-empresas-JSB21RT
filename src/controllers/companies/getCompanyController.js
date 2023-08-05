// Importing models
const selectCompanyByIdModel = require('../../models/companies/selectCompanyByIdModel');

const getCompanyController = async (req, res, next) => {
    try {
        // Obtaining the company id from the path params
        const { companyId } = req.params;

        // Obtaining the company's data
        const companies = await selectCompanyByIdModel(companyId);

        // Deleting the company's private data
        delete companies.id;
        delete companies.userId;

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
