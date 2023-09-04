// Importing dependences
const joi = require('joi');

// Modifying the error messages of Joi as needed
const joiErrorMessages = {
    'string.base': 'The value of "{#key}" must be a string',
    'any.required': 'The field "{#key}" is required',
    'string.empty': 'The field "{#key}" must not be empty',
};

// Creating the Joi schema where we validate all the necessary properties
const newEmployeeSchema = joi.object({
    position: joi.string().required().messages(joiErrorMessages),
});

module.exports = newEmployeeSchema;
