const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const client = require('./src/database');
require('./src/user/user.controller').create()
require('dotenv').config();

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(bodyparser.urlencoded({extended: false})); //Optional
app.use(client.connect=()=>{
   console.log('Sure!')
});


app.get('/', (req, res)=>{
   return res.json({
      error: false,
      message: "Server is healthy!😊"
   });
});

app.listen(PORT, ()=>{
   console.log('http://localhost:3000/home')
});