'use strict';

var mysql = require('mysql');
var express = require('express');
var app = express();

var decrypt = require('./decrypt.js');
decryptText();

var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1988',
  database: 'trial-exam-web',
});

connection.connect(function connectMsql(error) {
  if (error) {
    console.log('Connection failed', error);
  } else {
    console.log('Successful');
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function use(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
  next();
});

app.get('/decode/all', function (req, res) {
  connection.query({
    sql: 'SELECT * FROM messages;'
  }, function getListsCallback(err, rows) {
      if (err) {
        console.log(err.toString());
        return;
      }
      res.send(rows);
    });
});

app.post('/decode', function(req, res) {
  console.log(req);
  console.log('app post');
  connection.query({
    sql: 'INSERT INTO messages (message) VALUES (?);',
    values: [req.body.text]
  }, function createListCallback(err, rows) {
      if (err) {
        console.log(err.toString());
        return;
      }
      var result = [];
      rows.forEach(function(line, index) {
        result.push(line.text);
      });
      console.log(result);
      res.status(200).send({all: result});
    });
});


var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server running on port %d', port);
});
