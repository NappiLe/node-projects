'use strict';
const http= require ('http');
const path= require ('path');
const express= require('express');
const app=express();

const port=3000;
const host='localhost';

const server=http.createServer(app);

app.set('view engine', 'ejs'); // without this it cant process the ejs file
app.set('views', path.join(__dirname, 'views'));// 1st views has to be views, 2ndviews can be change the name to xyz whatever u want, the same sa views folder Name

app.get('/', (req, res)=>
  res.sendFile(path.join(__dirname, 'index.html'))
);

app.post('/persondata', express.urlencoded({extended: false}),(req,res)=>{
  if(!req.body) return res.sendStatus(400);
  res.render('result',{data:req.body, title:'Response',
    text:'Person data:', nameArray:['Mike', 'Mary','Leila']});
});

server.listen(port, host,()=>
console.log(`Serving port ${port}`)
);
