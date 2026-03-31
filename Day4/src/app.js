const express = require('express')
const app=express()
app.use(express.json()) // *   this is a middle ware
const note =[]
app.get('/',(req,res)=>{
  res.send(note)
})
app.post('/',(req,res)=>{
  console.log(req.body)
  note.push(req.body)
  res.send('node created')
})
app.delete('/:index',(req,res)=>{
  delete note[req.params.index]
  res.send('node deleted sucessfully')
  console.log(req.params.index) // todo : we use params to get dynamic data , if we use : then we much use params
})
app.patch('/:index',(req,res)=>{
  note[req.params.index].description = req.body.description
  console.log()
  res.send(req.params.index + " is updated")

})

module.exports=app 