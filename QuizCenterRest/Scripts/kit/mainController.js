(function () {

    "use strict";

    //getting the existing module
    var app = angular.module("app-main");

    app.controller("mainController", mainController);

    function mainController() {

        var vm = this;

        vm.name = "Andrey";


    }

})();