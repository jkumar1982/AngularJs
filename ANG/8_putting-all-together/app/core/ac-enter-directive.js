angular.module('core')
    .directive('acEnter', function () {
        return {
            restrict: 'A',
            scope: {
                action: '&acEnter'
            },
            link: function(scope, element) {
                element.on('keypress', function (event) {
                    if (event.which === 13) {
                        scope.$eval(scope.action);
                        event.preventDefault();
                    }
                });
            }
        };
    });
