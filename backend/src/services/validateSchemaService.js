// Function that validates all schemas
const validateSchemaService = async (schema, body) => {
    try {
        await schema.validateAsync(body);
    } catch (err) {
        err.httpStatus = 400; 
        err.code = 'MISSING_FIELDS';
        throw err;
    }
};

module.exports = validateSchemaService;
