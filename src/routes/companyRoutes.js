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
const listAllCompaniesController = require('../controllers/companies/listAllCompaniesController');
const getCompanyController = require('../controllers/companies/getCompanyController');

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
