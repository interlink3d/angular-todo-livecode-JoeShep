"use strict";

         //2 PARAMETERS (1."NAME", [2."DEPENDENCIES"]) 
var app = angular.module("TodoApp", ["ngRoute"])  // injected ngRoute module to be able to display URL pages
.constant("FirebaseURL", "https://todo-app-4e4b9.firebaseio.com/");  // defined a global variable for the FB URL

app.config(function($routeProvider){
  $routeProvider.
    when('/items/list', {
      templateUrl: 'partials/item-list.html',
      controller: 'ItemListCtrl'
    }).   // the . to the left chains the next route to the first
    when('/items/new', {
      templateUrl: 'partials/item-form.html',
      controller: 'ItemNewCtrl'
    }).
    when('/items/view/:itemId', {  // item view 
      templateUrl: 'partials/item-details.html',
      controller: 'ItemViewCtrl'
    }).
    otherwise('/items/list');
});




// ngRoute is the dependency and $routeProvider is the library of logic added.
// 