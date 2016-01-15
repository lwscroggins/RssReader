'use strict';

describe('Controller: FeedCtrl', function() {
	beforeEach(module('RssApp'));

	var FeedCtrl, scope;

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		FeedCtrl = $controller('FeedCtrl', { $scope: scope });
	}));

	it('should load the controller FeedCtrl', function() {
		expect(typeof FeedCtrl).not.toBe('undefined');
	});
});