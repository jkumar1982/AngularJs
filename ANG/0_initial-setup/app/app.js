var app = angular.module('app', []);

app.controller('AppController', function ($scope) {
    $scope.status = 'not checked';
    $scope.name = 'AngularJS Course';

    $scope.check = function () {
        $scope.status = 'checked';
    }
});
