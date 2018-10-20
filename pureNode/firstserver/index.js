'use strict';

const http= require('http');

const port= process.env.PORT || 3000;
const host= process.env.HOST || '127.0.0.1';

const server= http.createServer((request, response)=>{
  response.writeHead(200, {'content-type':'text/plain; charset=utf-8'});
  response.write('Helllö Wörld!');//Hello World is only one sentence so we can skip this and write response.end('Hello World!')
  response.end();
});

server.listen(port,host,()=>
 console.log(`Server ${host} is listening at port ${port}.`)
 );
