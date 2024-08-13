//CRUD ARRAY USING EXPRESS
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}))

arr = [
    {
      "id": "1",
      "name": "Practical Concrete",
      "cost": "399.00"
    },
    {
      "id": "2",
      "name": "Handcrafted Plastic",
      "cost": "168.00"
    },
    {
      "id": "3",
      "name": "Elegant Plastic",
      "cost": "531.00"
    },
    {
      "id": "4",
      "name": "Elegant Bronze",
      "cost": "539.00"
    },
    {
      "id": "5",
      "name": "Small Granite Soap",
      "cost": "749.00"
    },
  ];


// GET ALL
app.get('/home', (req, res)=>{
    res.json(arr);
});

//GET BY ID
app.get('/home/:id', (req, res)=>{
    res.send(arr.find((e)=>{
        if(e.id == req.params.id){
            return e;
        }
    }));
});

//INSERT DATA
app.post('/home/add',(req, res)=>{
    const {id, name, cost} = req.body;
    const result = {
        "id":id,
        "name":name,
        "cost":cost
    }
    arr.push(result);
    res.json(arr);
});

//DELETE DATA
app.delete('/home/:id', (req, res)=>{
  const id = req.params.id;
  const result = arr.find(result => result.id = id);
  
  if(result){
    newArray = arr.filter(result => result.id != id);
    res.json(newArray);
  }else{
    res.send("Data not found...");
  }
});

//UPDATE DATA
app.patch('/home/:id', (req, res) => {
  const { id } = req.params;
  const { name, cost } = req.body;
  const item = arr.find(e => e.id === id);
  if (item) {
    item.name = name;
    item.cost = cost;
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

app.listen(7000, ()=>{
    console.log("Server Initialised....");
}); 