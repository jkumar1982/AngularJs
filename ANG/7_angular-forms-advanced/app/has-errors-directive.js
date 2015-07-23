var app = angular.module('app');

app.directive('acHasErrors', function () {
    return {
        require: '^form',
        scope: {
            invalidClasses: '&acHasErrors'
        },
        link: function (scope, iElement, iAttributes, FormController) {
            var invalidClasses = scope.invalidClasses(),
                dirtyClass = invalidClasses['dirty'],
                pristineClass = invalidClasses['pristine'],
                modelElements = iElement.find('*[ng-model]'),
                isAnyModelInvalid = isAnyModelInvalidFn(modelElements);

            if (!dirtyClass || !pristineClass) {
                return;
            }

            scope.$watch(isAnyModelInvalid, function (invalid) {
                iElement.toggleClass(pristineClass, invalid && FormController.$pristine);
                iElement.toggleClass(dirtyClass, invalid && FormController.$dirty);
            });

            function isAnyModelInvalidFn(modelElements) {
                return function () {

                    for (var i = 0; i < modelElements.length; i++) {
                        if (isInvalid(modelElements[i])) {
                            return true;
                        }
                    }

                    return false;

                    function isInvalid(modelElement) {
                        return angular.element(modelElement).controller('ngModel').$invalid;
                    }

                };
            }
        }
    };
});
