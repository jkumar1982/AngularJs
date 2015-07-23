angular.module('app', ['core', 'search', 'article', 'ngRoute'])
    .config(function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(false);

        $routeProvider.when('/', {template: '<h1 class="jumbotron" translate="TAGLINE"></h1>'});
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });
