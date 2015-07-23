export default function i18nServiceFactory($translate, languages) {
    return {
        getLanguages() {
            return languages;
        },
        setLanguage(language) {
            $translate.use(language);
        }
    };
}
