const {connectdb} = require('./contest_connect');
const express = require('express');
const controller = require('./contest.controller');
const cors = require('cors');
const app= express();
const port= 8080;
app.use(express.json());
app.use(cors());


connectdb()
    .then(()=>{console.log('db connected')})
    .catch((err)=>{console.log(err)});  
app.get('/user/phone_num/:pn',controller.getone);
app.post('/phone_num/',controller.insertdata);
app.delete('/api/book/:bookid',controller.delete);
app.put('/api/book/:bookid',controller.update);
app.listen(port,()=>{console.log("Listening at the port "+port)})
