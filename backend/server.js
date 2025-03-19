const express = require('express');
const mongoose = require("mongoose");
const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(8080,async() => {
  try{
    await mongoose.connect("mongodb+srv://kadalimouryas89:3iZnt0ysjW59inSz@cluster0.tvfok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("server connected sucessfully");
  }catch (error){
    console.log(error);
  }
});