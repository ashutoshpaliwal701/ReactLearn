const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String, 
    phone_No : Number,
    age : Number
})

const userDetails = mongoose.model('users', userSchema);0

module.exports = userDetails;