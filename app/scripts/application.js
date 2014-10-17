'use strict';

var AnimalApp = Ember.Application.create();

// expose AnimalApp globally
window.AnimalApp = AnimalApp;

// routes to the templates
AnimalApp.Router.map(function() {
  this.resource('animals', function(){
    this.resource('cats', function(){});
    this.resource('dogs', function(){});
    this.resource('ducks', function(){});
  });
});


AnimalApp.CatsRoute = Ember.Route.extend({
  model: function() {
    return {};
  }
});

// AnimalApp.AnimalsController = Ember.ArrayController.extend({});
