console.log('loops');

// count from 1 to 10

for (var num = 1; num <= 10; num++) {
  if (num % 2 === 0) {
    console.log(num);   
  }
}

var count = 1;
while (count <= 10) {
  console.log(count);
  count = count + 1;  
}

while (true) {
  console.log('hello');

  break;
}

