'use strict';

const mysql =require('mysql');

module.exports=class Database{
    constructor(options){
        this.options=options;
    }

    doQuerry(sql,...parameters){
        return new Promise((resolve, reject)=>{
            let connection= mysql.createConnection(this.options);
            connection.query(sql,[...parameters],(err, result)=>{
                if (err) {
                    reject (new Error('SQL Error:'+ err));
                }
                resolve(result);
            });
            connection.end();
        });
    }
};
