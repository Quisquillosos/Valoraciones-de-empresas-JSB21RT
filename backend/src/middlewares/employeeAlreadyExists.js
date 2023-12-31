// Importing getDb
const getDb = require('../db/getDb');

// Importing errors
const {
    notFoundError,
    employeeAlreadyExistsError,
} = require('../services/errorService');

// Intermediate controller function that throws an error if an employee with a given id does not exist
const employeeAlreadyExists = async (req, res, next) => {
    let connection;

    try {
        connection = await getDb();

        const companyId = req.params.companyId;

        const userId = req.user.id;
        
        // SELECT id FROM employees WHERE userId = ? AND companyId = ?
        const [employees] = await connection.query(
            `SELECT id FROM employees WHERE userId = ? AND companyId = ?`,
            [userId, companyId]
        );

        // Throwing an error if the employee does not exist
        if (employees.length > 0) {
            employeeAlreadyExistsError();
        }

        // Passing control to the next controlling function
        next();
    } catch (err) {
        next(err);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = employeeAlreadyExists;
