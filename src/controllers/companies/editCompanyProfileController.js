const jwt = require('jsonwebtoken');
require('dotenv').config();

// Importing models
const selectCompanyByNameModel = require('../../models/companies/selectCompanyByIdModel');
const updateCompanyProfileModel = require('../../models/companies/updateCompanyProfileModel');

// Importing services
const deletePhotoService = require('../../services/deletePhotoService');
const { invalidCredentialsError } = require('../../services/errorService');
const savePhotoService = require('../../services/savePhotoService');

const editCompanyProfileController = async (req, res, next) => {
    try {
        const { name, country, city } = req.body || '';

        const { companyId } = req.params;

        const ownerId = req.user.id;

        // Obtain the company's data to check if it already has a previous info
        const company = selectCompanyByNameModel(companyId);

        // Comparing token
        const decodedToken = jwt.verify(ownerId, process.env.SECRET);

        if (decodedToken.id !== company.userId) {
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

        updateCompanyProfileModel(
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

// La clave secreta con la que se firmaron los tokens JWT

// Supongamos que tienes un token JWT en la variable "userToken" y un objeto de usuario en "users[0]"
// const userToken = '...'; // El token JWT que deseas verificar

// try {
//     const decodedToken = jwt.verify(userToken, process.env.SECRET);

//     // Compara la información del token (por ejemplo, el ID de usuario) con los datos del usuario de la empresa
//     if (decodedToken.id === user.id) {
//         console.log('El token pertenece al usuario de la empresa.');
//     } else {
//         console.log('El token no pertenece al usuario de la empresa.');
//     }
// } catch (error) {
//     console.error('Error al verificar el token:', error.message);
// }
