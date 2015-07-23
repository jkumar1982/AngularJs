module.exports = function ($http, categoriesRestUrl, masterDataCache) {
    return {
        get: function () {
            return $http.get(categoriesRestUrl, {cache: masterDataCache}).then(extractCategories);

            function extractCategories(response) {
                return response.data.categories;
            }
        }
    };
};
