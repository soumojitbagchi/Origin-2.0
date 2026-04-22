const express = require("express");
const Note = require("./model/test.model");
const Cors=require('cors')
const App = express();
App.use(express.json());
App.use(Cors())
App.use(express.static('./public')) // expose file in backend server
/**
 *! we can render all the data from any folder using express.static('./location')
* ! but to get this make sure that you go the dist file by typing the npm run build on powershell , which make a replica of total frontEnd but using HTML,CSS,JS
 * ? after gettting this paste it to public folder on backEnd folder 
 * 
 */
/**
 * we use it to make a new node to store database
 */
App.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;
  const note = await Note.create({ title, description });
  res.status(201).json({
    Massage: "note created sucessfully",
    note,
  });
});
/**
 * we use it to fetch node data from databse
 */
App.get("/api/notes",async (req,res)=>{
  const note= await Note.find() // find return data in arrayobject format
  res.status(200).json({
    Massage:"fetched sucessfully",
    note
  })
})
/*
  delete the node using the id 
  use req.params.id 
*/
App.delete('/api/notes/:id',async (req,res)=>{
  await Note.findByIdAndDelete(req.params.id)

  res.status(200).json({
    Massage:"data deleted sucessfully"
  })

})
/**
 * we use this operation to update a node 
 * 
 */

App.patch('/api/notes/:id',async (req,res)=>{ 
  const {description}=req.body
  const note=await Note.findByIdAndUpdate(req.params.id,{description})
  res.status(200).json({
    Massage:"description update sucessfully",
    note
  })

})
module.exports = App;
