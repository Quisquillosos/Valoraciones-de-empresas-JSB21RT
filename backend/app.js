// Execute method "config" of "dotenv"
require('dotenv').config();

// Importing dependences
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const morgan = require('morgan');

// Importing errors
const {
    errorController,
    notFoundController,
} = require('./src/controllers/errors');

// Importing routes
const routes = require('./src/routes');

// Creating server
const app = express();

// Middleware that displays info about the incoming request
app.use(morgan('dev'));

// Middleware to avoid conflicts between backend and frontend
app.use(cors());

// Middleware that tells Express which is the directory of static files
app.use(express.static(process.env.UPLOADS_DIR));

// Decrypts body in format "raw" creating the "body" property in the "request" object
app.use(express.json());

// Decrypts body in format "form-data" creating the "body" property and "files" property in the "request" object
app.use(fileUpload());

// Routes middleware
app.use(routes);

// Path middleware not found
app.use(notFoundController);

// Error middleware
app.use(errorController);

// Setting the server to listen for requests on a given port
app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
});
