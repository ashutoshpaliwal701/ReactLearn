const express = require('express');
const app = express();
const path = require('path');
const PORT = 8000;
const filePath = path.join(__dirname, "../public/index.html");
const dbConnect = require('./config/dbConnect');
const bodyParser = require('body-parser');
const loginRoute = require('./routes/loginRoute');
const signUpRoute = require('./routes/signUpRoute');


dbConnect();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/login', loginRoute);
app.use('/signup', signUpRoute)

app.get('/',(req,res)=>{
    res.sendFile(filePath);
})

app.listen(PORT,()=>{
    console.log("APP is running on port 8000");
})