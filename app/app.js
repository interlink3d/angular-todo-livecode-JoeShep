"use strict";

         //2 PARAMETERS (1."NAME", [2."DEPENDENCIES"])
var app = angular.module("TodoApp", ["ngRoute"])  // injected ngRoute module to be able to display URL pages
.constant("FirebaseURL", "https://todo-app-4e4b9.firebaseio.com/");  // defined a global variable for the FB URL
let isAuth = (AuthFactory) => new Promise( (resolve, reject) => {
  if(AuthFactory.isAuthenticated()) {
    resolve();
  } else {
    reject();
  }
});

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
      controller: 'ItemListCtrl',
      resolve: {isAuth} //you can give it a list of dependecies that you want done.
    }).   // the . to the left chains the next route to the first
    when('/items/new', {
      templateUrl: 'partials/item-form.html',
      controller: 'ItemNewCtrl',
      resolve: {isAuth}
    }).
    when('/items/view/:itemId', {  // item view
      templateUrl: 'partials/item-details.html',
      controller: 'ItemViewCtrl',
      resolve: {isAuth}
    }).
    when('/items/view/:itemId/edit', {
      templateUrl: 'partials/item-form.html',
      controller: 'ItemEditCtrl',
      resolve: {isAuth}
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

