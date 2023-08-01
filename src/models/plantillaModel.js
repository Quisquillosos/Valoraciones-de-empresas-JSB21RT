// Importing getDb
const getDb = require('../db/getDb');

// Importing errors
const { notFoundError } = require('../services/errorService');

// Function that performs a database query to activate a user
const plantilla = async (registrationCode) => {
    let connection;
    try {
        connection = await getDb();
    } finally {
        if (connection) connection.release();
    }
};

module.exports = plantilla;
