var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('express is like sinatra but not really');
});

app.get('/about', function(req, res) {
  res.send('about me');
})

module.exports = app;

