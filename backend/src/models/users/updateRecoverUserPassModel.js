// Importing Db
const getDb = require('../../db/getDb');

// Importing services
const sendMailService = require('../../services/sendEmailService');

// Function that performs a database query to recover a user's password
const updateRecoverUserPassModel = async (email, recoverPassCode) => {
    let connection;

    try {
        connection = await getDb();

        // Starting a transaction with the database to be able to delete the changes we insert in the database if something goes wrong
        await connection.beginTransaction();

        // Updating email
        await connection.query(
            `UPDATE users SET recoverPassCode = ? WHERE email = ?`,
            [recoverPassCode, email]
        );

        const emailSubject = 'Recover your password';

        const emailBody = `
            Hello again! 

            To recover your password click on the link below:

            <a href="http://localhost:8000/users/password/reset/${recoverPassCode}">Recover password</a>
        `;

        // Sending the recovering password email to the user
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

module.exports = updateRecoverUserPassModel;
