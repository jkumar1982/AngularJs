require('angular').module('app',
    [
        require('./config/config-module').name,
        require('./core/core-module').name,
        require('./search/search-module').name,
        require('./article/article-module').name,
        require('angular-route').name
    ])
    .config(function ($routeProvider, navigationManager) {
        $routeProvider.when(navigationManager.getHomeUrl(), {
            order: 0,
            label: 'HOME',
            template: '<h1 class="jumbotron" translate="TAGLINE"></h1>'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });
