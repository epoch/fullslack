var quotes = [new Quote({
  body: 'too easy',
  author: 'kevin'  
})];

quotes.forEach(function(quote) {
  // console.log(quote);
  var view = new QuoteItemView({ model: quote });
  $('#app').append(view.render().el);
});



