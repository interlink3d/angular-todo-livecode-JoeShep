"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage, SearchTermData) {   // this is like doing var "" = require in bsfy

  $scope.searchText = SearchTermData;
  let user = $scope.$parent.getUser();

  ItemStorage.getItemList(user)
    .then((itemCollectionArray) => {
      $scope.items = itemCollectionArray;
    });

  $scope.itemDelete = (itemId) => {
    ItemStorage.deleteItem(itemId)
    .then( (response) => {
      ItemStorage.getItemList(user)
      .then( (itemCollectionArray) => {
        $scope.items = itemCollectionArray;
      });
    });
  };

});
