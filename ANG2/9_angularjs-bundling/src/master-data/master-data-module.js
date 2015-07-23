import angular from 'angular';
import masterDataServiceFactory from './master-data-service.js';

export default angular.module('masterData', [])
    .factory('masterDataService', masterDataServiceFactory);

