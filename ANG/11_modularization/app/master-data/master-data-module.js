module.exports = require('angular').module('master-data', [])
    .factory('categoryService', require('./category-service'))
    .factory('masterDataCache', function ($cacheFactory) {
        return $cacheFactory('master-data');
    })
    .factory('masterDataManager', require('./master-data-manager'))
    .run(function (masterDataManager) {
        masterDataManager.start();
    });
