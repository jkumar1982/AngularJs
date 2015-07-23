var app = angular.module('app');

app.directive('acErrorBar', function ($rootScope) {
    return {
        replace: true,
        template: '<div ng-repeat="error in errors">' +
            '<div class="alert alert-danger alert-dismissable">' +
            '<strong>Error!</strong>&nbsp;<span ng-bind="error.message"></span>' +
            '<button type="button" class="close" data-dismiss="alert" aria-hidden="true" ng-click="dismiss(error)">&times;</button>' +
            '</div>' +
            '</div>',
        link: function (scope) {
            scope.errors = [];

            $rootScope.$on('ServerError', function (event, exception) {
                scope.errors.push({message: exception.message});
            });

            scope.dismiss = function (error) {
                var index = scope.errors.indexOf(error);

                scope.errors.splice(index, 1);
            }
        }
    };
});
