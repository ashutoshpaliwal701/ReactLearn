const session = require('express-session');
const userDetails = require('../models/userAuth');






const loginFunction = async(req,res)=>{
    try{
        const {email, password} = req.body;
        console.log(email, password);
        
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {loginFunction};