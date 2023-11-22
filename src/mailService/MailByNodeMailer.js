const nodemailer = require('nodemailer');
const { MAIL_SERVICE, MAIL_AUTH_USER, MAIL_AUTH_PASS, CONTACT_FORM_MAIL_RECEVIER_EMAIL, CONTACT_FORM_MAIL_SUBJECT } = require('../configration/Configration');

const sendMail = async (requestData, mailTemplete) => {
    try {
        const transporter = nodemailer.createTransport({
            service: MAIL_SERVICE,
            auth: {
                user: MAIL_AUTH_USER,
                pass: MAIL_AUTH_PASS
            }
        });

        const mailOptions = {
            from: requestData.email,
            to: CONTACT_FORM_MAIL_RECEVIER_EMAIL,
            subject: CONTACT_FORM_MAIL_SUBJECT,
            html: mailTemplete(requestData)
        };

        const info = await transporter.sendMail(mailOptions);

        console.log('Email sent: ' + info.response);
        return { error: false, message: "Email sent successfully", data: info };
    } catch (error) {
        console.error(error);
        return { error: true, message: "Error in email sending" };
    }
};

module.exports = sendMail;
