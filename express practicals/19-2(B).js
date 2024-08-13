const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const type = 1;

if(type == 1){
  app.get('/',(req,res)=>{
    fs.readFile('home.html',(err,data)=>{
      if(err)return err;
      res.write(data);
      return res.send();
    });
  });
  
  app.get('/about',(req,res)=>{
    fs.readFile('about.html',(err,data)=>{
      if(err)return err;
      res.write(data);
      return res.send();
    });
  });
  
  app.get('/contact',(req,res)=>{
    fs.readFile('contact.html',(err,data)=>{
      if(err)return err;
      res.write(data);
      return res.send();
    });
  });
}

// else{
//   app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'home.html'));
//   });
//   app.get('/about',(req,res)=>{
//     res.sendFile(path.join(__dirname,'about.html'));
//   });
//   app.get('/contact',(req,res)=>{
//     res.sendFile(path.join(__dirname,'contact.html'));
//   });
// }
app.listen(3000,()=>{
  console.log("server start at 3000 port.");
})