// Importing dependences
const uuid = require('uuid');

// Importing getDb
const getDb = require('../../db/getDb');

// Importing services
const sendMailService = require('../../services/sendEmailService');
const savePhotoService = require('../../services/savePhotoService');

// Importing errors
const {
    companyAlreadyRegisteredError,
} = require('../../services/errorService');

// Function that performs a database query to insert a new company
const insertCompanyModel = async ({ name, country, city, photo, userId }) => {
    let connection;

    try {
        connection = await getDb();

        // Searching at the database a company with that name
        let [companies] = await connection.query(
            `SELECT id FROM companies WHERE name = ?`,
            [name]
        );

        // If there is any company with that name we throw an error
        if (companies.length > 0) {
            companyAlreadyRegisteredError();
        }

        // Starting a transaction with the database to be able to delete the company in case the email fails to be sent
        await connection.beginTransaction();

        let photoName = await savePhotoService(photo, 100);

        // Inserting a company
        await connection.query(
            `INSERT INTO companies(id, photo, name, country, city, userId) VALUES(?, ?, ?, ?, ?, ?)`,
            [uuid.v4(), photoName, name, country, city, userId]
        );

        let [userCompany] = await connection.query(
            `
            SELECT U.email FROM companies C 
            INNER JOIN users U ON C.userId = U.id 
            WHERE C.name = ?
        `,
            [name]
        );

        const email = userCompany[0].email;

        // Creating subject of the verification email
        const emailSubject = 'Welcome to AwaitQ';

        // Creating email content
        const emailBody = `
            ¡Welcome ${name} to Valoracion de empresa!

        `;

        // Sending the verification email to the company
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

module.exports = insertCompanyModel;
