import './index.css';
import angular from 'angular';
import testModule from './test/index';

angular.module('app',
    [
        testModule.name
    ]);
