// Importing Db
const getDb = require('../../db/getDb');

// Function that performs a database query to select a user with a given email
const selectUserByEmailModel = async (email) => {
    let connection;
    
    try {
        connection = await getDb();
        // Checking if there is any user with the email address provided
        const [users] = await connection.query(
            `SELECT id, password, active FROM users WHERE email = ?`,
            [email] 
        );
        
            return users[0];
    } finally {
        if(connection) connection.release();
    }
};

module.exports = selectUserByEmailModel;