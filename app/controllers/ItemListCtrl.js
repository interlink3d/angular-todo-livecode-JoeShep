"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage, SearchTermData) {   // this is like doing var "" = require in bsfy

  $scope.searchText = SearchTermData;

  ItemStorage.getItemList()
    .then((itemCollection) => {
      $scope.items = itemCollection;
    });
});
