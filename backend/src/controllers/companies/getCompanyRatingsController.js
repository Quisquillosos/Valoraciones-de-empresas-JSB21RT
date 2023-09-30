// Importing models
const selectRatingByCompanyIdModel = require('../../models/companies/selectRatingByCompanyIdModel');

const getCompanyRatingController = async (req, res, next) => {
    try {
        // Obtaining the company id from the path params
        const { companyId } = req.params;

        // Obtaining the company's data
        const companies = await selectRatingByCompanyIdModel(companyId);

        // for (let i = 0; i < companies.length; i++) {
        //     delete companies[i].id;
        // }

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

module.exports = getCompanyRatingController;
