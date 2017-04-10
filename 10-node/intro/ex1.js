
// console.log(process.argv);

// console.log(process.argv[2]);

// console.log('length', process.argv.length);

// cli program to sum numbers
var total = 0;

for (var index = 2; index < process.argv.length; index++) {
  total += parseInt(process.argv[index]);
}

console.log(total);
