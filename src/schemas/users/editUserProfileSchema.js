const joi = require('joi');

// Modify the error messages of Joi as needed
const joiErrorMessages = {
    'string.base': 'The value of "{#key}" must be a string',
    'string.empty': 'The field "{#key}" must not be empty',
    'number.base': 'The value of "{#key}" must be a number',
    'number.max': 'The file must not exceed 5 MB',
    'object.base': 'The value of "{#key}" must be an object',
    'any.only': 'Only JPEG or PNG photos are allowed',
};

// Create the Joi schema where we validate all the necessary properties
const editUserProfileSchema = joi.object({
    bio: joi.string().min(10).max(500).messages(joiErrorMessages),
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

module.exports = editUserProfileSchema;
