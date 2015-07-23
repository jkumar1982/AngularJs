module.exports = function (navigationManager, navigationService) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: require('./ac-navigation-bar.tpl.html'),
        link: function (scope) {
            scope.getHomeUrl = function () {
                return navigationManager.getHomeUrl({}, true);
            };

            navigationService.getNavigationLinks().then(mapToLinks);

            function mapToLinks(navigationLinks) {
                scope.links = navigationLinks;
            }
        }
    };
};
