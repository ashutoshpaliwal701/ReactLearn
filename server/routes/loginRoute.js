const express = require('express');
const router = express.Router();
const loginFunction = require('../controller/loginFunction');

router.post('/' , loginFunction);

module.exports = router;