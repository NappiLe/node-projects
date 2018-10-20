'use strict';

//load necessary node modules
const fs=require('fs'); //reading files from file sytem
const path=require('path');//forming file path

// resolve and reject are parameters, can rename anyname we want
function read(filepath, encoding){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,encoding, (err,data)=>{
            if (err){
                reject(err);//if sth goes wrong, it rejects
            }
            else{
                resolve(data);//if sth goes right, it resolves
            }
        });
    });
}

const sendFile=function(res,filepath,options={type:'text/html',encoding:'utf8'}){
    read(filepath, options.encoding)
        .then(data =>{
            res.writeHead(200,{
                'content-type':options.type,
                'content-length':data.length
            });
            res.end(data,options.encoding);
        })
        .catch(err=>{
            res.setStatusCode=404;
            res.end(err.message);
        });
};

function readJson(filepath){
    return read(filepath,'utf8');
}

module.exports={
    sendFile,
    readJson
};

// const sendJson= (res,name)=>{
//     read(path.join(__dirname,'profile.json'),'utf8')
//         .then(data=>JSON.parse(data))
//         .then(people=>{
//             if((people).includes(name)){
//                 res.writeHead(200,{'content-type':'application/json'});
//                 res.end(JSON.stringify(people[name]));
//             }
//         })
//         .catch(err=>{
//             res.setStatusCode=404;
//             res.end(err.message);
//         });
//
// };
//
//
// const sendPeople= res =>{
//     read(path.join(__dirname,'profile.json'),'utf8')
//         .then(data=> JSON.parse(data))
//         .then(people=> (people))
//         .then(names=>{
//             res.writeHead(200,{'content-type':'application/json'});
//             res.end(JSON.stringify(names));
//         })
//         .catch(err=>{
//             res.setStatusCode=404;
//             res.end(err.message);
//         });
// };
// module.exports={
//     sendFile,
//     sendJson,
//     sendPeople
// };
