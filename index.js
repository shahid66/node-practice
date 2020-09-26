const express = require('express');
var cors = require('cors')
const app = express()
app.use(cors())

const userInfo=['shahid','shovon','shadhin','sanji','toni'];

 app.get('/users/:id', function (req, res) {
    const id=req.params.id;
    const name=userInfo[id];
    res.send(name)
 });

// app.get('/users/:id',(req, res)=> {
//     const id=res.param.id;
//     const name=userInfo[id];
//     req.send(name);
//   })

app.listen(3000, ()=>console.log('start 3000 localhost'));
