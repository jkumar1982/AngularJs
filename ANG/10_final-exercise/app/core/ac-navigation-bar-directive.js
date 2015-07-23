angular.module('core')
    .directive('acNavigationBar', function (navigationService) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: '<div class="navbar navbar-inverse" role="navigation">' +
                '<div class="container">' +
                '<ul class="nav navbar-nav">' +
                '<li ng-repeat="link in links"><a ng-href="#{{link.route}}" translate="{{link.label}}"></a></li>' +
                '</ul>' +
                '<div ng-transclude></div>' +
                '</div>' +
                '</div>',
            link: function (scope) {
                navigationService.get().then(mapToLinks);

                function mapToLinks(navigationLinks) {
                    scope.links = navigationLinks;
                }
            }
        };
    });
