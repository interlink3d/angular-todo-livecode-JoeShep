"use strict";

// factory is a collection of functions that collect data

          // adding in dependencies/angular helpers to be able to do http/ajax calls
          // $q is promises and the other self explanatory
app.factory("ItemStorage", ($q, $http, FirebaseURL) => {

  let getItemList = () => {
    let items = []; // array of items
    return $q((resolve, reject) => {  // instead of saying return new promise we just do return $q
      $http.get(`${FirebaseURL}/items.json`)
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

  let editItem = (editedTask, itemId) => {
    return $q( (resolve, reject) => {
      $http.put(`${FirebaseURL}/items/${itemId}.json`, JSON.stringify(editedTask))
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

  return {getItemList, postNewItem, deleteItem, editItem};
});