var app = angular.module("app-main", ['ngRoute']);
    
app.controller("mainController", mainController); 

app.config(["$routeProvider",function ($routeProvider) {
    $routeProvider.
        when("/", {
            templateUrl: '/content/views/mainView.html'
        }).
        when("/users", {
            templateUrl: '/content/views/usersView.html'
        }).
        when("/adduser", {
            templateUrl: '/content/views/addUserView.html'
        }).
        otherwise({
            redirectTo: "/"
        });
}]);

function mainController() {
    var vm = this;
    vm.name = "Andrey";
}

$http.get("/api/users")
.then(function (response) {
    //Success
    
}, function (error) {
    //Failure
}); 