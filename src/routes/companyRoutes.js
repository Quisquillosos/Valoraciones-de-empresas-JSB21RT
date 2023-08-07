// Importing dependences
const express = require('express');
const router = express.Router();

// Importing middleware functions
const { authUser, userExists, companyExists } = require('../middlewares');

// Importing final controllers functions
const {
    editCompanyProfileController,
    getCompanyController,
    newCompanyController,
    listAllCompaniesController,
} = require('../controllers/companies');

const confirmEmployeeController = require('../controllers/employees/confirmEmployeeController');

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

// Getting list of companies
router.get('/companies', listAllCompaniesController);

// Obtaining company's info
router.get('/companies/:companyId', getCompanyController);

module.exports = router;
