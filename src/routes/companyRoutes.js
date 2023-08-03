// Importing dependences
const express = require('express');
const router = express.Router();

// Importing middleware functions
const authUser = require('../middlewares/authUser');
const userExists = require('../middlewares/userExists');

// Importing final controllers functions
const newCompanyController = require('../controllers/companies/newCompanyController');

// Creating new company
router.post('/companies', authUser, userExists, newCompanyController);

module.exports = router;
