// a route 
// GET /about
// response for this route
// just strings 'about me'

// second route
// GET /donate
// response for this route
// a file that contains html - donate.html

// modules you will need
// http, fs, optionally url
// http.createServer()
// fs.readFile()
// url.parse() optional

var http = require('http');
var fs = require('fs');
var url = require('url'); // optional

var app = function(req, res) {
  // look at the req and work out what they want
  // if req.path is '/about'
  // response will be 'about me'
  // make a response based on req
  console.log(req.url);
  if (req.url === '/about') {
    res.write('about me');
    res.end();
  } else if (req.url === '/donate') {
    fs.readFile('donate.html', function(err, buffer) {
      if (err) {
      }
      res.write(buffer.toString());
      res.end();
    });
  } else {
    res.writeHead(404);
    res.write('not found');
    res.end();
  }
}

var server = http.createServer(app);
server.listen(8000, function() {
  console.log('server started at 8000')
});

