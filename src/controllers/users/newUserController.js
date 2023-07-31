// Importing dependences
const randomstring = require('randomstring');

// Importing models
const insertUserModel = require('../../models/insertUserModel');

// Final controller function to create a new user
const newUserController = async (req, res, next) => {
    try {
        // Obtaining data from body
        const { firstName, lastName, email, password } = req.body;

        // Creating the registration code
        const registrationCode = randomstring.generate(30);

        // Inserting user
        await insertUserModel({
            firstName,
            lastName,
            email,
            password,
            registrationCode,
        });

        res.send({
            status: 'ok',
            message:
                'User created. Please, verify your account using email received',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = newUserController;
