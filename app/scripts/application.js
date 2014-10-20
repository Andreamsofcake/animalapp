'use strict';

var AnimalApp = Ember.Application.create();

// expose AnimalApp globally
window.AnimalApp = AnimalApp;

// routes to the templates
AnimalApp.Router.map(function() {
  this.resource('animals', function(){
    this.resource('cats', function(){
      this.route('freckles'),
      this.route('mittens')
    });
    this.resource('dogs', function(){});
    this.resource('ducks', function(){});
  });
});

AnimalApp.FRECKLES = {
  name: "Freckles",
  color: "Red",
  size: 'Big'
};

AnimalApp.CatsFrecklesRoute = Ember.Route.extend({
  model: function() {
    return AnimalApp.FRECKLES;
  }
});

// AnimalApp.AnimalsController = Ember.ArrayController.extend({});
