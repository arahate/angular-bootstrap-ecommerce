'use strict';

homeapp.controller ('HomeController',
    function ($scope, navbarsevice, leftmenuservice) {
        $scope.navbar = navbarsevice.navbar;

        $scope.leftmenu =leftmenuservice.leftmenu;

       
    }
);