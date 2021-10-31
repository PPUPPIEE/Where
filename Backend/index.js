const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const getProvince = require('./route/getProvince')
mongoose.connect("mongodb+srv://NewXI:NewXI@cluster0.xthd5.mongodb.net/where")
.then(()=>console.log("DB connect Successful"))
.catch((err)=>{console.log(err)});

app.use("/api/province",getProvince)

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})