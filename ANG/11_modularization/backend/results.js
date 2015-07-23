module.exports = function (count, keyword) {
    var results = [];

    if (keyword.toLowerCase().indexOf('none') === -1) {
        for (var i = 0; i < count; i++) {
            results.push({
                id: i,
                title: 'Title for ' + keyword + ' ' + (i + 1)
            });
        }
    }

    return results;
};
