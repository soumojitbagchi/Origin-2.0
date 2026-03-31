const express = require("express");
const app = express();
const note = [];
app.use(
  express.json(),
);
//   this line is use to make sure that the server can read the data from the client


 app.listen(3000, () => {
  console.log("the 3000 port is now online");
});

app.post("/notes", (req, res) => {
  console.log(req.body);
  note.push(req.body)
  res.send('note created');
});

app.get('/notes',(req,res)=>{
  res.send(note)

})