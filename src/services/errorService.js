module.exports = {
    emailAlreadyRegisteredError() {
        throw {
            httpStatus: 409, // Conflict
            code: 'EMAIL_ALREADY_REGISTERED',
            message: 'El email ya está registrado',
        };
    },
    sendEmailError() {
        throw {
            httpStatus: 500, // Internal server error
            code: 'SEND_EMAIL_FAILED',
            message: 'Error al enviar email',
        };
    },
};
