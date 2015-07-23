angular.module('core')
    .factory('i18nService', i18nServiceFactory);

function i18nServiceFactory($translate, languages) {
    return {
        getLanguages() {
            return languages;
        },
        setLanguage(language) {
            $translate.use(language);
        }
    };
}
