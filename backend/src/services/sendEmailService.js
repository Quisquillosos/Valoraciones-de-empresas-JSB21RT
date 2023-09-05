// Importing dependences
const nodemailer = require('nodemailer');

// Importing errors
const { sendEmailError } = require('./errorService');

// Obtaining environment variables needed
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

// Creating a transport to send email with nodemailer
const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
});

// Function that sends an email to the user
const sendMailService = async (email, subject, body) => {
    try {
        const mailOptions = {
            from: SMTP_USER,
            to: email,
            subject,
            text: body,
        };

        await transport.sendMail(mailOptions);
    } catch {
        sendEmailError();
    }
};

module.exports = sendMailService;
