var QuoteItemView = Backbone.View.extend({

  className: 'quote',

  template: Handlebars.compile( $('#quote-item-template').html() ),

  events: {
    'click': 'hardify',
    'keyup input': 'save'
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render)
  },

  save: function(event) {
    if (event.which === 13) {
      this.model.set('body', event.target.value);
    }
  },

  hardify: function(event) {
    this.$el.find('input').show();
    this.$el.find('h2').hide();
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.html(html); 
    return this; 
  }

});