// Importing dependences
const uuid = require('uuid');

// Importing getDb
const getDb = require('../../db/getDb');

// Importing errors
const { notFoundError } = require('../../services/errorService');
const sendMailService = require('../../services/sendEmailService');

// Function that performs a database query to insert a employee
const insertEmployeeModel = async (
    position,
    userId,
    companyId,
    validationCode
) => {
    let connection;

    try {
        connection = await getDb();

        await connection.beginTransaction();

        // Inserting a employee
        await connection.query(
            `INSERT INTO employees(id, position, userId, companyId, validationCode) VALUES(?, ?, ?, ?, ?)`,
            [uuid.v4(), position, userId, companyId, validationCode]
        );

        // Obtaining company owner email
        let [companyOwner] = await connection.query(
            `SELECT U.email FROM companies C
            INNER JOIN users U ON U.id = C.userId
            WHERE C.id = ?`,
            [companyId]
        );

        const email = companyOwner[0].email;

        // Creating subject of the confirmation email
        const emailSubject = 'Confirm your user';

        // Creating email content
        const emailBody = `
            Welcome!

            To validate your employee, click on the link below:

            <a href="http://localhost:8000/companies/employees/${validationCode}">Confirm the employee</a>
        `;

        // Sending the verification email to the user
        await sendMailService(email, emailSubject, emailBody);

        // if there was no problem, transaction confirmed via email
        await connection.commit();
    } catch (err) {
        // If there were any problems we undo all the changes in the database that we inserted (in the try block)
        await connection.rollback();

        throw err;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = insertEmployeeModel;
