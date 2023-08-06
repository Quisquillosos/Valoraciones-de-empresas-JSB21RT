const joi = require('joi');

// Modify the error messages of Joi as needed
const joiErrorMessages = {
    'string.base': 'The value of "{#key}" must be a string',
    'any.required': 'The field "{#key}" is required',
    'string.empty': 'The field "{#key}" must not be empty',
    'string.email': 'Please provide a valid email address for "{#key}"',
    'string.pattern.base': 'The password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character for "{#key}"',
};

// Create the Joi schema where we validate all the necessary properties
const newUserSchema = joi.object({
    password: joi
        .string()
        .pattern(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[¡!$%^&*()_+|~=`{}:";'<>¿?,.])[a-zA-Z0-9¡!$%^&*()_+|~=`{}:";'<>¿?,.]{8,}$/
        )
        .required()
        .messages(joiErrorMessages),
    email: joi.string().email().required().messages(joiErrorMessages),
    firstName: joi.string().required().messages(joiErrorMessages),
    lastName: joi.string().required().messages(joiErrorMessages),
});

module.exports = newUserSchema;
