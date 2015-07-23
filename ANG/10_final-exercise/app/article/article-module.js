angular.module('article', [])
    .config(function ($routeProvider) {
        $routeProvider.when('/article/:id', {
            templateUrl: 'article/article.tpl.html',
            controller: 'articleController',
            resolve: {
                article: function (articleService, $routeParams) {
                    return articleService.get($routeParams.id);
                }
            }
        });
    });
