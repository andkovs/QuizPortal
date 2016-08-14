
angular.module('app-main').controller('coursesController', ['$scope', 'courses', function ($scope, courses) {
	$scope.title = 'Courses page';
	$scope.courses = courses;
}]);