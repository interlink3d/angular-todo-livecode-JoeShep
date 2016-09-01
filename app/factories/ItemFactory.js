"use strict";

// factory is a collection of functions that collect data

          // adding in dependencies/angular helpers to be able to do http/ajax calls 
          // $q is promises and the other self explanatory 
app.factory("ItemStorage", ($q, $http) => {

  let getItemList = () => {
    let items = []; // array of items
    return $q((resolve, reject) => {  // instead of saying return new promise we just do return $q
      $http.get("../../data/itemList.json")
      .success((itemObject) => {
        resolve(itemObject);
      })
      .error((error) => {
        reject(error);
      });
    });
  };

return {getItemList};

});