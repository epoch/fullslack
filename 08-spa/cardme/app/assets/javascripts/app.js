 $(document).ready(function() {

  $('.new-card-form').on('submit', function(event) {
    event.preventDefault();

    $.ajax({
      url: '/api/cards',
      method: 'post',
      data: { 
        name: $('.new-card-name').val(),  
        image_url: $('.new-card-image_url').val()
      }
    }).done(function(card) {
      var source = $('#card-template').html();
      var template = Handlebars.compile(source);
      var html = template( card );
      $('.wrapper').append( html );
    });

  });

  $.ajax({
    url: '/api/cards'
  }).done(function(res) {
    var shuffledCards = _.shuffle(res);

    shuffledCards.forEach(function(card) {

      var source = $('#card-template').html(); // grab the template string
      var template = Handlebars.compile( source ); // turn templete string into a function
      var html = template( card ); // html with template & data merged together
      $('.wrapper').append(html);
    });

  }); // ajax

  $('.wrapper').on('click', '.delete-action', function(event) {
    console.log('deleting');

    var id = $(event.target).closest('.card').data('id');

    $.ajax({
      url: '/api/cards/' + id,
      method: 'delete'
    }).done(function() {
      // remove the card from the dom
      $(event.target).closest('.card').fadeOut(500, function() {
        $(event.target).closest('.card').remove();
      })  
    }); 
  }); // delete-action  

}); 