const joi = require('joi');

// Modify the error messages of Joi as needed
const joiErrorMessages = {
    'string.base': 'The value of "{#key}" must be a string',
    'any.required': 'The field "{#key}" is required',
    'string.empty': 'The field "{#key}" must not be empty',
    'object.base': 'The value of "{#key}" must be an object',
    'number.base': 'The value of "{#key}" must be a number',
    'number.max': 'The file must not exceed 5 MB',
    'any.only': 'Only JPEG or PNG photos are allowed',
};

// Create the Joi schema where we validate all the necessary properties
const newCompanySchema = joi.object({
    name: joi.string().required().messages(joiErrorMessages),
    country: joi.string().required().messages(joiErrorMessages),
    city: joi.string().required().messages(joiErrorMessages),
    photo: joi
        .object({
            name: joi.string().messages(joiErrorMessages),
            mimetype: joi
                .string()
                .valid('image/jpeg', 'image/png')
                .messages(joiErrorMessages),
            size: joi.number().max(5000000).messages(joiErrorMessages),
        })
        .unknown(true)
        .messages(joiErrorMessages),
});

module.exports = newCompanySchema;
