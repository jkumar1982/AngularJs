import angular from 'angular';
import UserDataController from './user-data-controller.js';
import userDataServiceFactory from './user-data-service.js';

export default angular.module('userData', ['ngMessages', 'ngRoute'])
    .controller('UserDataController', UserDataController)
    .factory('userDataService', userDataServiceFactory)
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
