"use strict";

app.controller("ItemNewCtrl", function($scope, ItemStorage, $location){
  $scope.title = "Add a new Task";
  $scope.btnText = "Save New Task";

  $scope.newTask = {       // building an object here of newTask
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    location: "",
    task: "",
    urgency: "normal",
    uid: $scope.$parent.getUser()  // how we access the uid from the TopCtrl file
  };

  $scope.addNewItem = function() {
    ItemStorage.postNewItem ($scope.newTask)
    .then(function() {
      $location.url("/items/list"); // rerouting back to list view after promise is returned
    });
  };

});


// want to check the item-form partial to make sure that the properties match up and the function name
// is the same for adding a new name as the one created here.
//