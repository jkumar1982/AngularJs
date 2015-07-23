angular.module('app', ['ngRoute', 'core', 'userData', 'userList', 'masterData'])
    .config(defaultRouteConfigurator);

function defaultRouteConfigurator($routeProvider) {
    $routeProvider
        .when('/', {
            order: 0,
            label: 'HOME',
            template: '<h3 translate="WELCOME"></h3>'
        })
        .otherwise({
            redirectTo: '/'
        });
}

angular.bootstrap(document, ['app']);
