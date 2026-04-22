const App=require("./src/App")
const ConnectToDb=require('./src/Database/Database')
require("dotenv").config()
ConnectToDb();
App.listen(3000,()=>{
  console.log("connected to 3000 port")
})
