'use strict';
//Register controller to a specific app. Create Function
helloworldapp.controller('HelloWorldController', 
    function HelloWorldController ($scope){ 
        $scope.banner={
            title: "My First Angular App",
            trainer : "Abhijit Rahate",
            date  :  "10/05/2017",
            time : "10:30"
        }
    })