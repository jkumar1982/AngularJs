module.exports = function ($scope, $routeParams, article, articleService) {
    $scope.article = article;

    $scope.update = function (article) {
        articleService.update(article).then(mapToArticle);
    };

    function mapToArticle(article) {
        $scope.article = article;
    }
};
