const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));

const x = [
  { "foodname": "Small Wooden Soap", "id": "2" }
  ,{ "foodname": "Unbranded Frozen Mouse", "id": "3" }
  ,{ "foodname": "Incredible Soft Cheese", "id": "4" }
  ,{ "foodname": "Ergonomic Rubber Table", "id": "5" } 
  ,{ "foodname": "Recycled Fresh Fish", "id": "6" }
  ,{ "foodname": "Modern Plastic Pants", "id": "7" }
  ,{ "foodname": "Intelligent Granite Bike", "id": "8" }
  ,{ "foodname": "Intelligent Granite Cheese", "id": "9" }
  ,{ "foodname": "Small Plastic Sausages", "id": "10" }
  ,{ "foodname": "Licensed Plastic Pants", "id": "11" }
]

app.get('/',(req,res)=>{
  res.json(x);
})

app.get('/:id',(req,res)=>{
  res.send(x.find((e)=>e.id = req.params.id));
})

app.post('/add',(req,res)=>{
  const y = {
    "foodname" : req.body.foodname,
    "id" : req.body.id
  }
  x.push(y);
  res.send();
})

app.delete('/del/:id',(req,res)=>{
  const y = x.find((e)=>e.id == req.params.id);
  
  if(y){
    newx = x.filter((f)=>f.id == req.params.id);
    res.json(newx);
  }
  else{
    res.send("data not found.");
  }
})

app.listen(3000,()=>{
  console.log("server started.");
})