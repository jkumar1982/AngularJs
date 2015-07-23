describe('searchService', function () {

    beforeEach(module('search'));

    describe('search', function () {

        it('must invoke search backend with keyword', inject(function (searchService, $httpBackend) {
            $httpBackend.expectPOST('/rest/search', {keyword: 'test'}).respond(200);

            searchService.search('test');

            verifyExpectations($httpBackend);
        }));

        it('must return promise', inject(function (searchService, $httpBackend) {
            $httpBackend.expectPOST('/rest/search', {keyword: 'test'}).respond(200);

            var result = searchService.search('test');

            expect(result).toBePromise();
        }));

        it('must return promise which resolves to result set', inject(function (searchService, $httpBackend) {
            var results = [];
            var successCallback = jasmine.createSpy('successCallback');
            $httpBackend.expectPOST('/rest/search', {keyword: 'test'}).respond(200, {results: results});

            searchService.search('test').then(successCallback);
            $httpBackend.flush();

            expect(successCallback).toHaveBeenCalledWith(results);
        }));

        function verifyExpectations($httpBackend) {
            $httpBackend.verifyNoOutstandingRequest();
            $httpBackend.verifyNoOutstandingExpectation();
        }

    });
});
