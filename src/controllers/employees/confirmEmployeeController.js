// Importing models
const updateEmployeeValidationCodeModel = require('../../models/employees/updateEmployeeValidationCodeModel');

// Final controller function validating a newly registered employee
const confirmEmployeeController = async (req, res, next) => {
    try {
        // Obtaining the validation code of the path params
        const { validationCode } = req.params;

        // Activating employee
        await updateEmployeeValidationCodeModel(validationCode);

        res.send({
            status: 'ok',
            message: 'Employee validated',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = confirmEmployeeController;
