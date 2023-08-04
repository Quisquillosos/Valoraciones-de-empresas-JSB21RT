// Importing getDb
const getDb = require('../../db/getDb');

// Importing errors
const { notFoundError } = require('../../services/errorService');

//Function that performs a database query to update
const updateEmployeeValidationCodeModel = async (validationCode) => {
    let connection;

    try {
        connection = await getDb();

        //Checking if there is a employee with that validation code
        const [employees] = await connection.query(
            `SELECT id FROM employees WHERE validationCode = ?`,
            [validationCode]
        );

        // If there is no employee with that validation code, we throw an error
        if (employees.length < 1) {
            notFoundError('employees');
        }

        // Updating employee
        await connection.query(
            `UPDATE employees SET confirmed = true, validationCode = null WHERE validationCode = ?`,
            [validationCode]
        );
    } finally {
        if (connection) connection.release();
    }
};

module.exports = updateEmployeeValidationCodeModel;
