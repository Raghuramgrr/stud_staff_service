
var express = require('express');
const mysql = require( 'mysql' );
module.exports = { con: conc };

var conc= mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "122",
  database:"studentregister"
});
