// Importing dependences
const randomstring = require('randomstring');

// Importing models
const insertEmployeeModel = require('../../models/employees/insertEmployeeModel');

insertEmployeeModel;

// Final controller function to create a new company
const newEmployeeController = async (req, res, next) => {
    try {
        // Obtaining data from body
        const { position } = req.body;

        // Obtaining validation Code
        const { companyId } = req.params;

        // Obtaining userId from req.user
        const userId = req.user.id;

        // Creating the validation code
        const validationCode = randomstring.generate(30);

        // Inserting employee
        await insertEmployeeModel(position, userId, companyId, validationCode);

        res.send({
            status: 'ok',
            message: 'Employee created. Cheers mate',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newEmployeeController;
