module.exports = {
    cannotRateOwnCompanyError() {
        throw {
            httpStatus: 403, // Forbidden
            code: 'CANNOT_VOTE_OWN_ENTRY',
            message: 'You cannot vote your own entry',
        };
    },
    companyAlreadyRegisteredError() {
        throw {
            httpStatus: 409, // Conflict
            code: 'COMPANY_ALREADY_REGISTERED',
            message: 'This company is already created',
        };
    },
    deleteFileError() {
        throw {
            httpStatus: 409, // Conflict
            code: 'FILE_DELETED_FAILED',
            message: 'Error deleting file from disk',
        };
    },
    emailAlreadyRegisteredError() {
        throw {
            httpStatus: 409, // Conflict
            code: 'EMAIL_ALREADY_REGISTERED',
            message: 'This email is already created',
        };
    },
    employeeAlreadyExistsError() {
        throw {
            httpStatus: 409, // Conflict
            code: 'EMPLOYEE_ALREADY_EXISTS',
            message:
                'Employee already exists. You cannot create a new employee',
        };
    },
    invalidCredentialsError() {
        throw {
            httpStatus: 401, // Unauthorized
            code: 'INVALID_CREDENTIALS',
            message: 'Invalid credentials',
        };
    },
    isEmployeeValidatedError() {
        throw {
            httpStatus: '400', // Bad request
            code: 'EMPLOYEE_NOT_VALIDATED',
            message: 'Employee is not validated',
        };
    },
    isRecoverPassForgottenValidError() {
        throw {
            httpStatus: '400', // Bad request
            code: 'PASS_NOT_VALIDATED',
            message: 'Pass is not validated',
        };
    },
    notAuthenticatedError() {
        throw {
            httpStatus: 401, // Unauthorized
            code: 'NOT_AUTHENTICATED',
            message: `You must send a token in the header 'Authorization'`,
        };
    },
    notFoundError(resource) {
        throw {
            httpStatus: 404, // Not Found
            code: 'RESOURCE_NOT_FOUND',
            message: `Required resource '${resource}' doesn't exist`,
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
    ratingAlreadyExistsError() {
        throw {
            httpStatus: 409, // Conflict
            code: 'VOTE_ALREADY_EXISTS',
            message:
                'It is not possible to vote more than once for the same entry',
        };
    },
};
