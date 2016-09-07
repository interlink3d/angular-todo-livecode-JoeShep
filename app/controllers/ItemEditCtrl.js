"use strict";

app.controller("ItemEditCtrl", function($scope, ItemStorage, $routeParams, $location) {
  $scope.items = [];

  ItemStorage.getItemList()
  .then( (itemCollectionArray) => {
    $scope.items = itemCollectionArray;

// created an array of a single item by filtering down to just the one ID from the item
    $scope.selectedItem = $scope.items.filter(function(item) {
      return item.id === $routeParams.itemId;
    })[0];  // placed the [0] here because after the array came back we need to access the array inside the object


    $scope.selectedItem = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleted: false,
    location: "",
    task: "",
    urgency: ""
  };

  $scope.addEditedItem = function(itemId) {
    ItemStorage.editItem ($scope.selectedItem, $routeParams.itemId)
    .then(function() {
      $location.url("/items/list"); // rerouting back to list view after promise is returned
    });
  };

  });

});