'use strict';

import 'angular-mocks';

describe('Hello', () => {
	let scope, vm;

	beforeEach(angular.mock.module('mainApp'));

	beforeEach(inject(($rootScope, $controller) => {
		scope = $rootScope.$new();

		$controller('MainController as vm', {
			$scope: scope
		});

		vm = scope.vm;
	}));

	it('true === true', () => {
		expect(vm.name).toEqual('ronsc');
	});

	it('say()', () => {
		expect(vm.say()).toEqual('Hello, ronsc');
		vm.name = 'test';
		expect(vm.say()).toEqual('Hello, test');
	});
});