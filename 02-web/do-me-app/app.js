
var firstTodo = document.querySelector('li');
var list = document.querySelector('ul');

// firstTodo.addEventListener('click', function() {
//   console.log('li clicked');
// })

// pressing enter on the input also add new todo item

// search for button
var btn = document.querySelector('button')
// button listen on click
btn.addEventListener('click', function() {
  // grab value from input
  var userInput = document.querySelector('input').value;
  // create a new dom element - specially a new list item with the contents from the input
  var newListItem = document.createElement('li');
  newListItem.textContent = userInput
  list.appendChild(newListItem)

})

// // event delegation
list.addEventListener('click', function(event) {

  // cross out if the the user clicked on  its a list item
  if (event.target.tagName === 'LI') {


    if (event.target.className === 'completed') {
      // remove class
      event.target.className = ''      
    } else {
      event.target.className = 'completed'
    }
  }

});
