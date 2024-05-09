const mongoose = require('mongoose')
const mongoURL = 'mongodb+srv://ashutoshpaliwal26:Ashutosh*12@cluster0.st59pqi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const dbConnect = async() =>{
    try{
        await mongoose.connect(mongoURL);
        console.log("Connected Succesfully");
    }catch(err){
        console.log("----ERROR : ", err );
    }
}

module.exports = dbConnect;