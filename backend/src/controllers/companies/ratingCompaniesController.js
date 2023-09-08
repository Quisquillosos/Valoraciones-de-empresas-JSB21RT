// Importing models
const selectCompanyByIdModel = require('../../models/companies/selectCompanyByIdModel');
const insertRatingCompaniesModel = require('../../models/companies/insertRatingCompaniesModel');

// Importing services
const validateSchemaService = require('../../services/validateSchemaService');

// Importing errors
const { cannotRateOwnCompanyError } = require('../../services/errorService');

// Importing Schemas
const ratingCompaniesSchema = require('../../schemas/employees/ratingCompaniesSchema');

// Final controller function that allows to rate an aspect of the company
const ratingCompaniesController = async (req, res, next) => {
    try {
        const { companyId } = req.params;

        const {
            salary,
            workEnvironment,
            promotionPosibility,
            accesibility,
            review,
        } = req.body;

        await validateSchemaService(ratingCompaniesSchema, req.body);

        // Obtaining the details of the company
        const company = await selectCompanyByIdModel(companyId);
        console.log('HOLAAA');

        // If we are the owners of the company we launch an error
        if (company.userId === req.user.id) {
            cannotRateOwnCompanyError();
        }

        // Insert rating and obtaining the new average
        const ratingAvg = await insertRatingCompaniesModel(
            salary,
            workEnvironment,
            promotionPosibility,
            accesibility,
            review,
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
