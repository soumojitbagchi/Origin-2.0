const express = require('express')
const app = express()
app.use(express.json())
const info=[]
app.listen(8000,()=>{
  console.log('8000 is running')
})
app.post('/info',(req,res)=>{
  info.push(req.body)
  res.send('node is created')
})
app.get('/info',(req,res)=>{
  res.send(info)
})