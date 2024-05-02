const mongoose = require('mongoose');


// Connection URL To connect mongodb Atlas

const urlMongo = "mongodb+srv://ashutoshpaliwal26:Ashutosh*12@cluster0.st59pqi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//connection to DATABASE mongodb

const connectToDb = async() =>{
    try{
        await mongoose.connect(urlMongo);
        console.log("||----- CONNECTED SUCCESFULLY TO DB ----||");
    }catch(err){ 
        console.error("<<<<<<------ ERROR --------->>>>>", err);
    }
}

module.exports = connectToDb;

