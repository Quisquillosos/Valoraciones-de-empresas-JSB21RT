// Reading ".env" file with "dotenv"
require('dotenv').config();

// Import getDb
const getDb = require('./getDb');

// Main function
const main = async () => {
    // Variable storing a connection
    let connection;

    try {
        connection = await getDb();

        console.log('Borrando tablas...'); //! acordarse de borrar

        await connection.query(
            'DROP TABLE IF EXISTS employees, ratingCompanies, companies, users'
        );

        console.log('Creando tablas...'); //! acordarse de borrar

        // Creating users table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS users (
                id CHAR(36) PRIMARY KEY NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password VARCHAR(100) UNIQUE NOT NULL,
                firstName VARCHAR(50) NOT NULL,
                lastName VARCHAR(100) NOT NULL,
                active BOOLEAN DEFAULT false,
                photo CHAR(40),
                bio TEXT,
                registrationCode CHAR(30),
                recoverPassCode CHAR(10),
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, 
                modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
            )	
        `);

        // Creating companies table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS companies (
                id CHAR(36) PRIMARY KEY NOT NULL,
                photo CHAR(40) NOT NULL,
                name VARCHAR(100) UNIQUE NOT NULL,
                country VARCHAR(100) NOT NULL,
                city VARCHAR(100) NOT NULL,
                userId CHAR(36) NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, 
                modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (userId) REFERENCES users(id)
            )
        `);

        // Creating ratingCompanies table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS ratingCompanies (
                id CHAR(36) PRIMARY KEY NOT NULL,
                salary TINYINT UNSIGNED NOT NULL,
                workEnvironment TINYINT UNSIGNED NOT NULL,
                promotionPosibility TINYINT UNSIGNED NOT NULL,
                accesibility TINYINT UNSIGNED NOT NULL,
                companyId CHAR(36) NOT NULL,
                userId CHAR(36) NOT NULL,
                FOREIGN KEY (companyId) REFERENCES companies(id),
                FOREIGN KEY (userId) REFERENCES users(id),
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Creating employees table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS employees (
                id CHAR(36) PRIMARY KEY NOT NULL,
                position VARCHAR(50) NOT NULL,
                userId CHAR(36) NOT NULL,
                companyId CHAR(36) NOT NULL,
                validationCode CHAR(30),
                confirmed BOOLEAN DEFAULT false,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (userId) REFERENCES users(id),
                FOREIGN KEY (companyId) REFERENCES companies(id)

            )
        `);
    } catch (err) {
        console.error(err);
    } finally {
        // If there is a connection it get released
        if (connection) connection.release();

        // Closing process
        process.exit();
    }
};

// Executing previous function
main();
