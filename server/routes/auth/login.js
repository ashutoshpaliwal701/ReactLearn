const express = require('express');
const router = express.Router();

const {loginPage, loginFet} = require('../../controller/authentication/loginCont')

//Get Api for login page
router.get('/', loginPage);


//Post Api for login page
router.post('/', loginFet)

module.exports = router;