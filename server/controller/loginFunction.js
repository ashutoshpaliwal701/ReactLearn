const session = require('express-session');
const userDetails = require('../models/userAuth');

const getData = async()=>{
    try{
        const data = await userDetails.find({});
        return data;
    }catch(err){
        console.log(err);
    }
}




const loginFunction = async(req,res)=>{
    try{
        const {email, password} = req.body;
        console.log(email, password);
        const userData = await getData();
        console.log(userData);
        let userCheck = false;
        userData.map((userCred)=>{
            if(userCred.email === email){
                if(userCred.password === password){
                    userEmail = userCred.email;
                    userCheck = true;
                }
            }
        })
        if(userCheck){
            // Sending Responce in JSON
            res.status(200).redirect(`/profile`);
        }else{
            res.status(404).send("You are not Logged In");
        }
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {loginFunction};