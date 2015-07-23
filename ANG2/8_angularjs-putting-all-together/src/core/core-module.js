const languages = [
        {locale: 'en', label: 'EN'},
        {locale: 'de', label: 'DE'}
    ],
    translations = {
        en: {
            'TITLE': 'AngularJS Course - AngularJS Putting All Together',
            'WELCOME': 'Welcome to the home page!',
            'HOME': 'Home',
            'USER_DATA': 'User Data',
            'USER_LIST': 'User List',
            'NAME': 'Name',
            'SURNAME': 'Surname',
            'RESIDENT': 'Resident',
            'CANTON': 'Canton',
            'SEND': 'Send'
        },
        de: {
            'TITLE': 'AngularJS Kurs - AngularJS Putting All Together',
            'WELCOME': 'Willkommen zur Home Seite!',
            'HOME': 'Home',
            'USER_DATA': 'Benutzer Data',
            'USER_LIST': 'Benutzer Liste',
            'NAME': 'Vorname',
            'SURNAME': 'Name',
            'RESIDENT': 'Einwohner',
            'CANTON': 'Kanton',
            'SEND': 'Schicken'
        }
    };

angular.module('core', ['pascalprecht.translate'])
    .constant('languages', languages)
    .constant('translations', translations)
    .config(i18nConfigurer);

function i18nConfigurer($translateProvider, translations) {
    for (let locale in translations) {
        $translateProvider.translations(locale, translations[locale]);
    }

    $translateProvider.preferredLanguage('en');
}
