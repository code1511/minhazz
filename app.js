const express = require("express");
const app = express();

const { MongoClient } = require('mongodb');

const password = "<Anchal>";
const uri = "mongodb+srv://code1511:Anchal@minhazdb.i0w7l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  // var dbo = db.db("mydb");
  // var obj ={name:"Ankur dubey",address:"varanasi"};
  // dbo.collection("customers").insertOne(obj,(err,res)=>{
  //   if(err) throw err;
  //   console.log("one value inserted");
  //   db.close();
  // })
  console.log("db is working fine");
  db.close();
});
app.get('/',(req,res)=>{
res.sendFile(__dirname+'./p.html');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
