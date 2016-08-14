var app = angular.module("app-main", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider.state('main', {
		url: '/',
		controller: 'mainController',
		templateUrl: '/content/views/mainView.html'
	}).state('users', {
		url: '/users',
		controller: 'usersController',
		templateUrl: '/content/views/usersView.html'
	}).state('courses', {
		url: '/courses',
		controller: 'coursesController',
		templateUrl: '/content/views/coursesView.html',
		resolve: {
			courses: ['$stateParams', 'coursesService', function ($stateParams, coursesService) {
				return coursesService.getCourses($stateParams.page);
			}]
		}
	});
	$urlRouterProvider.otherwise('/');
	//$locationProvider.html5Mode({
	//	enabled: true,
	//	requireBase: false
	//});
});

//$http.get("/api/users")
//.then(function (response) {
//    //Success
    
//}, function (error) {
//    //Failure
//}); 