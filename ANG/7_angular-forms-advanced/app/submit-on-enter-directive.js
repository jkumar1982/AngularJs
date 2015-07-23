var app = angular.module('app');

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
