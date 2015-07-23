exports.Search = function () {
    var categorySelector = element(by.model('criteria.category'));

    this.typeKeyword = function(keyword) {
        element(by.model('criteria.keyword')).sendKeys(keyword);
    };

    this.selectCategory = function (categoryIndex) {
        var optionElements = categorySelector.findElements(by.tagName('option'));

        optionElements.then(function(elements) {
            elements[categoryIndex].click();
        });
    };

    this.getCategories = function () {
        return categorySelector.findElements(by.tagName('option'));
    };

    this.clickSearchButton = function() {
        element(by.buttonText('Search')).click();
    };

    this.getResults = function() {
        return element.all(by.repeater('result in results'));
    };
};
