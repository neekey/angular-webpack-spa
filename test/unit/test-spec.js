/* global beforeEach describe it chai inject */
const Assert = chai.assert;

describe('testController', () => {
    beforeEach(module('app'));

    let $controller;

    beforeEach(inject(_$controller_ => {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    describe('$scope.grade', () => {
        it('sets the strength to "strong" if the password length is >8 chars', () => {
            const $scope = {};

            $controller('dashboardCtrl', { $scope });
            Assert.equal($scope.name, 'Neekey');
        });
    });
});
