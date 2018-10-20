'use strict';

const express= require('express');

const app=express();

app.get('/', (req, res)=> res.end('Hi World'));

// it takes random port, dont need to define port local:3000
app.listen(function(){console.log(`Server is serving at port ${this.address().port}`);}
);
