var app1 = angular.module('app1', []);

app1.constant('randomConstant', Math.random());

app1.value('randomValue', Math.random());

app1.service('randomService', function (randomConstant) {
    this.get = function () {
        return randomConstant;
    }
});

app1.factory('randomFactory', function (randomConstant) {
    return {
        get: function () {
            return randomConstant;
        }
    };
});

app1.controller('FactoryController', function ($scope, randomFactory) {
    $scope.value = randomFactory.get();
});

app1.controller('ServiceController', function ($scope, randomService) {
    $scope.value = randomService.get();
});

app1.config(function(randomConstant) {
    console.info('CONFIG :', randomConstant);
});

app1.run(function (randomConstant, randomValue) {
    console.info('RUN    :', randomConstant, randomValue);
});

console.info('LOAD   :');
