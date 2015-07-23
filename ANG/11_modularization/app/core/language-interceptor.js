module.exports = function ($httpProvider) {
    $httpProvider.interceptors.push(requestInterceptor);

    function requestInterceptor(i18nService) {
        return {
            request: function (config) {
                config.headers['X-Language'] = i18nService.getLanguage();

                return config;
            }
        };
    }
};