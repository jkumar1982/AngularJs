module.exports = function ($q, $translate, translations, $rootScope) {
    var _ = require('lodash'),
        languages = _.map(translations, function (texts, locale) {
            return {
                locale: locale,
                label: locale.toUpperCase()
            };
        });

    return {
        getLanguages: function () {
            return $q.when(languages);
        },
        getLanguage: $translate.use,
        setLanguage: function (locale) {
            if (locale !== $translate.use()) {
                $translate.use(locale);
                $rootScope.$broadcast('language.changed', locale);
            }
        }
    };
};
