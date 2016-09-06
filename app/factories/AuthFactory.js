"use strict";

app.factory("AuthFactory", function() {

  let createUser = function (userObj) { // we are going to build the user credentials object
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password) //pass in two arguments for username and password
      .catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        // built in error control from FB
      });
  };

  let loginUser = function(userObj) {
    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
    });
  };

  let logoutUser = function() {
    return firebase.auth().signOut();
  };

  return {createUser, loginUser, logoutUser};
});