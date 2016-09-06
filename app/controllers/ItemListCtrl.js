"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage, SearchTermData) {   // this is like doing var "" = require in bsfy

  $scope.searchText = SearchTermData;

  ItemStorage.getItemList()
    .then((itemCollectionArray) => {
      $scope.items = itemCollectionArray;
    });

  $scope.itemDelete = (itemId) => {
    ItemStorage.deleteItem(itemId)
    .then( (response) => {
      ItemStorage.getItemList()
      .then( (itemCollectionArray) => {
        $scope.items = itemCollectionArray;
      });
    });
  };

});
