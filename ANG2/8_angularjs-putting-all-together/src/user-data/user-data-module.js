angular.module('userData', ['ngMessages', 'ngRoute'])
    .config(routeConfigurator);

function routeConfigurator($routeProvider) {
    $routeProvider
        .when('/user-data/:name', {
            templateUrl: 'user-data/user-data.tpl.html'
        })
        .when('/user-data', {
            order: 100,
            label: 'USER_DATA',
            templateUrl: 'user-data/user-data.tpl.html'
        });
}
