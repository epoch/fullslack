var QuoteItemView = Backbone.View.extend({

  template: Handlebars.compile( $('#quote-item-template').html() ),

  events: {
    'click p': 'markAsDone',
    'click h2': 'changeBackgroundColor'
  },

  changeBackgroundColor: function() {
    this.$el.find('h2').css('background-color', 'mistyrose');
  },

  markAsDone: function() {
    this.$el.find('p').css('text-decoration', 'line-through');
  },

  render: function() {
    var html = this.template(this.model);
    this.$el.html(html);
  }

});

var quotes = [{
  body: 'cake',
  desc: 'more cake'
}, {
  body: 'pudding',
  desc: 'more pudding'
}, {
  body: 'nap',
  desc: 'blah blah blah'
}];


$.ajax({
  url: 'http://localhost:3001/api/dishes'
}).done(function(res) {

  // var movies = res.Search;

  res.forEach(function(dish) {

    var view = new QuoteItemView({ model: dish });
    view.render();
    $('#app').append(view.el);

  });
});




