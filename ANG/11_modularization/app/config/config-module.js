module.exports = require('angular').module('config', [])
    .constant('navigationManager', require('./navigation-manager'))
    .constant('articleRestUrl', '/rest/articles')
    .constant('categoriesRestUrl', '/rest/categories')
    .constant('searchRestUrl', '/rest/search')
    .constant('translations', {
        en: require('./en.json'),
        de: require('./de.json')
    });
