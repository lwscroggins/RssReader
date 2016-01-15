'use strict';

describe('Controller: NavbarCtrl', function() {
	beforeEach(module('RssApp'));

	var NavbarCtrl, scope;

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		NavbarCtrl = $controller('NavbarCtrl', { $scope: scope });
	}));

	it('should load the NavbarCtrl', function() {
		expect(typeof NavbarCtrl).not.toBe('undefined');
	});

	it('should have array "menu" with length 2', function() {
		expect(scope.menu.length).toEqual(2);
	});

	it('should have menu items "home" and "add feed"', function() {
		expect(scope.menu[0].title).toEqual('Home');
		expect(scope.menu[1].title).toEqual('Add feed');
	});

	it('should start collapsed', function() {
		expect(scope.isCollapsed).toBe(true);
	});
});