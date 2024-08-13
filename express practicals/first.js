const { log } = require('console');
const express = require('express');

const app = express();

const students = ['arjun','bala'];

app.get('/students',(req,res)=>{
    res.send(students);
});

app.post('/students/:name',(req,res)=>{
    students.push(req.params.name);
    res.send(students);
});

app.patch('/students/:index/:name',(req,res)=>{
    students[req.params.index] = req.params.name;
    res.send(students);
});
app.delete('/students/:index',(req,res)=>{
    students.splice(req.params.index,1);
    res.send(students);
});

app.listen(3000,()=>{
    log('Server started at  3000');
})