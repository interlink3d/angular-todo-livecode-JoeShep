"use strict";

         //2 PARAMETERS (1."NAME", [2."DEPENDENCIES"]) 
var app = angular.module("TodoApp", ["ngRoute"]);  // injected ngRoute module to be able to display URL pages

app.config(function($routeProvider){
  $routeProvider.
    when('/items/list', {
      templateUrl: 'partials/item-list.html',
      controller: 'TodoCtrl'
    }).   // the . to the left chains the next route to the first
    when('/items/new', {
      templateUrl: 'partials/item-form.html',
      controller: 'TodoCtrl'
    }).
    otherwise('/items/list');
});




// ngRoute is the dependency and $routeProvider is the library of logic added.
// 