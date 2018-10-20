'use strict';

// load modules, which modules we need
const http=require('http');
const fs=require('fs');
const path=require('path');
const url=require('url');

// get funcion from the filehandler.js
const {sendFile, sendJson,sendFlavors}=require(path.join(__dirname,'filehandler.js'));
// console.log(__dirname);

// outsource config file
const config=require(path.join(__dirname,'config.json'));

// console.log(config);
// console.log(config.port);

// link home,favicon and stylesheet to the server
const homePath=path.join(__dirname,'home.html');
const faviconPath=path.join(__dirname,'favicon.png');


// create a server, it listen resquest and send response
const server=http.createServer((req, res)=>{
  // console.log(req.url);

  let route=url.parse(req.url).pathname;

  //tell which route
  if(route==='/'){
    sendFile(res,homePath);
  }
  else if(route==='/favicon.png'){
    sendFile(res,faviconPath,{type:'image/png', encoding:'binary'});

  }
  else if(route==='/all'){
    sendFlavors(res);
  }
  else if(route.startsWith('/styles')){
    sendFile(res,path.join(__dirname,route),{type:'text/css', encoding:'utf8'});
  }
  else if(route.startsWith('/images')){
    sendFile(res,path.join(__dirname,route.substr(1)),{type:'image/png', encoding:'binary'});
  }
  else if(route.startsWith('/js')){
    sendFile(res,path.join(__dirname,route),
      {type :'text/javascript', encoding:'utf8'});
  }
  else if(route.startsWith('/api')){
    // url:/api/blueberry
    let parts=route.split('/');
    if(parts.length>2){
      sendJson(res,parts[2]);
    }
  }
  else{
    res.end();
  }

});

// start the listening part of server, without this it will not do anything
server.listen(config.port, config.host, ()=>{
  console.log(`Server ${config.host} is running at the port ${config.port}`)
});
