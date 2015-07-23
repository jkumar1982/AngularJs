var app = angular.module('app', []);

app.controller('DOMController', function($scope) {

    $scope.alertCategories = [
        {id: 'alert-success', label: 'Success'},
        {id: 'alert-info', label: 'Info'},
        {id: 'alert-warning', label: 'Warning'},
        {id: 'alert-danger', label: 'Danger'}
    ];

    $scope.updateAlertStyle = function (value) {
        var translatedStyles = {
            'error': 'alert-danger',
            'info': 'alert-info',
            'warning': 'alert-warning',
            'ok': 'alert-success'
        };

        $scope.alertStyle = translatedStyles[value];
    }

});
