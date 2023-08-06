// Importing dependences
const express = require('express');
const authUser = require('../middlewares/authUser');
const userExists = require('../middlewares/userExists');
const isEmployeeValidated = require('../middlewares/isEmployeeValidated');
const companyExists = require('../middlewares/companyExists');
const ratingCompaniesController = require('../controllers/companies/ratingCompaniesController');
const getCompanyRatingController = require('../controllers/companies/getCompanyRatingsController');
const getRatingEmployeeController = require('../controllers/employees/getRatingEmployeeController');
const router = express.Router();

// Obtaining rates
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
