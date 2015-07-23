module.exports = function ($q, $route, $location, navigationManager) {
    var _ = require('lodash'), navigationLinks = getNavigationLinks($route);

    return {
        getNavigationLinks: function () {
            return $q.when(navigationLinks);
        },
        navigateToArticle: navigateToArticle
    };

    function getNavigationLinks($route) {
        return _.chain($route.routes)
            .cloneDeep()
            .filter('label')
            .map(createNavigationLink)
            .sortBy('order')
            .value();

        function createNavigationLink(route) {
            return {
                order: route.order,
                label: route.label,
                route: route.originalPath
            };
        }
    }

    function navigateToArticle(articleId) {
        $location.url(navigationManager.getArticleUrl({id: articleId}));
    }
};
