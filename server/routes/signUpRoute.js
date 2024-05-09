const express = require('express');
const router = express.Router();
const signUpControl = require('../controller/signUpControl');

router.post('/', signUpControl);

module.exports = router;