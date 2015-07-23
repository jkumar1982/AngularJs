var _ = require('lodash');

module.exports = {
    getHomeUrl: getUrl('/'),
    getArticleUrl: getUrl('/article/:id'),
    getSearchUrl: getUrl('/search')
};

function getUrl(urlTemplate) {
    return function (urlParams, includeHash) {
        var url = !urlParams ? urlTemplate : replace(urlTemplate, urlParams);

        return includeHash ? '#' + url : url;
    };

    function replace(urlTemplate, urlParams) {
        return _.reduce(urlParams, function (urlTemplate, paramValue, paramName) {
            return urlTemplate.replace(':' + paramName, paramValue);
        }, urlTemplate);
    }
}