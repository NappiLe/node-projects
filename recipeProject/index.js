'use strict';

const path= require('path');
const express=require('express');
const app= express();
const user= require(path.join(__dirname,'./user.json'));
const server= require('http').Server(app);

const port= process.env.PORT || 3100;
const host= process.env.HOST ||'localhost';

app.use('/js', express.static(path.join(__dirname,'js')));
app.use('/style', express.static(path.join(__dirname,'style')));
app.use('/images', express.static(path.join(__dirname,'images')));
app.get('/', (req,res)=> res.sendFile(path.join(__dirname,'recipe.html')));
// app.use(express.static(path.join(__dirname,'html'))); //if wanna have HTML in one folder
app.get('/login',(req,res)=>res.sendFile(path.join(__dirname,'/login.html')));
app.get('/signup',(req,res)=>res.sendFile(path.join(__dirname,'/signup.html')));
app.get('/lostpassword',(req, res)=> res.sendFile(path.join(__dirname,'/lostpassword.html')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.post('/login', express.urlencoded({extended:false}),(req,res)=>{
  if(!req.body) return res.sendStatus(400);

  if(user[req.body.username]==[req.body.password]){
    res.render('login',{data:req.body, text:'Log in sucessfully', result:'You are now logged in'});
  }else{
    res.render('login',{data:req.body, text:'Incorrect password!', result:'Go back to login page and try again'});
  }
});

app.post('/sending', function(req,res){
  res.redirect('/');
});

server.listen(port,host,()=>
console.log(`Server ${host} on port ${port}`)
);
