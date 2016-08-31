"use strict";

//2 PARAMETERS 1.NAME 2.FUNCTION WTIH SCOPE AS PARAM
app.controller("NavCtrl", function($scope){
    $scope.navItems = [
        {name: "Logout"},
        {name: "All Items"},
        {name: "New Items"}
    ];
});