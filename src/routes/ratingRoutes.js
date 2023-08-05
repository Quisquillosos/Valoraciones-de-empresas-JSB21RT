// Importing dependences
const express = require('express');
const authUser = require('../middlewares/authUser');
const userExists = require('../middlewares/userExists');
const isEmployeeValidated = require('../middlewares/isEmployeeValidated');
const companyExists = require('../middlewares/companyExists');
const selectCompanyByIdModel = require('../models/companies/selectCompanyByIdModel');
const ratingCompaniesController = require('../controllers/companies/ratingCompaniesController');
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

module.exports = router;
