
angular.module("app-main").service("coursesService", ['$http', function ($http) {

	this.getCourses = function (page) {
		console.log('get courses list page', page);
		//return $http.get('api/courses');
		return 'courses list';
	};

	this.getCourse = function (id) {
		console.log('get course');
		//return $http.get('api/courses');
	};

	this.saveCourse = function (course) {
		console.log('save course');
		//return $http.get('api/courses');
	};

	this.removeCourse = function (id) {
		console.log('remove course');
		//return $http.get('api/courses');
	};
}]);