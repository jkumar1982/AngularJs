import angular from 'angular';
import UserListController from './user-list-controller.js';
import userListServiceFactory from './user-list-service.js';

export default angular.module('userList', ['ngRoute'])
    .controller('UserListController', UserListController)
    .factory('userListService', userListServiceFactory)
    .config(routeConfigurator);

function routeConfigurator($routeProvider) {
    $routeProvider.when('/user-list', {
        order: 200,
        label: 'USER_LIST',
        templateUrl: 'user-list/user-list.tpl.html',
        controller: 'UserListController as userListController'
    });
}
