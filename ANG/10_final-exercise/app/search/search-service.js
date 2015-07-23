angular.module('search')
    .constant('searchRestUrl', '/rest/search')
    .factory('searchService', function ($http, searchRestUrl) {
        return {
            search: search
        };

        function search(keyword, categoryId, subcategoryId) {
            var responsePromise = $http.post(searchRestUrl, {
                keyword: keyword,
                categoryId: categoryId,
                subcategoryId: subcategoryId
            });

            return responsePromise.then(extractResults);

            function extractResults(response) {
                return response.data.results;
            }
        }
    });
