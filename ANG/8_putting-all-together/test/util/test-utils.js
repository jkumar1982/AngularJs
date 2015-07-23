function TestUtils($injector) {

    this.compile = function (html, scopePrototype) {
        var $compile = $injector.get('$compile');
        var $rootScope = $injector.get('$rootScope');

        var scope = angular.extend($rootScope.$new(), scopePrototype);
        var result = $compile(html)(scope);
        scope.$digest();

        return result;
    };

    this.triggerKeyPress = function (element, key) {
        var event = jQuery.Event("keypress");
        event.which = key;
        element.trigger(event);
    };

}
