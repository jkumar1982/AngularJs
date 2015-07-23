module.exports = require('angular').module('search',
    [
        require('master-data').name,
        require('angular-route').name
    ])
    .factory('searchService', require('./search-service'))
    .controller('searchController', require('./search-controller'))
    .config(function ($routeProvider, navigationManager) {
        $routeProvider.when(navigationManager.getSearchUrl(), {
            order: 10,
            label: 'SEARCH',
            template: require('./search.tpl.html'),
            controller: 'searchController',
            reloadOnSearch: false,
            resolve: {
                categories: function (categoryService) {
                    return categoryService.get();
                }
            }
        });
    });
