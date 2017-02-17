console.log('crappy calculator');

// 1. searching elements 
// 2. event handling on elements
// 3. update properties elements

var addTwoNumber = function(num1, num2) {
  return num1 + num2;
}

var crapItBtn = document.querySelector('.crap-it-btn');
var num1Input = document.querySelector('.num1-input');
var num2Input = document.querySelector('.num2-input');
var resultInput = document.querySelector('.result');

crapItBtn.addEventListener('click', function() { 
  var result = addTwoNumber(+num1Input.value, +num2Input.value);
  // update my ui
  resultInput.value = result;
});

// 1. another button to clear all the inputs back to the beginning
document.querySelector('.clear-btn').addEventListener('click', function() {
  num1Input.value = '';
  num2Input.value = '';
  resultInput.value = '';
})

// 2. theme switcher to work, clicking in the box should update background color

var changeBackgroundColor = function(event) {
  // debugger
  document.body.style.backgroundColor = getComputedStyle(event.target).backgroundColor;
};

var themeOneBox = document.querySelector('.theme-one');

themeOneBox.addEventListener('click', function(event) {
  // document.body.style.backgroundColor = event.target.getAttribute('data-color');

  changeBackgroundColor(event);
})

