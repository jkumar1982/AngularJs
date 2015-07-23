var app2 = angular.module('app2', []);

app2.constant('surname1', 'Smith');
app2.constant('surname2', 'Bauer');

app2.provider('GreetingService', function () {
    var surname;

    this.$get = function () {
        return {
            greet: function (name) {
                return 'Hello ' + name + ' ' + surname + '!';
            }
        };
    };

    this.setSurname = function (value) {
        surname = value;
    }
});

app2.controller('GreetingController', function ($scope, GreetingService) {
    $scope.greet = function (name) {
        $scope.greeting = GreetingService.greet(name);
    };
});

app2.config(['surname1', 'GreetingServiceProvider', function (surname, GreetingServiceProvider) {
    GreetingServiceProvider.setSurname(surname);
}]);

angular.bootstrap(document, ['app2']);
