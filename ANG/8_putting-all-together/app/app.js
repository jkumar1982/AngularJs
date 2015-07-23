angular.module('app', ['search', 'ngRoute'])
    .config(function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(false);

        $routeProvider.when('/', {template: '<h1>Welcome!!</h1>'});
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    });
