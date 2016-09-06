"use strict"; 

app.controller("TodoCtrl", function($scope, $location) {
  $scope.newTask = {};
  // $scope.showListView = true;  // preset to true so that it displays first

  $scope.newItem = function() {
    // $scope.showListView = false;
    $location.url('/items/new');
  };

  $scope.allItem = function(){
    // $scope.showListView = true;
    $location.url('/items/list');
  };

  $scope.addNewItem = function(){
    $scope.newTask.isCompleted = false;
    $scope.newTask.id = $scope.items.length;
    $scope.items.push($scope.newTask);
    $scope.newTask = {};
  };
});
