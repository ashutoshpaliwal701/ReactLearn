const path = require('path')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('../../models/userCredentials')

// File path function to send responce to get request
const filePathUrl = path.join(__dirname, "../../componets/login.html");
const loginPage = async(req,res)=>{
    await res.sendFile(filePathUrl);
}

const loginFet = async (req,res) =>{

    const {email, password} = req.body;
        const initData = await User.find({});
        // console.log(initData);
        initData.map((ele)=>{
            if(ele.email === email && ele.password === password){
                res.send("User Login");
            }else{
                res.send("Check Credentials");
            }
        })
}

module.exports = {loginPage, loginFet};