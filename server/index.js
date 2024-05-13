const express = require('express');
const session = require("express-session");
const app = express();
const path = require('path');
const PORT = 8000;
const filePath = path.join(__dirname, "../public/index.html");
const dbConnect = require('./config/dbConnect');
const bodyParser = require('body-parser');
const loginRoute = require('./routes/loginRoute');
const signUpRoute = require('./routes/signUpRoute');
const logOutRoute = require('./routes/logOutRoute');
const cors = require('cors')
app.use(cors());

dbConnect();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Session setup
app.use(session({
    secret: '123',
    resave: false,
    saveUninitialized: true
}));



app.use('/login', loginRoute);
app.use('/signup', signUpRoute);
app.use('/logout', logOutRoute);

app.get('/',(req,res)=>{
    res.sendFile(filePath);
})


app.listen(PORT,()=>{
    console.log("APP is running on port 8000");
})