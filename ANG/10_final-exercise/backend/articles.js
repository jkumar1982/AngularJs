var article = generateArticle();

exports.get = function () {
    return article;
};

exports.update = function (articleData) {
    article = articleData;

    return article;
};

function generateArticle() {
    return {
        title: 'Lorem ipsum dolor sit amet',
        subtitle: 'Consectetur adipisicing elit',
        text: generateText()
    };

    function generateText() {
        return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
}

