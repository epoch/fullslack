
// # Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (var num = 0; num <= 10; num++) {


  for (var num2 = 0; num2 <= 10; num2++) {

    console.log(num + ' * ' + num2 + ' = ' + (num * num2));
    // console.log('innerloop');

  }

}
