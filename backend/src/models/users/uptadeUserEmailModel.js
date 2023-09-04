// Importing dependences
const bcrypt = require('bcrypt');

// Importing Db
const getDb = require('../../db/getDb');

// Importing services
const sendMailService = require('../../services/sendEmailService');

// Importing errors
const { invalidCredentialsError } = require('../../services/errorService');

// Function that performs a database query to update a user's email
const updateUserEmailModel = async (
    oldPass,
    newEmail,
    userId,
    registrationCode
) => {
    let connection;

    try {
        connection = await getDb();

        // Obtaining the user's current password
        const [users] = await connection.query(
            `SELECT password FROM users WHERE id = ?`,
            [userId]
        );

        // Checking if the old password matches the current one
        const validPass = await bcrypt.compare(oldPass, users[0].password);

        // If the passwords don't match we throw an error
        if (!validPass) {
            invalidCredentialsError();
        }

        // Updating email
        await connection.query(
            `UPDATE users SET email = ?,active = false,registrationCode = ? WHERE id = ?`,
            [newEmail, registrationCode, userId]
        );

        // Creating subject of the verification email
        const emailSubject = 'Validate your email';

        // Creating email content
        const emailBody = `
            Welcome! 

            Thank you for validating your new email. Click on the link below:

            <a href="http://localhost:8000/users/validate/${registrationCode}">Validate email</a>
        `;

        // Sending the verification email to the user
        await sendMailService(newEmail, emailSubject, emailBody);
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

module.exports = updateUserEmailModel;
