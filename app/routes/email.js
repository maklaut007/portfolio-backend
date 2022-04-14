const express = require('express');
const router = express.Router();

const EmailsController = require('../controllers/email')

router.post('/', EmailsController.sendMail);

module.exports = router;