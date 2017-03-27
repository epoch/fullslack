var brushes = [];
var $canvas = $('.canvas');

for (var count = 0; count < 2000; count++) {
  $('<div>').attr('class','square').appendTo( $canvas ) // append is bloody slow
}

$canvas.on('mouseover', '.square', function(event) {
  $(event.target).css('background-color', brushes[0]);
})

$('.color-btn').on('click', function() {
  brushes.unshift( $('.color-input').val() );

  $('.brush').eq(0).css('background-color', brushes[0]);
  $('.brush').eq(1).css('background-color', brushes[1]);
  $('.brush').eq(2).css('background-color', brushes[2]);
});

$('.brush').on('click', function(event) {
  brushes.unshift(event.target.style.backgroundColor);

  $('.brush').eq(0).css('background-color', brushes[0]);
  $('.brush').eq(1).css('background-color', brushes[1]);
  $('.brush').eq(2).css('background-color', brushes[2]);  
})