module.exports = function ($scope, searchService, categories, navigationService, $location) {
    $scope.criteria = {
        keyword: $location.search().keyword,
        category: categories[0],
        subcategory: undefined
    };

    $scope.categories = categories;

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
    };

    $scope.navigateToArticle = navigationService.navigateToArticle;

    $scope.$watch('criteria', updateBookmarkState, true);

    function updateBookmarkState(criteria) {
        $location.search('keyword', criteria.keyword);
    }
};
