var express = require('express');
var request = require('request');
var path = require('path'); // node stanard library 
var app = express();
var engine = require('ejs-mate');

function logger(req, res, next) {
  // console.log('%s request %s from %s', req.method, req.path, req.ip);
  console.log(`${req.method} request ${req.path} from ${req.ip}`)
  next();
}

// where are the templates?
app.set('views', path.join(__dirname, 'views'))
// what kind of templates?
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// | request
// |
// |
// use a middleware - middlewares are just functions
// static asset
app.use( express.static( path.join(__dirname, 'public') ) )
// |
// |
// |
// \/
app.use(logger);
// |
// |
// \/
app.get('/', function(req, res) {
  
  var title = req.query.title;

  request('http://www.omdbapi.com/?t=' + title, function(error, omdbResponse, body) {
    var movie = JSON.parse(body);

    res.render('home', { 
      className: 'fullslack', 
      title: movie.Title 
    });
  })

});

function search(req, res) {
  res.render('search');
}

function movies(req, res) {
  var title = req.query.title;
}

app.get('/search', search);
app.get('/movies', movies);

app.get('/title/:title', function(req, res) {
  var title = req.params.title;
  console.log(req)
  request('http://www.omdbapi.com/?t=' + title, function(error, omdbResponse, body) {
    var movie = JSON.parse(body);

    res.render('home', { 
      className: 'fullslack', 
      title: movie.Title 
    });
  })  
});


module.exports = app;