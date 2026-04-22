const mongoose=require("mongoose");
function ConnectToDb(){
  mongoose.connect(process.env.Mongo_URI).then(()=>{
    console.log("Connected to the Database")
  })
}
module.exports=ConnectToDb