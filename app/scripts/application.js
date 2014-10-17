'use strict';

var AnimalApp = Ember.Application.create();

// expose AnimalApp globally
window.AnimalApp = AnimalApp;

// routes to the templates
AnimalApp.Router.map(function() {
  this.resource('animals');
});

AnimalApp.ANIMALS = [
{
  type: 'Cats'
},
{
  type: 'Dogs'
},
{
  type: 'Ducks'
}
];

AnimalApp.AnimalsRoute = Ember.Route.extend({
  model: function() {
    return AnimalApp.ANIMALS;
  }
});

// AnimalApp.AnimalsController = Ember.ArrayController.extend({});