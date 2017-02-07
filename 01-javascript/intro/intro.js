console.log('introduction to ecmascript');

if (5 > 4) {
  console.log('math is so easy');  
}

var fullSlackRule = true;
if (fullSlackRule) {
  console.log('yay full slack');
}

// truthy or falsey
// values that are falsey: false, the empty string '', the number 0, undefined, null
var name = 'dt';
if (name === 'dt') {
  console.log('hello ' + name);
}

// if (won) {
//   console.log('congrats')
// }

var points = 0;
if (points) {
  console.log('you have ' + points + ' points');
}

var firstname;
if (firstname) {
  console.log('your firstname is ' + firstname);
}