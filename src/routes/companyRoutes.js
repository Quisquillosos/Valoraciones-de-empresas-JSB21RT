// Importing dependences
const express = require('express');
const router = express.Router();

// Importing middleware functions
const authUser = require('../middlewares/authUser');
const userExists = require('../middlewares/userExists');
const companyExists = require('../middlewares/companyExists');

// Importing final controllers functions
const newCompanyController = require('../controllers/companies/newCompanyController');
const confirmEmployeeController = require('../controllers/employees/confirmEmployeeController');
const editCompanyProfileController = require('../controllers/companies/editCompanyProfileController');

// Creating new company
router.post('/companies', authUser, userExists, newCompanyController);

// Confirming employee
router.put('/companies/employee/:validationCode', confirmEmployeeController);

// Editing company profile
router.put(
    '/companies/profile/:companyId',
    authUser,
    userExists,
    companyExists,
    editCompanyProfileController
);

module.exports = router;
