var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  //properties
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sampledb'
});

coonnection.connect(function(error){
  if(!!error) {
    console.log('Error');
  } else{
    console.log('Connected');
  }
});

app.get('/', function(req,resp) {
  connection.query("SELECT * FROM mysampletable", function(error,rows,fields){
    if(!!error) {
      console.log('error in query');
    } else {
      console.log('successful query');
    }
  });
});

app.listen(1337);
