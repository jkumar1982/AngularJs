module.exports = function (i18nService) {
    return {
        restrict: 'E',
        replace: true,
        template: '<ul class="nav navbar-nav navbar-right">' +
        '<li class="language" ng-repeat="language in languages"><a href="" ng-bind="language.label" ng-click="setLanguage(language.locale)"></a></li>' +
        '</ul>',
        link: function (scope) {
            i18nService.getLanguages().then(mapToLanguages);

            function mapToLanguages(languages) {
                scope.languages = languages;
            }

            scope.setLanguage = function (locale) {
                i18nService.setLanguage(locale);
            }
        }
    };
};
