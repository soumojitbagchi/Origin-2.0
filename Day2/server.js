const express = require("express");
const app = express(); // create server instance
app.get('/',(req,res)=>{
  res.send('Hello world')
})
app.get('/about',(req,res)=>{
  res.send('this is about page')
})
app.get('/product',(req,res)=>{
  res.send('this is product page')
})
app.listen(3000); //start the server
