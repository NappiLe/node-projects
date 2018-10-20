'use strict';

const path= require('path');
const express= require('express');
const app=express();

const server= require('http').Server(app);

const port= process.env.PORT ||5000;
const host= process.env.HOST ||'localhost';

//dont need to put public in from of express.static, subfolder will find it self
app.use(express.static(path.join(__dirname,'public')));


app.get('/', (req, res)=> res.sendFile(path.join(__dirname,'index.html')));

server.listen(port,host,()=>
/*eslint-disable no-console*/
  console.log(`Server ${host} on port ${port}`)
);
