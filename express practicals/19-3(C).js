const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const type = 1;

if(type == 1){
  app.get('/',(req,res)=>{
    fs.readFile('home.txt',(err,data)=>{
      if(err) return err;
      return res.send(data.toString());
    })
  });

  app.get('/about',(req,res)=>{
    fs.readFile('about.txt',(err,data)=>{
      if(err) return err;
      res.write(data);
      return res.send();
    })
  });

  app.get('/contact',(req,res)=>{
    fs.readFile('contact.txt',(err,data)=>{
      if(err) return err;
      res.write(data);
      return res.send();
    })
  });
}
// else{
//   app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'home.txt'));
//   });
//   app.get('/about',(req,res)=>{
//     res.sendFile(path.join(__dirname,'about.txt'));
//   });
//   app.get('/contact',(req,res)=>{
//     res.sendFile(path.join(__dirname,'contact.txt'));
//   });
// }

app.listen(3000,()=>[
  console.log("server start at port 3000.")
])