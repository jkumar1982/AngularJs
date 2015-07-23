module.exports = function ($http, articleRestUrl) {
    return {
        get: get,
        update: update
    };

    function get(articleId) {
        var responsePromise = $http.get(articleRestUrl, {id: articleId});

        return responsePromise.then(extractArticleData);
    }

    function update(article) {
        var responsePromise = $http.post(articleRestUrl, {article: article});

        return responsePromise.then(extractArticleData);
    }

    function extractArticleData(response) {
        return response.data.article;
    }
};
