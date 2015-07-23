module.exports = require('angular').module('article',
    [
        require('angular-route').name
    ])
    .factory('articleService', require('./article-service'))
    .controller('articleController', require('./article-controller'))
    .config(function ($routeProvider) {
        $routeProvider.when('/article/:id', {
            template: require('./article.tpl.html'),
            controller: 'articleController',
            resolve: {
                article: function (articleService, $routeParams) {
                    return articleService.get($routeParams.id);
                }
            }
        });
    });
