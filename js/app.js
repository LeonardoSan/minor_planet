angular.module('minorPlanetApp', ['controllers', 'directives', 'ui.router'])

	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/login");

		$stateProvider
			.state('login', {
				url: "/login",
				templateUrl: "views/login.html",
				controller: 'MainCtrl'
			})
			.state('app', {
				url: "/app",
				templateUrl: "views/app.html",
				controller: 'AppCtrl'
			})
	});
