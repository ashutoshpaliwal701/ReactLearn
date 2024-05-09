const userDetails = require('../models/userAuth');

const signUpControl = async (req,res)=>{
    try{
        const {name, email, phoneNo, password, age} = req.body;
        const userData = await userDetails.find({});
        let userCreate = true;
        console.log(userData)
        userData.map((ele)=>{
            if(ele.email === email){
                userCreate = false;
            }
            console.log(ele.email===email);
        })
        if(userCreate){
            const newUser = new userDetails({name, email, age, phoneNo, password});
            await newUser.save();
            res.status(200).send("User Register");
        }else{
            res.status(404).send("User Already Exist");
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = signUpControl;