angular.module('master-data')
    .constant('categoriesRestUrl', '/rest/categories')
    .factory('categoryService', function ($http, categoriesRestUrl, $rootScope, $cacheFactory, $route) {
        var masterDataCache = $cacheFactory('master-data');

        $rootScope.$on('language.changed', function() {
            masterDataCache.removeAll();
            $route.reload();
        });

        return {
            get: function () {
                return $http.get(categoriesRestUrl, {cache: masterDataCache}).then(extractCategories);

                function extractCategories(response) {
                    return response.data.categories;
                }
            }
        };
    });
