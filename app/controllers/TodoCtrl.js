"use strict";

app.controller("TodoCtrl", function($scope, $location) {
  $scope.items = [
    {
      id: 0,
      task: "mow the lawn",
      isCompleted: false,
      dueDate: "12/5/17",
      assignedTo: "Greg",
      location: "Joe's house",
      urgency: "low",
      dependencies: "sunshine, clippers, hat, water, headphones"
    },
    {
      id: 1,
      task: "grade quizzes",
      isCompleted: false,
      dueDate: "12/5/15",
      assignedTo: "Christina",
      location: "NSS",
      urgency: "high",
      dependencies: "wifi, tissues, vodka"
    },
    {
      id: 2,
      task: "take a nap",
      isCompleted: false,
      dueDate: "5/21/16",
      assignedTo: "Joe",
      location: "Porch of lakefront cabin",
      urgency: "medium",
      dependencies: "hammock, silence"
    }
  ];      
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
