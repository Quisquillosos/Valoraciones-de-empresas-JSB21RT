// Importing getDb
const getDb = require('');

// Importing errors
const { notFoundError } = require('../services/errorService');

// Function that performs a database query to activate a user
const insertEmployeeModel = async (position, userId, companyId) => {
    let connection;
    
    try {
        connection = await getDb();

        
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertEmployeeModel;
