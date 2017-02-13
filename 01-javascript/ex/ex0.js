// # The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (var count = 0; count <= 20; count++) {
  if (count % 2 === 0) {
    console.log(count + ' is even');
  } else {
    console.log('count + 'is odd');
  }
}