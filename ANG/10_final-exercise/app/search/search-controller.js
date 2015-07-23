angular.module('search')
    .controller('searchController', function ($scope, searchService, categories) {
        $scope.criteria = {
            keyword: '',
            category: undefined,
            subcategory: undefined
        };

        $scope.categories = categories;
        $scope.criteria.category = categories.length && categories[0];

        $scope.search = function (criteria, valid) {
            if (!valid) {
                return
            }

            var keyword = criteria.keyword,
                categoryId = criteria.category && criteria.category.id,
                subcategoryId = criteria.subcategory && criteria.subcategory.id;

            searchService.search(keyword, categoryId, subcategoryId).then(mapResults);

            function mapResults(results) {
                $scope.results = results;
            }
        }
    });
