describe('Search', function () {

    var Search = require('./search-page').Search;

    beforeEach(function () {
        browser.get('#/search');
    });

    it('must navigate to search page by default', function () {
        expect(browser.getTitle()).toContain('Putting it all together');
    });

    it('must show category selector', function () {
        var search = new Search();

        expect(search.getCategories()).toBeArrayOfSize(1 + 3);
    });

    it('must show results when searching with keyword', function () {
        var search = new Search();

        search.typeKeyword('test');
        search.selectCategory(1);
        search.clickSearchButton();

        expect(search.getResults().count()).toBeGreaterThan(0);
        search.getResults().each(function (result) {
            expect(result.getText()).toContain('test');
        });
    });

});
