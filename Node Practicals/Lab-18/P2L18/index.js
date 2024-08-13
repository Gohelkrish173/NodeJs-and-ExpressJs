const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req,res)=>{
  // res.statusCode = 200;
  // res.setHeader('Content-Type','text/html');

  if(req.url == "/"){
   fs.readFile('home.html',(err,data)=>{
    if(err)return err;
    res.write(data);
    return res.end();
   });
  }
  else if(req.url == "/about"){
    fs.readFile('about.html',(err,data)=>{
      if(err)return err;
      res.write(data);
      return res.end();
     });
  }
  else if(req.url == "/contact"){
    fs.readFile('contact.html',(err,data)=>{
      if(err)return err;
      res.write(data);
      return res.end();
    })
  }
  else{
    res.statusCode = 404;
    res.end('<h1>404 Not Found.</h1><p>A Page user want it does not exist.</p>')
  }
})

server.listen(port,(req,res)=>{
  console.log(`server at started in port of ${port}.`);
})