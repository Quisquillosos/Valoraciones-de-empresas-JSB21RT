// Importing dependences
const mysql = require('mysql2/promise');

// Getting environment variables from ".env"
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB } = process.env;

// Variable storing an array of connections
let pool;

// Function that returns one of the 10 free connections from database
const getDb = async () => {
    try {
        if (!pool) {
            // Creating a connection with database
            const dbConnection = await mysql.createConnection({
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASS,
            });

            await dbConnection.query(
                `CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}`
            );

            // Creating a group of connections
            pool = mysql.createPool({
                connectionLimit: 10,
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASS,
                database: MYSQL_DB,
                timezone: 'Z',
            });
        }

        // Returning free connection with database
        return await pool.getConnection();
    } catch (err) {
    console.error(err);
}
}

// Exporting function
module.exports = getDb;