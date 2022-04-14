"use strict";
const nodemailer = require("nodemailer");

async function sendEmailToMe({senderName, senderEmail, phone, message}) {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    auth: {
      user: 'maklaut98@gmail.com', 
      pass: 'huxvrlorakfaslaq', 
    },
  });

  let info = await transporter.sendMail({
    from: 'maklaut98@gmail.com', 
    to: "maksym.zinchenko98@gmail.com", 
    subject: `${senderName} send you a message`, 
    text: `Email: ${senderEmail}, \n Phone: ${phone}, \n Phone: ${message}`, 
    html: `<b>Email: ${senderEmail}, <br> Phone: ${phone}, <br> message: ${message}, </b>`, 
  });
}
module.exports.sendEmailToMe = sendEmailToMe;
