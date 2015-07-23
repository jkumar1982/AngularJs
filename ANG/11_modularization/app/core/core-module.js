module.exports = require('angular').module('core',
    [
        require('angular-translate').name
    ])
    .factory('navigationService', require('./navigation-service'))
    .factory('i18nService', require('./i18n-service'))
    .directive('acControlGroup', require('./ac-control-group-directive'))
    .directive('acEnter', require('./ac-enter-directive'))
    .directive('acLanguageBar', require('./ac-language-bar-directive'))
    .directive('acNavigationBar', require('./navigation-bar/ac-navigation-bar-directive'))
    .config(require('./language-interceptor'))
    .config(function ($translateProvider, translations) {
        angular.forEach(translations, function (texts, locale) {
            $translateProvider.translations(locale, texts);
        });
        $translateProvider.preferredLanguage('en');
    });

