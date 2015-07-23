module.exports = function ($compile) {
    return {
        scope: {
            label: '@acControlGroup'
        },
        link: function (scope, iElement) {
            var formGroupContainer = $compile('<div class="form-group">' +
                '<label for="{{label}}" class="control-label col-sm-2" translate="{{label}}"></label>' +
                '</div>')(scope),
                secondColumnContainer = '<div class="col-sm-10"></div>';
            iElement.attr('id', scope.label);
            iElement
                .wrap(formGroupContainer)
                .wrap(secondColumnContainer);
        }
    }
};
