// Importing dependences
const express = require('express');

const {
    authUser,
    userExists,
    isEmployeeValidated,
    companyExists,
} = require('../middlewares');

// Importing final controller functions
const ratingCompaniesController = require('../controllers/companies/ratingCompaniesController');
const { getCompanyRatingController } = require('../controllers/companies');
const { getRatingEmployeeController } = require('../controllers/employees');

const router = express.Router();

// Rating company
router.post(
    '/ratings/companies/:companyId',
    authUser,
    userExists,
    companyExists,
    isEmployeeValidated,
    ratingCompaniesController
);

// Obtaining company ratings
router.get(
    '/ratings/companies/:companyId',
    companyExists,
    getCompanyRatingController
);

// Obtaining all ratings from an employee
router.get('/ratings/employees/:employeeId', getRatingEmployeeController);
module.exports = router;
