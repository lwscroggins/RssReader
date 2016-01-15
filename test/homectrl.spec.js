'use strict';

describe('Controller: homectrl', function() {
	beforeEach(module('RssApp'));

	var HomeCtrl, scope;

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		HomeCtrl = $controller('HomeCtrl', { $scope: scope });

	}));

	it('should load the controller HomeCtrl', function() {
		expect(typeof HomeCtrl).not.toBe('undefined');
	});

	it('should contain an array "nothing" with length 0', function() {
		expect(scope.nothing.length).toEqual(0);
	});
});