"use strict";

         //2 PARAMETERS (1."NAME", [2."DEPENDENCIES"])
var app = angular.module("TodoApp", ["ngRoute"])  // injected ngRoute module to be able to display URL pages
.constant("FirebaseURL", "https://todo-app-4e4b9.firebaseio.com/");  // defined a global variable for the FB URL

// ngRoute is the dependency and $routeProvider is the library of logic added.
app.config(function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    }).
    when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    }).
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
    when('/items/edit/:itemId', {
      templateUrl: 'partials/item-edit.html',
      controller: 'ItemEditCtrl'
    }).
    otherwise('/');
});

app.run( ($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };
  firebase.initializeApp(authConfig);
});

