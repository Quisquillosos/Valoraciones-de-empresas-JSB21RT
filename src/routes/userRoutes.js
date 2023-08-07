// Importing dependences
const express = require('express');
const router = express.Router();

const {
    userExists,
    authUser,
    isRecoverPassForgottenValid,
    companyExists,
    employeeAlreadyExists,
} = require('../middlewares');

// Importing final controller functions
const {
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
} = require('../controllers/users');
const { newEmployeeController } = require('../controllers/employees');

// Creating a user pending activation
router.post('/users/register', newUserController);

// Validating a user
router.put('/users/validate/:registrationCode', validateUserController);

// User login
router.post('/users/login', loginUserController);

// Obtaining a public profile of a user
router.get('/users/:userId', userExists, getUserProfileController);

// Obtaining a private profile of a user
router.get('/users', authUser, userExists, getOwnUserController);

// Updating password of a user
router.put('/users/password', authUser, userExists, editUserPassController);

// Updating email
router.put('/users/email', authUser, userExists, editUserEmailController);

// Sending password recovery email
router.post('/users/password/recover', sendRecoverPassController);

// Resetting password
router.put(
    '/users/password/reset/:recoverPassCode',
    authUser,
    isRecoverPassForgottenValid,
    editForgottenPassController
);

// Updating photo or bio
router.put('/users/profile', authUser, userExists, editUserProfileController);

// Creating an employee with pending confirmation
router.post(
    '/users/employee/:companyId',
    authUser,
    userExists,
    companyExists,
    employeeAlreadyExists,
    newEmployeeController
);

module.exports = router;
