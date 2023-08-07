const editForgottenPassController = require('./editForgottenPassController');
const editUserEmailController = require('./editUserEmailController');
const editUserPassController = require('./editUserPassController');
const editUserProfileController = require('./editUserProfileController');
const getOwnUserController = require('./getOwnUserController');
const getUserProfileController = require('./getUserProfileController');
const loginUserController = require('./loginUserController');
const newUserController = require('./newUserController');
const sendRecoverPassController = require('./sendRecoverPassController');
const validateUserController = require('./validateUserController');

module.exports = {
    editForgottenPassController,
    editUserEmailController,
    validateUserController,
    sendRecoverPassController,
    newUserController,
    loginUserController,
    getUserProfileController,
    getOwnUserController,
    editUserProfileController,
    editUserPassController,
};
