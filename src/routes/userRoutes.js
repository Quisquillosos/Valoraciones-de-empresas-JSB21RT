// Importing dependences
const express = require('express');
const router = express.Router();

// Importing final controller functions
const newUserController = require('../controllers/users/newUserController');
const validateUserController = require('../controllers/users/validateUserController');
const loginUserController = require('../controllers/users/loginUserController');
const userExists = require('../middlewares/userExists');
const getUserProfileController = require('../controllers/users/getUserProfileController');
const authUser = require('../middlewares/authUser');
const getOwnUserController = require('../controllers/users/getOwnUserController');
const editUserPassController = require('../controllers/users/editUserPassController');

// Creating a user pending activation
router.post('/users/register', newUserController);

// Validating a user
router.put('/users/validate/:registrationCode', validateUserController);

// User login
router.post('/users/login', loginUserController);

// Obtaining a public profile of a user
router.get('/users/:userId', userExists, getUserProfileController);

// Obtaining a private profile of a user
router.get('/users', authUser , userExists, getOwnUserController);

// Updating password of a user
router.put('/users/password', authUser, userExists, editUserPassController);

module.exports = router;
