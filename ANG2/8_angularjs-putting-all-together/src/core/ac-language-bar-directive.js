angular.module('core')
    .directive('acLanguageBar', acLanguageBar);

const template = `<li ng-repeat="language in languageBarController.languages">
                        <a translate="{{language.label}}" ng-click="languageBarController.setLanguage(language.locale)"></a>
                  </li>`;

function acLanguageBar(i18nService) {
    return {
        template,
        replace: true,
        controller: LanguageBarController,
        controllerAs: 'languageBarController'
    };

    function LanguageBarController() {
        this.languages = i18nService.getLanguages();

        this.setLanguage = i18nService.setLanguage;
    }
}
