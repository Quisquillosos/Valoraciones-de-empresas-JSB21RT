// Importing dependences
const express = require('express');
const router = express.Router();

// Importing paths from users and companies
const userRoutes = require('./userRoutes');
const companyRoutes = require('./companyRoutes');
const ratingRoutes = require('./ratingRoutes');

// Indicating to express where the user routes and companies are located
router.use(userRoutes);
router.use(companyRoutes);
router.use(ratingRoutes);

module.exports = router;
