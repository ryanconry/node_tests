const express = require('express');


var app = express();

app.get('/', (req,res) => {
  res.status(404).send({
    error: 'page not found',
    name: 'app'
  });
});

app.get('/users', (req,res) => {
  res.status(200).send([{
    name: 'Ryan',
    age: 27
  },{
    name: 'user1',
    age: 30
  },{
    name: 'user2',
    age: 35
  }]);
});

app.listen(3000);

module.exports.app = app;
