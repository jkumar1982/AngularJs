angular.module('search', ['master-data', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/search', {
            templateUrl: 'search/search.tpl.html',
            controller: 'searchController',
            resolve: {
                categories: function (categoryService) {
                    return categoryService.get();
                }
            }
        });
    });
