console.log('guessing game');

var secretNumber = 42;

var guess = prompt('guess a number');

while (guess != secretNumber) {
  if (guess > secretNumber) {
    guess = prompt('failed! guess lower');
  } else {
    guess = prompt('failed! guess higher');
  }
}

console.log('not bad');
