// Importing dependences
const joi = require('joi');

// Modifying the error messages of Joi as needed
const joiErrorMessages = {
    'string.base': 'The value of "{#key}" must be a string',
    'string.empty': 'The field "{#key}" must not be empty',
    'object.base': 'The value of "{#key}" must be an object',
    'number.base': 'The value of "{#key}" must be a number',
    'number.max': 'The file must not exceed 5 MB',
    'any.only': 'Only JPEG or PNG photos are allowed',
};

// Creating the Joi schema where we validate all the necessary properties
const editCompanyProfileSchema = joi.object({
    name: joi.string().messages(joiErrorMessages),
    country: joi.string().messages(joiErrorMessages),
    city: joi.string().messages(joiErrorMessages),
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

module.exports = editCompanyProfileSchema;
