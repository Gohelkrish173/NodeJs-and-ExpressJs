const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}));

const students = [
    {
        id:1,
        name:'arjun',
        age:23,
        email:'arjun.bala@darshan.ac.in'
    },
    {
        id:2,
        name:'bala',
        age:32,
        email:'bala.arjun@darshan.ac.in'
    },
];

app.get('/students',(req,res)=>{
    res.send(students);
});


app.get('/students/:id',(req,res)=>{
    const idToGet = students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    res.send(students[idToGet]);
});

app.get('/students/search/:searchText',(req,res)=>{
    res.send(students.filter(stu=>stu.name.indexOf(req.params.searchText)>-1));
});

app.post('/students',(req,res)=>{
    students.push(req.body);
    res.send(students);
});

// app.patch('/students/:id',(req,res)=>{
//     const n = students.findIndex((stu)=>{
//         if(stu.id==req.params.id){
//             return true;
//         }
//     }); 
//     students[n] = req.body;
//     res.send(students);
// });
app.delete('/students/:id',(req,res)=>{
    const idToDelete = students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    students.splice(idToDelete,1);
    res.send(students);
});
app.patch('/students/:id',(req,res)=>{
    const idToUpdate = students.findIndex((stu)=>{
        if(stu.id==req.params.id){
            return true;
        }
    });
    data=req.body
    console.log(data);
    students[idToUpdate]={...students[idToUpdate],...data}  
    res.send(students);
})

app.listen(3000,()=>{
    console.log('Server started at  3000');
})