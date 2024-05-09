const express = require('express')
const router = express.Router();
const logOutFunction = require("../controller/logOutFunction");

router.get('/', logOutFunction);

module.exports = router;

