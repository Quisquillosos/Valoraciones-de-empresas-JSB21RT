module.exports = {
    emailAlreadyRegisteredError() {
        throw {
            httpStatus: 409, // Conflict
            code: 'EMAIL_ALREADY_REGISTERED',
            message: 'This email is already created',
        };
    },
    deleteFileError() {
        throw {
            httpStatus: 409, // Conflict
            code: 'FILE_DELETED_FAILED',
            message: 'Error deleting file from disk',
        };
    },
    invalidCredentialsError() {
        throw {
            httpStatus: 401, // Unauthorized
            code: 'INVALID_CREDENTIALS',
            message: 'Invalid credentials',
        };
    },
    notAuthenticatedError() {
        throw {
            httpStatus: 401, // Unauthorized
            code: 'NOT_AUTHENTICATED',
            message: `You must send a token in the header'Authorization'`,
        };
    },
    notFoundError(resource) {
        throw {
            httpStatus: 404, // Not Found
            code: 'RESOURCE_NOT_FOUND',
            message: `Required resource'${resource}' doesn't exist`,
        };
    },
    pendingActivationError() {
        throw {
            httpStatus: 403, // Forbidden
            code: 'PENDING_ACTIVATION',
            message:
                'Activation user pending. Please, verify your account before continue.',
        };
    },
    saveFileError() {
        throw {
            httpStatus: 500, // Internal Server Error
            code: 'FILE_SAVE_FAILED',
            message: 'Error saving file to disk',
        };
    },
    sendEmailError() {
        throw {
            httpStatus: 500, // Internal server error
            code: 'SEND_EMAIL_FAILED',
            message: 'Error sending email',
        };
    },
};
