// Importing models
const selectCompanyByIdModel = require('../../models/companies/selectCompanyByIdModel');
const insertRatingCompaniesModel = require('../../models/companies/insertRatingCompaniesModel');

// Importing errors
const { cannotRateOwnCompanyError } = require('../../services/errorService');

// Final controller function that allows to rate an asp
const ratingCompaniesController = async (req, res, next) => {
    try {
        const { companyId } = req.params;

        const { salary, workEnvironment, promotionPosibility, accesibility } =
            req.body;

        console.log('holaaaaa', salary, 'tipo de', typeof salary);
        console.log('holaaaaa' + workEnvironment);
        console.log('holaaaaa' + promotionPosibility);
        console.log('holaaaaa' + accesibility);
        // Obtaining the details of the company
        const company = await selectCompanyByIdModel(companyId);

        // If we are the owners of the company we launch an error
        if (company.userId === req.user.id) {
            cannotRateOwnCompanyError();
        }

        console.log('HOLAAAA', salary, 'tipo de', typeof salary);
        // Insert the rate and obtaining the new average
        const ratingAvg = await insertRatingCompaniesModel(
            salary,
            workEnvironment,
            promotionPosibility,
            accesibility,
            req.user.id,
            companyId
        );

        res.send({
            status: 'ok',
            data: {
                ratingAvg,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = ratingCompaniesController;
