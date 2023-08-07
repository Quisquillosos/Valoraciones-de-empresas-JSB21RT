// Importing models
const updateCompanyProfileModel = require('../../models/companies/updateCompanyProfileModel');
const selectCompanyByIdModel = require('../../models/companies/selectCompanyByIdModel');

// Importing services
const deletePhotoService = require('../../services/deletePhotoService');
const { invalidCredentialsError } = require('../../services/errorService');
const savePhotoService = require('../../services/savePhotoService');
const validateSchemaService = require('../../services/validateSchemaService');
const editCompanyProfileSchema = require('../../schemas/companies/editCompanyProfileSchema');

const editCompanyProfileController = async (req, res, next) => {
    try {
        const { name, country, city } = req.body || '';

        const { photo } = req.files || {};

        const data = { name, country, city, photo };

        await validateSchemaService(editCompanyProfileSchema, data);

        const { companyId } = req.params;

        const ownerId = req.user.id;

        // Obtain the company's data to check if it already has a previous info
        const company = await selectCompanyByIdModel(companyId);

        if (ownerId !== company.userId) {
            invalidCredentialsError();
        }

        let photoName;

        //  Checking if the company has passed us a photo or not
        if (req.files?.photo) {
            // If the company has passed us a photo, we delete the previous photo and insert the new one.

            if (company.photo) {
                await deletePhotoService(company.photo);
            }
            // Inserting new photo
            photoName = await savePhotoService(req.files.photo, 100);
        }

        await updateCompanyProfileModel(
            name,
            country,
            city,
            photoName || '',
            companyId
        );

        res.send({
            status: 'ok',
            message: 'Company updated',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = editCompanyProfileController;
