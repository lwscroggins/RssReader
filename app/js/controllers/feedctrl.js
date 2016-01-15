'use strict';

module.exports = function(app) {
	app.controller('FeedCtrl', function($scope) {
		$scope.newFeed = function(val) {
			var spide = require('rssspider');
			spide.fetchRss(val).then(function(data) {
				console.log(data);
			});
		}
	});
};