const express = require ("express");  //for create server
const mongoose = require("mongoose");  // for create db connnection

const app = express(); 
const PORT = 8000;

const DB_URL = 'mongodb+srv://namal:namal@merncrudyt01.xrcuuxl.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL).then(()  => {
    console.log("DB Connected")
}).catch((err) => {
    console.log("db connection error" , err)
})

app.listen(PORT , () => {
    console.log(`app is runnig on port ${PORT} `);
});




