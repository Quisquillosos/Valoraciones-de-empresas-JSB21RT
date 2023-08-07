// Importing dependences
const uuid = require('uuid');
const bcrypt = require('bcrypt');

// Importing getDb
const getDb = require('../../db/getDb');

// Importing services
const sendMailService = require('../../services/sendEmailService');

// Importing errors
const { emailAlreadyRegisteredError } = require('../../services/errorService');

// Function that performs a database query to create a new user
const insertUserModel = async ({
    firstName,
    lastName,
    email,
    password,
    registrationCode,
}) => {
    let connection;

    try {
        connection = await getDb();

        // Searching at the database a user with that email
        let [users] = await connection.query(
            `SELECT id FROM users WHERE email = ?`,
            [email]
        );

        // If there is any user with that email we throw an error
        if (users.length > 0) {
            emailAlreadyRegisteredError();
        }

        // Starting a transaction with the database to be able to delete the user in case the email fails to be sent
        await connection.beginTransaction();

        // Encrypting password
        const hashedPass = await bcrypt.hash(password, 10);

        // Inserting an user
        await connection.query(
            `INSERT INTO users(id, email, password, registrationCode,firstName,lastName) VALUES(?, ?, ?, ?, ?, ?)`,
            [
                uuid.v4(),
                email,
                hashedPass,
                registrationCode,
                firstName,
                lastName,
            ]
        );

        // Creating subject of the verification email
        const emailSubject = 'Activate your user';

        const emailBody = `
            ¡Welcome ${firstName}!

            Thank you for registering with Valoraciones de empresas. To activate your account, click on the link below:

            <a href="http://localhost:8000/users/validate/${registrationCode}">Activate account</a>
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

module.exports = insertUserModel;
