const userDetails = require('../models/userAuth');

const loginFunction = async(req,res)=>{
    const {email, password} = req.body;
    try{
        const userData = await userDetails.find({});
        console.log(userData);
        let userCheck = false;
        userData.map((userCred)=>{
            if(userCred.email === email){
                if(userCred.password === password){
                    userCheck = true;
                }
            }
        })
        if(userCheck){
            // Sending Responce in JSON
            res.status(200).send("You Are Logged In");
        }else{
            res.status(404).send("You are not Logged In");
        }
    }
    catch(err){
        console.log(err);
    }
}

module.exports = loginFunction;