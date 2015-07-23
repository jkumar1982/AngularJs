angular.module('userList', ['ngRoute'])
    .config(routeConfigurator);

function routeConfigurator($routeProvider) {
    $routeProvider.when('/user-list', {
        order: 200,
        label: 'USER_LIST',
        templateUrl: 'user-list/user-list.tpl.html',
        controller: 'UserListController as userListController'
    });
}
