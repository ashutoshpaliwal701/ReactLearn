const mongoose = require('mongoose');

// creating a userCredential Schema for User Authentication 
const userCred = new mongoose.Schema({
    email : String,
    password : String
})

// It is users module for Authentication
const User = mongoose.model('users', userCred);

module.exports = User;