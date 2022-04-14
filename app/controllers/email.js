const nodemailer = require('nodemailer');

const {sendEmailToMe} = require('../helpers/sendEmail');


async function sendMail(req, res, next) { 
	console.log(req.body);
	try {
		sendEmailToMe({
			senderName: req.body.name,
			senderEmail: req.body.email,
			phone: req.body.phone,
			message: req.body.message}
		).catch(console.error);
	return res.status(250).json({
		message: "Email delivered"
	});
	} catch (error){
		return res.status(400).json({ error: error.toString() });
	}
	
}

module.exports.sendMail = sendMail;



