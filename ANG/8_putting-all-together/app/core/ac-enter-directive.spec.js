describe('acEnter directive', function () {
    var testUtils;

    beforeEach(module('core'));

    beforeEach(inject(function ($injector) {
        testUtils = new TestUtils($injector);
    }));

    it('must invoke function when enter is pressed', function () {
        var action = jasmine.createSpy('action');
        var template = testUtils.compile('<span ac-enter="action()"></span>', {action: action});

        testUtils.triggerKeyPress(template, 13);

        expect(action).toHaveBeenCalledWith();
    });

    it('must not invoke function when key other than enter is pressed', function () {
        var action = jasmine.createSpy('action');
        var template = testUtils.compile('<span ac-enter="action()"></span>', {action: action});

        testUtils.triggerKeyPress(template, 40);

        expect(action).not.toHaveBeenCalledWith();
    });

});
