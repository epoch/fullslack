// # Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).

// For each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var colors = ['tomato', 'peru', 'misty rose'];
var suffix = ['st', 'nd', 'rd', 'th'];

for (var index = 0; index < colors.length; index++) {
  console.log('my #' + (index+1) + suffix[index] + ' choice is ' + colors[index]);  
}
