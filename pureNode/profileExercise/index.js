'use strict';

// load modules
const http=require('http');
const fs=require('fs');
const path=require('path');
const url=require('url');
const persons=require('./profile.json');

for (let person of persons){
    console.log(person.lastName);
}

for(let i=0;i<persons.length;i++){
    console.log(persons[i].firstName);
}

const {sendFile,sendJson,sendPeople}=require(path.join(__dirname,'filehandler.js'));
// outsource config file
const config=require(path.join(__dirname, 'config.json'));

// Link home to the server
const homePath=path.join(__dirname,'home.html');

// create a server
const server=http.createServer((req,res)=>{
    let route=url.parse(req.url).pathname;

    // tell which route
    if (route==='/'){
        sendFile(res,homePath);
    }
    else if(route==='/all'){
        sendPeople(res);
    }

    else if(route.startsWith('/js')){
        sendFile(res,path.join(__dirname, route),
            {type:'text/javascript', encoding:'utf8'});
    }

    else if (route.startsWith('/images')){
        sendFile(res,path.join(__dirname, route.substr(1)),
            {type:'image/png', encoding:'binary'});
    }

    else{
        res.end();
    }
});

server.listen(config.port, config.host,()=>{
  console.log(`Server ${config.host} is running at the port ${config.port}`)
});
