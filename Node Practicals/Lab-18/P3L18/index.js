const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
  
  if(req.url == '/'){
    fs.readFile('home.txt',(err,data)=>{
      if(err)console.log(err);
      res.write(data);
      return res.end();
    });
  }

  else if(req.url == '/about'){
    fs.readFile('about.txt',(err,data)=>{
      if(err)console.log(err);
      res.write(data);
      return res.end();
    });
  }

  else if(req.url == '/contact'){
    fs.readFile('contact.txt',(err,data)=>{
      if(err)console.log(err);
      res.write(data);
      return res.end();
    });
  }

  else{
    res.end(
      "<h1>404 Error</h1>"+
      "<h3>Page Not Found</h3>");
  }

});

server.listen(3000,()=>{
  console.log("server started at 3000 port.");
})