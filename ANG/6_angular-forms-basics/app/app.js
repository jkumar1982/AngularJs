var app = angular.module('app', []);

app.controller('UserDataController', function ($scope, $http) {

    $scope.masterData = {
        cantons: [
            {id: 'ZH', name: 'Zurich'},
            {id: 'BS', name: 'Basel-City'},
            {id: 'BE', name: 'Bern'},
            {id: 'other', name: 'Other'}
        ]
    };

    $scope.userData = {
        name: '',
        surname: '',
        resident: true,
        canton: ''
    };

    $scope.sendData = function (userData) {

        $http.post('/processForm', userData).then(mapResponseDataToScope, mapResponseDataToScope);

        function mapResponseDataToScope(response) {
            $scope.isError = !!response.data.error;
            $scope.serverMessage = response.data.message || response.data.error;
            $scope.processedData = response.data.data;
        }

    };

});

app.directive('acSubmitOnEnter', function () {
    return {
        require: 'form',
        scope: {
            sumbitForm: '&ngSubmit'
        },
        link: function (scope, iElement, iAttributes, FormController) {
            iElement.on('keypress', function (event) {
                var controlIsSelect = 'select' === event.target.tagName.toLowerCase(),
                    keyIsEnter = event.which === 13;

                if (controlIsSelect && keyIsEnter && FormController.$valid) {
                    scope.sumbitForm();
                }
            });
        }
    };
});
