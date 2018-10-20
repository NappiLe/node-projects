'use strict';
/* eslint-disable no-console*/

const statements= require('./createStatements.json');

try{
  createDatabase(statements);
}

catch(err){
  console.log(err.message);
}
async function createDatabase(createStatements){
  const createOptions={
  host: createStatements.host
  port: createStatements.mysqlport,
  user: createStatements.admin,
  password:createStatements.adminpassword
};

let dropDatabaseSql=`drop database if exitst ${createStatements.database}`;
}
