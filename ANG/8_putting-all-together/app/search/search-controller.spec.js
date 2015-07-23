describe('searchController', function () {
    var $q, $rootScope;

    beforeEach(module('search'));

    beforeEach(inject(function(_$q_, _$rootScope_){
        $q = _$q_;
        $rootScope = _$rootScope_;
    }));

    describe('initialization', function () {

        it('must initialize criteria with empty keyword', inject(function ($controller) {
            var scope = {};

            createSearchController($controller, scope);

            expect(scope.criteria.keyword).toBe('');
        }));

    });

    describe('search', function () {

        it('must invoke search service with criteria when form is valid', inject(function ($controller) {
            var criteria = {
                keyword: 'testKeyword',
                category: {id: 'testCategoryId'},
                subcategory: {id: 'testSubcategoryId'}
            };
            var searchService = createSearchServiceMock();
            var scope = createSearchController($controller, {}, searchService);

            scope.search(criteria, true);

            expect(searchService.search).toHaveBeenCalledWith(
                criteria.keyword,
                criteria.category.id,
                criteria.subcategory.id
            );
        }));

        it('must not invoke search service when form is not valid', inject(function ($controller) {
            var searchService = createSearchServiceMock();
            var scope = createSearchController($controller, {}, searchService);

            scope.search({}, false);

            expect(searchService.search).not.toHaveBeenCalled();
        }));

        it('must set results in scope', inject(function ($controller) {
            var results = [{id: 1, title: 'foo title'}];
            var searchService = createSearchServiceMock(results);
            var scope = createSearchController($controller, {}, searchService);

            scope.search({}, true);
            $rootScope.$digest();

            expect(scope.results).toEqual(results);
        }));

    });

    function createSearchController($controller, scope, searchService) {
        $controller('searchController', {$scope: scope, searchService: searchService, categories: []});

        return scope;
    }

    function createSearchServiceMock(results) {
        var searchServiceMock = jasmine.createSpyObj('searchService', ['search']);
        searchServiceMock.search.andReturn($q.when(results));

        return searchServiceMock;
    }

});
