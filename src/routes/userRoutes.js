// Importing dependences
const express = require('express');
const router = express.Router();

// Importing final controller functions
const newUserController = require('../controllers/users/newUserController');
const validateUserController = require('../controllers/users/validateUserController');
const loginUserController = require('../controllers/users/loginUserController');

// Creating a user pending activation
router.post('/users/register', newUserController);

// Validating a user
router.put('/users/validate/:registrationCode', validateUserController);

//User login
router.post('/users/login', loginUserController);


module.exports = router;
