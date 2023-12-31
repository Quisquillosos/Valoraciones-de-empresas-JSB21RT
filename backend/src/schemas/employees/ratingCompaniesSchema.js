// Importing dependences
const joi = require('joi');

// Modifying the joi error messages we need
const joiErrorMessages = {
    'string.base': 'The value of "{#key}" must be a string',
    'string.empty': 'The field "{#key}" must not be empty',
    'any.required': 'The field "{#key}" is required',
    'number.base': 'The value of "{#key}" must be a number',
    'number.min': 'The value of "{#key}" must be greater than or equal to 1',
    'number.max': 'The value of "{#key}" must be less than or equal to 5',
    'number.integer': 'The value of "{#key}" must be an integer',
};

// Creating the Joi schema where we check all the necessary properties
const ratingCompaniesSchema = joi.object({
    salary: joi
        .number()
        .integer()
        .min(1)
        .max(5)
        .required()
        .messages(joiErrorMessages),
    workEnvironment: joi
        .number()
        .integer()
        .min(1)
        .max(5)
        .required()
        .messages(joiErrorMessages),
    promotionPosibility: joi
        .number()
        .integer()
        .min(1)
        .max(5)
        .required()
        .messages(joiErrorMessages),
    accesibility: joi
        .number()
        .integer()
        .min(1)
        .max(5)
        .required()
        .messages(joiErrorMessages),
    review: joi.string().messages(joiErrorMessages),
});

module.exports = ratingCompaniesSchema;
