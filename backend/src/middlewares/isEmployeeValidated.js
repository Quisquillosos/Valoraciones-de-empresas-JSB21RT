// Importing db
const getDb = require('../db/getDb');

// Importing errors
const { isEmployeeValidatedError } = require('../services/errorService');

// Intermediate controller function that checks if the employee is validated
const isEmployeeValidated = async (req, res, next) => {
    try {
        let connection;

        connection = await getDb();

        const [active] = await connection.query(
            `SELECT confirmed FROM employees WHERE userId = ?`,
            [req.user.id]
        );

        if (active[0].confirmed) {
            next();
        } else {
            isEmployeeValidatedError();
        }
    } catch (err) {
        next(err);
    }
};

module.exports = isEmployeeValidated;
