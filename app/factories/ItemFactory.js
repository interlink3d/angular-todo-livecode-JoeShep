"use strict";

// factory is a collection of functions that collect data

          // adding in dependencies/angular helpers to be able to do http/ajax calls
          // $q is promises and the other self explanatory
app.factory("ItemStorage", ($q, $http, FirebaseURL) => {

  let getItemList = (user) => {
    let items = []; // array of items
    return $q((resolve, reject) => {  // instead of saying return new promise we just do return $q
      $http.get(`${FirebaseURL}/items.json?orderBy="uid"&equalTo="${user}"`)
      .success((itemObject) => {
        if (itemObject !== null){
          Object.keys(itemObject).forEach((key)=>{
            itemObject[key].id = key;
            items.push(itemObject[key]);
          });
          resolve(items);
        } else {
          resolve(items);
        }
      })
      .error((error)=>{
        reject(error);
      });
    });
  };

  let getSingleItem = (itemId) => {
    return $q( (resolve, reject) => {
      $http.get(`${FirebaseURL}/items/${itemId}.json`)
      .success( (itemObject) => {
        resolve(itemObject);
      })
      .error( (error) => {
        reject(error);
      });
    });
  };

  let postNewItem = (newItem) => {
    return $q( (resolve, reject) => {
      $http.post(`${FirebaseURL}/items.json`, JSON.stringify(newItem))
      .success( (ObjFromFirebase) => {
        resolve(ObjFromFirebase);
      })
      .error( (error) => {
        reject(error);
      });
    });
  };

  let updateItem = (itemId, editedItem) => {
      console.log(editedItem);
    return $q( (resolve, reject) => {
      $http.patch(`${FirebaseURL}/items/${itemId}.json`, JSON.stringify(editedItem))
      .success( (ObjFromFirebase) => {
        resolve(ObjFromFirebase);
      })
      .error( (error) => {
        reject(error);
      });
    });
  };

  let deleteItem = (itemId) => {
    return $q( (resolve, reject) => {
      $http.delete(`${FirebaseURL}/items/${itemId}.json`)
      .success( (ObjFromFirebase) => {
        resolve(ObjFromFirebase);
      });
     });
  };

  return {getItemList, postNewItem, deleteItem, updateItem, getSingleItem};
});