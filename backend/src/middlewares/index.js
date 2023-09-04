const authUser = require('./authUser');
const companyExists = require('./companyExists');
const employeeAlreadyExists = require('./employeeAlreadyExists');
const isEmployeeValidated = require('./isEmployeeValidated');
const isRecoverPassForgottenValid = require('./isRecoverPassForgottenValid');
const userExists = require('./userExists');

module.exports = {
    authUser,
    companyExists,
    employeeAlreadyExists,
    isEmployeeValidated,
    userExists,
    isRecoverPassForgottenValid,
};
