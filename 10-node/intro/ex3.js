// cli program that counts lines in a file

// node ex3.js myLib.js
// 9

// standard library fs ( file system )
var fs = require('fs');

// sync wasn't there in the first place
var buffer = fs.readFileSync('myLib.js');
var fileString = buffer.toString();

console.log(fileString.split('\n').length);

