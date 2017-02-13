
// 1. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.


var calculateAge = function(birthYear, currentYear) {
  var possibleAge = currentYear - birthday;
  console.log('you are either ' + possible + ' or ' + (possibleAge-1));
}

calculateAge(1980, 2017);
calculateAge(1800, 2017);
calculateAge(1999, 2017);


//  2. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

var input = ['cake', 'pudding'];
// output = [4,7]

var lengths = function(arrOfWords) {
  var myArray = [];
  for (var i = 0; i < arrOfWords.length; i++) {
    myArray.push( arrOfWords[i].length );
    // return arrOfWords[i].length;
  }
  return myArray;
}

lengths(input);






// var lengths = function(words) {
//   return words.length;
// }

// console.log( lengths(input) ) 


// 3. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.


var transmogrifier = function(num1, num2, num3) {
  // return Math.pow(num1 * num2, num3);

  var product = num1 * num2;
  var result = Math.pow(product, num3);
  return result;
}


// 4. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// input = 'i am the best'
// splited = ['i','am','the','best']
// 'best the am i'

var wordReverse = function (str) {
  var splited = str.split(' ');
  return splited.reverse().join(' ');
}