'use strict';

require('angular');
var uibs = require('angular-ui-bootstrap');

var RssApp = angular.module('RssApp', [require('angular-route'), uibs, require('angular-touch')]);

//controllers
require('./controllers/navbarctrl')(RssApp);
require('./controllers/homectrl')(RssApp);

//filters


//services


//directives


//routing
RssApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/views/home.html',
			controller: 'HomeCtrl'
		})
		.when('/home', {
			templateUrl: '/views/home.html',
			controller: 'HomeCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);