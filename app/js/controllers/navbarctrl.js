'use strict';

module.exports = function(app) {
	app.controller('NavbarCtrl', function($scope) {
		
		$scope.menu = [
			{
				'title': 'Home',
				'link': '/'
			},
			{
				'title': 'Add feed',
				'link': '/addfeed'
			}
		];

		$scope.isCollapsed = true;

		$scope.collapseNav = function() {
			$scope.isCollapsed = true;
		};
	});
};