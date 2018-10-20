'use strict';
const http= require('http');
const path=require('path');
const express=require('express');
const app=express();
const users=require(path.join(__dirname,'./users.json'));

const port=3001;
const host='localhost';

const server=http.createServer(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'myviews'));

app.get('/', (req, res)=>
  res.sendFile(path.join(__dirname, 'index.html'))
);

app.post('/login', express.urlencoded({extended:false}),(req, res)=>{
  if(!req.body) return res.sendStatus(400);


  if(users[req.body.username]==[req.body.password]){
    res.render('result',{data:req.body, title:'Login page',
      text:'Correct password', result:' Login sucessful'});
  }else{
    res.render('result',{data:req.body,title:'Login page',
      text:'Incorrect password!!! Please try again',result:'******'});
  }
});


server.listen(port, host,()=>
console.log(`Serving host {port}`)
);
