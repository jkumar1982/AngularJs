describe('acCarousselDirective', () => {
    let $compile, $rootScope;

    beforeEach(module('app'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should initialize class and style attributes', () => {
        let element = $compile('<ac-caroussel></ac-caroussel>')($rootScope);

        expect(element.attr('class')).toContain('alert alert-success');
        expect(element.css('cursor')).toBe('pointer');
    });

    it('should show default message', () => {
        let element = $compile('<ac-caroussel></ac-caroussel>')($rootScope);

        expect(element.text()).toBe('Default message!');
    });

    it('should use ac-caroussel-message value when present', () => {
        let element = $compile('<ac-caroussel ac-caroussel-message="foo"></ac-caroussel>')($rootScope);

        expect(element.text()).toBe('foo');
    });

    it('should change class when clicked', () => {
        let element = $compile('<ac-caroussel></ac-caroussel>')($rootScope);

        element.trigger('click');

        expect(element.attr('class')).toContain('alert alert-info');
    });
});
