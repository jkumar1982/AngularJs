var app = angular.module('app');

app.controller('UserDataController', function ($scope, $http, ServerError) {

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

        clearResponseData();
        $http.post('/processForm', userData).then(mapResponseDataToScope, throwServerError);

        function clearResponseData() {
            $scope.serverMessage = undefined;
            $scope.processedData = undefined;
        }

        function mapResponseDataToScope(response) {
            $scope.serverMessage = response.data.message;
            $scope.processedData = response.data.data;
        }

        function throwServerError(response) {
            var error = response.data.error;

            if (error) {
                throw new ServerError(error);
            }
        }
    };

});
