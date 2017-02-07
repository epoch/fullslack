// var currentYear = 2016;
var currentDate = new Date();
var currentYear = currentDate.getFullYear();

if (currentYear === 2017) {
  console.log("i'm in the present")
} else if (currentYear < 2017) {
  console.log('Whao! blast from past');
} else {
  console.log('greetings future');
}