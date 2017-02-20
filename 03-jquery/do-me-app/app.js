// searching
// dollar is naming convention
// help you remember its a jquery object
var $list = $('.todo-list'); // querySelector use css rules
var $completedList = $('.completed-list');

$('li').on('mouseover', function() {

})

// attach event listeners
$list.on('click', 'li', function(event) {
  // event.target.className = 'completed';
  // event target is a dom element
  // $(event.target) return the elem as a jquery object
  // $( event.target ).toggleClass('completed');

  // where you wanna append
  // $completedList.append( event.target ); // move
  var itemText = $( event.target ).text()
  // var $newListItem = $('<li>'+ itemText +'</li>')
  var $newListItem = $('<li>')
    .text(itemText)
    .addClass('completed');

  $completedList.append( $newListItem );
  $( event.target ).remove();
});

$('button').on('click', function() {
  var inputValue = $('input').val(); // .value
  var $newListItem = $('<li>').text(inputValue);  // creating new list item createElement()
  $list.append( $newListItem );
});

$completedList.on('click', 'li', function(event) {

  $(event.target).remove();
})




