console.log('fun fun functions');

// variable scope

var numberWeTellTheWorld = 500000;

var launchMissile = function() {
  var numberOfMissiles = 0; // local variable
  console.log(numberWeTellTheWorld);
  console.log('missed');
}

var hello = function(name) { // parameter
  // var name = 
  console.log('hello ' + name);
}

hello('fullslack'); // argument

var doubleMe = function(number) {
  return number * 2;
}

// YO! -> yo

var calmYourself = function(input) {
  // var lowercased = input.toLowerCase();
  // var exclamationRemoved = lowercased.split('!')[0];

  // var result = input.toLowerCase().split('!')[0];
  return input.toLowerCase().split('!')[0];
}

var result = calmYourself('YO!');

