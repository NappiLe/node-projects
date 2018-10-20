'use strict';

const fs=require('fs');
const path=require('path');

// this is internal function, cant access this in index.js because dont export at the end
// this is helper function, Promise is js6,
function read(filepath, encoding){
  return new Promise((resolve, reject)=>{
    fs.readFile(filepath, encoding, (err,data)=>{
      if (err){
        reject(err);
      }
      else{
        resolve(data);
      }
    });
  });
}


const sendFile=function(res,filepath,options={type:'text/html',encoding:'utf8'}){
  read(filepath, options.encoding)
  // in result go here
    .then(data =>{
      res.writeHead(200,{
        'content-type': options.type,
        'content-length':data.length
      });
      res.end(data,options.encoding);
    })
  // if reject go here
    .catch(err=>{
      res.setStatusCode=404;
      res.end(err.message);
    });
};

// const sendJson=function(res, flavor){...} it is the same as the line below.=> is js6
const sendJson=(res, flavor)=>{
  read(path.join(__dirname,'iceCream.json'),'utf8')
    .then(data=>JSON.parse(data))
    .then(iceCreams=>{
      if(Object.keys(iceCreams).includes(flavor)){
        res.writeHead(200,{'content-type':'application/json'});
        res.end(JSON.stringify(iceCreams[flavor]));
      }
    })
    .catch(err=>{
      res.setStatusCode=404;
      res.end(err.message);
    });
};

// if only have one parameter we dont need (), if we dont have parameter, require()
const sendFlavors= res =>{
  read(path.join(__dirname,'iceCream.json'),'utf8')
    .then(data=>JSON.parse(data))
    .then(iceCreams=>Object.keys(iceCreams))
    .then(flavors=>{
      res.writeHead(200,{'content-type':'application/json'});
      res.end(JSON.stringify(flavors));
    })
    .catch(err=>{
      res.setStatusCode=404;
      res.end(err.message);
    });
};

module.exports={
  sendFile,
  sendJson,
  sendFlavors
};
