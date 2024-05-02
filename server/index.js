const express = require('express');
const app = express();
const PORT = process.env.port || 3000;
const path = require('path')
const connectToDb = require('./config/connectionDb')
const login = require("./routes/auth/login");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

// Connect to data base.
connectToDb();

// Login Page Api
app.use('/login', login);

// Home Root of Applicaton 
app.get('/', (req,res)=>{
    res.send("Home");
})



// Application is Listening on a Port.
app.listen(PORT, ()=>{
    console.log(`||---- SERVER IS RUNNING ON PORT : ${PORT} ----||`);
})