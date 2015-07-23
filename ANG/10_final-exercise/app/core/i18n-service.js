angular.module('core')
    .factory('i18nService', function ($q, $translate, $rootScope) {
        var languages = [
            {
                locale: 'en',
                label: 'EN'
            },
            {
                locale: 'de',
                label: 'DE'
            }
        ];

        return {
            get: function () {
                return $q.when(languages);
            },
            set: function (locale) {
                if (locale !== $translate.use()) {
                    $translate.use(locale);
                    $rootScope.$broadcast('language.changed', locale);
                }
            }
        };
    })
    .config(function ($translateProvider) {
        $translateProvider.translations('en', {
            TITLE: 'AngularJS Course - Final Exercise',
            TAGLINE: 'AngularJS Course - Final Exercise',
            HOME: 'Home',
            SEARCH: 'Search',
            NEWS_SEARCH: 'News Search',
            KEYWORD: 'Keyword',
            CATEGORY: 'Category',
            SUBCATEGORY: 'Subcategory',
            CHOOSE_CATEGORY: '-- choose a category --',
            CHOOSE_SUBCATEGORY: '-- choose a subcategory --',
            ARTICLE_MAINTENANCE: 'Article maintenance',
            ARTICLE_TITLE: 'Title',
            ARTICLE_SUBTITLE: 'Subitle',
            ARTICLE_TEXT: 'Text',
            UPDATE: 'Update'
        });
        $translateProvider.translations('de', {
            TITLE: 'AngularJS Kurs - Endgültige Übung',
            TAGLINE: 'AngularJS Kurs - Endgültige Übung',
            HOME: 'Heim',
            SEARCH: 'Suche',
            NEWS_SEARCH: 'Nachrichten Suche',
            KEYWORD: 'Schlüsselwort',
            CATEGORY: 'Klasse',
            SUBCATEGORY: 'Unterklasse',
            CHOOSE_CATEGORY: '-- wählen Sie eine Klasse aus --',
            CHOOSE_SUBCATEGORY: '-- wählen Sie eine Unterklasse aus --',
            ARTICLE_MAINTENANCE: 'Artikel Verwaltung',
            ARTICLE_TITLE: 'Titel',
            ARTICLE_SUBTITLE: 'Untertitel',
            ARTICLE_TEXT: 'Text',
            UPDATE: 'Updaten'
        });
        $translateProvider.preferredLanguage('en');
    })
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push(requestInterceptor);

        function requestInterceptor($translate) {
            return {
                request: function (config) {
                    config.headers['X-Language'] = $translate.use();

                    return config;
                }
            };
        }
    });
;
