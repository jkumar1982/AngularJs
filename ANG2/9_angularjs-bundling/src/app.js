import './app.css';
import angular from 'angular';
import coreModule from './core/core-module.js';
import userDataModule from './user-data/user-data-module.js';
import userListModule from './user-list/user-list-module.js';
import masterDataModule from './master-data/master-data-module.js';

const app = angular.module('app',
    [
        'ngRoute',
        coreModule.name,
        userDataModule.name,
        userListModule.name,
        masterDataModule.name
    ]
).config(defaultRouteConfigurator);

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

angular.bootstrap(document, [app.name]);
