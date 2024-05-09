const express = require('express');
const router = express.Router();
const {loginFunction, userName} = require('../controller/loginFunction');

router.post('/', loginFunction);



router.get(`/api/${userName}`, (req,res)=>{
    res.send(`<h1>${userName}</h1>`);
})

module.exports = router;