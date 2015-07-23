describe('greeterService', () => {
    var greeterService;

    beforeEach(module('app'));

    beforeEach(inject(function (_greeterService_) {
        greeterService = _greeterService_;
    }));

    it('should return greeting with given name', () => {
        expect(greeterService('foo')).toBe('Hello foo!');
    });
});
