const mongoose=require('mongoose')
const DataSchema=new mongoose.Schema({
  title:String,
  description:String,
  remark:String
})
const Data= mongoose.model('data',DataSchema)
module.exports=Data