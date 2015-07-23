describe('AppController', function () {
    var scope;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('AppController', {$scope: scope});
    }));

    it('must initialize the name and the status in the scope', function () {
        expect(scope.name).toBe('AngularJS Course');
        expect(scope.status).toBe('not checked');
    });

    it('must set the status to checked when check is invoked', function () {
        expect(scope.status).toBe('not checked');

        scope.check();

        expect(scope.status).toBe('checked');
    });
});
